function getStringNum(num) {
    switch (num) {
        case '1':
            return 'one';
        case '2':
            return 'two';
        case '3':
            return 'three';
        case '4':
            return 'four';
        case '5':
            return 'five';
        case '6':
            return 'six';
        case '7':
            return 'seven';
        case '8':
            return 'eight';
        case '9':
            return 'nine';
        default:
            return '';
    }
}
function getStringTenthNum(tenthNum, nextNum) {
    switch (tenthNum) {
        case '1':
            switch (nextNum){
                case '1':
                    return 'eleven';
                case '2':
                    return 'twelve';
                case '3':
                    return 'thirteen';
                case '4':
                    return 'fourteen';
                case '5':
                    return 'fifteen';
                case '6':
                    return 'sixteen';
                case '7':
                    return 'seventeen';
                case '8':
                    return 'eighteen';
                case '9':
                    return 'nineteen';
                default:
                    return 'ten';
            }
        case '2':
            return `twenty ${getStringNum(nextNum)}`;
        case '3':
            return `thirty ${getStringNum(nextNum)}`;
        case '4':
            return `forty ${getStringNum(nextNum)}`;
        case '5':
            return `fifty ${getStringNum(nextNum)}`;
        case '6':
            return `sixty ${getStringNum(nextNum)}`;
        case '7':
            return `seventy ${getStringNum(nextNum)}`;
        case '8':
            return `eighty ${getStringNum(nextNum)}`;
        case '9':
            return `ninety ${getStringNum(nextNum)}`;
        default:
            return `${getStringNum(nextNum)}`;
    }
}

module.exports = function toReadable(number) {
    if (number === 0){
        return 'zero';
    }
    let arrNum = number.toString().split('').reverse();
    let readableNumber = '';
    for (let i = arrNum.length - 1; i >= 0; i--) {
        if (i === 2) {
            readableNumber += `${getStringNum(arrNum[i])} hundred`;
        } else if (i === 1) {
            readableNumber += ` ${getStringTenthNum(arrNum[i], arrNum[--i])}`;
        } else {
            readableNumber += ` ${getStringNum(arrNum[i])}`;
        }
    }
    return readableNumber.trim();
}
