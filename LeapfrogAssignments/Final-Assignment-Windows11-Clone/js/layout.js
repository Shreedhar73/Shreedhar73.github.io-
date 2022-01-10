let body = document.querySelector("body");

let startbtn = document.getElementsByClassName("windowbtn")[0];
let startmenu = document.createElement("div");
let iconsDiv = document.createElement("div");
let searchDiv = document.createElement("div");
let searchField = document.createElement("input")
startmenu.className = "startmenu";
startmenu.style.top = "125%";

iconsDiv.className = "icons-div";
if(window.innerHeight >= 655){
  
  iconsDiv.style.left = "9%";
}else{
  iconsDiv.style.left = "4%";
}
searchDiv.className="search-div"
searchField.className= "search-field"
let powerDiv = document.createElement("div");
searchField.placeholder="Type here to search"
powerDiv.className="power-div";

let powerOff = document.createElement("div");
powerOff.className = "powerOff";
powerOff.style.height = "30px";
powerOff.style.width = "30px";
powerOff.style.backgroundImage = "url(../img/shutdown.png)";

document.body.appendChild(startmenu);
powerDiv.appendChild(powerOff);
searchDiv.appendChild(searchField);
startmenu.append(searchDiv,iconsDiv,powerDiv);

startbtn.addEventListener("click", () =>{
    if(startmenu.style.top == '125%'){
        if(window.innerHeight >= 655){
        startmenu.style.top = '15%';
        }else{
            startmenu.style.top = '4.8%';
        }
        startbtn.style.color = "rgb(14,13,13)";
        startbtn.style.boxShadow = "0 5px 15px rgba(15,125,228,0.5)";
    
    }else{
        startmenu.style.top= '125%';
        startbtn.style.boxShadow = "0 5px 15px transparent";
    }
  
})


//shutdown
powerOff.addEventListener("click",function(){shutdown()});




let utilsbtn = document.getElementsByClassName("utils")[0];
let utilsdiv = document.createElement("div");
utilsdiv.className = "utilsDiv";
utilsdiv.style.left = "25%";

if(window.innerHeight >= 655){
    utilsdiv.style.bottom = "25vh";
}else{
    utilsdiv.style.bottom = "41vh";
}



let bSlider = document.createElement("div");
bSlider.className = "bSlider";


let brightnessIcon = document.createElement("img");
brightnessIcon.src = "./img/brightness.png";
let brange = document.createElement("input");
brange.type = "range";
brange.id = "brightness-range";
brange.min ="30";
brange.max="100";
brange.value ="100";
brange.onchange = function(){brightness(brange)};



bSlider.appendChild(brange);
bSlider.appendChild(brightnessIcon);
utilsdiv.appendChild(bSlider);




document.body.appendChild(utilsdiv);



utilsbtn.addEventListener("click", () =>{
    
    if(utilsdiv.style.left == "25%"){
        
        utilsdiv.style.left = "-1%";
        
        
    }else{
        utilsdiv.style.left = "25%";
        
        
    }
  
})


let folder = document.getElementsByClassName("folder")[0];
folder.style.width = "100%";
let mypc = document.getElementsByClassName("mypc")[0];
let close = document.getElementsByClassName("close")[0];
let maximize = document.getElementsByClassName("maximize")[0];

mypc.addEventListener("dblclick",function(){
  open(folder);
})

close.addEventListener("click", function(){ 
  closeFunc(folder);
})


maximize.addEventListener("click",function(){
  maximizeFunc(folder)
});





        






