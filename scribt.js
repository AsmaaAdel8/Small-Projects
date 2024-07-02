let num=document.getElementById('num');
let eqal=document.getElementById('eqal')

for(i=1;i<=9;i++){
    let btn=document.createElement('button');
    num.appendChild(btn);
    num.insertBefore(btn,eqal)
    btn.textContent=i;
}