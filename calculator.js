const display = document.querySelector("input");
const buttons = document.querySelectorAll("button");
const specialCharacters = ["%", "/", "*", "+", "-", "="];

let output = "";

const calculate = (btnValue) => {
  try {
    if (btnValue === "=" && output !== "") {
      output = eval(output.replace("%", "/100"));
    } else if (btnValue === "AC") {
      output = "";
    } else if (btnValue === "Del") {
      output = output.toString().slice(0, -1);
    } else {
      if (output === "" && specialCharacters.includes(btnValue)) return;
      output += btnValue;
    }

    display.value = output;
    console.log(output);
  } catch (error) {
    console.error("Error:", error.message);
    display.value = "Syntax Error";
  }
};


const handleKeyboardInput = (event) => {
  const key = event.key;
  

  if (buttons.some((button) => button.dataset.value === key)) {
    const button = Array.from(buttons).find(
      (btn) => btn.dataset.value === key
    );
    button.click();
  }
};

document.addEventListener("keydown", handleKeyboardInput);

buttons.forEach((button) => {
  button.addEventListener("click", (e) => calculate(e.target.dataset.value));
});

