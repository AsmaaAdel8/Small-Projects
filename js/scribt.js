'use strict'
function App(){
let num=document.getElementById('num');
let dot=document.getElementById('dot');
let clear=document.getElementById('clear');
let inputNum=document.getElementById('number');
let del=document.getElementById('delete');

let inputValue='';
inputNum.value = inputValue;
for(let i=1;i<=9;i++){
    let btn=document.createElement('button');
    num.appendChild(btn);
    num.insertBefore(btn,dot);
    btn.textContent=i;
    btn.addEventListener('click',(e)=>{
        inputValue = `${inputValue}${e.target.textContent}`;
        inputNum.value = inputValue;
    })
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

}
App()