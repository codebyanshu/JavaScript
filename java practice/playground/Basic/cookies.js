let key = prompt("Enter your key");
let value = prompt("Enter your value");

// ***cookie***
// console.log(document.cookie);
// document.cookie = "name=anshu123";
// document.cookie = "name2=anshu1234567";
// document.cookie = "name2=anshu";
// console.log(document.cookie);
// document.cookie = `${key}=${value}`;
// document.cookie = `${encodeURIComponent(key)}=${encodeURIComponent(value)}`;
// console.log(document.cookie,"\n");

//****/ Local storage***

localStorage.setItem(key,value);
console.log(`The value at ${key} is ${localStorage.getItem(key)}`);
if(key == "kkr" || key == "rcb"){
    localStorage.removeItem(key);
}
if(key == "0"){
localStorage.clear();
}

