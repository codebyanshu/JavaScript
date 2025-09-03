let button = document.querySelector('button');
let passInput = document.querySelector('#passInput')
button.addEventListener('click',()=>{
let passwordType = passInput.type;
passInput.type = passwordType === 'password'? 'text' :'password';
button.innerText = passInput.type === 'password' ? 'Show' : 'Hide';
})