// $(document).ready(function () {
//     $('.burger').click(function(event) {
//         $('.burger,.menu').toggleClass('active');
//     });
// });

const menuBtn = document.querySelector(".burger");
const menu = document.querySelector(".menu");
let menuOpen = false;
menuBtn.addEventListener("click", () => {
    if(!menuOpen) {
        menuBtn.classList.add("open");
        menu.classList.add("open");
        menuOpen = true;
    } else {
        menuBtn.classList.remove("open");
        menu.classList.remove("open");
        menuOpen = false;
    }
});

// const menuBtn = document.querySelector(".burger");
// const menu = document.querySelector(".menu");
// let menuOpen = false;
// menuBtn.addEventListener("click", () => {
//     if(!menuOpen) {
//         menu.classList.add("open");
//         menuOpen = true;
//     } else {
//         menu.classList.remove("open");
//         menuOpen = false;
//     }
// });







