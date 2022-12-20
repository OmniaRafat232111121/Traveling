//header scroll
let header = document.querySelector('header');
window.addEventListener('scroll', () => {
    header.classList.toggle('shadow',window.scroll)
})


//swiper
var swiper = new Swiper(".home", {
       loop: true,
       grabCursor:true,
       pagination: {
          el: ".swiper-pagination",
          dynamicBullets: true,
        },
});
      
