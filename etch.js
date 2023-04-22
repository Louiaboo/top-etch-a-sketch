let slider = document.getElementById("myRange");
let sliderValue = document.querySelector(".sliderValue");

slider.oninput = function() {
    sliderValue.innerHTML = `${slider.value} x ${slider.value}`;
    changeDimensions(slider.value);
}

const canvas = document.querySelector(".canvas");
const defaultSize = 16;

function changeDimensions(size) {
    canvas.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    canvas.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    while (canvas.firstChild) {
        canvas.removeChild(canvas.lastChild);
    }
    for (let i = 0; i < size * size; i++) {
        let pixel = document.createElement("div");
        canvas.appendChild(pixel);
        console.log(i);
    }
}


window.onload = () => {
    changeDimensions(defaultSize);
}