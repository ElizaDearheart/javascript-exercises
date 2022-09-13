const fibonacci = function (num) {
    if (num <= 0) {
        return "OOPS"
    } else {
        let firstTerm = 1;
        let secondTerm = 1;
        let sum;
        let i = 0;
        for (i = 2; i < Number(num); i++) {
            sum = Number(firstTerm) + Number(secondTerm);
            firstTerm = secondTerm;
            secondTerm = sum;

        }
        return secondTerm
    }


};

// Do not edit below this line
module.exports = fibonacci;
