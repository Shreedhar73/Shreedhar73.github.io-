
const data = ["red", "blue", "green", "yellow", "purple", "orange", "black", "white", "brown", "apple", "ball","cat","oil","elephant","airplane","linkedin","ios","android",];
const autocomplete = document.getElementById("autocomplete");
const resultsHTML = document.getElementById("results");

autocomplete.oninput = function () {
  let results = [];
  let userInput = this.value;
  resultsHTML.innerHTML = "";
  var linebreak = '\n';
  if (userInput.length > 0) {
    // debugger;
    if (userInput.includes(" ")) {
      userInput = userInput.split(" ").pop();
      userInput = userInput == "" ? "#" : userInput;
    }if (userInput.includes(linebreak)) {
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

function getResults(input) {
  const results = [];
  for (i = 0; i < data.length; i++) {
    if (input === data[i].slice(0, input.length)) {
      results.push(data[i]);
    }
  }
  return results;
}

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