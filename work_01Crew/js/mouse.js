// const mouse = document.querySelector(".mouse");
// let mouseX = 0; // 마우스 좌표
// let mouseY = 0;
// let currentX = 0; // 커서를 따라다니는 요소의 좌표
// let currentY = 0;
// let speed = 0.1;

const mouse = document.querySelector(".mouse");
document.addEventListener("mousemove", (e) => {
  mouse.style.left = e.pageX + "px";
  mouse.style.top = e.pageY + "px";
});

// document.addEventListener("mousemove", (event) => {
//   mouseX = event.clientX;
//   mouseY = event.clientY;
//   mouse.style.left = mouseX + "px";
//   mouse.style.top = mouseY + "px";
// });
