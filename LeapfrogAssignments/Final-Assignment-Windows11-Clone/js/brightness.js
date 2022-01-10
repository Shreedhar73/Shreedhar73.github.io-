//function to change brightness of screen (used at UTILS div -- bSlider, )
//e is a value that will be passed via the slider defined in HTML

function brightness(e) {
  var container = document.querySelector("body");
  document.body.style.backgroundBlendMode = "darken";
  var val = e.value;
  container.setAttribute("style", "filter: brightness(" + val + "%);");
}
