// Function to check if a number is binary
function isBinary(num) {
  while (num > 0) {
    if (num % 10 !== 0 && num % 10 !== 1) {
      return false;
    }
    num = Math.floor(num / 10);
  }
  return true;
}
// Function to check if a number is Hexa-Decimal
function isHexadecimal(str) {
  // Regular expression to match a valid hexadecimal string
  let hexRegex = /^[0-9A-Fa-f]+$/;
  return hexRegex.test(str);
}

// Example usage:
console.log(isHexadecimal("1A")); // Output: true
console.log(isHexadecimal("1G")); // Output: false


// Convert Binary Number To Decimal Number
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

// Convert Binary To Hexa-Decimal
function binaryToHex(binary) {
  // Convert binary to decimal
  const decimal = parseInt(binary, 2);
  // Convert decimal to hexadecimal
  const hex = decimal.toString(16);
  // Return hexadecimal value
  return hex;
}

// Convert Decimal Number To Octal Number 
function decimalToOctal(decimal) {
  let octal = "";
  while (decimal > 0) {
    octal = (decimal % 8) + octal;
    decimal = Math.floor(decimal / 8);
  }
  return octal;
}

// Convert Decimal Number To Hexa-Decimal Number 

function decimalToHex(decimal) {
  // Convert decimal to hexadecimal
  const hex = decimal.toString(16);
  // Return hexadecimal value
  return hex;
}


// Octal To Binary 
function octalToBinary(octal) {
  return parseInt(octal, 8).toString(2);

}


const isOctal = (c) => {
  let a = c.toString();
  console.log(typeof a);
  let b = Array.from(a);
  console.log(b);

  for (let i = 0; i < b.length; i++) {
    if (b[i] >= 8) {
      alert(`${c} is Not A Octal Number`);
      return true;

    }

  }
}

// Octal To Decimal 
function octalToDecimal(octal) {
  return parseInt(octal, 8);

}

// Octal To Hexa-Decimal 
function octalToHex(octal) {
  // Convert octal to decimal
  const decimal = parseInt(octal, 8);
  // Convert decimal to hexadecimal
  const hex = decimal.toString(16);
  // Return hexadecimal value
  return hex;
}


// Hexa-Decimal To Binary 
function hexToBinary(hex) {
  // Convert the hexadecimal to a decimal number
  let decimal = parseInt(hex, 16);
  // Convert the decimal to a binary string
  let binary = decimal.toString(2);
  // Add leading zeros to ensure the binary string has 4 bits per hexadecimal digit
  while (binary.length < hex.length * 4) {
    binary = "0" + binary;
  }
  return binary;
}

// Hexa-Decimal To Decimal 
function hexToDec(hex) {
  return parseInt(hex, 16);
}
// Hexa-Decimal To Octal
function hexToOct(hex) {
  // First, convert the hexadecimal number to decimal
  const decimal = parseInt(hex, 16);
  // Then, convert the decimal number to octal
  const octal = decimal.toString(8);
  return octal;
}
const input = document.getElementById("box");
const answer = document.getElementById("answer");
const selectBox1 = document.getElementById("selectbox1");
const selectBox2 = document.getElementById("selectbox2");
const convert = document.getElementById("convert");
const reset = document.getElementById("reset");
const HexInput = document.getElementById("Hexbox");

// Conversion


