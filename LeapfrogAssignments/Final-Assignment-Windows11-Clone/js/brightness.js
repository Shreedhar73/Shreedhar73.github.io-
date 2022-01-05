function brightness(e)
{
var container = document.querySelector("body");
document.body.style.backgroundBlendMode = "darken";
var val = e.value;
container.setAttribute("style", "filter: brightness("+val+"%);");
}