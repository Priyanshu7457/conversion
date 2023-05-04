const input = document.getElementById("box"); const answer = document.getElementById("answer"); const selectBox1 = document.getElementById("selectbox1"); const selectBox2 = document.getElementById("selectbox2"); const convert = document.getElementById("convert"); const reset = document.getElementById("reset"); const HexInput = document.getElementById("Hexbox"); const sInput = document.getElementById('SI-box'); const hInput = document.getElementById('HI-box'); const aBox = document.getElementById('A-box'); const alertPlaceholder = document.getElementById('liveAlertPlaceholder'); const wrapper = document.createElement('div'); const moon1 = document.getElementById('moon1'); const conversion = document.getElementById('conversion'); let result;
const changeMode = () => {
    let element = document.body; element.classList.toggle("dark-mode"); let a = element.classList.contains('dark-mode');
    if (a == true) {
        moon1.classList.add('icon-white'); moon1.classList.remove('moon-black'); conversion.style.backgroundColor = 'purple'; answer.style.color = 'black';
    } else if (a != true) {
        moon1.classList.add('moon-black'); moon1.classList.remove('icon-white');
        conversion.style.backgroundColor = 'yellow'
    }
}
function isBinary(num) {

    while (num > 0) {
        if (num % 10 !== 0 && num % 10 !== 1) {
            return false;
        }
        num = Math.floor(num / 10);
    }
    return true;
}
function isHexadecimal(str) {
    let hexRegex = /^[0-9A-Fa-f.]+$/;
    return hexRegex.test(str);
}

(function () {

    var ConvertBase = function (num) {
        return {
            from: function (baseFrom) {
                return {
                    to: function (baseTo) {
                        return parseInt(num, baseFrom).toString(baseTo);
                    }
                };
            }
        };
    };
    ConvertBase.bin2dec = function (num) {
        return ConvertBase(num).from(2).to(10);
    };
    ConvertBase.bin2hex = function (num) {
        return ConvertBase(num).from(2).to(16);
    };
    ConvertBase.bin2oct = function (num) {
        return ConvertBase(num).from(2).to(8);
    };
    ConvertBase.dec2bin = function (num) {
        return ConvertBase(num).from(10).to(2);
    };
    ConvertBase.dec2hex = function (num) {
        return ConvertBase(num).from(10).to(16);
    };
    ConvertBase.dec2oct = function (num) {
        return ConvertBase(num).from(10).to(8);
    };
    ConvertBase.oct2dec = function (num) {
        return ConvertBase(num).from(8).to(10);
    };
    ConvertBase.oct2bin = function (num) {
        return ConvertBase(num).from(8).to(2);
    };
    ConvertBase.oct2hex = function (num) {
        return ConvertBase(num).from(8).to(16);
    };
    ConvertBase.hex2bin = function (num) {
        return ConvertBase(num).from(16).to(2);
    };
    ConvertBase.hex2dec = function (num) {
        return ConvertBase(num).from(16).to(10);
    };
    ConvertBase.hex2oct = function (num) {
        return ConvertBase(num).from(16).to(8);
    };


    this.ConvertBase = ConvertBase;

})(this);






function fbinaryToDecimal(binary) {
    const binaryArray = binary.split(".");
    let a = binary.toString();
    let b = Array.from(a); for (let i = 0; i < b.length; i++) {
        if (b[i] >= 2) {
            appendAlert(`${binary} Is Not A binary Number`, 'danger', 'red');
            return 'Output-Box';
        }
    } const wholePart = parseInt(binaryArray[0], 2);
    let fractionalPart = 0;

    if (binaryArray.length === 2) {
        const binaryFraction = binaryArray[1];
        for (let i = 0; i < binaryFraction.length; i++) {
            fractionalPart += parseInt(binaryFraction[i], 2) * Math.pow(2, -(i + 1));
        }
    }
    const decimalValue = wholePart + fractionalPart;
    return decimalValue;
}

