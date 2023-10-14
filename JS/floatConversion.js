class FloatConversion {
    static appendAlert(message, type, bColor) {
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
    binaryToDecimal(binary) {
        const binaryArray = binary.split("."); // Split into whole and fractional parts

        let a = binary.toString();
        let b = Array.from(a);
        for (let i = 0; i < b.length; i++) {
            if (b[i] >= 2) {
                FloatConversion.appendAlert(`${binary} Is Not A binary Number`, 'danger', 'red');
                return 'Output-Box';
            }
        }

        const wholePart = parseInt(binaryArray[0], 2); // Convert whole part to decimal
        let fractionalPart = 0;

        if (binaryArray.length === 2) {
            // If there is a fractional part, convert it to decimal
            const binaryFraction = binaryArray[1];
            for (let i = 0; i < binaryFraction.length; i++) {
                fractionalPart += parseInt(binaryFraction[i], 2) * Math.pow(2, -(i + 1));
            }
        }

        const decimalValue = wholePart + fractionalPart;
        return decimalValue;
    }



    binaryToOctal(binary) {
        let a = FloatConversionFunc.binaryToDecimal(binary);
        a = a.toString();
        let b = FloatConversionFunc.DecimalToOctal(a);
        return b;
    }

    binaryToHexadecimal(binary) {
        let a = FloatConversionFunc.binaryToDecimal(binary);
        a = a.toString();
        let b = FloatConversionFunc.DecimalToHex(a);
        return b;
    }

    DecimalToBinary(decimal) {
        const decimalArray = decimal.split("."); // Split into whole and fractional parts

        let wholePart = parseInt(decimalArray[0]); // Convert whole part to integer
        let fractionalPart = 0;

        if (decimalArray.length === 2) {
            // If there is a fractional part, convert it to decimal
            const decimalFraction = "0." + decimalArray[1];
            fractionalPart = parseFloat(decimalFraction);
        }

        let binaryWholePart = "";

        // Convert the whole part to binary
        while (wholePart > 0) {
            const remainder = wholePart % 2;
            binaryWholePart = remainder + binaryWholePart;
            wholePart = Math.floor(wholePart / 2);
        }

        let binaryFractionalPart = "";

        // Convert the fractional part to binary
        if (fractionalPart > 0) {
            let tempFraction = fractionalPart;
            let maxIterations = 10; // Convert up to 10 binary places
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


    DecimalToOctal(decimal) {
        const decimalArray = decimal.split("."); // Split into whole and fractional parts

        let wholePart = parseInt(decimalArray[0]); // Convert whole part to integer
        let fractionalPart = 0;

        if (decimalArray.length === 2) {
            // If there is a fractional part, convert it to decimal
            const decimalFraction = "0." + decimalArray[1];
            fractionalPart = parseFloat(decimalFraction);
        }

        let octalWholePart = "";

        // Convert the whole part to octal
        while (wholePart > 0) {
            const remainder = wholePart % 8;
            octalWholePart = remainder + octalWholePart;
            wholePart = Math.floor(wholePart / 8);
        }

        let octalFractionalPart = "";

        // Convert the fractional part to octal
        if (fractionalPart > 0) {
            let tempFraction = fractionalPart;
            let maxIterations = 15; // Convert up to 10 octal places
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

    DecimalToHex(decimal) {
        const decimalArray = decimal.split("."); // Split into whole and fractional parts

        let wholePart = parseInt(decimalArray[0]); // Convert whole part to integer
        let fractionalPart = 0;

        if (decimalArray.length === 2) {
            // If there is a fractional part, convert it to decimal
            const decimalFraction = "0." + decimalArray[1];
            fractionalPart = parseFloat(decimalFraction);
        }

        let hexWholePart = "";

        // Convert the whole part to hexadecimal
        while (wholePart > 0) {
            const remainder = wholePart % 16;
            hexWholePart = (remainder < 10 ? remainder : String.fromCharCode(55 + remainder)) + hexWholePart;
            wholePart = Math.floor(wholePart / 16);
        }

        let hexFractionalPart = "";

        // Convert the fractional part to hexadecimal
        if (fractionalPart > 0) {
            let tempFraction = fractionalPart;
            let maxIterations = 15; // Convert up to 3 hexadecimal places
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

    octalToBinary(octal) {
        let a = FloatConversionFunc.octalToDecimal(octal);
        a = a.toString();
        let b = FloatConversionFunc.DecimalToBinary(a);
        return b;
    }

    octalToDecimal(octalNumber) {
        let decimalNumber = parseInt(octalNumber, 8) + parseInt(octalNumber.substring(octalNumber.indexOf('.') + 1), 8) / 8 ** (octalNumber.substring(octalNumber.indexOf('.') + 1).length);
        return decimalNumber;
    }


    octalToHex(octal) {
        let a = FloatConversionFunc.octalToDecimal(octal);
        a = a.toString();
        let b = FloatConversionFunc.DecimalToHex(a);
        return b;
    }

    // HexaDecimal 
    HexToBinary(hexdec) {
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
                    ConvertFunc.appendAlert('This Is Not A HexaDecimal Number', 'danger', 'red');
            }
            i++;

        }
        return a;

    }
    HexToDecimal(hexdec) {
        let a = FloatConversionFunc.HexToBinary(hexdec);
        let b = FloatConversionFunc.binaryToDecimal(a);
        return b;

    }
    HexToOctal(hexdec) {
        let c = FloatConversionFunc.HexToDecimal(hexdec).toString();
        let d = FloatConversionFunc.DecimalToOctal(c);
        return d;
    }

}