console.log("this is about arrays");

// let num = [1, 2, 3, 8, 9, 10]
// console.log(num);
// deleting an element from array
// delete num[0]

// console.log(num);
// console.log(num.length);

// let num2 = [1, 2, 3, 2, 4, 1]

// let num3 = num.concat(num2)
// console.log(num.concat(num2))
// console.log(num3)

// console.log(num.concat(num2,num3));

// sort method

// let namer = [1, 93, 3, 7, 0, 9, 10]
// namer.sort()
// it sort using string method it takes first value
// console.log(namer);

// solution it takes a compare function

// let compar = (a, b) => {
//     return a - b
// }
// namer.sort(compar)

// console.log(namer);

// namer.reverse()
// console.log(namer);

// adding new elements in array

// let delete_valu = num.splice(2, 3, 102, 123, 234)
// console.log(num);
// console.log(delete_valu);
// console.log(typeof delete_valu);

// num.slice(1,3)
// console.log(num); it return new array

// let arr = num.slice(1, 3)
// console.log(arr);

// console.log(arr);
// console.log(arr.toString());

// console.log(arr.join(" and "));
// console.log(num);


// num.pop()
// console.log(num);

// num.push(1000)
// console.log(num);
// num.push("anshu")
// console.log(num);

// num.shift()

// console.log(num);
// num.unshift("kumar");
// console.log(num);

// ____loops in array_________

// let a = [1,34,93,5,6,22]

// for (let index = 0; index < a.length; index++) {
//     const element = a[index];
//     console.log(element);
    
// }

// a.forEach((value,index,arr)=>{
//     console.log(value,index,arr);
    
// })


// let obj = {
// a : 1,
// b : 2,
// c : 3,

// }
// for (const key in obj) {
//     if (Object.prototype.hasOwnProperty.call(obj, key)) {
//         const element = obj[key];
//         console.log(key,element);
        
//     }
// }
// for (const itr of a) {
//     console.log(itr);
    
// }

// map,fillter and reduced


let b = [1, 34, 93, 5, 6, 22]
// let newarr = []

// for (let index = 0; index < b.length; index++) {
//     const element = b[index];
//     newarr.push(element**2)
    
// }
let newArr = b.map((e)=>{
    return e**2
})


console.log(newArr);
const greaterthen7 = (e)=>{
    if(e>7){
        return 1
    }
    else{
        return 0;
    }
}
console.log(newArr.filter(greaterthen7))

let arr2 = [1,2,3,2,5]

const sum = (a,b) => {
    return a+b
}
console.log(arr2.reduce(sum));

let name1 = Array.from("anshu")

console.log(name1);
















