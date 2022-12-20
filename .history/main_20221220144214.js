//header scroll
let header = document.querySelector('header');
let menu = document.querySelector('#menu-icon');
let nav = document.querySelector('nav');
window.addEventListener('scroll', () => {
    header.classList.toggle('shadow',window.scrollY > 0)
})
window.onclick = () => {
    menu.classList.toggle('bx-x');
    nav.classList.toggle('active')
}
window
//swiper
var swiper = new Swiper(".home", {
       loop: true,
       grabCursor:true,
       pagination: {
          el: ".swiper-pagination",
          dynamicBullets: true,
        },
});
      
