let numOfCircle = 81;
let numContainer = document.querySelector('.numberContainer');
let timerValue = document.querySelector('.timerValue');
let targetValue = document.querySelector('.targetValue');
let scoreValue = document.querySelector('.scoreValue');
let timer;
let targetNum = 10;


restartGame();
startTimer();

function startTimer() {
    setInterval(() => {
        if (timer <= 0) {
            numContainer.innerHTML = `<h1> Game Over</h1>
            <button onclick = restartGame()>Reset Game</button>`;
            numContainer.setAttribute('style', "flex-direction:column")
            return
        }
        timer--;
        timerValue.innerText = timer
    }, 1000)

}

function timerReset() {
    timer = 60;
    timerValue.innerText = timer
}

function generateTarget() {
    targetNum = Math.ceil(Math.random() * 10)
    targetValue.innerText = targetNum
}


function restartGame() {

    timerReset();
    generateNum();
    generateTarget();
    scoreValue.innerText = '0';

}
function generateNum() {
    numContainer.innerHTML = '';
    numContainer.removeAttribute('style');
    for (i = 1; i < numOfCircle; i++) {
        let divEle = document.createElement('div');
        divEle.className = 'circle';
        divEle.innerText = Math.ceil(Math.random() * 10);
        numContainer.appendChild(divEle)

    }
}
numContainer.addEventListener('click', function (event) {
    if (event.target.className === 'circle') {
        let number = Number(event.target.innerText)
        if (targetNum === number) {
            let SV = Number(scoreValue.innerText);
            SV += 10;
            scoreValue.innerText = SV
            generateTarget();
        }

    }
})