let menubtn= document.querySelector('.menu');
menubtn.addEventListener('click',()=>{
    let navbar=document.querySelector('.navbar');
    navbar.classList.add('active-navbar');
})
let crossbtn= document.querySelector('.cross');
crossbtn.addEventListener('click',()=>{
    let navbar=document.querySelector('.navbar');
    navbar.classList.remove('active-navbar');
})

// move signup and login
let login=document.querySelector("#login");
login.addEventListener('click',()=>{
    let wrapper=document.querySelector(".wrapper");
    wrapper.style.transform = 'translateX(-102%)';

    let signup=document.querySelector(".signup");
    signup.style.opacity=0;

    let login=document.querySelector(".login");
    login.style.opacity='100%';
})
let signup=document.querySelector("#signup");
signup.addEventListener('click',()=>{
    let wrapper=document.querySelector(".wrapper");
    wrapper.style.transform = 'translateX(0%)';

    let signup=document.querySelector(".signup");
    signup.style.opacity='100%';

    let login=document.querySelector(".login");
    login.style.opacity=0;
})