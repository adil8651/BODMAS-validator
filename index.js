function isBoadmas(eq) {
  let br = "()";
  let op = "+-/*";

  let eqa = eq.split("");
  let bra = br.split("");
  let opa = op.split("");

  let countOp = 0;
  let countBr = 0;
  let str = 0;
  let hop = 0;
  let brf = 0;

  for (let e of eqa) {
    if (!opa.includes(e) && countOp > 0 && countOp < 2) {
      countOp--;
    } else if (opa.includes(e) && hop === 0) {
      countOp++;
    }

    if (["*", "/"].includes(e) && hop <= 1 && brf === 0 && eqa.indexOf(e) > 0) {
      hop++;
    } else if (!["*", "/"].includes(e) && hop > 0) {
      hop--;
    }

    if (e === bra[0] && bra.includes(e)) {
      countBr++;
      brf++;
    } else if (e === bra[1] && bra.includes(e)) {
      countBr--;
    }

    if (countOp > 0 && bra.includes(e)) {
      str++;
    } else if (str > 0 && !bra.includes(e)) {
      str--;
    } else if (!bra.includes(e) && brf > 0) {
      brf--;
    }

    if (countBr > 0 && str > 0) {
      countOp++;
    }

    console.log(hop, str, brf);
  }

  if (countOp > 0 || countBr > 0) {
    return false;
  } else {
    return true;
  }
}
document.addEventListener("DOMContentLoaded", () => {
  const input = document.querySelector("input[type='text']");
  const button = document.querySelector("button");
  const result = document.querySelector("pre");

  button.addEventListener("click", () => {
    const eq = input.value;
    result.textContent = isBoadmas(eq);
  });
});
let eq = "-a+(-b-c)+(a-b(b+c))";
console.log(isBoadmas(eq));
