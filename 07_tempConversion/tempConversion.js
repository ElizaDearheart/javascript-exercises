

const ftoc = function (deg) {
  // C = (32°F − 32) × 5/9 = 0°C
  let degC = (deg - 32) * (5 / 9)
  let roundedDegC = Math.round(degC * 10) / 10
  return roundedDegC

};

const ctof = function (deg) {
  // F = (0°C × 9/5) + 32 = 32°F
  let degF = (deg * (9 / 5) + 32)
  let roundedDegF = Math.round(degF * 10) / 10
  return roundedDegF
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
