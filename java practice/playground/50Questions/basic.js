// 1.create the function thar return the last elements of the array
// function getLastElement(arr) {
// return arr[arr.length - 1];
// return arr.pop() not recomand because it change the original array

// }
// let arr = [1,2,4,3,5,6,7]
// let lastElement = getLastElement(arr);
// console.log(lastElement)
// console.log(arr)

// 2. find the combination of two array
// let arr1 = [1,2,3,4];
// let arr2 = [2,4,5,7];
// let combinationArr = arr1.concat(arr2);
// let combinationArr1 = [...arr1,...arr2];
// console.log(combinationArr1);

// 3.generate a random integer from 1 to 18
// let randomNum = Math.floor(Math.random()*19);
// console.log(randomNum)

// 4.Create a function that takes an array conatining both numbers and return a new array containing only the string value

// let arr = [2,3,4,5,"ma","papa",89];
// let newResult = arr.filter((elem)=>{
//     console.log(elem)
// if(typeof elem === "string"){
//     return true;
// }
// else
// {
//     return false;
// }
// method 2
//     return typeof elem === 'string';
// })
// console.log(newResult)

// 5.Find the maximum number in the array

// let arr1 = [1,2,45,5];
// console.log(Math.max(...arr1));

// 6.Write a function that returns the length of a given object (number of keys).

// let obj = {
//     name: "anshu",
//     age: 21,
//     city: "phg",
// }
// let getObjlength = (object) => {
//     return Object.keys(object).length
// }
// console.log(getObjlength(obj));

// 7. In an array of objects fillter out those objects which have a gender value male

// let arr = [{
//     name: "anshu",
//     gender: "male",
// },
// {
//     name: "muskan",
//     gender: "female",
// },
// {
//     name: "Lovepreet",
//     gender: "male",
// }
// ]
// console.log(arr);
// let resultarr = arr.filter(obj => {
//     return obj.gender === "male";
// })
// console.log(resultarr);

// 8. Given a array of string and return a new array where all strings are in uppercase.

// let arr = ["apple", "mango", "grapes", "papaya", "litchi"];
// let newarray = arr.map(elem => {
//     return (elem.toUpperCase());
// })
// console.log(newarray);

// 9.Check if an object is empty or not.

// let obj = {
//     name: "anshu",
// }
// let isEmpty = Object.keys(obj).length < 1;
// if (isEmpty) {
//     console.log("Object is Empty ");
// }
// else {
//     console.log("Object is not Empty");
// }

// 10. Create an array of numbers and double each value using map.

// let arr = [1,2,3,5,6];
// let newArr = arr.map(num=>{
//     return num*2;
// })
// console.log(newArr);

// 11.Create an array of string into a single comma-separated strings.

// let arr = [1, 2, 3, "ak", "mk", 23, "lmd"];
// let newStr = arr.join();
// console.log(typeof newStr);
// console.log(newStr);

// 12. Write a function to flatten a neated array (one level deep).eg;[1,[2,3],4]->[1,2,3,4]

// let arr = [1, 2, 3, 5, ['a', 'e', 'i', 'o', 'u'], 5, 8,];

// arr.splice(4, 1, ...arr[4]);
// console.log(arr);

// mathod 2
// console.log(arr.flat(1));

// 13.Write a function that check if all elements in an array are number or note.

// let arr = [1, 2, 3, 'a', 'r', 45];
// let arr = [1, 2, 3, 45];
// function checkNumArr(arr) {
// console.log(arr)
// let isNum = true;
// arr.forEach(elem => {
//     if (typeof elem !== 'number') {
//         isNum = false;
//     }
// })
// return isNum;

// Method 2.
// let isNumber = arr.every((elem) => {
//     return typeof elem === 'number';
// })
// return isNumber;


// }

// let isAllNumbers = checkNumArr(arr);
// console.log(isAllNumbers);

// 14.Build a isPrime() function to check if a number is prime
// function isPrime(num) {
//     if (num < 2) {
//         return false;
//     }
//     for (let i = 2; i <= Math.floor(Math.sqrt(num)); i++) {
//         if (num % i === 0) {
//             return false;
//         }
//     }

//     return true;
// }
// console.log(isPrime(1));

// 15. Create a function that remove duplicates value frome an array
// let arr = [1, 1, 2, 3, 4, 5, 5, 6, 7, 6, 6, 9];
// function removeDublicate(arr) {
// let set = new Set(arr);
// // console.log(set);
// return [...set];

// method 2
//     let resultantArr = arr.filter((elem, ind) => {
//         return arr.indexOf(elem) === ind
//     })
//     return resultantArr;
// }

// let newArr = removeDublicate(arr);
// console.log(newArr);
