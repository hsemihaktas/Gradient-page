const input1 = document.getElementById("input1");
const input2 = document.getElementById("input2");
const body = document.querySelector(".body");

input1.addEventListener("input", function () {
    let firstColor = input1.value;
    body.style.background = `linear-gradient(90deg, ${firstColor}, ${input2.value})`;
    updateColorMessage();
});
  
input2.addEventListener("input", function () {
    let secondColor = input2.value;
    body.style.background = `linear-gradient(90deg, ${input1.value}, ${secondColor})`;
    updateColorMessage();
});

function updateColorMessage() {
    message.innerText = `background : linear-gradient(90deg, ${input1.value}, ${input2.value})`;
}

updateColorMessage()