const display = document.querySelector("#display");
const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    let value = e.target.innerText;
    if (value === "C") {
      display.value = "";
    } else if (value === "=") {
      display.value = eval(display.value);
    } else if (value
