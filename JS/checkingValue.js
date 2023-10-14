class CheckingValue {
    Binary(num) {
        while (num > 0) {
            if (num % 10 !== 0 && num % 10 !== 1) {
                return false;
            }
            num = Math.floor(num / 10);
        }
        return true;
    }

    Hexadecimal(str) {
        // Regular expression to match a valid hexadecimal string
        let hexRegex = /^[0-9A-Fa-f.]+$/;
        return hexRegex.test(str);
    }

    Octal = (octal) => {
        let a = octal.toString();
        let b = Array.from(a);
        for (let i = 0; i < b.length; i++) {
            if (b[i] >= 8) {
                ConvertFunc.appendAlert(`${octal} Is Not A Octal Number`, 'danger', 'red');
                return true;
            }
        }
    }
}