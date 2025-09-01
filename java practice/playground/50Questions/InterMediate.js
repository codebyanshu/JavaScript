// 16.Whats the difference between the parseInt and Number().

// console.log(typeof parseInt("123232"));
// console.log(typeof Number("123.232"));

// console.log(parseInt("123.232px"));
// console.log(Number("123.232px"));

// console.log(parseInt("110", 16));
// console.log(Number("10"));

// 17. Why does 0.1 + 0.2 !== 0.3 in javaScript ?.


// console.log(0.1 + 0.2 === 0.3);
// console.log(0.1 + 0.2);

// 18. Explain floating-Point precision issues in JavaScript.

// console.log(0.1 + 0.2 === 0.3);
// console.log(0.1 + 0.2);

// 19.How Would you handle high-precision decimal math in Javascript.

// let sum = Number((0.1 + 0.2).toFixed(4));

// console.log(sum !== 0.3);

//Method 2/ using pakage decimal.

// let decimal = require('decimal.js');

// let num = decimal(0.1);
// let num2 = decimal(0.2);

// let sum = num + num2;
// let sum = num.plus(num2);

// console.log(typeof num , typeof num2)

// console.log(Number(sum) === 0.3)

// 20.What is difference between splice and slice

// 1.slice work with both array and string
// 2.it not change original array
// let string = "anshu";

// let strArr = ['a', 'n', 's', 'h', 'u'];
// console.log(string.slice(1,3))
// console.log(string.slice(1, -2))
// console.log(strArr.slice(1, 3))
// console.log(strArr.slice(1, -2))
// let test = strArr.slice(1, -2);
// console.log(test);
// console.log(strArr,string)


// 1. splice work with array only
// 2. it change the original array

// let test2 = strArr.splice(1, 0,'z','t');
// console.log(test2)
// console.log(strArr)

// 21.Create a function that reverse the each word of a given sentence.

let sentence = "i am the great developer in the world."

let finalResult = sentence.split(' ').map(item=>item.split('').reverse().join(''));

console.log(finalResult.join(' '));



