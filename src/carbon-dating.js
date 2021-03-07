const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(sampleActivity) {
  if (
    typeof sampleActivity !== "string" ||
    isNaN(parseFloat(sampleActivity)) === true ||
    sampleActivity <= 0 ||
    sampleActivity > 15
  ) {
    return false;
  } else {
    let result = Math.ceil(
      (HALF_LIFE_PERIOD *
        Math.log(MODERN_ACTIVITY / parseFloat(sampleActivity))) /
        Math.log(2)
    );
    return result;
  }
};
