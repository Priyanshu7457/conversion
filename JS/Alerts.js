class Alerts {
    done() {
        ConvertFunc.appendAlert('Conversion Successfully', 'success', 'lime');
    }

    Binary(value) {
        ConvertFunc.appendAlert(`${value} Is Not A Binary Number`, 'danger', 'red');
        return result = 'Output-Box';
    }

    HexaDecimal(value) {
        ConvertFunc.appendAlert(`${value} Is Not A  Hexa-Decimal Number`, 'danger', 'red');
        return result = 'Output-Box';
    }
}