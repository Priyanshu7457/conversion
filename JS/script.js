// Variables and Constants 
const input = document.getElementById("box");
const answer = document.getElementById("answer");
const selectBox1 = document.getElementById("selectbox1");
const selectBox2 = document.getElementById("selectbox2");
const convert = document.getElementById("convert");
const reset = document.getElementById("reset");
const HexInput = document.getElementById("Hexbox");
const sInput = document.getElementById('SI-box');
const hInput = document.getElementById('HI-box');
const aBox = document.getElementById('A-box');
const alertPlaceholder = document.getElementById('liveAlertPlaceholder');
const wrapper = document.createElement('div');
const moon1 = document.getElementById('moon1');
const conversion = document.getElementById('conversion');
let result;
const ConvertFunc = new Conversion();
const FloatConversionFunc = new FloatConversion();
const Checking = new CheckingValue();
const Alert = new Alerts();
// All Function

selectBox2.addEventListener("change", () => {
  const unit2 = selectBox2.value;
  if (unit2 == 1) {
    aBox.innerHTML = '2';
  } else if (unit2 == 2) {
    aBox.innerHTML = '10';
  } else if (unit2 == 3) {
    aBox.innerHTML = '8';
  } else if (unit2 == 4) {
    aBox.innerHTML = '16';
  }else{
    aBox.innerHTML = '';
  }

})

