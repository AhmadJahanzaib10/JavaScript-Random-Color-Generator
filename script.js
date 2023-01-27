const color = document.querySelector(".color");
const button = document.querySelector(".btn");
const body = document.body;

function randomColorgen(){
    const red = Math.floor(Math.random() * 255);
    const green = Math.floor(Math.random() * 255);
    const blue = Math.floor(Math.random() * 255);
    let opacity = Math.random();
    const str = "" + opacity;
    opacity = `${str[0]}${str[1]}${str[2]}${str[3]}`;
    const finalColor = `rgba(${red},${green},${blue},${opacity})`;
    return finalColor;
}

button.addEventListener("click", ()=>{
  let randomColor = randomColorgen();
  body.style.background = randomColor;
  color.textContent = randomColor;
});