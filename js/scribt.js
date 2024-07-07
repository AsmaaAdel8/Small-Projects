'use strict'
function App(){
// const buttons=document.activeElement;
const buttons=document.querySelectorAll('button:not(#clear, #delete, #eqal)')
const num=document.getElementById('num');
const clear=document.getElementById('clear');
const inputNum=document.getElementById('number');
const del=document.getElementById('delete');
const dot=document.getElementById('dot');
const eqal=document.getElementById('eqal');

let inputValue='';

// this method when i use document.activeElement
// buttons.addEventListener("click",(e)=>{
//         addInput(e.target.textContent)
//     });
buttons.forEach(button =>{
    button.addEventListener("click", (e) => {
        addInput(e.target.textContent)
      });
})

for(let i=1;i<=9;i++){
    let btn=document.createElement('button');
    num.appendChild(btn);
    num.insertBefore(btn,dot);
    btn.textContent=i;

    // the next code i replacd it by using activeElement in buttons atribute
    btn.addEventListener('click',()=>{
        addInput(btn.textContent)
    })
    // another way
    // btn.addEventListener('click',(e)=>{
    //     inputValue = `${inputValue}${e.target.textContent}`;
    //     inputNum.value = inputValue;
    // })
}
clear.addEventListener('click',()=>{
    inputValue = '';
  inputNum.value = inputValue;
})

del.addEventListener('click',()=>{
    if(inputValue.length>0){
        inputValue=inputValue.slice(0,-1);
        inputNum.value=inputValue;
    }
})

let previousNumber = '';
let operator = '';

function addInput(input) {
  if (input === '+' || input === '-' || input === '*' || input === '/' || input === '%' || input === '^') {
    operator = input;
    previousNumber = inputValue;
    inputValue += input;
  } else {
    inputValue += input;
  }
  inputNum.value = inputValue;
}

eqal.addEventListener('click', () => {
  if (inputValue) {
    let currentNumber = inputValue.replace(previousNumber + operator, '');
    let result;
    switch (operator) {
      case '+':
        result = parseFloat(previousNumber) + parseFloat(currentNumber);
        break;
      case '-':
        result = parseFloat(previousNumber) - parseFloat(currentNumber);
        break;
      case '*':
        result = parseFloat(previousNumber) * parseFloat(currentNumber);
        break;
      case '/':
        result = parseFloat(previousNumber) / parseFloat(currentNumber);
        break;
      case '%':
        result = parseFloat(previousNumber) % parseFloat(currentNumber);
        break;
      case '^':
        result = Math.pow(parseFloat(previousNumber), parseFloat(currentNumber));
        break;
      default:
        result = inputValue;
    }
    inputNum.value = result;
    inputValue = result.toString();
    previousNumber = '';
    operator = '';
  } else {
    return;
  }
})

}
App()