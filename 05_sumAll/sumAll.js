// total numbers -> (y-x)+1
// sum -> n(n+1)/2

const sumAll = function (x, y) {

    if (Number(x) < 0 || Number(y) < 0) {
        return 'ERROR'
    } else if (x <= y && Number.isInteger(x) && Number.isInteger(y)) {

        let n = (y - x) + 1
        let sumAll = n * (x + y) / 2

        return sumAll
    } else if (x > y && Number.isInteger(x) && Number.isInteger(y)) {
        let n = (x - y) + 1
        let sumAll = n * (x + y) / 2

        return sumAll
    } else {
        return 'ERROR'
    }

};

// Do not edit below this line
module.exports = sumAll;
