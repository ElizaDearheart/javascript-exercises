const removeFromArray = function (array, ...items) {
    for (let item of items) {
        let arrayIndex = array.indexOf(item);
        if (arrayIndex >= 0) {
            array.splice(arrayIndex, 1);
        }

    }
    return array

};

// Do not edit below this line
module.exports = removeFromArray;

