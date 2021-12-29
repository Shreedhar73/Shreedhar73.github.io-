var canvas = document.getElementById('canvas');
var ctx = canvas.getContext("2d");

//load image


var bird = new Image();
var background = new Image();
var foreground = new Image();
var pipeUp = new Image();
var pipeDown = new Image();
var count = 2;

bird.onload = loader;
background.onload = loader;
foreground.onload= loader;
pipeUp.onload= loader;
pipeDown.onload= loader;




bird.src = "assets/sprites/bird.png";
background.src = "assets/sprites/bg.png";
foreground.src = "assets/sprites/base.png";
pipeUp.src = "assets/sprites/pipe-green.png";
pipeDown.src = "assets/sprites/pipe-green.png";



var gap = 100;
var bX = 10;
var bY = 150;
var score = 0;

var gravity = 0.8;

document.addEventListener("keydown",moveup);
function moveup(){
    bY -= 20;
    
}


//pipe
var pipe = [];
pipe[0] = {
    x: canvas.width, 
    y: 0
}


// //draw Image

function loader(){
    if(!--count) draw();
}

 function draw(){
    

   
    ctx.drawImage(background,0,0);

    for(var i = 0; i< pipe.length;i++){
    ctx.drawImage(pipeUp,pipe[i].x,pipe[i].y);
    ctx.drawImage(pipeDown,pipe[i].x,pipe[i].y+pipeUp.height+gap);
    pipe[i].x--;


    if(pipe[i].x == 25){
        pipe.push({
            x: canvas.width,
            y: Math.floor(Math.random()*pipeUp.height)-pipeUp.height
        });
    }
    //detect collision

    if(bX + bird.width >= pipe[i].x && bX <= pipe[i].x+pipeUp.width &&(bY <= pipe[i].y + pipeUp.height || bY+bird.height >= pipe[i].y+pipeUp.height+gap)||bY+bird.height >= canvas.height-50){
        alert("Collision");

    }

    if(pipe[i].x == 5){
        score++;
    }

    }

    


    ctx.drawImage(foreground,0,canvas.height-50 );
    ctx.drawImage(bird,bX,bY);
    

    bY += gravity;

    ctx.fillStyle = "#fff";
    
    
    ctx.fillText("Score: "+score,10,canvas.height-20);

    requestAnimationFrame(draw);

}




draw();


