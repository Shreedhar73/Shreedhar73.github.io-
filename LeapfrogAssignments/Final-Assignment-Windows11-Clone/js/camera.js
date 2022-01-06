
//camera
let cameradiv = document.getElementsByClassName("cameradiv")[0];
cameradiv.style.width = "100%";
let camera = document.createElement("video");
camera.id = "cam";

let capturebtn = document.createElement("button");
capturebtn.id = "snap";
capturebtn.innerHtml = "SnapPhoto";

cameradiv.appendChild(camera);



let cambtn = document.getElementsByClassName("camera")[0];
let closecam = document.getElementsByClassName("close")[1];
let maximizecam = document.getElementsByClassName("maximize")[1];

cambtn.addEventListener("dblclick",()=>{
    cameradiv.style.display = "block";
    openCamera();
    
})

closecam.addEventListener("click",()=>{
    cameradiv.style.display = "none";
   closeCamera();
   
})

maximize.addEventListener("click",()=>{
    if(cameradiv.style.width == "100%"){
    cameradiv.style.width = "50%";
    cameradiv.style.height = "60%";
}else{
    cameradiv.style.width = "100%";
    cameradiv.style.height = "105.4%";
}

})

function openCamera(){
var video = document.getElementById('cam');
if(navigator.mediaDevices && navigator.mediaDevices.getUserMedia){
    navigator.mediaDevices.getUserMedia({video: true})
        .then(function(stream){
            video.srcObject = stream;
            video.play();

        })
}}

function closeCamera(){
    var video = document.getElementById('cam');
    if(navigator.mediaDevices && navigator.mediaDevices.getUserMedia){
        navigator.mediaDevices.getUserMedia({video: true})
            .then(function(){
                video.srcObject = null;
    
            })
    }}


