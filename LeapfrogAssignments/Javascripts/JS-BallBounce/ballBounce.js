box = document.createElement('div');

box.id = "box";
box.style.height = "500px";
box.style.width = "500px";
box.style.position = "absolute";
box.style.marginLeft =  "35%";
box.style.background = "#000";

document.body.appendChild(box)


ball = document.createElement('p');
ball.className = "ball";
ball.id = "b"
ball.style.background= "red";
ball.style.height = "50px";
ball.style.width="50px";
ball.style.borderRadius = "50%"
ball.style.position = "absolute";
ball.style.marginBottom = "0";
ball.style.right = "40%"
ball.style.top = "0"

let direction =1 ;
let position = 0;


document.getElementById('box').appendChild(ball);

setInterval(() => {
position += direction *20;
ball.style.top = position + "px";
if(position >= 400){
    direction = -1;
}
if (position == 0){
    direction = 1;
}
},60);