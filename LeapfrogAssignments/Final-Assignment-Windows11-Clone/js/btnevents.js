//methods here handles double click to open, maximize and close functionality for desktop apps 


//opens app, implemented with "ondouble click event"
function open(x){
    x.style.display = "block";
}


//maximize / restore
function maximizeFunc(x){
  
    if(x.style.width == "100%"){
      
      x.style.width = "50%";
      x.style.height = "60%";
      x.style.transition = "left 0.6s,width 0.6s,height 0.6s";
      x.style.left = "20%";
  }else{
      if(window.innerHeight >= size14){
        x.style.height = "44rem";
      }else{
        x.style.height = "38.5rem";
      }
      x.style.width = "100%";
     
      x.style.left = "0%";
  }
 }

 //close while clicking close button
 function closeFunc(x){
     x.style.display = "none";
     
 }


 //function to simulate poweroff
 function shutdown(){
    body.style.background = "black";
    body.style.filter = "brightness(0%)";

}

//handles transitions for startmenu

function startmenuTransition(){
    if (startmenu.style.top == "125%") {
      //sets style property for div accordingly to screen dimensions of device
      if (window.innerHeight >= size14) {
        startmenu.style.top = "15%";
      } else {
        startmenu.style.top = "4.8%";
      }
      startbtn.style.color = "rgb(14,13,13)";
      startbtn.style.boxShadow = "0 5px 15px rgba(15,125,228,0.5)";
    } else {
      startmenu.style.top = "125%";
      startbtn.style.boxShadow = "0 5px 15px transparent";
    }
  
  }