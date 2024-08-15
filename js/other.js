function nav_list_open(){
    document.getElementById('nav-btd-open').style.display="none";
    document.getElementById('nav-btd-close').style.display="inline";
    document.getElementById('nav-mobile').style.display="block";
};
function nav_list_close(){
    document.getElementById('nav-btd-open').style.display="inline";
    document.getElementById('nav-btd-close').style.display="none";
    document.getElementById('nav-mobile').style.display="none";
};



// -----------------------------------------------------------------------------------------------------------------
// ---------------------------------------animated part stats here--------------------------------------------------
// -----------------------------------------------------------------------------------------------------------------
gsap.registerPlugin(ScrollTrigger)

gsap.from('.hello', { opacity: 0, x: 20, delay: 0.2 })
const menu_items = document.querySelector('.navbar-left')
gsap.from(menu_items.children, {
    opacity: 0,
    x: 0,
    duration: 1,
    delay: 1,
    stagger: {
        amount: 1
    }
})





gsap.fromTo('.about-img', {
    opacity: 0,
    x: -200,
    skewX: 30
}, {
    opacity: 1,
    x: 0,
    skewX: 0,
    duration: 1,
    delay: 0.1,
    ease: "bounce.out"

})




gsap.utils.toArray('.line').forEach(line => {
    gsap.fromTo(line, {
        opacity: 0,
        width: '0%'
    }, {
        opacity: 1,
        width: '200px',
        duration: 1,
        delay: 0.4,
        scrollTrigger: line,
        ease: "power2.inOut"

    })
})




gsap.utils.toArray('.heading').forEach(heading => {
    gsap.fromTo(heading, {
        opacity: 0,
        scale: 0
    }, {
        opacity: 1,
        scale: 1,
        duration: 1,
        scrollTrigger: heading
    })
})




gsap.utils.toArray('.services').forEach(services => {
    gsap.fromTo(services, {
        opacity: 0,
        x:-1000,
        skewX:30
    }, {
        opacity: 1,
        skewX:0,
        x:0,
        scrollTrigger: services,
        ease: "power2.inOut"

    })
})