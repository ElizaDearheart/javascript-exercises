

function repeatString(str, num) {

    for (let i = num; i <= num; i++) {
        let returnedString = "";
        if (num < 0) {
            return 'ERROR'

        } else if (num === 0) {
            return ''

        } else {
            returnedString += str.repeat(num)
            return returnedString

        }

    }
}

// Do not edit below this line
module.exports = repeatString;
