const mainPagePartnersSlider = new Swiper('#main_page-partners_slider', {
    slidesPerView: 5.7,
    speed: 1000,
    spaceBetween: 16,
    breakpoints:{
        1100:{
            slidesPerView: 4.3,
        },
        1500:{
            slidesPerView: 4.7,
        },
        1750:{
            slidesPerView: 5.7,
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
        },
        1500:{
            slidesPerView: 3.3,
        },
        1750:{
            slidesPerView: 3.8,
        }
    }
});