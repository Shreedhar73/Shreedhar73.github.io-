//DOM manipulation for notes app
let notesdiv = document.getElementsByClassName("notesdiv")[0];
notesdiv.style.width = "100%";

let notesbtn = document.getElementsByClassName("notes")[0];
let closenotes = document.getElementsByClassName("close")[2];
let maximizenotes = document.getElementsByClassName("maximize")[2];


//double click to open
notesbtn.addEventListener("dblclick",function(){
 open(notesdiv);
})

//close notes app 
closenotes.addEventListener("click",function(){
    closeFunc(notesdiv)
});

//maximize restore notes app
maximizenotes.addEventListener("click",function(){
    maximizeFunc(notesdiv)
});