function fbinaryToOctal(binary) {
    const binaryArray = binary.split(".");

    let a = binary.toString();
    let b = Array.from(a);

    for (let i = 0; i < b.length; i++) {
        if (b[i] >= 2) {
            console.log(b[i])
            appendAlert(`${binary} Is Not A binary Number`, 'danger', 'red');
            return 'Output-Box';
        }
    }
    let wholePart = parseInt(binaryArray[0], 2);
    let fractionalPart = 0;

    if (binaryArray.length === 2) {
        const binaryFraction = binaryArray[1];
        for (let i = 0; i < binaryFraction.length; i++) {
            fractionalPart += parseInt(binaryFraction[i], 2) * Math.pow(2, -(i + 1));
        }
    }

    let octalWholePart = "";
    while (wholePart > 0) {
        octalWholePart = (wholePart % 8) + octalWholePart;
        wholePart = Math.floor(wholePart / 8);
    }

    let octalFractionalPart = "";
    if (fractionalPart > 0) {
        let tempFraction = fractionalPart;
        let maxIterations = 5; // Convert up to 5 decimal places
        while (tempFraction > 0 && maxIterations > 0) {
            tempFraction *= 8;
            octalFractionalPart += Math.floor(tempFraction).toString();
            tempFraction -= Math.floor(tempFraction);
            maxIterations--;
        }
    }

    const octalValue = octalWholePart + (octalFractionalPart ? "." + octalFractionalPart : "");
    return octalValue;

}

function fbinaryToHexadecimal(binary) {
    const binaryArray = binary.split(".");

    let a = binary.toString();
    let b = Array.from(a);

    for (let i = 0; i < b.length; i++) {
        if (b[i] >= 2) {
            console.log(b[i])
            appendAlert(`${binary} Is Not A binary Number`, 'danger', 'red');
            return 'Output-Box';
        }
    }

    let wholePart = parseInt(binaryArray[0], 2);
    let fractionalPart = 0;

    if (binaryArray.length === 2) {
        const binaryFraction = binaryArray[1];
        for (let i = 0; i < binaryFraction.length; i++) {
            fractionalPart += parseInt(binaryFraction[i], 2) * Math.pow(2, -(i + 1));
        }
    }

    let hexWholePart = "";
    while (wholePart > 0) {
        const remainder = wholePart % 16;
        hexWholePart = (remainder < 10 ? remainder : String.fromCharCode(55 + remainder)) + hexWholePart;
        wholePart = Math.floor(wholePart / 16);
    }

    let hexFractionalPart = "";
    if (fractionalPart > 0) {
        let tempFraction = fractionalPart;
        let maxIterations = 3;
        while (tempFraction > 0 && maxIterations > 0) {
            tempFraction *= 16;
            const integerPart = Math.floor(tempFraction);
            hexFractionalPart += (integerPart < 10 ? integerPart : String.fromCharCode(55 + integerPart)).toString();
            tempFraction -= integerPart;
            maxIterations--;
        }
    }

    const hexValue = hexWholePart + (hexFractionalPart ? "." + hexFractionalPart : "");
    return hexValue;

}

