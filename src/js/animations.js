let len = 0;
let speed = 10;
let delay = 0;

const pathss = document.querySelectorAll('.path_line');

pathss.forEach(element => {
    let elementLen = element.getTotalLength();
    len += elementLen;
})

pathss.forEach(element => {
    let elementLen = element.getTotalLength();
    let duration = elementLen / len * speed;

    element.style.animationDuration = `${duration}s`;
    element.style.animationDelay = `${delay}s`;

    element.setAttribute('stroke-dasharray', elementLen);
    element.setAttribute('stroke-dashoffset', elementLen);
    delay += duration + 0.2;
})

let len_sec = 0;
let speed_sec = 8;
let delay_sec = 0;

const paths = document.querySelectorAll('.path_line_sec');

paths.forEach(element => {
    let elementLen = element.getTotalLength();
    len_sec += elementLen;
})

paths.forEach(element => {
    let elementLen = element.getTotalLength();
    let duration = elementLen / len_sec * speed_sec;

    element.style.animationDuration = `${duration}s`;
    element.style.animationDelay = `${delay_sec}s`;

    element.setAttribute('stroke-dasharray', elementLen);
    element.setAttribute('stroke-dashoffset', elementLen);
    delay_sec += duration + 0.2;
})

let len_third = 0;
let speed_third  = 8;
let delay_third  = 0;

const paths_third = document.querySelectorAll('.path_line_third');

paths_third.forEach(element => {
    let elementLen = element.getTotalLength();
    len_third += elementLen;
})

paths_third.forEach(element => {
    let elementLen = element.getTotalLength();
    let duration = elementLen / len_third * speed_third;

    element.style.animationDuration = `${duration}s`;
    element.style.animationDelay = `${delay_third}s`;

    element.setAttribute('stroke-dasharray', elementLen);
    element.setAttribute('stroke-dashoffset', elementLen);
    delay_third += duration + 0.2;
})

let len_fourth = 0;
let speed_fourth = 6;
let delay_fourth = 0;

const paths_fourth  = document.querySelectorAll('.path_line_fourth');

paths_fourth.forEach(element => {
    let elementLen = element.getTotalLength();
    len_fourth += elementLen;
})

paths_fourth.forEach(element => {
    let elementLen = element.getTotalLength();
    let duration = elementLen / len_fourth * speed_fourth;

    element.style.animationDuration = `${duration}s`;
    element.style.animationDelay = `${delay_fourth}s`;

    element.setAttribute('stroke-dasharray', elementLen);
    element.setAttribute('stroke-dashoffset', elementLen);
    delay_fourth += duration + 0.2;
})

const imageWindmill = document.querySelector('.image__windmill')

if(imageWindmill){
    let deg = 0;
    imageWindmill.style.transition = `all .2s linear`;
    setInterval(()=>{
        imageWindmill.style.transform = `translateX(5%) rotate(${deg}deg)`;
        deg +=15;
    },200) 
}