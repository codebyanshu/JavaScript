let nameIN = document.querySelector('#name');
let email = document.querySelector('#email');
let password = document.querySelector('#Password');
let nameError = document.querySelector('.nameError');
let emailError = document.querySelector('.emailError');
let passError = document.querySelector('.passError');

nameIN.addEventListener('input', function (e) {

   let name = e.target.value;
   if (name.length < 3) {
        nameError.innerText = 'name at least 3 character long';
   }
   else{
       nameError.innerText = '';
   }
})
email.addEventListener('input', function (e) {
    let Email = e.target.value
  if ( !Email.includes('@') || !Email.includes('.')){
      emailError.innerText = 'Email is invalid ,email at least @ character';
  }
  else{
      emailError.innerText = '';
  }
})
password.addEventListener('input', function (e) {
    let pass = e.target.value
    if (pass.length < 6) {
        passError.innerText = 'password at least 6 character long';
    }
    else {
        passError.innerText = '';
    }

})