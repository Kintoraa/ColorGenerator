const body = document.querySelector("body");
const h3 = document.querySelector("h3");

const addColor = () => {
  let red = Math.floor(Math.random() * 255);
  let green = Math.floor(Math.random() * 255);
  let blue = Math.floor(Math.random() * 255);

  body.style.setProperty("--red", red);
  body.style.setProperty("--green", green);
  body.style.setProperty("--blue", blue);

  h3.innerHTML = `rgb(${red}, ${green}, ${blue})`;
};

setInterval(() => {
  addColor();
}, 1000);
