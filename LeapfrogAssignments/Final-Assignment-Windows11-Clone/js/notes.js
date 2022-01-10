let notesdiv = document.getElementsByClassName("notesdiv")[0];
notesdiv.style.width = "100%";





let notesbtn = document.getElementsByClassName("notes")[0];
let closenotes = document.getElementsByClassName("close")[2];
let maximizenotes = document.getElementsByClassName("maximize")[2];

notesbtn.addEventListener("dblclick",function(){
 open(notesdiv);
})

closenotes.addEventListener("click",function(){
    closeFunc(notesdiv)
});
maximizenotes.addEventListener("click",function(){
    maximizeFunc(notesdiv)
});