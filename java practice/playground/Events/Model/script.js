let openModelBtn = document.querySelector('.openModelBtn');
// let closeModelBtn = document.querySelector('.closeModelBtn')
let modelContainer = document.querySelector('.modelContainer')

openModelBtn.addEventListener('click',()=>{
    modelContainer.style.display = 'flex';
})
// closeModelBtn.addEventListener('click',()=>{
//     modelContainer.style.display = 'none';
// })
modelContainer.addEventListener('click',(event)=>{
    if(event.target.className === 'modelContainer'){
        modelContainer.style.display = 'none';
    }
})