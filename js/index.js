
function nav_list_open(){
    document.getElementById('nav-btd-open').style.display="none";
    document.getElementById('nav-btd-close').style.display="inline";
    document.getElementById('nav-mobile').style.display="block";
    document.getElementById('intro').style.display="none";
};
function nav_list_close(){
    document.getElementById('nav-btd-open').style.display="inline";
    document.getElementById('nav-btd-close').style.display="none";
    document.getElementById('nav-mobile').style.display="none";
    document.getElementById('intro').style.display="flex";
};

let dis      = document.querySelector('.dis_main')
let spec     = document.querySelector('.spec_main')
let pre      = document.querySelector('.pre_main')
let dis_btd  = document.querySelector('.dis_btd')  
let pre_btd  = document.querySelector('.pre_btd')
let spec_btd = document.querySelector('.spec_btd')
function description() {
    dis.style.display='block'
    spec.style.display='none'
    pre.style.display='none'
    
    dis_btd.style.backgroundColor='#4767c9'
    spec_btd.style.backgroundColor='white'
    pre_btd.style.backgroundColor='white'
    dis_btd.style.color='white'
    spec_btd.style.color='black'
    pre_btd.style.color='black'
}
function specification() {
    dis.style.display='none'
    spec.style.display='block'
    pre.style.display='none'
    
    dis_btd.style.backgroundColor='white'
    spec_btd.style.backgroundColor='#4767c9'
    pre_btd.style.backgroundColor='white'
    dis_btd.style.color='black'
    spec_btd.style.color='white'
    pre_btd.style.color='black'
}
function preview() {
    dis.style.display='none'
    spec.style.display='none'
    pre.style.display='block'
    
    dis_btd.style.backgroundColor='white'
    spec_btd.style.backgroundColor='white'
    pre_btd.style.backgroundColor='#4767c9'
    dis_btd.style.color='black'
    spec_btd.style.color='black'
    pre_btd.style.color='white'
}
// -----------------------------------------------------------------------------------------------------------------
// ---------------------------------------animated part stats here--------------------------------------------------
// -----------------------------------------------------------------------------------------------------------------

gsap.registerPlugin(ScrollTrigger)
gsap.from('.hello', { opacity: 0, x: 20, delay: 1.8 })
const menu_items = document.querySelector('.navbar-left')
gsap.from(menu_items.children, {
    opacity: 0,
    x: 0,
    duration: 1,
    delay: 1.8,
    stagger: {
        amount: 1
    }
})




gsap.fromTo('.intro',{
    opacity:0,
    scale:0
},{
    delay:1.3,
    opacity:1,
    scale:1
})




gsap.utils.toArray('.heading').forEach(heading => {
    gsap.fromTo(heading, {
        opacity:0,
        scale:0
    },{
        opacity:1,
        scale:1,
        scrollTrigger:heading
    })
})




gsap.utils.toArray('.line').forEach(line=>{
    gsap.fromTo(line,{
        opacity:0,
        width:'0px'
    },{
        delay:0.5,
        opacity:1,
        width:'250px',
        scrollTrigger:line
    })
})





gsap.utils.toArray('.left').forEach(left => {
    gsap.fromTo(left, {
        opacity:0,
        x: -170,
        y:-170
    }, {
        opacity:1,
        x: 0,
        y:0,
        scrollTrigger: left,
    })
})





gsap.utils.toArray('.right').forEach(right => {
    gsap.fromTo(right, {
        opacity:0,
        x: 170,
        y: 170
    }, {
        opacity:1,
        x: 0,
        y:0,    
        scrollTrigger: right,
    })
})

const dsp= document.querySelector('.dis_spec_pre')
gsap.fromTo('.dis_spec_pre',{
    opacity:0,
    y:60
},{
    opacity:1,
    y:0,
    duration:1,
    scrollTrigger:dsp
})
gsap.utils.toArray('.new_heading').forEach(new_heading => {
    gsap.fromTo(new_heading, {
        opacity:0,
        scale:0
    },{
        opacity:1,
        scale:1,
        scrollTrigger:new_heading
    })
})
gsap.utils.toArray('.line1').forEach(line1 => {
    gsap.fromTo(line1,{
        width:0
    },{
        width:'145px',
        delay:0.5,
        duration:0.6,
        scrollTrigger:new_heading
    })
})
gsap.utils.toArray('.line2').forEach(line2 => {
    gsap.fromTo(line2,{
        width:0
    },{
        width:'65px',
        delay:0.5,
        duration:0.6,
        scrollTrigger:new_heading
    })
})
gsap.to('#fimg',{
    backgroundColor:'aliceblue',
    scrollTrigger:new_heading
})

const div_h= document.querySelector('.heading_animate')
gsap.fromTo(div_h,{
    opacity:0,
    x:20
},{
    opacity:1,
    x:0,
    duration:1,
    scrollTrigger:div_h
})
gsap.utils.toArray('.para_animate').forEach(para_animate => {
    gsap.fromTo(para_animate,{
        opacity:0,
        x:40,
        skewX:20
    },{
        opacity:1,
        x:0,
        skewX:0,
        delay:0.5,
        duration:1,
        scrollTrigger:para_animate
    })
})
const line= document.querySelector('.line_para')
gsap.fromTo(line,{
    width:0
},{
    width:'100%',
    duration:1.2,
    delay:1,
    scrollTrigger:line
})
const btd = document.querySelector('.new_go')
gsap.fromTo(btd,{
    opacity:0
},{
    opacity:1,
    duration:1,
    scrollTrigger:btd
})
gsap.utils.toArray('.new_thing').forEach(new_thing => {
    gsap.fromTo(new_thing,{
        opacity:0,
        scale:0
    },{
        opacity:1,
        scale:1,
        duration:1,
        scrollTrigger:new_thing
    })
})
