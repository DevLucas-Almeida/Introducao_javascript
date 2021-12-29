var currentNumberWrapper = document.getElementById("currentNumber");
var currentNumber = 0;

function decrement(){
    currentNumber--;
    currentNumberWrapper.innerHTML = currentNumber;
}

function increment(){
    currentNumber++;
    currentNumberWrapper.innerHTML = currentNumber;
}