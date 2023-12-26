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

gsap.utils.toArray('.line').forEach(line => {
    gsap.fromTo(line, {
        opacity: 0,
        width: '0%'
    }, {
        opacity: 1,
        width: '270px',
        duration: 1,
        delay: 0.4,
        scrollTrigger: line,
        ease: "power2.inOut"

    })
})


gsap.utils.toArray('.heading_ani').forEach(heading_ani => {
    gsap.fromTo(heading_ani, {
        opacity: 0,
        scale: 0
    }, {
        opacity: 1,
        scale: 1,
        duration: 1,
        scrollTrigger: heading_ani
    })
})
gsap.utils.toArray('.header_ani').forEach(header_ani => {
    gsap.fromTo(header_ani, {
        opacity: 0,
        y:-100,
        scale:0
    }, {
        scale:1,
        opacity: 1,
        y:0,
        duration: 1,
        scrollTrigger: header_ani
    })
})
gsap.utils.toArray('.client_ani').forEach(client_ani => {
    gsap.fromTo(client_ani, {
        opacity: 0,
        scale:0
    }, {
        scale:1,
        opacity: 1,
        duration: 1,
        scrollTrigger: client_ani
    })
})
gsap.utils.toArray('.website').forEach(website => {
    gsap.fromTo(website, {
        opacity: 0,
        x:-600
    }, {
        x:0,
        opacity: 1,
        duration: 1,
        scrollTrigger: website
    })
})