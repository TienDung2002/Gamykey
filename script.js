//AUTO PLAY SLIDES
const slider = document.querySelector(".slider-wrap");
const nextBTN = document.querySelector(".slide--navigation-right");
const prevBTN = document.querySelector(".slide--navigation-left");
const slide = document.querySelectorAll(".slide");
const slideIcon = document.querySelectorAll(".slide--navigation-visibility-icon");
const numberOfSlide = slide.length;
var slideNumber = 0;

//img slide slider next button
nextBTN.addEventListener("click", () => {
    slide.forEach((slide) => {
        slide.classList.remove("active");
    })
    slideIcon.forEach((slideIcon) => {
        slideIcon.classList.remove("active");
    })
    slideNumber++;

    if (slideNumber  > (numberOfSlide - 1)){
        slideNumber = 0;
    }

    slide[slideNumber].classList.add("active");
    slideIcon[slideNumber].classList.add("active");
});

// img slide slider prev button
prevBTN.addEventListener("click", () => {
    slide.forEach((slide) => {
        slide.classList.remove("active");
    })
    slideIcon.forEach((slideIcon) => {
        slideIcon.classList.remove("active");
    })
    slideNumber--;

    if (slideNumber  < 0){
        slideNumber = numberOfSlide - 1;
    }
    slide[slideNumber].classList.add("active");
    slideIcon[slideNumber].classList.add("active");
});

// slide auto play
var playSlider;
var repeater = () => {
    playSlider = setInterval(function(){
        slide.forEach((slide) => {
        slide.classList.remove("active");
    })
    slideIcon.forEach((slideIcon) => {
        slideIcon.classList.remove("active");
    })
    slideNumber++;

    if (slideNumber  > (numberOfSlide - 1)){
        slideNumber = 0;
    }
    slide[slideNumber].classList.add("active");
    slideIcon[slideNumber].classList.add("active");
    }, 4000);
}
repeater();

//stop auto play on mouseover
slider.addEventListener("mouseover", () => {
    clearInterval(playSlider);
});
//start auto play slide again when mouseout
slider.addEventListener("mouseout", () => {
    repeater();
});




 //SCROLL TO TOP
 const toTop = document.querySelector(".btn-scroll-to-top");
 window.addEventListener("scroll", () => {
     if (window.pageYOffset > 450) {
         toTop.classList.add("active");
     }  else {
         toTop.classList.remove("active");
     }
 })




// Đóng mở sidebar menu
const MenuIcon = document.querySelector(".js-menu-btn");
const closeMenu = document.querySelector(".nav__menu-tm-close");
const SideBar = document.querySelector(".nav__menu__tm");
const overLay = document.querySelector(".nav__menu-overlay");

function showSideBar (){
    SideBar.classList.add('active')
}
function hideSideBar (){
    SideBar.classList.remove('active')
}
// Nhấn icon mở sidebar menu
MenuIcon.addEventListener('click', showSideBar)
// Nhấn nút close đóng menu
closeMenu.addEventListener('click', hideSideBar)
// Nhấn overlay tắt menu
overLay.addEventListener('click', hideSideBar)


