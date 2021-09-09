function getDate() {
  const days = document.querySelector("#days");
  const date = new Date();
  const year = String(date.getFullYear());
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  days.innerText = `${year}-${month}-${day}`;
}

function getClock() {
  const clock = document.querySelector("#clock");
  const date = new Date();
  const hour = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const second = String(date.getSeconds()).padStart(2, "0");
  clock.innerText = `${hour}:${minutes}:${second}`;
}

getDate();
getClock();
setInterval(getClock, 1000);
