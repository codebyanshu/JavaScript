// let a = document.getElementsByClassName("container")[0]
// a.onclick =()=>{
//     console.log("event occure")
// }
// let btn = document.getElementById("btn")
let btn = document.body

let x = (e) => {
    // console.log("running")
    alert("hello world")
    console.log(e.target);
    console.log(e.target, e.clientX, e.clientY);
}
btn.addEventListener("click", x)
// let y = (e) => {
//     // console.log("running")
//     alert("hello world  2")
// }

// btn.addEventListener("click", y)
// let a = prompt("what is your favourite number")
// if (a == "2") {
//     btn.removeEventListener('click', y)
// }

