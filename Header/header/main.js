let hanburger = document.querySelector('.burger__menu');
let navMenu = document.querySelector('.nav__menu');

hanburger.addEventListener('click' , () => {
    hanburger.classList.toggle('active');
    navMenu.classList.toggle('active')
})