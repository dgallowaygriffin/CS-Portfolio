var button = document.getElementById("submitButton");
var input1 = document.getElementById('input1');
var input2 = document.getElementById('input2');
var answer;
var display = document.getElementById('display');
var dropdown = document.getElementById("dropdown");

button.addEventListener("click", doMath);
// By using "dropdown" and also using "if", I am able to add more equations like division and subtraction into the calculator.
function doMath() {
    if  (dropdown.value === "+"){
        answer = parseInt(input1.value) + parseInt(input2.value)
        display.innerHTML = answer;
    }
    if (dropdown.value === "-"){
        answer = parseInt(input1.value) - parseInt(input2.value)
        display.innerHTML = answer;
    }
    if (dropdown.value === "*"){
        answer = parseInt(input1.value) * parseInt(input2.value)
        display.innerHTML = answer;
    }
    if (dropdown.value === "/"){
        answer = parseInt(input1.value) / parseInt(input2.value)
        display.innerHTML = answer;
    }
    if (dropdown.value === "^"){
        answer = Math.pow(input1.value, input2.value);
        display.innerHTML = answer;
    }
    if (dropdown.value == "root"){
        answer = Math.sqrt(input1.value, input2.value);
        display.innerHTML = answer;
    }
}