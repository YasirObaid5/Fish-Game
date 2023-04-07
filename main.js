// canvas setup

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
canvas.width = 800;
canvas.height = 500;


let score = 0;
let gameFrame = 0;
ctx.font = '50px Georgia';
let gameSpeed =1;
// Mouse Interactivity
const mouse = {
    x: canvas.width/2,
    y: canvas.height/2,
    click: false
}
let boundaries = canvas.getBoundingClientRect();
canvas.addEventListener('mousedown', function(e) {
    mouse.click = true;
    mouse.x = e.x - boundaries.left;
    mouse.y = e.y - boundaries.top;
    // console.log(mouse.x, mouse.y)
})
canvas.addEventListener('mouseup', function() {
    mouse.click = false;
})
// Players

const playerLeft = new Image();
playerLeft.src = 'fish.png';
const playerRight = new Image();
playerRight.src = 'fish_right.png';
class Player {
    constructor(){
        this.x = canvas.width;
        this.y = canvas.height/2;
        this.radius = 40;
        this.angle = 0;
        this.frameX = 0;
        this.frameY = 0;
        this.frame = 0;
        this.spriteWidth = 498;
        this.spriteHeight = 327;
    }
    update(){
        const dx = this.x - mouse.x;
        const dy = this.y - mouse.y;
        // let theta = Math.atan2(dx, dy);
        // this.angle = theta
        if (mouse.x != this.x){
            this.x -= dx/20;
        }
        if (mouse.y != this.y){
            this.y -= dy/20;
        }
    }
    draw(){
        
        ctx.fillStyle = 'rgba(0,0,0,0.05)';
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fill();
        ctx.closePath();
        ctx.fillRect(this.x, this.y, this.radius,10);

        // ctx.save();
        // ctx.translate(this.x, this.y);
        // ctx.rotate(this.angle);
        if (this.x >= mouse.x){
            ctx.drawImage(playerLeft, this.frameX * this.spriteWidth, this.frameY * this.spriteHeight, this.spriteWidth, this.spriteHeight, this.x - 50, this.y - 40, this.spriteHeight/2, this.spriteWidth/4)
        }else{
            ctx.drawImage(playerRight, this.frameX * this.spriteWidth, this.frameY * this.spriteHeight, this.spriteWidth, this.spriteHeight, this.x - 50, this.y - 40, this.spriteHeight/2, this.spriteWidth/4)
        }
        // ctx.restore();
        
    }
}
const player = new Player();

// Bubbles
const bubbleArray = [];
const bubbleImg = new Image();
bubbleImg.src = 'bubble-64px.png'
class Bubble {
    constructor(){
        this.x = Math.random() * canvas.width;
        this.y = canvas.height + 100 + Math.random() * canvas.height;
        this.radius = 50;
        this.speed = Math.random() * 5 + 1;
        this.distance;
        this.counted = false;
        this.sound= Math.random() <= 0.5 ? 'sound1' : 'sound2';
        
    }
    update(){
       this.y -= this.speed;
       const dx = this.x - player.x;
       const dy = this.y - player.y;
       this.distance = Math.sqrt((dx * dx) + (dy*dy))
       
    }
    draw(){
        ctx.fillStyle = 'rgba(0,0,100,0.5)';
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fill();
        ctx.closePath();
        ctx.drawImage(bubbleImg, this.x -49, this.y - 49, this.radius * 2, this.radius * 2)
        
        
    }
    
}

const bubblePop1 = document.createElement('audio');
// bubblePop1.src = 'Plop.ogg';
const bubblePop2 = document.createElement('audio');
// bubblePop2.src = 'bubbles-single1.wav';



function handleBubbles(){
    if (gameFrame % 60 == 0){
        bubbleArray.push( new Bubble() );
        
    }
    for (let i = 0; i < bubbleArray.length; i++){
        bubbleArray[i].update();
        bubbleArray[i].draw();
    

        if (bubbleArray[i].y + bubbleArray[i].radius < 0){
            bubbleArray.splice(i,1);
            i --;
        } else if(bubbleArray[i].distance < bubbleArray[i].radius + player.radius){
                if (!bubbleArray[i].counted){
                    if (bubbleArray[i].sound == 'sound1'){
                        bubblePop1.play();
                    }else{
                        bubblePop2.play();
                    }
                    score ++;
                    bubbleArray[i].counted = true;
                    bubbleArray.splice(i,1)
                    i --;
                    // player.radius ++;
                }
            
            }
        }
        
    }
// background
let background = new Image();
background.src = 'sea.jpg';
const BG ={
    x1: 0,
    x2:canvas.width,
    y: 0,
    width: canvas.width,
    height: canvas.height
}
function handelBackground(){
    BG.x1 -= gameSpeed;
    if (BG.x1 < -BG.width) BG.x1 = BG.width;
    BG.x2 -= gameSpeed;
    if (BG.x2 < -BG.width) BG.x2 = BG.width;
    ctx.drawImage(background,BG.x1,BG.y, canvas.width, canvas.height);
    ctx.drawImage(background,BG.x2,BG.y, canvas.width, canvas.height);
}

// Animation loop
function animate(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    handelBackground();
    handleBubbles();
    player.update();
    player.draw();
    ctx.fillStyle = 'black';
    ctx.fillText('score: ' + score, 10, 50)
    
    gameFrame++;
    requestAnimationFrame(animate);
}
animate();

window.addEventListener('resize', function(){
    boundaries = canvas.getBoundingClientRect();
})