const backgrounds = [
    'url("erasbg2new2.jpg")',
    'url("erasbackground.jpg")',
    'url("erasbg4.jpg")',
    'url("erasbg3new.jpg")',
    'url("erasbg5.jpg")',
    'url("erasbg6.jpg")',
    'url("erasbg7.jpg")',
    'url("erasbg8.jpg")',
];

const button = document.getElementById("change-button");
const body = document.body;

function changeBackground() {
    const randomImage = backgrounds[Math.floor(Math.random() * backgrounds.length)];
    body.style.backgroundImage = randomImage;
    body.style.backgroundPosition = "center"
}

button.addEventListener("click", changeBackground);

