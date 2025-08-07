let random_btn = document.querySelector(".random");
let color_Input = document.querySelector("#colorInput");
let applyBtn = document.querySelector(".apply-btn");
let currentColorValue = document.querySelector(".current-color-value");
let container = document.querySelector(".container");
console.log(random_btn,color_Input,applyBtn,currentColorValue);
const colorArray = ['red', 'blue', 'green', 'aliceblue', 'aqua', 'blueviolet', 'chartreuse', 'brown', 'cyan', 'tomato', 'yellow','cadetblue']

console.log(colorArray[3]);
const generateRandomColor = () =>{
    const randonNumber = Math.floor(Math.random()*colorArray.length);
    console.log(randonNumber);
    
    return colorArray[randonNumber];
    
}
let color = generateRandomColor()
console.log(color);

const changeColor = (color)=>{
    container.style.backgroundColor = color ;
    currentColorValue.innerText = color ;
}
const handleRandomBtnClick =()=>{
   let color = generateRandomColor()
   console.log(color);
   changeColor(color)
   
    
}
const handleApplyBtnClick =()=>{
   const color = color_Input.value;
   changeColor(color);
    
}
random_btn.addEventListener("click",handleRandomBtnClick)
applyBtn.addEventListener("click",handleApplyBtnClick)