function fDecimalToBinary(decimal) {
    const decimalArray = decimal.split(".");

    let wholePart = parseInt(decimalArray[0]);
    let fractionalPart = 0;
    if (decimalArray.length === 2) {
        const decimalFraction = "0." + decimalArray[1];
        fractionalPart = parseFloat(decimalFraction);
    }

    let binaryWholePart = "";
    while (wholePart > 0) {
        const remainder = wholePart % 2;
        binaryWholePart = remainder + binaryWholePart;
        wholePart = Math.floor(wholePart / 2);
    }

    let binaryFractionalPart = "";
    if (fractionalPart > 0) {
        let tempFraction = fractionalPart;
        let maxIterations = 10;
        while (tempFraction > 0 && maxIterations > 0) {
            tempFraction *= 2;
            const integerPart = Math.floor(tempFraction);
            binaryFractionalPart += integerPart.toString();
            tempFraction -= integerPart;
            maxIterations--;
        }
    }

    const binaryValue = binaryWholePart + (binaryFractionalPart ? "." + binaryFractionalPart : "");
    return binaryValue;

}
function fDecimalToOctal(decimal) {
    const decimalArray = decimal.split(".");

    let wholePart = parseInt(decimalArray[0]);
    let fractionalPart = 0;

    if (decimalArray.length === 2) {
        const decimalFraction = "0." + decimalArray[1];
        fractionalPart = parseFloat(decimalFraction);
    }

    let octalWholePart = "";
    while (wholePart > 0) {
        const remainder = wholePart % 8;
        octalWholePart = remainder + octalWholePart;
        wholePart = Math.floor(wholePart / 8);
    }

    let octalFractionalPart = "";
    if (fractionalPart > 0) {
        let tempFraction = fractionalPart;
        let maxIterations = 15;
        while (tempFraction > 0 && maxIterations > 0) {
            tempFraction *= 8;
            const integerPart = Math.floor(tempFraction);
            octalFractionalPart += integerPart.toString();
            tempFraction -= integerPart;
            maxIterations--;
        }
    }

    const octalValue = octalWholePart + (octalFractionalPart ? "." + octalFractionalPart : "");
    return octalValue;

}
function fDecimalToHex(decimal) {
    const decimalArray = decimal.split(".");
    let wholePart = parseInt(decimalArray[0]);
    let fractionalPart = 0;
    if (decimalArray.length === 2) {
        const decimalFraction = "0." + decimalArray[1];
        fractionalPart = parseFloat(decimalFraction);
    }

    let hexWholePart = "";
    while (wholePart > 0) {
        const remainder = wholePart % 16;
        hexWholePart = (remainder < 10 ? remainder : String.fromCharCode(55 + remainder)) + hexWholePart;
        wholePart = Math.floor(wholePart / 16);
    }

    let hexFractionalPart = "";
    if (fractionalPart > 0) {
        let tempFraction = fractionalPart;
        let maxIterations = 15;
        while (tempFraction > 0 && maxIterations > 0) {
            tempFraction *= 16;
            const integerPart = Math.floor(tempFraction);
            hexFractionalPart += (integerPart < 10 ? integerPart : String.fromCharCode(55 + integerPart)).toString();
            tempFraction -= integerPart;
            maxIterations--;
        }
    }

    const hexValue = hexWholePart + (hexFractionalPart ? "." + hexFractionalPart : "");
    return hexValue;

}
function foctalToBinary(octal) {
    let decimalNumber = parseInt(octal, 8) + parseInt(octal.substring(octal.indexOf('.') + 1), 8) / 8 ** (octal.substring(octal.indexOf('.') + 1).length);
    let binaryNumber = decimalNumber.toString(2);

    return binaryNumber;
}

