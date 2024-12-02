const backgrounds = [
    'url("erasbg2new2.jpg")',
    'url("erasbackground.jpg")',
    'url("erasbg4.jpg")',
    'url("erasbg3new.jpg")',
    'url("erasbg5.jpg")',
    'url("erasbg6.jpg")',
    'url("erasbg7.jpg")',
    'url("erasbg8.jpg")',
    'url("erasbg10.webp")',
    'url("erasbg11.webp")',
    'url("erasbg12.webp")',
    'url("erasbg14.webp")',
    'url("erasbg15.webp")',
    'url("erasbg16.webp")',
];

const button = document.getElementById("change-button");
const body = document.body;

function changeBackground() {
    const randomImage = backgrounds[Math.floor(Math.random() * backgrounds.length)];
    body.style.backgroundImage = randomImage;
    body.style.backgroundPosition = "center"
}

button.addEventListener("click", changeBackground);

document.getElementById('change-cursor').addEventListener('click', () => {
    const cursorImage = 'cat3.png'; 
    console.log("button is working!!!!")
    console.log(cursorImage)
      document.body.style.cursor = `url(${cursorImage}), auto`;
  });
  
 