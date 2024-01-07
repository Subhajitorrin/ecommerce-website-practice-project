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
