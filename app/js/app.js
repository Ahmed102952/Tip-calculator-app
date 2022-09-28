const inputs = document.querySelectorAll('input');
const billInput = document.querySelector('#bill');
const tipBtnInput = document.querySelectorAll('#tipBtn');
const customTipBtnInput = document.querySelector('#customTipBtn');
const peoNumInput = document.querySelector('#peopleNum');
const tipAmountDisplay = document.querySelector('#tipAmount');
const totalDisplay = document.querySelector('#total');
const resetBtn = document.querySelector('#reset');
let tipPercent = 0;
let tipAmount = 0;
let total = 0;
let bill = 0;
let peoNum = 0;

tipBtnInput.forEach(e => {
    e.addEventListener('click', (event) => {
        event.preventDefault();
        tipPercent = e.value;
        calc()
        checkInputs();
        tipBtnInput.forEach(element=> {element.classList.remove('active')})
        e.classList.add('active');
        customTipBtnInput.value = ''
        
    })
})

customTipBtnInput.addEventListener('input', () => {
    tipBtnInput.forEach(element=> {element.classList.remove('active')})
    tipPercent = customTipBtnInput.value;
})

inputs.forEach(e => {
    e.addEventListener('input', () => {
        calc()

        checkInputs()

    })
})
resetBtn.addEventListener('click', (e) => {
    e.preventDefault();
    reset();  
})



const checkInputs = () => {
    resetBtn.classList.remove('disabled');
    if(tipAmount && tipAmount !== Infinity) {
        tipAmountDisplay.innerHTML = tipAmount;
        totalDisplay.innerHTML = total;
    }
}

const reset = () => {
    billInput.value = ''
    customTipBtnInput.value = ''
    peoNumInput.value = ''
    tipBtnInput.forEach(element=> {element.classList.remove('active')})
    tipPercent = 0;
    tipAmount = 0;
    total = 0;
    bill = 0;
    peoNum = 0;
    resetBtn.classList.add('disabled');
    tipAmountDisplay.innerHTML = '0';
    totalDisplay.innerHTML = '0';

}
const calc = () => {
    bill = billInput.value;
    peoNum = peoNumInput.value;
    tipAmount = (bill * (tipPercent / 100)) / peoNum;
    total = (bill / peoNum) + tipAmount;
}
reset();
