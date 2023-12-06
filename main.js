// Select the elements
var toggleBtn;
var bigWrapper;
var hamburgerMenu;
var logoImg;
var insta;

function declare() {
    toggleBtn = document.querySelector(".toggle-btn");
    bigWrapper = document.querySelector(".big-wrapper");
    hamburgerMenu = document.querySelector(".hamburger-menu");
    logoImg = document.querySelector(".logo-img");
    insta = document.querySelector("#insta")
}

const main = document.querySelector("main");

declare();

let dark = false;


function toggleAnimation() {
    dark = !dark;
    let clone;
    if (dark) {
        logoImg.setAttribute("src", "./img/logo-dark.png");
        insta.setAttribute("fill", "#A67B5B");
        clone = bigWrapper.cloneNode(true);
        clone.classList.remove("light");
        clone.classList.add("dark");
    } else {
        logoImg.setAttribute("src", "./img/logo-light.png");
        insta.setAttribute("fill", "#4B3621");
        clone = bigWrapper.cloneNode(true);
        clone.classList.remove("dark");
        clone.classList.add("light");
    }
    clone.classList.add("copy");
    main.appendChild(clone);

    document.body.classList.add("stop-scrolling");

    clone.addEventListener("animationend", () => {
        document.body.classList.remove("stop-scrolling");
        bigWrapper.remove();
        clone.classList.remove("copy");
        declare();
        events();
    });
}

function events() {
    toggleBtn.addEventListener("click", toggleAnimation);
    hamburgerMenu.addEventListener("click", () => {
        bigWrapper.classList.toggle("active");
    })
}

events();
