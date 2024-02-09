let user_input = document.querySelector(".calculator_screen");
let buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    console.log(e.target.textContent);
    if (e.target.textContent === "C") {
      user_input.value = "";
    } else if (e.target.textContent === "DEL") {
      user_input.value = user_input.value.slice(0, -1);
    } else if (e.target.textContent === "=") {
      user_input.value = eval(user_input.value);
    } else {
      user_input.value += getSymbol(e.target.textContent);
    }
    user_input.scrollLeft = user_input.scrollWidth;
  });
});

function getSymbol(text) {
  switch (text) {
    case "×":
      return "*";
    case "÷":
      return "/";
    case "−":
      return "-";
    default:
      return text;
  }
}
