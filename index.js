/* VARIABLE */
const   page = document.getElementsByID('page'),
        loading = document.getElementsByID('loading'),
        slide = document.querySelector('.swiper'),
        inner1 = document.getElementsByID('inner-1'),
        inner2 = document.getElementsByID('inner-2'),
        inner3 = document.getElementsByID('inner-3'),
        car = document.querySelector('model-viewer'),
        slideToButtons = document.querySelectorAll[('data-slide-to')],
        colorButtons = document.querySelectorAll[('data-color')],
        title = document.querySelectorAll('.title'),
        bgImage = document.querySelector('picture');

const innerAnimationActive = {
    duration:1,
    delay:0.5,
    ease: Power4.easeOut,
    autoAlpha:1,
    yPercent:0,
};
const inneerAnimationHidden = {
    duration:1,
    ease: Power4.easeOut,
    autoAlpha:0,
    yPercent:-20,
};

/* VERTICAL SLIDER */
const swiper = new Swiper(slider, {
    direction: 'vertical',
    speed: 1500,
    grabCursor: true,
    touchRation: 2, 
    threshold:1,
    preventInteractionOnTransition: true, 
    mousewheel: {
        forceToAxis: true,
    }
    keyboard: {
        enabled: true,
    }
    on: {
    init: () => {
        /* SLIDER & TITLE FADE IN */
        gsap.to(slider, {
            duration: 1,
            ease: Power4.easeOut,
            autoAlpha: 1,
        });
        gsap.to(title, innerAnimationActive);

        /* TITLE INFINITE LOOP */
        title.forEach(function (e, i) {
            let row_width = e.getBoundingClientRect().width;
            let row_item_width = e.children[0].getBoundingClientRect().width;
            let offset = ((2 * row_item_width) / row_width) * 100 * -1;
            let duration = 30 * (i + 1);

            gsap.set(e, {
                xPercent: 0,
            });
            gsap.to(e, {
                duration: duration,
                ease: "none",
                xPercent: offset,
                repeat: -1
            });
        });
    }
}, 
});