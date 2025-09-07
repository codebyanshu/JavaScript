// let p = fetch("https://goweather.xyz/weather/in")
// p.then((respons)=>{
//     console.log(respons.status);
//     console.log(respons.ok);
    
//     // return value1.json();
//     return respons.text();
// })
// p.then((value2)=>{
//     console.log(value2);
// })

const creatTOdo = async ()=>{
let options = {
    method : "POST",
    Headers:{
        "Content-type": "application/json" 
    },
    body : JSON.stringify({
        title : "movie",
        body : "avengers",
        userId : 1,
    }),
}
let p = await fetch("https://goweather.xyz/weather/in",options)
let respons = await p.json()
return respons
}
const mainfunc = async ()=>{
    let todo = creatTOdo()
    console.log(todo);
    
}
mainfunc()