const isOctal = (c) => {
    let a = c.toString();
    let b = Array.from(a);
    for (let i = 0; i < b.length; i++) {
        if (b[i] >= 8) {
            appendAlert(`${b[i]} Is Not A Octal Number`, 'danger', 'red');
            return true;
        }


    }
}
function foctalToDecimal(octalNumber) {
    let decimalNumber = parseInt(octalNumber, 8) + parseInt(octalNumber.substring(octalNumber.indexOf('.') + 1), 8) / 8 ** (octalNumber.substring(octalNumber.indexOf('.') + 1).length);
    return decimalNumber;
}
function foctalToHex(octal) {
    let decimalNumber = parseInt(octal, 8) + parseInt(octal.substring(octal.indexOf('.') + 1), 8) / 8 ** (octal.substring(octal.indexOf('.') + 1).length);
    let hexadecimalNumber = decimalNumber.toString(16);

    return hexadecimalNumber;
}
function fHexToBinary(hexdec) {
    let i = 0;
    let a = '';

    while (hexdec[i]) {

        switch (hexdec[i]) {
            case '0':
                a = HexInput.innerText = "0000";
                break;
            case '1':
                a += HexInput.innerText += "0001";
                break;
            case '2':
                a += HexInput.innerText += "0010"
                break;
            case '3':
                a += HexInput.innerText += "0011"
                break;
            case '4':
                a += HexInput.innerText += "0100"
                break;
            case '5':
                a += HexInput.innerText += "0101";
                break;
            case '6':
                a += HexInput.innerText += "0110"
                break;
            case '7':
                a += HexInput.innerText += "0111"
                break;
            case '8':
                a += HexInput.innerText += "1000"
                break;
            case '9':
                a += HexInput.innerText += "1001"
                break;
            case 'A':
            case 'a':
                a += HexInput.innerText += "1010"
                break;
            case 'B':
            case 'b':
                a += HexInput.innerText += "1011"
                break;
            case 'C':
            case 'c':
                a += HexInput.innerText += "1100"
                break;
            case 'D':
            case 'd':
                a += HexInput.innerText += "1101"
                break;
            case 'E':
            case 'e':
                a += HexInput.innerText += "1110"
                break;
            case 'F':
            case 'f':
                a += HexInput.innerText += "1111"
                break;
            case '.':
                a += HexInput.innerText += "."
                break;
            default:
                appendAlert('This Is Not A HexaDecimal Number', 'danger', 'red');
        }
        i++;

    }
    console.log(a);
    return a;

}
function fHexToDecimal(hexdec) {
    let a = fHexToBinary(hexdec);
    let b = fbinaryToDecimal(a);
    return b;
}
function fHexToOctal(hexdec) {
    let c = fHexToDecimal(hexdec).toString();
    console.log(typeof c);
    let d = fDecimalToOctal(c);
    console.log(d);
    return d;

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
        `   <div class="a-message">${message}</div>`,
        '</div>'
    ].join('');

    alertPlaceholder.append(wrapper);
}

