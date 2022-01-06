let body = document.querySelector("body");


let startbtn = document.getElementsByClassName("windowbtn")[0];
let startmenu = document.createElement("div");
startmenu.className = "startmenu";
startmenu.style.top = "125%";

let powerOff = document.createElement("div");
powerOff.className = "powerOff";
powerOff.style.height = "30px";
powerOff.style.width = "30px";
// powerOff.style.backgroundImage = "url(../img/shutdown.png)";

document.body.appendChild(startmenu);
startmenu.appendChild(powerOff);

startbtn.addEventListener("click", () =>{
    if(startmenu.style.top == '125%'){
        startmenu.style.top = '5%';
        startbtn.style.color = "rgb(14,13,13)";
        startbtn.style.boxShadow = "0 5px 15px rgba(15,125,228,0.5)";
    //     color: rgb(14, 13, 13);
    // box-shadow: 0 5px 15px rgba(15, 125, 228, 0.4);
    }else{
        startmenu.style.top= '125%';
        startbtn.style.boxShadow = "0 5px 15px transparent";
    }
  
})

shutdown = function(){
    body.style.background = "black";
    body.style.filter = "brightness(0%)";

}

powerOff.addEventListener("click",shutdown);



let utilsbtn = document.getElementsByClassName("utils")[0];
let utilsdiv = document.createElement("div");
utilsdiv.className = "utilsDiv";
utilsdiv.style.left = "25%";

let bSlider = document.createElement("div");
bSlider.className = "bSlider";


let brightnessIcon = document.createElement("img");
brightnessIcon.src = "../img/brightness.png";
let brange = document.createElement("input");
brange.type = "range";
brange.id = "brightness-range";
brange.min ="0";
brange.max="100";
brange.value ="100";
brange.onchange = function(){brightness(brange)};



bSlider.appendChild(brange);
bSlider.appendChild(brightnessIcon);
utilsdiv.appendChild(bSlider);




document.body.appendChild(utilsdiv);



utilsbtn.addEventListener("click", () =>{
    console.log(utilsdiv.style.left);
    if(utilsdiv.style.left == "25%"){
        
        utilsdiv.style.left = "-1%";
        console.log("left move");   
        
    }else{
        utilsdiv.style.left = "25%";
        
        
    }
  
})


let folder = document.getElementsByClassName("folder")[0];
folder.style.width = "100%";
let mypc = document.getElementsByClassName("mypc")[0];
let close = document.getElementsByClassName("close")[0];
let maximize = document.getElementsByClassName("maximize")[0];

mypc.addEventListener("dblclick",()=>{
    folder.style.display = "block";
})

close.addEventListener("click",()=>{
    folder.style.display = "none";
})

maximize.addEventListener("click",()=>{
    if(folder.style.width == "100%"){
    folder.style.width = "50%";
    folder.style.height = "60%";
}else{
    folder.style.width = "100%";
    folder.style.height = "105.4%";
}

})

        






