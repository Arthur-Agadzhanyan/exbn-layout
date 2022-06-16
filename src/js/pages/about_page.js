const aboutPagePartnersSlider = new Swiper('#about_page-partners_slider', {
    slidesPerView: 5.7,
    speed: 1000,
    spaceBetween: 16,
    breakpoints:{
        1100:{
            slidesPerView: 4.3,
            scrollbar: {
                el:'#about_page-partners_slider_scrollbar',
                draggable: true,
            },
        },
        1500:{
            slidesPerView: 4.7,
            scrollbar: {
                el:'#about_page-partners_slider_scrollbar',
                draggable: true,
            },
        },
        1750:{
            slidesPerView: 5.7,
            scrollbar: {
                el:'#about_page-partners_slider_scrollbar',
                draggable: true,
            },
        }
    }
});