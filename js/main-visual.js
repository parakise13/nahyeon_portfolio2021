const slide = document.querySelector("#slide");
const imgArray = [
  "img/main-visual01.png",
  "img/main-visual02.png",
  "img/main-visual03.png",
  "img/main-visual04.png",
  "img/main-visual05.png",
  "img/main-visual06.png",
  "img/main-visual07.png",
  "img/main-visual08.png",
  "img/main-visual09.png",
  "img/main-visual10.png",
];
let imgIndex = 0;
let swp;

function changeImg() {
  slide.setAttribute("src", imgArray[imgIndex]);
  imgIndex++;
  if (imgIndex >= imgArray.length) {
    imgIndex = 0;
  }
}

function start() {
  swp = setInterval(changeImg, 200);
}

function stop() {
  clearInterval(swp);
  slide.setAttribute("src", imgArray[0]);
}

if (document.addEventListener) {
  slide.addEventListener("mouseenter", start);
  slide.addEventListener("mouseleave", stop);
} else {
  document.slide.attachEvent("onmouseenter", start);
  document.slide.attachEvent("onmouseleave", stop);
}
