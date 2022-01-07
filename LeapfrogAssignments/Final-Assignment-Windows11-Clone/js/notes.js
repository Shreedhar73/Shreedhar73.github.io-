let notesdiv = document.getElementsByClassName("notesdiv")[0];
notesdiv.style.width = "80%";





let notesbtn = document.getElementsByClassName("notes")[0];
let closenotes = document.getElementsByClassName("close")[2];
let maximizenotes = document.getElementsByClassName("maximize")[2];

notesbtn.addEventListener("dblclick",()=>{
    notesdiv.style.display = "block";
   
    
})

closenotes.addEventListener("click",()=>{
    notesdiv.style.display = "none";
})