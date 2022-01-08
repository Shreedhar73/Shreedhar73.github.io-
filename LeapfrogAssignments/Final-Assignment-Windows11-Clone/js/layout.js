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
// let height = 768;



let utilsbtn = document.getElementsByClassName("utils")[0];
let utilsdiv = document.createElement("div");
utilsdiv.className = "utilsDiv";
utilsdiv.style.left = "25%";
console.log(window.innerHeight);
if(window.innerHeight >= 655){
    utilsdiv.style.bottom = "16vh";
}else{
    utilsdiv.style.bottom = "32vh";
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
    folder.style.height = "44rem";
}

})




//windows icons list

const iconList = [
    { id: 1, src: "img/icons8-microsoft-edge-48.png", name: "edge" },
    { id: 2, src: "img/icons8-microsoft-word-2019-50.png", name: "Word" },
    {
      id: 3,
      src: "img/icons8-microsoft-excel-2019-50.png",
      name: "Excel",
    },
    {
      id: 4,
      src: "img/icons8-mail-50.png",
      name: "Mail",
    },
    {
      id: 5,
      src: "img/icons8-calendar-50.png",
      name: "Calendar",
    },
    {
      id: 6,
      src: "img/icons8-microsoft-store-50.png",
      name: "Store",
    },
    {
      id: 7,
      src: "img/icons8-photos-50.png",
      name: "Photos",
    },
    {
      id: 8,
      src: "img/icons8-settings-50.png",
      name: "Setting",
    },
    {
      id: 9,
      src: "img/icons8-microsoft-office-2019-48.png",
      name: "Office",
    },
    {
      id: 10,
      src: "img/icons8-microsoft-solitaire-collection-50.png",
      name: "Solitaire",
    },
    {
      id: 11,
      src: "img/icons8-spotify-50.png",
      name: "Spotify",
    },
    {
      id: 12,
      src: "img/icons8-whatsapp-48.png",
      name: "WhatsApp",
    },
    {
      id: 13,
      src: "img/icons8-microsoft-todo-2019-50.png",
      name: "Todo",
    },
    {
      id: 14,
      src: "img/icons8-xbox-x-48.png",
      name: "Xbox",
    },
    {
      id: 15,
      src: "img/icons8-amazon-prime-video-48.png",
      name: "Prime Video",
    },
    {
      id: 16,
      src: "img/icons8-tiktok-48.png",
      name: "Tiktok",
    },
  ];

  iconList.forEach((element) => {
    console.log(element);
    let windowsdiv = document.createElement("div");
    let windowsImg = document.createElement("img");
    let iconsName = document.createElement("p");
    windowsdiv.className="windows-div";
    windowsImg.className="windows-icons";
    iconsName.className = "icons-name";
    windowsImg.src = element.src;
    iconsName.innerHTML=element.name;
    console.log(windowsImg.src);
    
    windowsdiv.setAttribute("id", `${element.id}`);
    windowsdiv.append(windowsImg,iconsName);
    iconsDiv.append(windowsdiv);
  });

        






