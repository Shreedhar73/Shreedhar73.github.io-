//function to change brightness of screen (used at UTILS div -- bSlider, )
//e is a value that will be passed via the slider defined in HTML

function brightness(e) {
  var container = document.querySelector("body");
  document.body.style.backgroundBlendMode = "darken";
  var val = e.value;
  container.setAttribute("style", "filter: brightness(" + val + "%);");
}

//DOM manipulating UTILS(div containing brightness slider)

let utilsbtn = document.getElementsByClassName("utils")[0];
let utilsdiv = document.createElement("div");
utilsdiv.className = "utilsDiv";
utilsdiv.style.left = "25%";

//sets style property for div accordingly to screen dimensions of device
if (window.innerHeight >= size14) {
  utilsdiv.style.bottom = "25vh";
} else {
  utilsdiv.style.bottom = "41vh";
}

let bSlider = document.createElement("div");
bSlider.className = "bSlider";

let brightnessIcon = document.createElement("img");
brightnessIcon.src = "./img/brightness.png";
let brange = document.createElement("input");
brange.type = "range";
brange.id = "brightness-range";
brange.min = "30";
brange.max = "100";
brange.value = "100";
brange.onchange = function () {
  brightness(brange);
};

bSlider.appendChild(brange);
bSlider.appendChild(brightnessIcon);
utilsdiv.appendChild(bSlider);

document.body.appendChild(utilsdiv);

utilsbtn.addEventListener("click", () => {
  if (utilsdiv.style.left == "25%") {
    utilsdiv.style.left = "-1%";
  } else {
    utilsdiv.style.left = "25%";
  }
});
