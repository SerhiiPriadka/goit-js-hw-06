const clicker = {
    valueNum: document.querySelector(`#value`),
    counterValue: 0,
    btnDecrement: document.querySelector(`[data-action="decrement"]`),
    btnIncrement: document.querySelector(`[data-action="increment"]`),
}

clicker.btnDecrement.addEventListener(`click`, () => {
    clicker.counterValue -= 1;
    clicker.valueNum.textContent = `${clicker.counterValue}`;
});

clicker.btnIncrement.addEventListener(`click`, () => {
    clicker.counterValue += 1;
    clicker.valueNum.textContent = `${clicker.counterValue}`;
});