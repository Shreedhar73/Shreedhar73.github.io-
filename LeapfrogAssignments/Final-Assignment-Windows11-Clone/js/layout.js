let body = document.querySelector("body");


let startbtn = document.getElementsByClassName("windowbtn")[0];
let startmenu = document.createElement("div");
startmenu.className = "startmenu";

let powerOff = document.createElement("div");
powerOff.className = "powerOff";
powerOff.style.height = "30px";
powerOff.style.width = "30px";
powerOff.style.backgroundImage = "url(../img/shutdown.png)";





document.body.appendChild(startmenu);
startmenu.appendChild(powerOff);





startbtn.addEventListener("click", () =>{
    if(startmenu.style.display == 'block'){
        startmenu.style.display = 'none';
    }else{
        startmenu.style.display = 'block';
    }
  
})

shutdown = function(){
    body.style.background = "black";
    body.style.filter = "brightness(0%)";

}

powerOff.addEventListener("click",shutdown);


