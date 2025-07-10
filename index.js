//landing
const landingPage = document.getElementsByClassName('Landing');
const startbutton = document.getElementById('start-but');
//select
const AreaSelect = document.getElementsByClassName('Area-choose');
const circleChoose = document.querySelector('.shapes.circle');
const rectangleChoose = document.querySelector('.shapes.rectangle');
const triangleChoose = document.querySelector('.shapes.triangle');
//circle
const circleArea = document.getElementsByClassName('Area-Circle');
const circleInput = document.getElementById('radius');
const circleResult = document.getElementsByClassName('result-circle');
//rectangle
const rectangleArea = document.getElementsByClassName('Area-Rectangle');
const rectangleLength = document.getElementById('length');
const rectangleWidth = document.getElementById('width');
const rectangleResult = document.getElementsByClassName('result-rectangle');
//triangle
const triangleArea = document.getElementsByClassName('Area-Triangle');
const triangleBase = document.getElementById('base');
const triangleHeight = document.getElementById('height');
const triangleResult = document.getElementsByClassName('result-triangle');
//back buttons
const backButtons = document.getElementsByClassName('back-button');

// Event Listeners
for (let i = 0; i < backButtons.length; i++) {
    backButtons[i].addEventListener("click", () => {
        circleArea[0].classList.remove('active');
        rectangleArea[0].classList.remove('active');
        triangleArea[0].classList.remove('active');
        AreaSelect[0].classList.add('active');
    });
}

startbutton.addEventListener("click", () => {
    landingPage[0].classList.remove('active');
    AreaSelect[0].classList.add('active');
});

circleChoose.addEventListener("click", () => {
    AreaSelect[0].classList.remove('active');
    circleArea[0].classList.add('active');
    rectangleArea[0].classList.remove('active');
    triangleArea[0].classList.remove('active');
});

rectangleChoose.addEventListener("click", () => {
    AreaSelect[0].classList.remove('active');
    rectangleArea[0].classList.add('active');
    circleArea[0].classList.remove('active');
    triangleArea[0].classList.remove('active');
});

triangleChoose.addEventListener("click", () => {
    AreaSelect[0].classList.remove('active');
    triangleArea[0].classList.add('active');   
    circleArea[0].classList.remove('active');
    rectangleArea[0].classList.remove('active');
});

circleInput.addEventListener("input", () => {
    const radius = parseFloat(circleInput.value);
    if (!isNaN(radius)) {
        const area = Math.PI * radius * radius;
        circleResult[0].innerHTML = `Area: ${area.toFixed(2)} cm²`;
    } else {
        circleResult[0].innerHTML = "Area: ";
    }
});

rectangleWidth.addEventListener("input", () => {
    const length = parseFloat(rectangleLength.value);
    const width = parseFloat(rectangleWidth.value);
    if (!isNaN(length) && !isNaN(width)) {
        const area = length * width;
        rectangleResult[0].innerHTML = `Area: ${area.toFixed(2)} cm²`;
    } else {
        rectangleResult[0].innerHTML = "Area: ";
    }
});

triangleHeight.addEventListener("input", () => {
    const base = parseFloat(triangleBase.value);
    const height = parseFloat(triangleHeight.value);
    if (!isNaN(base) && !isNaN(height)) {
        const area = 0.5 * base * height;   
        triangleResult[0].innerHTML = `Area: ${area.toFixed(2)} cm²`;
    } else {
        triangleResult[0].innerHTML = "Area: ";
    }
});
