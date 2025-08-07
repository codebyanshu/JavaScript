// const prompt = require('prompt-sync')();

// // synchronus 
// let a = prompt("what is your name ")


// let b = prompt("planet ")

// let c = prompt("gender ")

// console.log(`${a} is in the ${b} of ${c}`)
// Asynchronus 
// console.log("start");


// setTimeout(function(){
//     console.log("hey i am good");

// },3000)
// console.log("end");

// callback

// function loadScript(src,callback){
//     var script = document.createElement("script");
//     script.src = src;
//     script.onload = function(){
//         console.log("script loaded with : ",src)
//         callback(null,src);
//     }
//     script.onerror = function (){
//         console.log("error aa gaya bhai")
//         callback(new Error("src got some error"))
//     }
//     document.body.appendChild(script);
// }

// function hello(error,src){
//     if(error){
//         console.log(error)
//         return
//     }
// console.log("hello",src)
// }
// function godmorning(error,src){
//     if(error){
//         console.log(error)
//         return
//     }
//     console.log("godmorning",src)
// }
// loadScript("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js",godmorning)

// let p1 = new Promise(function (resolve, reject) {
//     alert("promins runing")
//     resolve(1)
// })

// console.log("my name is anshu")
// setTimeout(function () {
//     console.log("hello in 2 sec");

// }, 2000)

// console.log("my name is " + "hello three");

// console.log(p1)

let p2 = new Promise(function (resolve, reject){
    console.log("promis is pending");
    
    setTimeout(() => {
        // console.log("i am promis and i am fullfild");
        // console.log("i am promis and i am reject");
        resolve(true)
        // reject(new Error("i am a new error"))
    }, 2000);
})

let p3 = new Promise(function (resolve, reject){
    console.log("promis is pending");
    
    setTimeout(() => {
        // console.log("i am promis and i am fullfild");
        console.log("i am promis and i am reject");
        // resolve(true)
        reject(new Error("i am a new error"))
    }, 2000);
})

console.log(p2);
console.log(p3);

p2.then((value)=>{
    console.log("i am promis and i am fullfild");
    console.log(value);
})

p3.catch((error)=>{
    console.log("some error in p3");
    
})


