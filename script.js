// Variables and Constants 
const input = document.getElementById("box");
const answer = document.getElementById("answer");
const selectBox1 = document.getElementById("selectbox1");
const selectBox2 = document.getElementById("selectbox2");
const convert = document.getElementById("convert");
const reset = document.getElementById("reset");
const HexInput = document.getElementById("Hexbox");
const alertPlaceholder = document.getElementById('liveAlertPlaceholder');
const wrapper = document.createElement('div');
let result;
function isBinary(num) {
  while (num > 0) {
    if (num % 10 !== 0 && num % 10 !== 1) {
      return false;}num = Math.floor(num / 10);}
  return true;
}function isHexadecimal(str) {
  // Regular expression to match a valid hexadecimal string
  let hexRegex = /^[0-9A-Fa-f]+$/;
  return hexRegex.test(str);
}
function binaryToDecimal(binary) {
  let decimal = 0;
  let base = 1;
  while (binary > 0) {
    decimal += (binary % 10) * base;
    binary = Math.floor(binary / 10);
    base *= 2;
  }
  return decimal;
}
function binaryToHex(binary) {
  const decimal = parseInt(binary, 2);
  const hex = decimal.toString(16);
  return hex;
}
function decimalToOctal(decimal) {
  let octal = "";
  while (decimal > 0) {
    octal = (decimal % 8) + octal;
    decimal = Math.floor(decimal / 8);
  }
  return octal;
}
function decimalToHex(decimal) {
  const hex = decimal.toString(16);
  return hex;
}
function octalToBinary(octal) {
  return parseInt(octal, 8).toString(2);

}
const isOctal = (c) => {
  let a = c.toString();
  let b = Array.from(a);
  for (let i = 0; i < b.length; i++) {
    if (b[i] >= 8) {
      appendAlert(`${c} Is Not A Octal Number`, 'danger', 'red');
      return true;
    }


  }
}
function octalToDecimal(octal) {
  return parseInt(octal, 8);

}
function octalToHex(octal) {
  const decimal = parseInt(octal, 8);
  const hex = decimal.toString(16);
  return hex;
}
function hexToBinary(hex) {
  let decimal = parseInt(hex, 16);
  let binary = decimal.toString(2);
  while (binary.length < hex.length * 4) {
    binary = "0" + binary;
  }
  return binary;
}
function hexToDec(hex) {
  return parseInt(hex, 16);
}
function hexToOct(hex) {
  const decimal = parseInt(hex, 16);
  const octal = decimal.toString(8);
  return octal;
}
const appendAlert = (message, type, bColor, link) => {
  alertPlaceholder.classList.remove('h-alert');
  setTimeout(() => {
    alertPlaceholder.classList.add('h-alert');
  }, 2500);
  input.style.border = `1px solid ${bColor}`;
  HexInput.style.border = `1px solid ${bColor}`;
  wrapper.innerHTML = [
    `<div class="alert alert-${type} alert-dismissible" role="alert">`,
    `   <div>${message}</div>`,
    '</div>'
  ].join('');
  alertPlaceholder.append(wrapper);
}
selectBox1.addEventListener("change", () => {
  const unit1 = selectBox1.value;
  if (unit1 === "4") {
    HexInput.classList.remove("H-hide");
    input.classList.add("I-hide");
  } else {
    HexInput.classList.add("H-hide");
    input.classList.remove("I-hide");
  }
  {
    convert.addEventListener("click", () => {
      const unit1 = selectBox1.value;
      const unit2 = selectBox2.value;
      const inputValue = parseFloat(input.value);
      const hexValue = HexInput.value;
      if ((unit1 == 0 && unit2 == 0) || (unit1 > 0 && unit2 == 0) || (unit1 == 0 && unit2 >= 0)) {appendAlert('Please Select A Type', 'warning', 'coral');
        result = 'Output-Box'; }
      const done = () => {
        input.style.border = `1px solid lime`;
        HexInput.style.border = '1px solid lime';
      }
      const binaryAlert = () => {
        appendAlert(`${inputValue} Is Not A Binary Number`, 'danger', 'red');
        return result = 'Output-Box';
      }
      const hexaDecimalError = () => {
        appendAlert(`${hexValue} Is Not A  Hexa-Decimal Number`, 'danger', 'red');
        return result = 'Output-Box';
      }
      const hexaDecimalWarn = () => {
        appendAlert(`Enter A Hexa-Decimal Number`, 'warning', 'coral');
        return result = 'Output-Box';
      }
      if (input.value.length > 16 || hexValue.length > 10) {
        appendAlert('Value Length Is Too High', 'danger', 'red');
        result = 'Output-Box';
      }
      else {
        if (unit1 != 4 && unit2 > 0) {
          if (isNaN(inputValue)) {
            appendAlert('Please Enter A Number', 'warning', 'coral');
            return result = 'Output-Box';
          }
          else {
            done();
          }
        } 
        if (unit1 === "1" && unit2 === "1") {
          if (isBinary(inputValue)) {
            result = inputValue;
          } else {
            binaryAlert();
          }
        } else if (unit1 === "1" && unit2 === "2") {
          if (isBinary(inputValue)) {
            result = binaryToDecimal(inputValue);
          } else {
            binaryAlert();
          }
        } else if (unit1 === "1" && unit2 === "3") {
          if (isBinary(inputValue)) {
            result = decimalToOctal(parseInt(inputValue, 2));
          } else {
            binaryAlert();
          }
        } else if (unit1 === "1" && unit2 === "4") {
          if (isBinary(inputValue)) {
            result = binaryToHex(inputValue);
          } else {
            binaryAlert(); } }
        else if (unit1 === "2" && unit2 === "1") {
          result = inputValue.toString(2).padStart(4, "0");
        } else if (unit1 === "2" && unit2 === "2") {
          result = inputValue;
        } else if (unit1 === "2" && unit2 === "3") {
          result = decimalToOctal(inputValue);
        } else if (unit1 === "2" && unit2 === "4") {
          result = decimalToHex(inputValue);
        } else if (unit1 === "3" && unit2 === "3") {
          let a = isOctal(inputValue);
          if (a == true) {
            result = 'Output-Box';
          } else {
            result = inputValue;
          }
        } else if (unit1 === "3" && unit2 === "1") {
          let a = isOctal(inputValue);
          if (a == true) {
            result = 'Output-Box';
          } else {
            result = octalToBinary(inputValue);
          } } else if (unit1 === "3" && unit2 === "2") {
          let a = isOctal(inputValue);
          if (a == true) {
            result = 'Output-Box';
          } else {
            result = octalToDecimal(inputValue);  }
        } else if (unit1 === "3" && unit2 === "4") {

          let a = isOctal(inputValue);
          if (a == true) {
            result = 'Output-Box';
          } else {
            result = octalToHex(inputValue);
          }

        }
        else if (unit1 === "4" && unit2 === "1") {
          console.log(hexValue);
          if (isHexadecimal(hexValue)) {
            done();
            result = hexToBinary(hexValue);
          } else if (hexValue <= 0) {
            hexaDecimalWarn();
          }
          else {
            hexaDecimalError();
          }
        }
        else if (unit1 === "4" && unit2 === "2") {
          if (isHexadecimal(hexValue)) {
            done();
            result = hexToDec(hexValue);
          } else if (hexValue <= 0) {
            hexaDecimalWarn();
          }
          else {
            hexaDecimalError();
          }
        }

        else if (unit1 === "4" && unit2 === "3") {
          if (isHexadecimal(hexValue)) {
            result = hexToOct(hexValue);
            done();
          } else if (hexValue <= 0) {
            hexaDecimalWarn();
          } else {
            hexaDecimalError();
          }
        }
        else if (unit1 === "4" && unit2 === "4") {
          if (isHexadecimal(hexValue)) {
            done();
            result = hexValue;
          } else if (hexValue <= 0) {
            hexaDecimalWarn();
          } else {
            hexaDecimalError();
          }
        }
      }
      answer.innerHTML = result;

    });

  }

})



convert.addEventListener("click", () => {
  if ((selectBox1.value == 0 || selectBox2.value == 0) || (selectBox1.value > 0 && selectBox2.value == 0) || (selectBox1.value == 0 && selectBox2.value >= 0)) {
    appendAlert('Please Select A Type', 'warning', 'coral');
    result = 'Output-Box';

  }
})

reset.addEventListener("click", () => {
  location.reload();
});
