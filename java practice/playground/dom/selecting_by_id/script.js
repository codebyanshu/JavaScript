
// obj = {
//     a: 1,
//     b: 3,
//     c: 6,
// }

// console.log("hii")
// console.error("this is error")
// console.assert(5 > 87)
// console.table(obj)
// console.warn("hii dont do this")
// console.info("hii this is important")

// // console.time("a")

// // console.timeEnd("a")
// console.time("for")

// for (let index = 0; index < 6; index++) {
    
//     console.log(index)
// }
// console.timeEnd("for")
// console.time("while")
// let i = 0;
// while (i<6) {
//     console.log(i);
//     i++;
    
// }
// console.timeEnd("while")

// dom start 


// console.log("hello")
// let anshu = document.getElementsByClassName("box");
// console.log(anshu)

// let a = document.body.firstElementChild
// const changBackground = ()=>{
//     a.firstElementChild.style.background = "red"
// }
// changBackground()
// let b = document.body
// console.log("First child of b is ",b.firstChild)
// console.log("First element child of b is ",b.firstElementChild)

// let t = document.body.firstElementChild

// console.log(t)
// console.log(t.rows)
// console.log(t.caption)
// console.log(t.thead)
// console.log(t.tfoot)
// console.log(t.firstElementChild)
// console.log(t.rows[0].rowIndex)

// console.log(id1) //not a good practice

let id1 = document.getElementById("id1")
let sp1 = document.getElementById("sp1")

console.log(id1)
console.log(id1.matches(".box"))
console.log(sp1.closest("#sp1"))
console.log(sp1.closest(".box"))
console.log(sp1.contains(id1))


