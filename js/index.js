'use strict'
function Root(){
    let inputNum=document.getElementById('number');
   const mult=document.getElementById('mult');
   const sub=document.getElementById('sub');
   const sum=document.getElementById('sum');
   const deva=document.getElementById('deva');
   const dese=document.getElementById('dese');
   const power=document.getElementById('power');
   const dot=document.getElementById('dot');
   const zero=document.getElementById('zero');
   const eqal=document.getElementById('eqal');

   let inputValue=inputNum.value;
   if(inputValue){
    function sumOperatour(op){
      inputValue  += op;
      let operator= op;
      switch(operator){
        case'+':
        console.log("+");
        break;
        case'-':
        console.log("-");
        break;
        case'*':
        console.log("*");
        break;
        case'/':
        console.log("/");
        break;
        case'%':
        console.log("%");
        break;
        case'.':
        console.log(".");
        break;
        case'^':
        console.log("^");
        break;
        default:
            console.log("not operator");
      }
    }
   }else{return;}
}
Root()