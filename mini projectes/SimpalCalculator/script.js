let display = document.querySelector(".display");



function appendValue(text) {
    if (display.innerText === '0' || display.innerText === 'Error' || display.innerText === 'Infinity') {
        display.innerText = text;
        return;
    }
    display.innerText = ` ${display.innerText} ${text}`;

    console.log(text, typeof text);
}
function clrDisplay() {
    display.innerText = '0';
}
function calculate() {
    try {
        
        display.innerText = eval(display.innerText);
    } catch (error) {
        // console.log(error);
        display.innerText = 'Error';
    }
}