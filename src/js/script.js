@@include('webpTest.js');
@@include('swiper.js');
@@include('pages/main_page.js')

AOS.init()

const navbarBtn = document.getElementById('navbar_btn')
const navbarPoppup = document.getElementById('navbar_poppup')

navbarBtn.addEventListener('click',(e)=>{
    navbarPoppup.classList.toggle('navbar_poppup-closed')
})