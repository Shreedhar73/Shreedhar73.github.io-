let body = document.querySelector("body");


let startbtn = document.getElementsByClassName("windowbtn")[0];
let startmenu = document.createElement("div");
startmenu.className = "startmenu";

let powerOff = document.createElement("div");
powerOff.className = "powerOff";
powerOff.style.height = "50px";
powerOff.style.width = "50px";
powerOff.style.backgroundColor = "black";




document.body.appendChild(startmenu);
startmenu.appendChild(powerOff);





startbtn.addEventListener("click", () =>{
    if(startmenu.style.display == 'none'){
        startmenu.style.display = 'block';
    }else{
        startmenu.style.display = 'none';
    }
  
})

shutdown = function(){
    body.style.background = "black";
    body.style.filter = "brightness(0%)";

}

powerOff.addEventListener("click",shutdown);


