//DOM manipulation for notes app
let vsdiv = document.getElementsByClassName("vsCodediv")[0];
vsdiv.style.width = "100%";

let vsbtn = document.getElementsByClassName("vscode")[0];
let vsStartmenu = document.getElementById("6");
let closevs = document.getElementsByClassName("close")[5];
let maximizevs = document.getElementsByClassName("maximize")[5];

//double click to open
vsbtn.addEventListener("dblclick", function () {
  open(vsdiv);
});

vsStartmenu.addEventListener("click", function () {
  open(vsdiv);

  startmenuTransition();
});

//close notes app
closevs.addEventListener("click", function () {
  closeFunc(vsdiv);
});

//maximize restore notes app
maximizevs.addEventListener("click", function () {
  maximizeFunc(vsdiv);
});
