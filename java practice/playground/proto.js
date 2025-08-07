let a = {
    name2 : "anshu",
    language : "javascript",
}
console.log(a);

let p = {
    run : ()=>{
        alert("run");
    }
}
a.__proto__ =p;
a.run();
p.__proto__ ={
    name : "munish",
}
console.log(a.name2);

