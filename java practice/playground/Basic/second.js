const prompt = require('prompt-sync')();
console.log("Hello World!");
let age = prompt("Enter your age : ");
// if (age < 7) {
//     console.log("You are a kid");
    
// } else if (age <= 18) {
//     console.log("You are an adult");
    
// }
// else {
//     console.log("you are an banda");
    
// }
// age = Number.parseInt(age);
// switch (age) {
//     case 10:
//         console.log("you can drive e-activa");
//         break;
//     case 18 :
//         console.log("you can drive a bike");
//         break;
//     case 24 :
//         console.log("you can drive a car");
//             break;
//     default:
//         break;
// }
age = Number.parseInt(age);
const a = (age) =>{
    switch (age) {
        case 10:
            return "you can drive e-activa";
            // break;
        case 18 :
            return "you can drive e-bike";
            // break;
        case 24 :
           return "you can drive a car";
                // break;
        // default:
        //     break;

}
}

console.log(a(age))
