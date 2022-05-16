var formOne = document.getElementById('stepone');
var formTwo = document.getElementById('steptwo');
var formThree = document.getElementById('stepthree');

var first_name = document.getElementById('first_name');
var last_name = document.getElementById('last-name');
var email = document.getElementById('emailid');
var first_name_error =  document.getElementById('first-name-error');
var email_error = document.getElementById('email-error');

var contact = document.getElementById('contact');
var city = document.getElementById('city');
var country = document.getElementById('country');
var contact_error = document.getElementById('contact-error');
var country_error = document.getElementById('country-error');

var select_program = document.getElementById('select_program');
var prog_error = document.getElementById('prog-error');
var msg = document.getElementById('message');

var gototwo = document.getElementById('gototwo');
var gotothree = document.getElementById('gotothree');
// var gotoone = document.getElementById('gotoone');
var submit = document.getElementById('submit')

var prevOne = document.getElementById('gotoone');
var prevTwo = document.getElementById('pgototwo'); 

var SuccessContainer = document.getElementById('SuccessContainer')
var success = document.getElementById('success');


function validateFormOne(e){
    e.preventDefault();
    if(first_name.value == ''){
        first_name_error.style.display='block'
    }
    else if(email.value == ''){
    email_error.style.display='block'
}
else if(first_name.value != '' && email.value != ''){

 if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value))
  {
    first_name_error.style.display='none';
    email_error.style.display='none'
    // console.log(last_name.value)
    showStepTwo();
}
}
}
function validateFormTwo(e){
    e.preventDefault();
    if(contact.value == ''){
        contact_error.style.display='block'
    }
    else if(country.value == ''){
        country_error.style.display='block'
    }
    else if(contact.value != '' && country.value != ''){
        contact_error.style.display='none'
        country_error.style.display='none'
        console.log(city.value)
        showStepThree();
    }

}

function validateFormThree(e){
    e.preventDefault();
    if(select_program.value == ''){
        prog_error.style.display='block'
    }
    
    else if(select_program.value != ''){
        submitForm();
    }
}

function showStepone(e){
    e.preventDefault();
    formOne.style.display='block';
    formTwo.style.display='none';
    formThree.style.display='none';
}
function showStepTwo(e){
    formOne.style.display='none';
    formTwo.style.display='block';
    formThree.style.display='none';
    e.preventDefault();
    // console.log('test')
}
function showStepThree(){
        formOne.style.display='none';
        formTwo.style.display='none';
        formThree.style.display='block';
}
function submitForm(){
    formOne.style.display='none';
    formTwo.style.display='none';
    formThree.style.display='none';
    SuccessContainer.style.display='block';
    // console.log(first_name.value,email.value,contact.value)
    // console.log(first_name.value, email.value)
    success.innerText = first_name.value +" " + last_name.value;
}

prevOne.addEventListener('click',showStepone);
prevTwo.addEventListener('click',showStepTwo)
gototwo.addEventListener('click',validateFormOne)
gotothree.addEventListener('click',validateFormTwo);
submit.addEventListener('click',validateFormThree);