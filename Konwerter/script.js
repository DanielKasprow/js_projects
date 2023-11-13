const convertBtn = document.querySelector(".conv");
const resetBtn = document.querySelector(".reset");
const changeBtn = document.querySelector(".change");

const number = document.querySelector("#converter");
const result = document.querySelector(".result");

const one = document.querySelector(".one");
const two = document.querySelector(".two");

const convert = () => {
  if (number.value !== '') {
    if (one.textContent === "°C") {
      result.textContent = `${number.value}°C to ${number.value * 1.8 + 32}°F`;
    } else {
      result.textContent = `${number.value}°F to ${
        (number.value - 32) / 1.8
      }°C`;
    }
  }
};

const reset = () => {
  number.value = null;
  result.textContent = null;
};

const change = () => {
  if (one.textContent === "°C") {
    one.textContent = "°F";
    two.textContent = "°C";
  } else {
    two.textContent = "°F";
    one.textContent = "°C";
  }
  reset();
};
convertBtn.addEventListener("click", convert);
resetBtn.addEventListener("click", reset);
changeBtn.addEventListener("click", change);
