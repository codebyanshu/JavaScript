// 1.What is Pure Functions, and why it is useful?

// 2.How do you use .reduce() to calculate the total price in shoping cart?

// let arr = [5, 3, 2, 5, 6, 7, 2];

// let result = arr.reduce((acc, curt) => {
//     return acc + curt;
// }, 0);

// console.log(result);

// 3.Explain immutability and how would update an object in an array without mutating the original.

// let user = {
//     name: 'anshu',
//     class: 'cse'
// }

// function UpdateName(user, name) {
//     let newObj = { ...user, name };
//     return newObj;
// }

// console.log(user);
// let newUpdateObj = UpdateName(user, 'lovi');
// console.log(newUpdateObj);


// let str = 'anshu';

// let reverseStr = str.split('').reverse().join('');
// console.log(reverseStr);


//4. how would you compose multiple functions to transform data step by step  


// let add2 = num => num + 2;

// let Mul5 = num => num * 5;

// let subtract10 = num => num - 10;

// let result = subtract10(Mul5(add2(6)));
// console.log(result);

// method 2 using reduced

// compose -> right to Left;
// pip -> left to right ;

// function compose(...fns) {

//     return function (val) {
//         return fns.reduceRight((acc, curtFnc) => {
//             return curtFnc(acc);
//         }, val);
//     }
// }
// function pip(...fns) {

//     return function (val) {
//         return fns.reduce((acc, curtFnc) => {
//             return curtFnc(acc);
//         }, val);
//     }
// }

// let result = compose(subtract10, Mul5, add2)(6);
// console.log(result);
// let result2 = pip(subtract10, Mul5, add2)(6);
// console.log(result2);

// let arr = [1, 2, 3, 4, 5];

// let squareLogic = (r) => {
//     return r * r;
// }

// let cubeLogic = (r) => {

//     return r * r * r;
// }
// let diaMeterLogic = (r) => {

//     return 2 * r;
// }

// let Calculate = function(logicFn) {
//     let squareArr = [];
//     for (let i = 0; i < arr.length; i++) {
//         squareArr.push(logicFn(arr[i]));
//     }
//     return squareArr;
// }

// Array.prototype.ownMap = Calculate;

// let result1 = arr.ownMap(diaMeterLogic);
// console.log(result1);
// function cube(arr) {
//     let cubeArr = [];
//     for (let i = 0; i < arr.length; i++) {
//      cubeArr.push(arr[i] * arr[i] * arr[i]);
//     }
//     return cubeArr;
// }
// function diameter(arr) {
//     let dia = [];
//     for (let i = 0; i < arr.length; i++) {
//      dia.push(2*arr[i]);
//     }
//     return dia;
// }



// let result = calculate(arr, squareLogic);

// let cubeArr = calculate(arr, cubeLogic);

// let diaMeterResut = calculate(arr, diaMeterLogic);

// let diameter = arr.map(diaMeterLogic);
// console.log(diameter);

// console.log(cubeArr);
// console.log(result);
// console.log(diaMeterResut);
// let cubeResult = cube(arr);
// console.log(cubeResult);
// let diaResult = diameter(arr);
// console.log(diaResult);

let arr = [1, 2, 4, 5, 4, 45, 67, 100];

let LogicFun = (elem) => {
    return elem % 2 === 0;
}

function MyForEach(LogicFun) {
    let outPutArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (LogicFun(arr[i])) {
            outPutArr.push(arr[i]);
        }
    }
    return outPutArr;
}

// let resultArr = MyForEach(arr);
// console.log(resultArr);

Array.prototype.ownForEach = MyForEach;

// let result_arr = arr.ownForEach(LogicFun);
let result_arr = arr.ownForEach((elem) =>{
    return elem % 2 !== 0;
});
console.log(result_arr);