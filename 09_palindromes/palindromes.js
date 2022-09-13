const palindromes = function (words) {
    //forward string
    let punctuationless = words.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "");
    let finalPunctuationlessString = punctuationless.replace(/\s{1,}/g, " ");
    let lowerCaseString = finalPunctuationlessString.toLowerCase()
    let singleForwardString = lowerCaseString.split(' ').join("");

    //reverse string
    let splitForwardString = singleForwardString.split("");
    let reverseString = splitForwardString.reverse();
    let reassembledBackwardsString = reverseString.join("");

    if (singleForwardString === reassembledBackwardsString) {
        return true
    } else {
        return false
    }

};

// Do not edit below this line
module.exports = palindromes;
