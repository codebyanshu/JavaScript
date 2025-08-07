// async function anshu(){
//     return 5;
// }

// anshu().then((x)=>{
//     console.log(x);
    
// })
async function ansh() {
    let p1 = new Promise((reslove, reject) => {
        setTimeout(() => {
            reslove("13 deg");
        }, 2000)
    })
    let p2 = new Promise((reslove, reject) => {
        setTimeout(() => {
            reslove("35 deg");
        }, 4000)
    })
    // p1.then(alert)
    // p2.then(alert)

    console.log("fetching");
    
    let p1w = await p1;
    console.log("succesfully fetch");
    
    console.log("fetching");
    let p2w = await p2;
    console.log("succesfully fetch");
    return [p1w,p2w]
}

const main = async ()=>{
    function vair() {
        console.log("i am not wait");

    }
    console.log("welcom to wether api");
    let a = await ansh();
    let b = await vair();
    console.log(a);
}
main()

