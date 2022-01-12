//Handles DOM operation for Camera Application
let cameradiv = document.getElementsByClassName("cameradiv")[0];
cameradiv.style.width = "100%";
let camera = document.createElement("video");
camera.id = "cam";

cameradiv.appendChild(camera);

let cambtn = document.getElementsByClassName("camera")[0];
let cameraStartmenu = document.getElementById("2");
let closecam = document.getElementsByClassName("close")[1];
let maximizecam = document.getElementsByClassName("maximize")[1];

//open Camera

cambtn.addEventListener("dblclick", function () {
  open(cameradiv);
  initCamera();
});

cameraStartmenu.addEventListener("click",function(){
  open(cameradiv);
  initCamera();
  startmenuTransition();
})
//close btn for camera div
closecam.addEventListener("click", function () {
  closeFunc(cameradiv);
  closeCamera();
});

maximizecam.addEventListener("click", function () {
  maximizeFunc(cameradiv);
});

//function to initialize camera of Device
var localStream;
function initCamera() {
  var video = document.getElementById("cam");
  if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
    navigator.mediaDevices
      .getUserMedia({ video: true })
      .then(function (stream) {
        video.srcObject = stream;
        localStream = stream;
        video.play();
      });
  }
}
//function to close Camera
function closeCamera() {
  var video = document.getElementById("cam");
  video.pause();
  video.srcObject = null;
  localStream.getTracks()[0].stop();

}
