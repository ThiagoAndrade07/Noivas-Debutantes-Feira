if (screen.width <=760) {

    const swiper = new Swiper('.swiper', {

    speed: 2000,

    spaceBetween: 10,

    slidesPerView: 1.2,

    pagination: {

        el: '.swiper-pagination',

        type: 'bullets',

    },

    autoplay: {

        delay: 500,

    },
    centeredSlides: true

    });

}



if (screen.width > 760 && screen.width <= 1024) {

    const swiper = new Swiper('.swiper', {

        speed: 2000,

        spaceBetween: 5,

        slidesPerView: 2,

        pagination: {

            el: '.swiper-pagination',

            type: 'bullets',

        },

        autoplay: {

            delay: 1000,

        },
        centeredSlides: true

    });

} else if (screen.width > 1024 && screen.width <= 1500){

    const swiper = new Swiper('.swiper', {

        speed: 2000,

        spaceBetween: 20,

        slidesPerView: 3,

        pagination: {

            el: '.swiper-pagination',

            type: 'bullets',

        },

        autoplay: {

            delay: 1000,

        },

        centeredSlides: true
    });

} else if (screen.width > 1500){

    const swiper = new Swiper('.swiper', {

        speed: 2000,

        spaceBetween: 40,

        slidesPerView: 3,

        pagination: {

            el: '.swiper-pagination',

            type: 'bullets',

        },

        autoplay: {

            delay: 1000,

        },

        centeredSlides: true

    });

}