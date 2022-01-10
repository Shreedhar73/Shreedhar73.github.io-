//List of Words that will get recommended, you can add as needed
const data = [
 
  "apple",
  "ball",
  "cat",
  "oil",
  "elephant",
  "airplane",
  "linkedin",
  "ios",
  "android",
  "peter",
  "shreedhar",
  "Leapfrog"
];

const autocomplete = document.getElementById("autocomplete");
const resultsHTML = document.getElementById("results");


//slices the user input and stores  first character of inputted word and pass that character to recommender function
autocomplete.oninput = function () {
  let results = [];
  let userInput = this.value;
  resultsHTML.innerHTML = "";
  var linebreak = "\n";
  if (userInput.length > 0) {
    if (userInput.includes(" ")) {
      userInput = userInput.split(" ").pop();
      userInput = userInput == "" ? "#" : userInput;
    }
    if (userInput.includes(linebreak)) {
      userInput = userInput.split(linebreak).pop();
      userInput = userInput == "" ? "#" : userInput;
    }
    results = getResults(userInput);
    resultsHTML.style.display = "block";
    for (i = 0; i < results.length; i++) {
      resultsHTML.innerHTML += "<li>" + results[i] + "</li>";
    }
  }
};


//function that checks input character with first character of defined Data and provides results
function getResults(input) {
  const recommednedData = [];
  for (i = 0; i < data.length; i++) {
    if (input.toUpperCase() === data[i].slice(0, input.length).toUpperCase()) {
      recommednedData.push(data[i]);
    }
  }
  return recommednedData;
}


//function that will write the recommended words onto main text area if clicked over it
resultsHTML.onclick = function (event) {
  debugger;
  let userInput = autocomplete.value;
  let inputArray = userInput.split(" ");
  const setValue = event.target.innerText;
  inputArray.pop();
  inputArray.push(setValue);
  userInput = inputArray.join(" ");
  autocomplete.value = userInput;
  this.innerHTML = "";
};
