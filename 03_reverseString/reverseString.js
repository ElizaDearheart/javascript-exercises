const reverseString = function (str) {
    let splitString = str.split("");
    let reverseString = splitString.reverse();
    let reassembledString = reverseString.join("");

    return reassembledString;

};

// Do not edit below this line
module.exports = reverseString;
