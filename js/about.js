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
// -------------------------White mod starts here----------------------------
function white(){
    document.getElementById('white').style.display="none";
    document.getElementById('dark').style.display="block";

    document.getElementById('about').style.backgroundColor='white';
    document.getElementById('about2').style.backgroundColor='white';
    document.getElementById('nav').style.backgroundColor='black';
    document.getElementById('category-u').style.backgroundColor="black";
    document.getElementById('category-d').style.backgroundColor="black";
    let nav =document.getElementsByClassName('navcategory'); 
    for (let i=0;i<nav.length;i++){
        nav[i].style.color='aliceblue';
    }
    
    document.getElementById('main').style.backgroundColor='#CCCCCC';
    document.getElementById('dis').style.color="black";
    document.getElementById('picture_box').style.backgroundColor='white';
    let thing=document.getElementsByClassName('thing');
    for (let o=0;o<thing.length;o++){
        thing[o].style.color="black";
    }
    document.getElementById('Email').style.color="black";
    document.getElementById('facebookw').style.display="none";
    document.getElementById('facebook').style.display="block";
    document.getElementById('telegramw').style.display="none";
    document.getElementById('telegram').style.display="block";
    document.getElementById('twitterw').style.display="none";
    document.getElementById('twitter').style.display="block";
    document.getElementById('sign').style.backgroundColor="rgb(104 102 102)";
}


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

gsap.fromTo('.about_vidshop_image',{
    opacity:0,
    scale:0,
    y:100
},{
    y:0,
    scale:1,
    opacity:1,
    duration:1,
})
gsap.utils.toArray('.line').forEach(line => {
    gsap.fromTo(line, {
        opacity: 0,
        width: '0%'
    }, {
        opacity: 1,
        width: '250px',
        duration: 1,
        delay: 0.1,
        scrollTrigger: line,
        ease: "power2.inOut"

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

gsap.utils.toArray('.heading').forEach(heading => {
    gsap.fromTo(heading,{
        opacity:0,
        scale:0
    },{
        opacity:1,
        scale:1,
        duration:1,
        scrollTrigger:heading
    })
})
gsap.utils.toArray('.heading_animate').forEach(heading_animate => {
    gsap.fromTo(heading_animate,{
        opacity:0,
        scale:0
    },{
        opacity:1,
        scale:1,
        duration:1,
        scrollTrigger:heading_animate
    })
})


gsap.utils.toArray('.para_animate').forEach(para_animate => {
    gsap.fromTo(para_animate,{
        opacity:0,
        x:100,
        skewX:40
    },{
        opacity:1,
        x:0,
        skewX:0,
        scrollTrigger: para_animate
    })
})

gsap.utils.toArray('.service_animate').forEach(service_animate => {
    gsap.fromTo(service_animate, {
        opacity:0,
        y:50,
    }, {
        opacity:1,
        y:0,
        duration:0.8,
        scrollTrigger:service_animate,
    })
})