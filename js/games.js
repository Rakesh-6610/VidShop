
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
function category_show(){
    document.getElementById('category-u').style.display="none";
    document.getElementById('category-d').style.display="inline";
    document.getElementById('category-list').style.display="flex";
    document.getElementById('mainpart').style.display="none";
};
function category_hide(){
    document.getElementById('category-u').style.display="inline";
    document.getElementById('category-d').style.display="none";
    document.getElementById('category-list').style.display="none";
    document.getElementById('mainpart').style.display="block";
};
function category_show_m(){
    document.getElementById('category-u-m').style.display="none";
    document.getElementById('category-d-m').style.display="inline";
    document.getElementById('category-list').style.display="flex";
    document.getElementById('mainpart').style.display="none";
};
function category_hide_m(){
    document.getElementById('category-u-m').style.display="inline";
    document.getElementById('category-d-m').style.display="none";
    document.getElementById('category-list').style.display="none";
    document.getElementById('mainpart').style.display="block";
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
        width: '250px',
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




gsap.utils.toArray('.game').forEach(game => {
    gsap.fromTo(game, {
        opacity: 0,
        y: 200,
        skewY: 'random(-20,40)'
    }, {
        opacity: 1,
        skewY: 0,
        y: 0,
        scrollTrigger: game,
    })
})




gsap.utils.toArray('.credit').forEach(credit => {
    gsap.fromTo(credit, {
        opacity:0,
        x: -500,
        skewY: 20
    }, {
        opacity:1,
        skewY: 0,
        x: 0,
        scrollTrigger: credit,
        ease: "power2.inOut"

    })
})