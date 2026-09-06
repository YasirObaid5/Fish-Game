# Original A'maq reef kit

`reef-kit.glb` is original geometry created for this game with Blender 5.1.
It contains four sculpted, vertex-coloured reef species, not flat image sprites:

- `coral_antler`: thick, tapering, recursively branched staghorn silhouette.
- `coral_fan`: an open, uneven network of connected gorgonian branches.
- `coral_table`: four irregular folded shelves with coloured rims and undersides.
- `sponge_cluster`: five fluted tubes with real hollow openings and shaded inner walls.

Source: `scripts/build-reef-assets.py`. The source uses deterministic generation
and Blender's glTF exporter, with no third-party models, generated image textures
or external asset dependencies. Blender is only needed to regenerate the asset;
the game loads the GLB directly and caches it for offline use.

To regenerate: run Blender in background mode with that Python script. Add
`-- --export-only` to omit the physically lit inspection render. The optional
`reef-kit-preview.png` is a production contact sheet, not a game background.

The combined model is approximately 1.7 MB. Each species has fewer than 25,000
triangles; the browser shares its geometry between instances in four draw calls.
