const body = document.body;
const header = document.querySelector("header");
const scrollUp = "scroll-up";
const scrollDown = "scroll-down";
let lastScroll = 0;

window.addEventListener("scroll", () => {
    const currentScroll = window.pageYOffset;
    if (currentScroll <= 0) {
        body.classList.remove(scrollUp);
        return;
    }

    if (currentScroll > lastScroll && !body.classList.contains(scrollDown)) {
        // down
        body.classList.remove(scrollUp);
        body.classList.add(scrollDown);
    } else if (
        currentScroll < lastScroll &&
        body.classList.contains(scrollDown)
    ) {
        // up
        body.classList.remove(scrollDown);
        body.classList.add(scrollUp);
    }
    lastScroll = currentScroll;
});

const toggleMenu = document.querySelector(".toggleMenu");
const toggleBtn = document.querySelector(".toggleMenu .btn");
const btn01 = document.querySelector(".side .btn01");

function handleToggle() {
    toggleMenu.classList.add("active");
    toggleBtn.classList.add("active");
}

function handleRemove() {
    toggleMenu.classList.remove("active");
    toggleBtn.classList.remove("active");
}

btn01.addEventListener("click", handleToggle);
toggleBtn.addEventListener("click", handleRemove);

const familysiteBtn = document.querySelector("#familysiteBtn");
const agentmenu = document.querySelector("#agentmenu");

familysiteBtn.addEventListener("click", () => {
    agentmenu.classList.toggle("drop");
});
