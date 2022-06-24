const number = document.getElementById('numberContainer');

let current = 0;

const renderNumber = () => {
    number.textContent = `${current}`;
}
renderNumber()

const addOne = () => {
    current += 1;
    renderNumber();
    
}

const takeOne = () => {
    current -= 1;
    renderNumber();
}

const resetAll = () => {
    current = 0;
    renderNumber();
}