// Conversion
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
  } else {
    sInput.innerHTML = '';
  }

  {
    convert.addEventListener("click", () => {
      const unit1 = selectBox1.value;
      const unit2 = selectBox2.value;
      const inputValue = Number.parseInt(input.value);
      const hexValue = HexInput.value;
      const hexLength = hexValue.length;

      // if ((unit1 === '0' && unit2 === '0') || (unit1 > '0' && unit2 === '0') || (unit1 === '0' && unit2 > '0')) {
      //   result = 'Output-Box';
      //   ConvertFunc.appendAlert('Please Select A Type', 'warning', 'coral');
      // }
      const hexaDecimalWarn = () => {
        ConvertFunc.appendAlert(`Enter A Hexa-Decimal Number`, 'warning', 'coral');
        return result = 'Output-Box';
      }
      if (input.value.length > 16 || hexValue.length > 10) {
        ConvertFunc.appendAlert('Value Length Is Too High', 'danger', 'red');
        result = 'Output-Box';
      }
      else {
        if (unit1 != 4 && unit2 > 0) {
          if (isNaN(inputValue)) {
            ConvertFunc.appendAlert('Please Enter A Number', 'warning', 'coral');
            return result = 'Output-Box';
          }
          else {
            Alert.done();
          }
        }

        // Binary
        if (unit1 === "1" && unit2 === "1") {
          if (Checking.Binary(inputValue)) {
            result = inputValue;
          } else {
            Alert.Binary(input.value);
          }
        } else if (unit1 === "1" && unit2 === "2") {
          if (!Checking.Binary(inputValue)) {
            Alert.Binary(input.value);
          } else if (input.value.includes('.')) {
            result = FloatConversionFunc.binaryToDecimal(input.value);
          }
          else {
            result = ConvertFunc.bin2dec(inputValue);
          }
        } else if (unit1 === "1" && unit2 === "3") {
          if (!Checking.Binary(inputValue)) {
            Alert.Binary(input.value);
          }
          else if (input.value.includes('.')) {
            result = FloatConversionFunc.binaryToOctal(input.value);
          }
          else {
            result = ConvertFunc.bin2oct(inputValue);
          }
        } else if (unit1 === "1" && unit2 === "4") {
          if (!Checking.Binary(inputValue)) {
            Alert.Binary(input.value);
          }
          else if (input.value.includes('.')) {
            result = FloatConversionFunc.binaryToHexadecimal(input.value);
          }
          else {
            result = ConvertFunc.bin2hex(inputValue);
          }
        }
        //  Decimal
        else if (unit1 === "2" && unit2 === "1") {
          if (input.value.includes('.')) {
            result = FloatConversionFunc.DecimalToBinary(input.value);
          }
          else {
            result = ConvertFunc.dec2bin(inputValue);
          }
        } else if (unit1 === "2" && unit2 === "2") {
          result = input.value;
        } else if (unit1 === "2" && unit2 === "3") {
          if (input.value.includes('.')) {
            result = FloatConversionFunc.DecimalToOctal(input.value);
          }
          else {
            result = ConvertFunc.dec2oct(inputValue);
          }
        } else if (unit1 === "2" && unit2 === "4") {
          if (input.value.includes('.')) {
            result = FloatConversionFunc.DecimalToHex(input.value);
          }
          else {
            result = ConvertFunc.dec2hex(inputValue);
          }
        }
        //  Octal
        else if (unit1 === "3" && unit2 === "3") {
          let a = Checking.Octal(input.value);
          if (a == true) {
            result = 'Output-Box';
          } else {
            result = input.value;
          }
        } else if (unit1 === "3" && unit2 === "1") {

          let a = Checking.Octal(input.value);
          if (a == true) {
            result = 'Output-Box';
          } else if (input.value.includes('.')) {
            result = FloatConversionFunc.octalToBinary(input.value);
          } else {
            result = ConvertFunc.oct2bin(inputValue);
          }

        } else if (unit1 === "3" && unit2 === "2") {
          let a = Checking.Octal(input.value);
          if (a == true) {
            result = 'Output-Box';
          } else if (input.value.includes('.')) {
            result = FloatConversionFunc.octalToDecimal(input.value);
          } else {
            result = ConvertFunc.oct2dec(inputValue);
          }

        } else if (unit1 === "3" && unit2 === "4") {
          let a = Checking.Octal(input.value);
          if (a == true) {
            result = 'Output-Box';
          } else if (input.value.includes('.')) {
            result = FloatConversionFunc.octalToHex(input.value);
          } else {
            result = ConvertFunc.oct2hex(inputValue);
          }

        }
        //  Hexa Decimal
        else if (unit1 === "4" && unit2 === "1") {
          if (hexLength < 1) {
            hexaDecimalWarn();
          } else if (!Checking.Hexadecimal(hexValue)) {
            Alert.HexaDecimal(hexValue);
          }
          else if (HexInput.value.includes('.')) {
            Alert.done();
            result = FloatConversionFunc.HexToBinary(hexValue);
          } else {
            Alert.done();
            result = ConvertFunc.hex2bin(hexValue);
          }
        }
        else if (unit1 === "4" && unit2 === "2") {
          if (hexLength < 1) {
            hexaDecimalWarn();
          } else if (!Checking.Hexadecimal(hexValue)) {
            Alert.HexaDecimal(hexValue);
          }
          else if (HexInput.value.includes('.')) {
            Alert.done();
            result = FloatConversionFunc.HexToDecimal(hexValue);
          } else {
            Alert.done();
            result = ConvertFunc.hex2dec(HexInput.value);
          }
        }
        else if (unit1 === "4" && unit2 === "3") {
          if (hexLength < 1) {
            hexaDecimalWarn();
          } else if (!Checking.Hexadecimal(hexValue)) {
            Alert.HexaDecimal(hexValue);
          }
          else if (HexInput.value.includes('.')) {
            Alert.done();
            result = FloatConversionFunc.HexToOctal(hexValue);
          } else {
            Alert.done();
            result = ConvertFunc.hex2oct(HexInput.value);
          }
        }
        else if (unit1 === "4" && unit2 === "4") {
          if (Checking.Hexadecimal(hexValue)) {
            Alert.done();
            result = hexValue;
          } else if (hexValue <= 0) {
            hexaDecimalWarn();
          } else {
            Alert.HexaDecimal(hexValue);
          }
        }
      }
      answer.innerHTML = result;

    });

  }
});

convert.addEventListener("click", () => {
  if ((selectBox1.value == 0 || selectBox2.value == 0) || (selectBox1.value > 0 || selectBox2.value == 0) || (selectBox1.value == 0 || selectBox2.value > 0)) {
    console.log(selectBox1.value);
    console.log(selectBox2.value);
    ConvertFunc.appendAlert('Please Select A Type', 'warning', 'coral');
    result = 'Output-Box';
  }
})
// Change Mode
const changeMode = () => {
  let element = document.body;
  element.classList.toggle("dark-mode");
  let a = element.classList.contains('dark-mode');
  if (a == true) {
    moon1.classList.add('icon-white');
    moon1.classList.remove('moon-black');
    conversion.style.backgroundColor = 'purple'

    answer.style.color = 'black';
  } else if (a != true) {
    moon1.classList.add('moon-black');
    moon1.classList.remove('icon-white');
    conversion.style.backgroundColor = 'yellow'
  }
}

reset.addEventListener("click", () => {
  location.reload();
});