selectBox1.addEventListener("change", () => {
  const unit1 = selectBox1.value;
  if (unit1 === "4") {
    HexInput.classList.remove("H-hide");
    input.classList.add("I-hide");
  } else {
    HexInput.classList.add("H-hide");
    input.classList.remove("I-hide");
  }
  let result;

  convert.addEventListener("click", () => {
    const unit1 = selectBox1.value;
    const unit2 = selectBox2.value;

    const inputValue = parseFloat(input.value);
    if (unit1 != 4) {
      if (isNaN(inputValue)) {
        alert("Please enter a number!");
        result = '';
      }
    }


    // Binary 
    if (unit1 === "1" && unit2 === "1") {
      if (isBinary(inputValue)) {
        result = inputValue;
      } else {
        alert(`${input.value} is not a binary number.`);
        result = '';
      }
    } else if (unit1 === "1" && unit2 === "2") {
      if (isBinary(inputValue)) {
        result = binaryToDecimal(inputValue);
      } else {
        alert(`${input.value} is not a binary number.`);
        result = '';
      }
    } else if (unit1 === "1" && unit2 === "3") {
      if (isBinary(inputValue)) {
        result = decimalToOctal(parseInt(inputValue, 2));
      } else {
        alert(`${input.value} is not a binary number.`);
        result = '';
      }
    } else if (unit1 === "1" && unit2 === "4") {
      if (isBinary(inputValue)) {
        result = binaryToHex(inputValue);
      } else {
        alert(`${input.value} is not a binary number.`);
        result = '';
      }
    }
    //  Decimal 
    else if (unit1 === "2" && unit2 === "1") {
      result = inputValue.toString(2).padStart(4, "0");
    } else if (unit1 === "2" && unit2 === "2") {
      result = inputValue;
    } else if (unit1 === "2" && unit2 === "3") {
      result = decimalToOctal(inputValue);
    } else if (unit1 === "2" && unit2 === "4") {
      result = decimalToHex(inputValue);
    }
    //  Octal 
    else if (unit1 === "3" && unit2 === "3") {

      let a = isOctal(inputValue);
      if (a == true) {
        result = answer.innerHTML
      } else {
        result = inputValue;
      }


    } else if (unit1 === "3" && unit2 === "1") {
      let a = isOctal(inputValue);
      if (a == true) {
        result = answer.innerHTML
      } else {
        result = octalToBinary(inputValue);
      }

    } else if (unit1 === "3" && unit2 === "2") {
      let a = isOctal(inputValue);
      if (a == true) {
        result = answer.innerHTML
      } else {
        result = octalToDecimal(inputValue);
      }

    } else if (unit1 === "3" && unit2 === "4") {

      let a = isOctal(inputValue);
      if (a == true) {
        result = answer.innerHTML
      } else {
        result = octalToHex(inputValue);
      }

    }
    //  Hexa Decimal 
    else if (unit1 === "4" && unit2 === "1") {
      let hexValue = HexInput.value;
      console.log(hexValue);
      if (isHexadecimal(hexValue)) {
        result = hexToBinary(hexValue);
      } else if (hexValue <= 0) {
        alert("Enter A Hexa-Decimal Number");
        result = '';
      }
      else {
        alert(`${hexValue} is not a Hexa-Decimal number.`);
        result = '';
      }
    }
    else if (unit1 === "4" && unit2 === "2") {
      let hexValue = HexInput.value;
      if (isHexadecimal(hexValue)) {
        result = hexToDec(hexValue);
      } else if (hexValue <= 0) {
        alert("Enter A Hexa-Decimal Number");
        result = '';
      }
      else {
        alert(`${hexValue} is not a Hexa-Decimal number.`);
        result = '';
      }
    }

    else if (unit1 === "4" && unit2 === "3") {
      let hexValue = HexInput.value;
      if (isHexadecimal(hexValue)) {
        result = hexToOct(hexValue);
      } else if (hexValue <= 0) {
        alert("Enter A Hexa-Decimal Number");
        result = '';
      } else {
        alert(`${hexValue} is not a Hexa-Decimal number.`);
        result = '';
      }
    }
    else if (unit1 === "4" && unit2 === "4") {
      let hexValue = HexInput.value;
      if (isHexadecimal(hexValue)) {
        result = hexValue;
      } else if (hexValue <= 0) {
        alert("Enter A Hexa-Decimal Number");
        result = '';
      } else {
        alert(`${hexValue} is not a Hexa-Decimal number.`);
        result = '';
      }
    }
    answer.innerHTML = result;
  });



})
// })
reset.addEventListener("click", () => {
  location.reload();
});
