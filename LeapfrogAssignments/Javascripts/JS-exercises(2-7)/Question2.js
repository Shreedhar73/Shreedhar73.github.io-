var Q2 = document.getElementById("Q2");

Q2.onclick = function(){
var aboutme = {
    name : "Shreedhar Pandeya",
    address : "Dang",
    email : "Shreedharpandey000@gmail.com",
    interests : ["travel", "music", "sports"],
    education : [
        {
            name : "Public education avademy",
            date: "2010"
        },
        {
            name: "DAV college",
            date:"2016"
        },
        {
            name:"Madan Bhandari Memorial College",
            date:"2018"
        }
    ]


}
console.log(aboutme)

aboutme.education.forEach(function(school){
    console.log(
        "Name: ",
        school.name,
        " Date: ",
        school.date
        );
})
}