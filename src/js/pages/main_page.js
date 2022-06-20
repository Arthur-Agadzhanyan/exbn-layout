const mainPagePartnersSlider = new Swiper('#main_page-partners_slider', {
    slidesPerView: 5.7,
    speed: 1000,
    spaceBetween: 16,

    breakpoints:{
        1100:{
            slidesPerView: 4.3,
            navigation: {
                nextEl:'#main_page-partners_slider_next',
                prevEl:'#main_page-partners_slider_prev'
            },
        },
        1500:{
            slidesPerView: 4.7,
            navigation: {
                nextEl:'#main_page-partners_slider_next',
                prevEl:'#main_page-partners_slider_prev'
            },
        },
        1750:{
            slidesPerView: 5.7,
            navigation: {
                nextEl:'#main_page-partners_slider_next',
                prevEl:'#main_page-partners_slider_prev'
            },
        }
    }
});
const mainPageNewsSlider = new Swiper('#main_page-news_slider', {
    speed: 1000,
    spaceBetween: 16,
    breakpoints:{
        320:{
            slidesPerView: 1.1,
        },
        375:{
            slidesPerView: 1.2,
        },
        550:{
            slidesPerView: 1.4,
        },
        650:{
            slidesPerView: 1.7,
        },
        700:{
            slidesPerView: 1.9,
        },
        850:{
            slidesPerView: 2.2,
        },
        1100:{
            slidesPerView: 2.5,
            navigation: {
                prevEl:'#main_page-news_slider_prev',
                nextEl:'#main_page-news_slider_next',
            },
        },
        1500:{
            slidesPerView: 3.3,
            navigation: {
                prevEl:'#main_page-news_slider_prev',
                nextEl:'#main_page-news_slider_next',
            },
        },
        1750:{
            slidesPerView: 3.8,
            navigation: {
                prevEl:'#main_page-news_slider_prev',
                nextEl:'#main_page-news_slider_next',
            },
        }
    }
});