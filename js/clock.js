const clock = document.querySelector(".clock");

const setCurrentTime = () => {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");

  clock.innerText = `${hours}:${minutes}`;
};

setCurrentTime();
setInterval(setCurrentTime, 1000);
