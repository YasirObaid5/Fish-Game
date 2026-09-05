(() => {
  const root = document.documentElement;
  const install = document.getElementById('install-app');
  const status = document.getElementById('pwa-status');
  const update = document.getElementById('update-app');
  const notice = document.getElementById('pwa-update');
  const help = document.getElementById('install-help');
  const standalone = matchMedia('(display-mode: standalone)');
  let promptEvent, registration, ready = false, failed = false, updateRequested = false, reloadPending = false;
  const safeToReload = () => !['playing', 'paused'].includes(root.dataset.mode);
  const installed = () => standalone.matches || navigator.standalone === true || root.dataset.appInstalled === 'true';

  function render() {
    install.hidden = installed();
    root.dataset.appInstalled = String(installed());
    root.dataset.offlineReady = String(ready);
    status.textContent = ready
      ? (navigator.onLine ? 'جاهزة للعب دون اتصال' : 'تلعب الآن دون اتصال')
      : (failed ? 'اللعب متاح؛ الحفظ دون اتصال غير متاح الآن' : 'نجهّز اللعب دون اتصال…');
    root.dataset.updateReady = String(!!registration?.waiting);
    notice.hidden = !registration?.waiting || !safeToReload();
    update.hidden = notice.hidden;
    if (reloadPending && safeToReload()) location.reload();
  }
  new MutationObserver(render).observe(root, { attributes: true, attributeFilter: ['data-mode'] });
  standalone.addEventListener?.('change', render);
  window.addEventListener('appinstalled', () => { root.dataset.appInstalled = 'true'; promptEvent = null; render(); });
  window.addEventListener('beforeinstallprompt', event => {
    event.preventDefault(); promptEvent = event; render();
  });
  install.addEventListener('click', async () => {
    if (!promptEvent) { help.showModal(); return; }
    const request = promptEvent; promptEvent = null;
    try { await request.prompt(); await request.userChoice; } catch { help.showModal(); }
    render();
  });
  document.getElementById('close-install-help').addEventListener('click', () => help.close());
  help.addEventListener('click', event => { if (event.target === help) help.close(); });
  update.addEventListener('click', () => {
    if (!safeToReload() || !registration?.waiting) return;
    updateRequested = true; update.disabled = true; update.textContent = 'نفتح النسخة الجديدة…';
    registration.waiting.postMessage({ type: 'SKIP_WAITING' });
  });

  async function checkOffline(worker) {
    if (!worker) return;
    const channel = new MessageChannel();
    const timeout = setTimeout(() => { channel.port1.close(); failed = !ready; render(); }, 8000);
    channel.port1.onmessage = event => {
      clearTimeout(timeout); channel.port1.close();
      ready = event.data.ready === true; failed = !ready;
      root.dataset.appRelease = event.data.release || ''; render();
    };
    worker.postMessage({ type: 'CACHE_STATUS' }, [channel.port2]);
  }
  async function register() {
    if (!('serviceWorker' in navigator) || !window.isSecureContext) { failed = true; render(); return; }
    navigator.serviceWorker.addEventListener('controllerchange', () => {
      if (updateRequested) { reloadPending = true; render(); }
      else checkOffline(navigator.serviceWorker.controller);
    });
    try {
      registration = await navigator.serviceWorker.register('/sw.js', { scope: '/', updateViaCache: 'none' });
      registration.addEventListener('updatefound', () => {
        const worker = registration.installing;
        worker?.addEventListener('statechange', () => {
          if (worker.state === 'installed') render();
          if (worker.state === 'redundant' && !ready) { failed = true; render(); }
        });
      });
      render();
      const active = await navigator.serviceWorker.ready;
      await checkOffline(active.active);
    } catch { failed = true; render(); }
  }
  window.addEventListener('online', () => { render(); registration?.update().catch(() => {}); });
  window.addEventListener('offline', render);
  document.addEventListener('visibilitychange', () => {
    if (!document.hidden && navigator.onLine) registration?.update().catch(() => {});
  });
  render();
  if (document.readyState === 'complete') register();
  else window.addEventListener('load', register, { once: true });
})();
