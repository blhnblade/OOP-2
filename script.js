const inputsNumber = document.querySelectorAll('input[type="number"]')
const outer = document.querySelector('.outer__price');

const cup = document.querySelector('input[name="cup"]');
const sugar = document.querySelector('input[name="sugar"]');
const cream = document.querySelector('input[name="cream"]')

let defaultPrice = cup.value * 180;

outer.textContent = defaultPrice.toLocaleString('ru',{
    style: 'currency',
    currency: 'Rub',
    minimumFractionDigits: 0,    
    });

for(let i = 0; i < inputsNumber.length; i++){
    inputsNumber[i].addEventListener('input', calculation);
}


function calculation(){
    defaultPrice = +cup.value * 180 + +sugar.value * 10 + +cream.value * 20;
    outer.textContent = defaultPrice.toLocaleString('ru');
}
