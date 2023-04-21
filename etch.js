let slider = document.getElementById("myRange");
let sliderValue = document.querySelector(".sliderValue");

slider.oninput = function() {
    sliderValue.innerHTML = `${slider.value} x ${slider.value}`;
}

const defaultSize = 16;

function changeDimensions(size) {

}