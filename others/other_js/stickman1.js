let play=document.querySelector('.play')
let pause=document.querySelector('.pause')
let restart=document.querySelector('.restart')
var animation = gsap.timeline({
    defaults:{
        duration:0
    }
})

animation.set('.starting', {
    display:'flex'
})
.to('.three',{//!------------------------- starting part starts here ----------------------------------
    display:'block',
    opacity:0,
})
.to('.three',{
    opacity:1,
    delay:1,
    duration:1,
})
.set('.three',{display:'none'})
.fromTo('.two',{
    display:'block',
    opacity:'0'
},{
    opacity:1,
    duration:1
})
.set('.two',{display:'none'})
.fromTo('.one',{
    display:'block',
    opacity:0
},{
    opacity:1,
    duration:1
})
.set('.one',{display:'none'})
.set('#time',{display:'none'})
.set('#name',{display:'block'})
.fromTo('.ep',{
    display:'block',
    opacity:0,
    y:20
},{
    opacity:1,
    y:0,
    duration:1
})
.set('.ep',{display:'none'})
.fromTo('.ep_name',{
    display:'block',
    opacity:0,
    y:20
},{
    opacity:1,
    y:0,
    duration:1
})
.set('.ep_name',{display:'none'})
.set('.starting',{opacity:0})
//! ---------------------------animated part starts here-----------------------------
.set('.animation',{display:'flex'})
.fromTo('.dot',{
    display:'block',
    opacity:0
},{
    delay:2,
    opacity:1,
    duration:1,
    repeat:-1
})
.set('.stickman',{y:'-120svh',display:'block'})
.to('.hole',{
    width:'199px',
    duration:1,
    delay:2
})
.to('.stickman',{
    y:0,
    duration:1
})
.to('.hole',{
    duration:1,
    width:'0px'
})
.set('.hole',{
    alignSelf:'flex-end',
    marginBottom:'-1.5vh',
    marginTop:0
})
.set('.hand_left',{opacity:1,rotate:'140deg'})
.set('.hand_right',{opacity:1,rotate:'-140deg'})
.set('.hands',{y:50})
.set('.hand_left',{opacity:1})
.set('.hand_right',{opacity:1})
// !------------------------- talking part starts here-----------------------------
.set('.sen_1',{display:'block',opacity:0})
.to('.sen_1',{
    opacity:1,
    duration:2
})
.set('.sen_1',{display:'none'})
.set('.sen_2',{display:'block',opacity:0})
.to('.sen_2',{
    opacity:1,
    duration:2
})
.set('.sen_2',{display:'none'})
.set('.sen_3',{display:'block',opacity:0})
.to('.sen_3',{
    opacity:1,
    duration:3
})
.set('.sen_3',{display:'none'})
.set('.sen_4',{display:'block',opacity:0})
.to('.sen_4',{
    opacity:1,
    duration:3
})
.set('.sen_4',{display:'none'})
.set('.sen_5',{display:'block',opacity:0})
.to('.sen_5',{
    opacity:1,
    duration:3
})
.set('.sen_5',{display:'none'})
.set('.sen_6',{display:'block',opacity:0})
.to('.sen_6',{
    opacity:1,
    duration:3
})
// !---------------------------- ball part starts here-----------------------------
.set('#ball',{display:'flex',y:-100})
.set('.ball',{y:-1000})
.to('#ball',{y:0,duration:1})
.to('.ball',{
    rotate:'1000deg',
    y:0,
    duration:2,
    ease: "bounce.out"
})
.to('.ball',{rotate:'180deg',x:-80,duration:1})
.set('.sen_6',{display:'none'})
.set('.sen_7',{display:'block',opacity:0})
.to('.sen_7',{
    opacity:1,
    duration:3
})
.set('.sen_7',{display:'none'})
.set('.sen_8',{display:'block',opacity:0})
.to('.sen_8',{
    opacity:1,
    duration:3
})
.set('.block',{display:'flex',x:'250px'})
.to('.block',{x:0,duration:2})
.set('.sen_8',{display:'none'})
.set('.sen_9',{display:'block',opacity:0})
.to('.sen_9',{
    delay:1,
    opacity:1,
    duration:3
})
.set('.sen_9',{display:'none'})
.set('.sen_10',{display:'block',opacity:0})
.to('.sen_10',{
    opacity:1,
    duration:3
})
.set('.feet_right',{
    delay:2,
    rotate:'10deg',
    y:-30,
    x:20
})
.set('.ball',{
    y:-20
})
.to('.ball',{y:-300,duration:1.2,ease: "power1.out"})
.set('.feet_right',{
    // delay:1,
    rotate:'60deg',
    y:0,
    x:0
})
.to('.ball',{y:-230,duration:1,ease: "power1.in"})
.to('.ball',{
    left: '80vw',
    y:0,
    duration:2,
    rotate:'360deg',
    ease: "power1.out"
})
.set('.ball',{display:'none'})
.set('.sen_10',{display:'none'})
.set('.sen_11',{display:'block',opacity:0})
.to('.sen_11',{
    delay:1,
    opacity:1,
    duration:3
})
.set('.talking',{display:'none'})
.to('.hole',{
        width:'199px',
        duration:1
})
.set('.hand_left',{opacity:1,rotate:'40deg'})
.set('.hand_right',{opacity:1,rotate:'-40deg'})
.set('.hands',{y:0})
.to('.stickman',{
    y:'100vh',
    duration:2,
    else:'power.in'
})
.set('.stickman',{height:'0px'})
.to('.hole',{
    width:'0px',
    duration:1
})
.to('.dot',{
    delay:3,
    display:'none'
})
.set('.starting',{opacity:1,y:'-90vh'})
.to('.starting',{
    y:0,
    duration:0.5
})
.set('.ep_continued',{display:'block',opacity:0,y:10})
.to('.animation',{opacity:0,duration:1})
.to('.ep_continued',{duration:1,opacity:1,y:0})













play.addEventListener('click', ()=> animation.play())
pause.addEventListener('click', ()=> animation.pause())
restart.addEventListener('click', ()=> animation.restart())