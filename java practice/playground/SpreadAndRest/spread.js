// spread...

// let arr = [1, 2, 3, 4, 5];
// let newArr = [...arr,10,99,'Anshu'];

// console.log(newArr);

// let arr = [1, 2, 3, 4];
// let copy = arr;
// console.log(copy);
// copy.push(19);
// console.log(copy);
// console.log(arr); // its changes the original arr

// merging of two arrays

// let arr1 = [1, 2, 4, 5, 67, 8, 43];
// let arr2 = ['anshu', 'lovi', 'kanu', 'mani'];

// let arr3 = [...arr1, ...arr2];

// console.log(arr3);

// console.log(...str);

// let users = ["anshu", "lovi", "mani"];

// function consoleThreeUser(user1, user2, user3) {
//     console.log(user1);
//     console.log(user2);
//     console.log(user3);
// }
// function consoleThreeUser(user1, user2, user3) {
//     console.log(user1);
//     console.log(user2);
//     console.log(user3);
// }

// consoleThreeUser('anshu', 'mani', 'lovi');
// consoleThreeUser(...users);

// In objects

// let obj = {
//     name: 'anshu',
//     age: 20,
//     passion: 'developer',
//     city: 'Phagwara',
// }

// let objCopy = { ...obj,name : 'krish' };

// console.log(objCopy);
// console.log(obj);


// ***Rest***

// function sum(...rest) {
//     console.log(rest);
//     let sum = rest.reduce((acc, curt) => {
//         return acc + curt;
//     });
//     return sum;
//     // return a + b + c;
// }

// let output = sum(1, 2, 3);
// console.log(output);

// Rest in destructuring

// let arr = ['anshu', 'lovi','kannu'];

// let [user1, user2] = arr;
// let [user1, ...rest] = arr;

// console.log(user1);
// console.log(rest);

// objects

// let obj = {
//     name : 'anshu',
//     age : 14,
//     city : 'Phagwara',
//     passion : 'developer'
// }

// let {name,age,...otherKeys} = obj;
// console.log(name);
// console.log(age);
// console.log(otherKeys);

