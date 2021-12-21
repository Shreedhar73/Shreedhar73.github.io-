

var numbers = [1,2,3,4];

document.getElementById("Q4").onclick = function(){

 function tranFunc(num){
    return num * 2;
}

function transform(collection){
    var finalResult = Array();
    for(var i = 0; i<collection.length;i++){
        var result = tranFunc(collection[i])
        finalResult.push(result); 
    }
    return finalResult
}
console.log(transform(numbers))

}


