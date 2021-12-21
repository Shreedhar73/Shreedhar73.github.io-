
var fruits =[
    {id : 1, name:"Banana", color: "Yellow"},
    {id : 2, name:"Apple", color: "red"},
    {id : 3, name:"Orange", color: "Orange"},
]


//search by name

document.getElementById("Q3a").onclick =  function(){

searchName = prompt("Enter the name of fruit tto be searched: ");
function searchByName(fruits, searchName){
    for(var i = 0; i<fruits.length;i++){
        if(fruits[i]['name'].toUpperCase() == searchName.toUpperCase()){
            return fruits[i];
        }
    }
    return "Fruit not found"
}
console.log(searchByName(fruits,searchName))
}


//search by key
document.getElementById("Q3b").onclick = function(){
    key = prompt("Enter the key:")
    value = prompt("Enter the value: ")

    function searchByKey(fruits,key,value){
        for(var i = 0; i<fruits.length; i++){
            if(fruits[i][key] == value){
                return fruits[i]
            }
        }
        return " Fruit not found"
    }
    console.log(searchByKey(fruits,key,value))
}