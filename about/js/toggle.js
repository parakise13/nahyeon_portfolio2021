const menuBtn = document.querySelector(".menuBtn");
const menu = document.querySelector(".menu");
const innerHeader = document.querySelector(".innerHeader");
const mouse2 = document.querySelector(".mouse");
const visual = document.querySelector(".visual");
const skills = document.querySelector(".skills");
const ncs = document.querySelector(".ncs");
const ncsList = document.querySelector(".ncsList");
const footer = document.querySelector("footer");

function handleClick() {
  menuBtn.classList.toggle("active");
  menu.classList.toggle("active");
  innerHeader.classList.toggle("active");
  mouse2.classList.toggle("active");
  visual.classList.toggle("active");
  skills.classList.toggle("active");
  ncs.classList.toggle("active");
  ncsList.classList.toggle("active");
  footer.classList.toggle("active");
}

function init() {
  menuBtn.addEventListener("click", handleClick);
}

init();

// a 태그 preventDefault
// const a = document.querySelectorAll("a");
// for (let i = 0; i < a.length; i++) {
//   a[i].addEventListener("click", (event) => {
//     event.preventDefault();
//   });
// }
