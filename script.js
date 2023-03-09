const body = document.querySelector("body");
const h3 = document.querySelector("h3");

const addColor = () => {
  const red = Math.floor(Math.random() * 255);
  const green = Math.floor(Math.random() * 255);
  const blue = Math.floor(Math.random() * 255);

  const color = `rgb(${red}, ${green}, ${blue})`;

  h3.innerHTML = color;
  body.style.background = color;
};

setInterval(() => {
  addColor();
}, 1000);
