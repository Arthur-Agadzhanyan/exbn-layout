@@include('webpTest.js');
@@include('swiper.js');
@@include('pages/main_page.js')
@@include('pages/news_page.js')
@@include('pages/about_page.js')
@@include('pages/current_ml.js')

AOS.init()

const navbarBtns = document.querySelectorAll('.navbar_btn')
const navbarPoppup = document.getElementById('navbar_poppup')

const navbarImage = document.getElementById('mb_logo')

navbarBtns.forEach(navbarBtn=>{
    navbarBtn.addEventListener('click',(e)=>{
        if(navbarImage){
            navbarImage.classList.toggle('mobile_menu_opened')
        }

        e.target.classList.toggle('mobile_close')

        navbarPoppup.classList.toggle('navbar_poppup-closed')

        if(navbarPoppup.classList.contains('bot_0')){
            navbarPoppup.classList.remove("bot_0")
        }else{
            setTimeout(()=>{
                navbarPoppup.classList.add("bot_0")
            },300)
        } 
    })
})

