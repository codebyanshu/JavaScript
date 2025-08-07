let boxs = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset-btn");
let newgamebtn = document.querySelector("#newbtn");
let msgcontainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let turneO = true; // playerX,playerO
const winpattern = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];
const resetGame = () => {
    turneO = true;
    enableBoxes();
    msgcontainer.classList.add("hide");
};
boxs.forEach((box) => {
    box.addEventListener("click", () => {
        console.log('box was clicked');
        if (turneO) {
            box.innerText = "X";
            turneO = false;
        }
        else {
            box.innerText = "O";
            turneO = true;
        }
        box.disabled = true;
        checkwinner();
    })
});
const disable = () => {
    for (let er of boxs) {
        er.disabled = true;
   }
}
    const enableBoxes = () => {
        for (let zx of boxs) {
            zx.disabled = false;
            zx.innerText = "";
        }
    }
    const showWinner = (winner) => {
        msg.innerText = `Congratulations, Winner is ${winner}`;
        msgcontainer.classList.remove("hide");
        disable();
    }
    const checkwinner = () => {
        for (let parttern of winpattern) {
            let pos1val = boxs[parttern[0]].innerText;
            let pos2val = boxs[parttern[1]].innerText;
            let pos3val = boxs[parttern[2]].innerText;
            
            if (pos1val != "" && pos2val != "" && pos3val != "") {
                if (pos1val === pos2val && pos2val === pos3val) {
                    console.log("winner", pos1val);
                    showWinner(pos1val);
                    
                }
            }
        }
    };
newgamebtn.addEventListener("click", resetGame);
resetbtn.addEventListener("click", resetGame);

