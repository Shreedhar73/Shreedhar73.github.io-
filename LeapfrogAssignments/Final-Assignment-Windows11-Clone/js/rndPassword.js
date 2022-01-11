//app layout 
let randonpwdDiv = document.getElementsByClassName("pwdGen-div")[0];
randonpwdDiv.style.width = "100%";



//handling open close maximize buttone
let pwdbtn = document.getElementsByClassName("pwdGen")[0];
let pwdbtnStartmenu = document.getElementById("5");
let closepwd = document.getElementsByClassName("close")[3];
let maximizepwd = document.getElementsByClassName("maximize")[3];


//double click to open password generator
pwdbtn.addEventListener("dblclick",function(){
    open(randonpwdDiv);
})

pwdbtnStartmenu.addEventListener("click",function(){
    open(randonpwdDiv);
    startmenuTransition();
  })

//maximize 
maximizepwd.addEventListener("click",function(){
    maximizeFunc(randonpwdDiv);
})
//close
closepwd.addEventListener("click",function(){
    closeFunc(randonpwdDiv);
})





//actual functions/logics for random password generation

const resultEl = document.querySelector(".result");
const lengthEl = document.querySelector(".length");
const uppercaseEl = document.querySelector(".uppercase");
const lowercaseEl = document.querySelector(".lowercase");
const numbersEl = document.querySelector(".numbers");
const symbolsEl = document.querySelector(".symbols");
const generateEl = document.querySelector("#generate");
const clipboard = document.querySelector("#clipboard");


const randomFunc = {
    lower: getRandomLower,
    upper: getRandomUpper,
    number: getRandomNumber,
    symbol: getRandomSymbol
}

clipboard.onclick = () => {
    const textarea = document.createElement('textarea');
    const password = resultEl.innerText;

    if (!password) {
        return alert("No result to copy!");
    }

    textarea.value = password;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    textarea.remove();
    alert("Password copied to clipboard!");
}


generateEl.onclick = () => {
    const length = +lengthEl.value;
    const hasLower = lowercaseEl.checked;
    const hasUpper = uppercaseEl.checked;
    const hasNumber = numbersEl.checked;
    const hasSymbol = symbolsEl.checked;


    resultEl.innerHTML = generatePassword(hasLower, hasUpper, hasNumber, hasSymbol, length);
}

function generatePassword(lower, upper, number, symbol, length) {
    let generatedPassword = '';
    const typesCount = lower + upper + number + symbol;
    const typesArr = [{ lower }, { upper }, { number }, { symbol }].filter((item) => Object.values(item)[0]);

    if (typesCount == 0) {
        return alert(
            "No Selected Value"
        );
    }

    for (let i = 0; i < length; i += typesCount) {
        typesArr.forEach(type => {
            const funcName = Object.keys(type)[0];
            generatedPassword += randomFunc[funcName]();
        })
    }

    const finalPassword = generatedPassword.slice(0, length);

    return finalPassword;
}

function getRandomLower() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97)  // Gets random alphabet from A-Z , a is 97
}

function getRandomUpper() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65); //Gets random Alphabet from a-z , a is 65

}

function getRandomNumber() {
    return Math.floor(Math.random() * 10); //gives random int value between 0 to 9
}

function getRandomSymbol() {
    const symbols = '!@#$%^&*(){}[]=<>,.|/``~';
    return symbols[Math.floor(Math.random() * symbols.length)]; //gets random symol from defined list 
}
