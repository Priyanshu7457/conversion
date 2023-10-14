class Conversion {

    static ConvertBase = (num) => {
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

    // binary to decimal
    bin2dec(num) {
        return Conversion.ConvertBase(num).from(2).to(10);
    };

    // binary to hexadecimal
    bin2hex(num) {
        return Conversion.ConvertBase(num).from(2).to(16);
    };
    // binary to octal
    bin2oct(num) {
        return Conversion.ConvertBase(num).from(2).to(8);
    };

    // decimal to binary
    dec2bin(num) {
        return Conversion.ConvertBase(num).from(10).to(2);
    };

    // decimal to hexadecimal
    dec2hex(num) {
        return Conversion.ConvertBase(num).from(10).to(16);
    };
    // decimal to octal
    dec2oct(num) {
        return Conversion.ConvertBase(num).from(10).to(8);
    };



    //octal to decimal
    oct2dec(num) {
        return Conversion.ConvertBase(num).from(8).to(10);
    };

    //octal to binary
    oct2bin(num) {
        return Conversion.ConvertBase(num).from(8).to(2);
    };

    //octal to hexadecimal
    oct2hex(num) {
        return Conversion.ConvertBase(num).from(8).to(16);
    };
    // hexadecimal to binary
    hex2bin(num) {
        return Conversion.ConvertBase(num).from(16).to(2);
    };

    // hexadecimal to decimal
    hex2dec(num) {
        return Conversion.ConvertBase(num).from(16).to(10);
    };

    // hexadecimal to octal
    hex2oct(num) {
        return Conversion.ConvertBase(num).from(16).to(8);
    };



    // Alerts 

    appendAlert(message, type, bColor) {
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
}