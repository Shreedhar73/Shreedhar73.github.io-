
var Q1 = document.getElementById('Q1')

Q1.onclick = function(){
function displayStars(number){
    for(var i=number;i>0;i--){
        var stars ="";

        for(var j = 0; j<i; j++)
        {
            stars += "* ";
        }
        console.log(stars)

    }
}
displayStars(5);
}


