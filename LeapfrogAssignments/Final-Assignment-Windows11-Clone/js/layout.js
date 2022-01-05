let body = document.querySelector("body");


let startbtn = document.getElementsByClassName("windowbtn")[0];
let startmenu = document.createElement("div");
startmenu.className = "startmenu";

let powerOff = document.createElement("div");
powerOff.className = "powerOff";
powerOff.style.height = "30px";
powerOff.style.width = "30px";
// powerOff.style.backgroundImage = "url(../img/shutdown.png)";

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



let utilsbtn = document.getElementsByClassName("utils")[0];
let utilsdiv = document.createElement("div");
utilsdiv.className = "utilsDiv";

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

{/* <div class="bSlider">
            <input type="range" id="brightness-range" min="0" max="100" value="100" onchange="brightness(this)">

        </div> */}

// let bSlider = document.getElementsByClassName("bSlider");


document.body.appendChild(utilsdiv);
// startmenu.appendChild(bSlider);


utilsbtn.addEventListener("click", () =>{
    if(1){
        
        utilsdiv.style.left = "-1%";
        console.log("left move");
        
        
        
        
    }else{
        
        
    }
  
})




