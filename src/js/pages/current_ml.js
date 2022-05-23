const currentMlPageAgentsSlider = new Swiper('#current_ml-agents_slider', {
    slidesPerView: 1,
    speed: 1000,
    loop:true,
    navigation:{
        nextEl: '#current_ml-agents_slider_arrow'
    }
});

const currentMlPagePlaySlider = new Swiper('#current_ml_page-key_aspects_swiper', {
    slidesPerView: 1,
    loop: true,
    speed: 1500,
    clickable: true,

    navigation: {
        nextEl: '#current_ml_page-key_aspects_swiper_arrow',
    },
    breakpoints:{
        600:{
            autoHeight: true
        },
        900:{
            autoHeight: false
        }
    }
});
