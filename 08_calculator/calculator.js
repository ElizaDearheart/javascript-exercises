const add = function (x, y) {
  let addNumbers = x + y
  return addNumbers

};

const subtract = function (x, y) {
  let subtractNumbers = x - y
  return subtractNumbers

};

const sum = function ([...nums]) {
  let sumNumbers = 0
  for (let num of nums) {
    sumNumbers += Number(num)
  }
  return sumNumbers

};

const multiply = function ([...nums]) {
  let multNumbers = 1
  for (let num of nums) {
    multNumbers *= Number(num)
  }
  return multNumbers


};

const power = function (num, power) {
  let powerNumber = Number(num) ** Number(power)
  return powerNumber

};

const factorial = function (num) {
  if (num === Number(0) || num === Number(1)) {
    return Number(1)
  } else if (num > 1) {
    for (let i = num - 1; i >= 1; i--) {
      num *= i
    }

    return num
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
