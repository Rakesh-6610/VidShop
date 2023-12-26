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
gsap.from('.hello', { opacity: 0, x: 20, delay: 0.8 })
const menu_items = document.querySelector('.navbar-left')
gsap.from(menu_items.children, {
    opacity: 0,
    x: 0,
    duration: 1,
    delay: 0.8,
    stagger: {
        amount: 1
    }
})



gsap.utils.toArray('.book_head_animate').forEach(book_head_animate => {
    gsap.fromTo(book_head_animate,{
        opacity:0,
        scale:0.8
    },{
        opacity:1,
        scale:1,
        duration:1,
        scrollTrigger:book_head_animate
    })
});

gsap.utils.toArray('.book_para_animate').forEach(book_para_animate=>{
    gsap.fromTo(book_para_animate,{
        opacity:0,
        x:300,
        skewX:30
    },{
        opacity:1,
        x:0,
        skewX:0,
        duration:1,
        scrollTrigger:book_para_animate
    })
})

gsap.utils.toArray('.para_line').forEach(para_line=>{
    gsap.fromTo(para_line,{
        width:'0px'
    },{
        width:'100%',
        delay:0.8,
        duration:1,
        scrollTrigger:para_line
    })
})

gsap.utils.toArray('.book_image_animate').forEach(book_image_animate=>{
    gsap.fromTo(book_image_animate,{
        opacity:0,
        scale:0
    },{
        opacity:1,
        scale:1,
        duration:1,
        scrollTrigger:book_image_animate
    })
})

gsap.utils.toArray('.book_heading_animate').forEach(book_heading_animate=>{
    gsap.fromTo(book_heading_animate,{
        opacity:0,
        scale:0,
        skewY:10
    },{
        opacity:1,
        scale:1,
        skewY:0,
        duration:1,
        scrollTrigger:book_heading_animate
    })
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

gsap.utils.toArray('.popular_book').forEach(popular_book=>{

    gsap.set('.popular_book',{
        x:-1000,
        opacity:0
    })
    gsap.to(popular_book,{
        opacity:1,
        x:0,
        duration:1,
        scrollTrigger:popular_book
    })
})
gsap.utils.toArray('.book').forEach(book => {
    gsap.fromTo(book, {
        opacity: 0,
        y: 200,
        skewY: 'random(-20,40)'
    }, {
        opacity: 1,
        skewY: 0,
        y: 0,
        scrollTrigger: book,
    })
})