let sideBar = document.querySelector('.sideBar');
let button = document.querySelector('button');

button.addEventListener('click',()=>{
    sideBar.classList.toggle('showSideBar');
})