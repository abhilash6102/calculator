let value = document.querySelector(".value");
let subvalue = document.querySelector(".sub-value");
let result = "";
function appendcharacter(character) {
  let currentText = value.innerHTML;

  if ((character === "0" || character === "00") && currentText === "") {
    return;
  }

  if (character === ".") {
    let segments = currentText.split(/[\/*\-+]/);
    let currentSegment = segments[segments.length - 1];
    if (currentSegment.includes(".")) {
      return;
    }
  }

  if ("/*-+".includes(character)) {
    if ("/*-+".includes(currentText.slice(-1))) {
      currentText = currentText.slice(0, -1);
    }
  }

  value.textContent = currentText + character;
  value.scrollLeft = value.scrollWidth;
}

function del() {
  let currentText1 = value.textContent;
  if (currentText1.length > 0) {
    currentText1 = currentText1.slice(0, -1);
    value.textContent = currentText1 || "";
    value.scrollLeft = value.scrollWidth;
  } else {
    value.textContent = "";
  }
}

function calculate() {
  let expression = value.textContent;

  expression = expression.replace(/([+\-*/]){2,}/g, "$1");

  if ("/*-+".includes(expression.slice(-1))) {
    expression = expression.slice(0, -1);
  }
  if ("/*-+".includes(expression.slice(-1)) && expression.length === 0) {
    expression = expression.slice(0, -1);
    value.textContent = "";
  }
  try {
    if (expression !== "") {
      result = eval(value.innerHTML);
      subvalue.innerHTML = result;
    }
  } catch (e) {
    subvalue.innerHTML = "error";
  }
}

function remove() {
  value.textContent = "";
  subvalue.textContent = "";
}
