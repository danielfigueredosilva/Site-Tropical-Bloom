
let radio = document.querySelector('.manual-btn');
let cont = 1;
const chk = document.getElementById('chk');
const slider = document.querySelectorAll('.img-desktop')
const bntPrev = document.getElementById('prev-button')
const btnNext = document.getElementById('next-button')

let currentSlide = 0;



chk.addEventListener('change',() => {
    document.body.classList.toggle("dark-theme")
});

class MobileNavbar {
    constructor(mobileMenu, navList, navLinks) {
        this.mobileMenu = document.querySelector(mobileMenu);
        this.navList = document.querySelector(navList);
        this.navLinks = document.querySelectorAll(navLinks);
        this.activeClass = "active";

        this.handleClick = this.handleClick.bind(this);
    }
    
    animateLinks() {
        this.navLinks.forEach((link, index) => {
            link.style.animation
                ? (link.style.animation = "")
                : (link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`);
        });
    }

    handleClick() {
        this.navList.classList.toggle(this.activeClass);
        this.mobileMenu.classList.toggle(this.activeClass);
        this.animateLinks();
    }
 
    addClickEvent() {
        this.mobileMenu.addEventListener("click", this.handleClick);
    }

    init() {
        if (this.mobileMenu) {
            this.addClickEvent();
        }
        return this;
    }
} 

const mobileNavbar = new MobileNavbar(
    ".mobile-menu",
    ".navigator",
    ".navigator li",
);
mobileNavbar.init();


function hideSlider(){
    slider.forEach(item => item.classList.remove('on'))
}
function showSlider(){
    slider[currentSlide].classList.add('on')
}
function nextSlider(){
    hideSlider()
    if(currentSlide === slider.length -1){
        currentSlide = 0
    }
    else{
        currentSlide++
    }
    showSlider()
}
function prevSlider(){
    hideSlider()
    if(currentSlide === 0){
        currentSlide = slider.length -1
    }
    else{
        currentSlide--
    }
    showSlider()
}

btnNext.addEventListener('click', () => nextSlider())
bntPrev.addEventListener('click', () => prevSlider())
