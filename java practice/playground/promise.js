// let p1 = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         console.log("resolve after 2 sec");
//         resolve("anshu")

//     },2000)
// })
// p1.then((value)=>{
//     console.log(value);
//     let p2 = new Promise((resolve,reject)=>{
//         setTimeout(()=>{

//             resolve("string 2");
//         },2000)
//     })
//     return p2;
// }).then((value)=>{
//     console.log("We are done");

// }).then((value)=>{
//     console.log("Now we are aolmost done");

// })

// const loadScript = (src) => {
//     return new Promise((resolve, reject) => {

//         let script = document.createElement("script");
//         script.type = "text/javascript";
//         script.src = src;
//         document.body.appendChild(script);
//         script.onload = () => {
//             resolve("script has been loaded");
//         }
//         script.onerror = () => {
//             reject(0);
//         }
//     })
// }
// let p1 = loadScript("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js");
// p1.then((value) => {
//     console.log(value);
//     return loadScript("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js");

// }).then((value)=>{
//     console.log("second script ready");

// }).catch((error) => {
//     console.log("we are having problem having load in script");

// })

// let p1 = new Promise((resolve, reject) => {
//     console.log("not resolved");

//     setTimeout(() => {
//         resolve(1);
//     }, 2000)
// })
// p1.then(() => {
//     console.log('hii');
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(4);
//         }, 6000)
//     }).then((value) => {
//         console.log(value);

//     })

// })
// p1.then(() => {
//     console.log("p1 is resolved");

// })
let p1 = new Promise((reslove,reject)=>{
    setTimeout(()=>{
        // reslove(1);
        reject("new error");

    },2000)
})
let p2 = new Promise((reslove,reject)=>{
    setTimeout(()=>{
        reslove(2);
        // reject("new error");
    },4000)
})
let p3 = new Promise((reslove,reject)=>{
    setTimeout(()=>{
        reslove(3);
    },5000)
})
// p1.then((value)=>{
//     console.log(value);
    
// })
// p2.then((value)=>{
//     console.log(value);
    
// })
// p3.then((value)=>{
//     console.log(value);
    
// })
// let promise_all = Promise.all([p1,p2,p3]);
// promise_all.then((value)=>{
//     console.log(value);
    
// })
// let promise_all = Promise.allSettled([p1,p2,p3]);
// let promise_all = Promise.race([p1,p2,p3]);
// let promise_all = Promise.any([p1,p2,p3]);
let promise_all = Promise.reject([p1,p2,p3]);
promise_all.then((value)=>{
    console.log(value);
    
})