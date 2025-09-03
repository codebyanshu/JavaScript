let nameIN = document.querySelector('#name');
let email = document.querySelector('#email');
let nameValue = document.querySelector('.nameValue');
let emailValue = document.querySelector('.emailValue');

nameIN.addEventListener('input',function(e){

    nameValue.innerText = e.target.value
})
email.addEventListener('input',function(e){

    emailValue.innerText = e.target.value
})