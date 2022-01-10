//methods here handles double click to open, maximize and close functionality for desktop apps 

function open(x){
    x.style.display = "block";
}

function maximizeFunc(x){
    if(x.style.width == "100%"){
      x.style.width = "50%";
      x.style.height = "60%";
      x.style.transition = "left 0.6s,width 0.6s,height 0.6s";
      x.style.left = "20%";
     
      
  }else{
      x.style.width = "100%";
      x.style.height = "44rem";
      x.style.left = "0%";
  }
 }

 function closeFunc(x){
    
     
     x.style.display = "none";
     
 }


 //function to simulate poweroff
 function shutdown(){
    body.style.background = "black";
    body.style.filter = "brightness(0%)";

}