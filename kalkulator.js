const numberButtons = document.querySelectorAll('.number'); 

const clearButton = document.querySelector('.clearButton');

const equalsButton = document.querySelector('.equals');

const squareButton = document.querySelector('.square');

const operateButtons = document.querySelectorAll('.operate')

const changeButton = document.querySelector('.change')

let currentNumber = document.querySelector('.ekran')

let previousNumber = '';

let mathSign = '';

let operator= '';

let stopfunction=false;


//=======================================================================================

function displayNumbers () {
    if(this.textContent === '.' && currentNumber.innerHTML.includes('.')) return;
    if(this.textContent === '.' && currentNumber.innerHTML === '') return currentNumber.innerHTML = '.'
    currentNumber.innerHTML += this.textContent;
}

function squareResult () {
    previousNumber.innerHTML = '';
    if(currentNumber.innerHTML.includes('-')) return;
    currentNumber.innerHTML = Math.sqrt(currentNumber.innerHTML);
}

function changeSign () {
    if(Number(currentNumber.innerHTML) === 0) return;

    if (currentNumber.innerHTML.includes('-')) {
        currentNumber.innerHTML = currentNumber.innerHTML.replace("-", "");
    } else {
        currentNumber.innerHTML = "-" + currentNumber.innerHTML;
      }
}

function operate () {
    if(currentNumber.innerHTML === ''){
        return;
    }

    else if (currentNumber.innerHTML === '') {
        return;
     }

    mathSign = this.textContent;

    
    previousNumber = currentNumber.textContent;
    currentNumber.innerHTML = '';
    stopfunction=false;
   
}

function showResult () {
    if (stopfunction) return;
    if(previousNumber.innerHTML === '' || currentNumber.innerHTML === '') return;

    let a = Number(currentNumber.innerHTML);
    let b = +previousNumber;

    operator = mathSign;
    
    switch(operator){
        case '+':
        currentNumber.innerHTML = (a + b).toString();
        break

        case '-':
        currentNumber.innerHTML = (b - a).toString();
        break

        case '÷':
        currentNumber.innerHTML = (b / a).toString();
        break

        case 'x':
        currentNumber.innerHTML = (a * b).toString();
        break
    }
    stopfunction=true;
}

function clearScreen () {
    currentNumber.innerHTML = '';
    previousNumber.textContent = '';
    stopfunction=false;
}







//=======================================================================================

numberButtons.forEach(function (button){
    button.addEventListener('click', displayNumbers)
});

operateButtons.forEach(function (button){
    button.addEventListener('click', operate)
});

equalsButton.addEventListener('click', showResult);

squareButton.addEventListener('click', squareResult);

clearButton.addEventListener('click', clearScreen);

changeButton.addEventListener('click', changeSign);

