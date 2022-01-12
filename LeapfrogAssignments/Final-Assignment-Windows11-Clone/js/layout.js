const size14 = 655; // screensize for 14inch devices

//setting up app height for 14inch devices
let appHeight = document.getElementsByClassName("fsize")[0];
if(window.innerHeight>=655){
  appHeight.style.height = "44rem";
}else{
  appHeight.style.height ="38.5rem";
}

let body = document.querySelector("body");



//dom manipulation for start menu
let startbtn = document.getElementsByClassName("windowbtn")[0];
let startmenu = document.createElement("div");
let iconsDiv = document.createElement("div");
let searchDiv = document.createElement("div");
let searchField = document.createElement("input");
startmenu.className = "startmenu";
startmenu.style.top = "125%";

iconsDiv.className = "icons-div";
//sets style property for div accordingly to screen dimensions of device
if (window.innerHeight >= size14) {
  iconsDiv.style.left = "6%";
} else {
  iconsDiv.style.left = "4%";
}
searchDiv.className = "search-div";
searchField.className = "search-field";
let powerDiv = document.createElement("div");
searchField.placeholder = "Type here to search";
powerDiv.className = "power-div";

let powerOff = document.createElement("div");
powerOff.className = "powerOff";
powerOff.style.height = "30px";
powerOff.style.width = "30px";

document.body.appendChild(startmenu);
powerDiv.appendChild(powerOff);
searchDiv.appendChild(searchField);
startmenu.append(searchDiv, iconsDiv, powerDiv);

startbtn.addEventListener("click", function () {
  startmenuTransition();
});

//shutdown
powerOff.addEventListener("click", function () {
  shutdown();
});

// DOM manipulation for Folder
let folder = document.getElementsByClassName("folder")[0];

folder.style.width = "100%";
let mypc = document.getElementsByClassName("mypc")[0];

let close = document.getElementsByClassName("close")[0];
let maximize = document.getElementsByClassName("maximize")[0];

mypc.addEventListener("dblclick", function () {
  open(folder);
});

close.addEventListener("click", function () {
  closeFunc(folder);
});

maximize.addEventListener("click", function () {
  maximizeFunc(folder);
});
