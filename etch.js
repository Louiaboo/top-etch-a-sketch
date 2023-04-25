let slider = document.getElementById("myRange");
let sliderValue = document.querySelector(".sliderValue");

slider.oninput = function() {
    sliderValue.innerHTML = `${slider.value} x ${slider.value}`;
    changeDimensions(slider.value);
}

const canvas = document.querySelector(".canvas");
let color = "black"; // default solid color
let mode = "solid"; // default mode

function changeDimensions(size) {
    canvas.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    canvas.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    while (canvas.firstChild) {
        canvas.removeChild(canvas.lastChild);
    }
    for (let i = 0; i < size * size; i++) {
        let pixel = document.createElement("div");
        pixel.classList.add("pixel");
        pixel.addEventListener("mouseover", changeColor);
        canvas.appendChild(pixel);
    }
}

function changeColor() {
    if (mode === "solid") {
        this.style.backgroundColor = color;
    }
    else if (mode === "rainbow") {
        let x=Math.round(0xffffff * Math.random()).toString(16);
        let y=(6-x.length);
        let z="000000";
        let z1 = z.substring(0,y);
        let randomColor= "#" + z1 + x;
        console.log(randomColor);
        this.style.backgroundColor = randomColor;
    }
    else if (mode === "shade") {

    }
    else if (mode === "eraser") {
        this.style.backgroundColor = "white";
    }
}

const solid = document.querySelector(".solid");
solid.addEventListener("click", () => {
    mode = "solid";
})

const rainbow = document.querySelector(".rainbow");
rainbow.addEventListener("click", () => {
    mode = "rainbow";
})

const eraser = document.querySelector(".eraser");
eraser.addEventListener("click", () => {
    mode = "eraser";
})

window.onload = () => {
    changeDimensions(16); // 16 is default size
}