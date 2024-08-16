'use strict'
const email = document.querySelector('input[name=email]');
const button = document.querySelector('.pink');
const text =  document.querySelector('#message');
const error = document.querySelector('.error');





const validateEmail= (email) => {
    var regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(String(email).toLowerCase());
}



button.addEventListener('click',()=>{
    if(validateEmail(email.value)){
      text.innerText="Email has been sent.";
      email.value = '';
      error.classList.add('hidden');

    }else{
   
      text.innerText=" Please provide a valid email";
      document.querySelector('input').style.borderColor='red';
       error.classList.remove('hidden');
      
    }
})
  
