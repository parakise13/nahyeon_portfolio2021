const menuBtn = document.querySelector(".menuBtn");
const menu = document.querySelector(".menu");
const innerHeader = document.querySelector(".innerHeader");
const mouse2 = document.querySelector(".mouse");
const visual = document.querySelector(".visual");
const overview = document.querySelector(".overview");
const footer = document.querySelector("footer");

const wrap = document.querySelector(".wrap");

function handleClick() {
  menuBtn.classList.toggle("active");
  menu.classList.toggle("active");
  innerHeader.classList.toggle("active");
  visual.classList.toggle("active");
  overview.classList.toggle("active");
  footer.classList.toggle("active");
}

function handleScroll() {
  const currentScroll = window.pageYOffset;

  if (currentScroll <= 700) {
    wrap.classList.remove("active");
  } else {
    wrap.classList.add("active");
  }
}

function init() {
  menuBtn.addEventListener("click", handleClick);
}

function scroll() {
  window.addEventListener("scroll", handleScroll);
}

init();
scroll();

// a 태그 preventDefault
// const a = document.querySelectorAll("a");
// for (let i = 0; i < a.length; i++) {
//   a[i].addEventListener("click", (event) => {
//     event.preventDefault();
//   });
// }