selectBox2.addEventListener("change", () => {
    const unit2 = selectBox2.value;

    if (unit2 == 1) {
        aBox.innerHTML = '2'
    } else if (unit2 == 2) {
        aBox.innerHTML = '10'
    } else if (unit2 == 3) {
        aBox.innerHTML = '8'
    } else if (unit2 == 4) {
        aBox.innerHTML = '16'
    }

})
selectBox1.addEventListener("change", () => {
    const unit1 = selectBox1.value;
    if (unit1 === "4") {
        HexInput.classList.remove("H-hide");
        hInput.classList.remove("H-hide");
        input.classList.add("I-hide");
        sInput.classList.add("I-hide");
        hInput.innerHTML = '16';
    } else {
        HexInput.classList.add("H-hide");
        hInput.classList.add("H-hide");
        input.classList.remove("I-hide");
        sInput.classList.remove("I-hide");
    }

    if (unit1 == 1) {
        sInput.innerHTML = '2';
    } else if (unit1 == 2) {
        sInput.innerHTML = '10';
    } else if (unit1 == 3) {
        sInput.innerHTML = '8';
    }

    {
        convert.addEventListener("click", () => {
            const unit1 = selectBox1.value;
            const unit2 = selectBox2.value;
            const inputValue = Number.parseInt(input.value);
            const hexValue = HexInput.value;

            if ((unit1 == 0 && unit2 == 0) || (unit1 > 0 && unit2 == 0) || (unit1 == 0 && unit2 >= 0)) {
                appendAlert('Please Select A Type', 'warning', 'coral');
                result = 'Output-Box';

            }
            const done = () => {
                appendAlert('Conversion Successfully', 'success', 'lime');
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

                } else if (unit1 === "1" && unit2 === "2") { if (!isBinary(inputValue)) { binaryAlert(); } else if (input.value.includes('.')) { result = fbinaryToDecimal(input.value); } else { result = ConvertBase.bin2dec(inputValue); } } else if (unit1 === "1" && unit2 === "3") { if (!isBinary(inputValue)) { binaryAlert(); } else if (input.value.includes('.')) { result = fbinaryToOctal(input.value); } else { result = ConvertBase.bin2oct(inputValue); } } else if (unit1 === "1" && unit2 === "4") { if (!isBinary(inputValue)) { binaryAlert(); } else if (input.value.includes('.')) { result = fbinaryToHexadecimal(input.value); } else { result = ConvertBasebin2he(inputValue); } } else if (unit1 === "2" && unit2 === "1") { if (input.value.includes('.')) { result = fDecimalToBinary(input.value); } else { result = ConvertBase.dec2bin(inputValue); } } else if (unit1 === "2" && unit2 === "2") { result = input.value; } else if (unit1 === "2" && unit2 === "3") { if (input.value.includes('.')) { result = fDecimalToOctal(input.value); } else { result = ConvertBase.dec2oct(inputValue); } } else if (unit1 === "2" && unit2 === "4") { if (input.value.includes('.')) { result = fDecimalToHex(input.value); } else { result = ConvertBase.dec2hex(inputValue); } } else if (unit1 === "3" && unit2 === "3") { let a = isOctal(inputValue); if (a == true) { result = 'Output-Box'; } else { result = input.value; } } else if (unit1 === "3" && unit2 === "1") { let a = isOctal(input.value); if (a == true) { result = 'Output-Box'; } else if (input.value.includes('.')) { result = foctalToBinary(input.value); } else { result = ConvertBase.oct2bin(inputValue); } } else if (unit1 === "3" && unit2 === "2") { let a = isOctal(input.value); if (a == true) { result = 'Output-Box'; } else if (input.value.includes('.')) { result = foctalToDecimal(input.value); } else { result = ConvertBase.oct2dec(inputValue); } } else if (unit1 === "3" && unit2 === "4") { let a = isOctal(input.value); if (a == true) { result = 'Output-Box'; } else if (input.value.includes('.')) { result = foctalToHex(input.value); } else { result = ConvertBase.oct2hex(inputValue); } } else if (unit1 === "4" && unit2 === "1") { console.log(hexValue); if (!isHexadecimal(hexValue)) { hexaDecimalError(); } else if (hexValue <= 0) { hexaDecimalWarn(); } else if (HexInput.value.includes('.')) { done(); result = fHexToBinary(hexValue); } else { done(); result = ConvertBase.hex2bin(hexValue); } } else if (unit1 === "4" && unit2 === "2") { console.log(hexValue); if (!isHexadecimal(hexValue)) { hexaDecimalError(); } else if (hexValue <= 0) { hexaDecimalWarn(); } else if (HexInput.value.includes('.')) { done(); result = fHexToDecimal(hexValue); } else { done(); result = ConvertBase.hex2dec(HexInput.value); } } else if (unit1 === "4" && unit2 === "3") { console.log(hexValue); if (!isHexadecimal(hexValue)) { hexaDecimalError(); } else if (hexValue <= 0) { hexaDecimalWarn(); } else if (HexInput.value.includes('.')) { done(); result = fHexToOctal(hexValue); } else { done(); result = ConvertBase.hex2oct(HexInput.value); } } else if (unit1 === "4" && unit2 === "4") { if (isHexadecimal(hexValue)) { done(); result = hexValue; } else if (hexValue <= 0) { hexaDecimalWarn(); } else { hexaDecimalError(); } }
            } answer.innerHTML = result;
        });
    }
}); convert.addEventListener("click", () => { if ((selectBox1.value == 0 || selectBox2.value == 0) || (selectBox1.value > 0 && selectBox2.value == 0) || (selectBox1.value == 0 && selectBox2.value >= 0)) { appendAlert('Please Select A Type', 'warning', 'coral'); result = 'Output-Box'; } }); reset.addEventListener("click", () => { location.reload(); });
