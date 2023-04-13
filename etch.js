const container = document.querySelector(".canvas");
let slider = document.getElementById("myRange");
let output = document.getElementById("demo");
let outputb = document.getElementById("size");
outputb.innerHTML = slider.value;
output.innerHTML = slider.value;

slider.oninput = function() {
    output.innerHTML = this.value;
    outputb.innerHTML = this.value;
}

function changeSize(size) {

}