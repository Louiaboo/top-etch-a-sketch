let slider = document.getElementById("myRange");
let sliderValue = document.querySelector(".sliderValue");

slider.oninput = function() {
    sliderValue.innerHTML = `${slider.value} x ${slider.value}`;
    changeDimensions(slider.value ** 2);
}

const canvas = document.querySelector(".canvas");
const defaultSize = 16;

function changeDimensions(size) {
    while (canvas.firstChild) {
        canvas.removeChild(canvas.lastChild);
    }
    for (let i = 0; i < size; i++) {
        let pixel = document.createElement("div");
        canvas.appendChild(pixel);
        console.log(i);
    }
}


window.onload = () => {
    changeDimensions(defaultSize ** 2);
}