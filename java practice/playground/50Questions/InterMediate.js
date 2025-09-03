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

// let sentence = "i am the great developer in the world."

// let finalResult = sentence.split(' ').map(item=>item.split('').reverse().join(''));

// console.log(finalResult.join(' '));

// 22.In an array of numbers and strings, only add those numbers which are not strings.

// let arr = [1, 2, 3, 'ash', 43, 'kjh', 78, 'anshu'];
// let sum = 0;

// arr.forEach(element => {
//     if (typeof element === 'number') {
//         sum += element;
//     }
// });
// console.log(sum);

// 23.How would you check a number is an integer or not?

// let num = 37.87;

// console.log(Number.isInteger(num));

// // method 2

// console.log(num % 1 === 0);

// 24.Write a function that reverse a number.

// function reverseNumber(num) {
//     return Number(num.toString().split('').reverse().join(''));
// }

// let result = reverseNumber(1232);

// console.log(result)

// 25.Write a JavaScript function that return a passed string with letters in alphabetical order.

// let str = "Anshu Kumar";
// function reverseStr(str) {
// return str.split('').sort().join('').trim();

// method 2
//     return str.split(' ').sort().join(' ');
// }

// let finalStr = reverseStr(str);
// console.log(finalStr);

// 26. Write a JavaScript function that accepts a string as a perameter and converts the first letter of each word of the string in UpperCase

// let sentence = "hey i am Kumar Anshu";

// const capitilizeLeter = (str) => {
//     let resultArr = str.split(' ').map(word => {
//         return (word.charAt(0).toUpperCase() + word.slice(1))
//     });

//     return (resultArr.join(' '))
// }

// let result = capitilizeLeter(sentence);
// console.log(result)

// 27.write a JavaScript function to get the first element of an array. Passing a parameter 'n' will return the first 'n' element of the array.

// function getArrayElement(arr) {
//     let n = 0;
//     if (!n) {
//         return arr[0];
//     }
//     else if (n > arr.length) {
//         console.log("element index not present")
//     }
//     else{
//         return(arr.slice(0,n));
//     }
// }

// let result = getArrayElement([2, 5, 6, 3, 7, 23],3);

// console.log(result);

// 28.Write a JavaScript function to get the number of occurences of each letter in specified string.

/* let str = "Anshu Kumar";
function getOccurence(string) {

    let freqObj = {};
    string.split('').forEach(letter => {
        if (freqObj.hasOwnProperty(letter)) {
            freqObj[letter]++;
        }
        else {
            freqObj[letter] = 1;
        }
        console.log(letter);
    });;
    console.log(freqObj);

    // for (let key in freqObj) {
    //     console.log(`${key} aa raha ${freqObj[key]} bar`);
    // }

    let arr = freqObject.entries(freqObj);
    arr.forEach(entryArr => {
        console.log(`${entryArr[0]} apka ${entryArr[1]} baar aaya hai`);
    })
    // console.log(arr);
}
getOccurence(str); */

// 29.Write a JavaScript function to get the number of occurence of most frequent item of an array.

/* 
let str = [1, 1, 2, 3, 4, 5, 5, 6, 7, 6, 5, 4, 3, 2, 1];
function getOccurence(arr) {

    let freqObj = {};
    arr.forEach(letter => {
        if (freqObj.hasOwnProperty(letter)) {
            freqObj[letter]++;
        }
        else {
            freqObj[letter] = 1;
        }
    });;
    let maxFreq = (Math.max(...Object.values(freqObj)));

    let keyValueArr = Object.entries(freqObj);
    let filterArr = keyValueArr.filter(entryArr => {
        return entryArr[1] === maxFreq
    })
    console.log(filterArr);


    // for (let key in freqObj) {
    //     console.log(`${key} aa raha ${freqObj[key]} bar`);
    // }
}
getOccurence(str); */

// 30. Write a JavaScript program to suffle an array

// let arr = [1, 2, 3, 4, 5];

// for (let ind in arr) {
//     let randomInd = Math.floor(Math.random()*arr.length);
//     /* let temp = arr[ind];
//     arr[ind] = arr[randomInd];
//     arr[randomInd] = temp */;
//     // Method 2 of swapping
//     [ arr[ind],arr[randomInd]] = [arr[randomInd],arr[ind]];
// }
// console.log(arr);

