
let radio = document.querySelector('.manual-btn');
let cont = 1;

document.getElementById('radio1').checked =true;

setInterval(() =>{
    proximaImg()
}, 5000);

function proximaImg(){
    cont++

    if(cont > 3){
        cont = 1;
    }

    document.getElementById('radio'+cont).checked =true;
}
const chk = document.getElementById('chk');

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