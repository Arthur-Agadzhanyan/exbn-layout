const aboutPagePartnersSlider = new Swiper('#about_page-partners_slider', {
    slidesPerView: 5.7,
    speed: 1000,
    spaceBetween: 16,
    breakpoints:{
        1100:{
            slidesPerView: 4.3,
            navigation: {
                nextEl:'#about_page-partners_slider_next',
                prevEl:'#about_page-partners_slider_prev'
            },
        },
        1500:{
            slidesPerView: 4.7,
            navigation: {
                nextEl:'#about_page-partners_slider_next',
                prevEl:'#about_page-partners_slider_prev'
            },
        },
        1750:{
            slidesPerView: 5.7,
            navigation: {
                nextEl:'#about_page-partners_slider_next',
                prevEl:'#about_page-partners_slider_prev'
            },
        }
    }
});

