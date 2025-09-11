// let student = {
//     name : 'anshu kumar',
//     address : 'crp',
//     isMarried : false,

//     cityAddress : {
//         city : 'phg',
//         pin : 1234,
//     }
// }

// let name = student.name;
// let isMarried = student.isMarried;

// let {name,address,isMarried,cityAddress : {pin}} = student;


// console.log(student.name);
// console.log(student['address']);
// console.log(student.cityAddress.pin);


// console.log(name);
// console.log(isMarried);


// Destructuring with rest operator

// let arr = [1,2,34,'anshu','kumar',false];

// let [first,second,third,...rest] = arr;

// console.log(first);
// console.log(second);
// console.log(third);
// console.log(rest);

// default value

// let arr = [1, 2, 4,5];

// let [a, b, c, d] = arr;

// let [, ,c, ,e] = arr; //skip items

// console.log(c,e);

// let a = 5;
// let b = 10;

// [b,a] = [a,b];

// console.log(a,b);


// let arr = [1, 2, 3, 4, [5, 6, 7]];

// let [a, , , ,[x, y, z]] = arr;

// console.log(a, x, z, y);

// default paramiter
// let { name, age = 18 } = {
//     name: 'anshu',
//     // age: 19,
// }


// rename
// let { name : fullName, age = 18 } = {
//     name: 'anshu',
//     age: 19,
// }

// console.log(name, age);
// console.log(fullName);



// let obj = {
//     name: 'anshu',
//     age: 21,
//     address: {
//         city: 'phg',
//         pin: 1234,
//         arr: [1, 2, 3, 4, 5],
//     }
// }

// let {
//     name: fullName,
//     age,
//     address: { pin: code, 
//                 arr: [a, b] },
// } = obj;

// console.log(fullName);
// console.log(age);
// console.log(code);
// console.log(a, b);

// array destructuring in functun

// function sum([a,b]) {
//     console.log(a+b);
// }

// let arr = [3,5];
// sum(arr);

// object destructuring in function parameters.

// function greet({name,age}) {
//     console.log(`hello ${name} ,your age is ${age}.`);
// }

// let obj = {
//     name : 'anshu',
//     age : 19,
// }

// greet(obj)

// Questions

// 1.What is output 

// let arr = [1, 2, 3];
// let copyArr = { ...arr };
// console.log(copyArr);

// 2.how does that spread operator helps to avoid mutations.

// let obj = {
//     name: 'anshu',
//     age: 19,
// }

// let copyObj = {
//     ...obj,
//     name: 'kumar',
//     city: 'phg',
// }

// obj.name = 'kumar';
// console.log(obj);

// console.log(copyObj);
// console.log(obj);


// 3.Write a function that takes number as argumant and separates even and odd , and return an obj.

// function separatesEvenOdd(...arr) {
//     // console.log(arr);
//     let even = arr.filter((elem) => {
//         return elem % 2 === 0;
//     })
//     let odd = arr.filter((elem) => {
//         return elem % 2 !== 0;
//     })
//     // console.log(even,odd);
//     return {
//         even, odd
//     }
// }

// let {even,odd} = separatesEvenOdd(1, 2, 3, 4, 5, 6, 7, 8);

// console.log(even,odd);

// 4. create a function that behave like react's useStat.

function useState(initialValue) {
    let value = initialValue;

    function setValue(val) {
        value = val;
    }

    function count(val) {
        return value;
    }
    return [count, setValue];
}

let [count, setCount] = useState(0);
console.log(count());
setCount(5);
console.log(count());