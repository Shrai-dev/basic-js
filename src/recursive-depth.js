const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    if (!Array.isArray(arr)) {
      return 0;
    }
    let count = 0;
    arr.forEach((el) => {
      if (Array.isArray(el)) {
        let depth = this.calculateDepth(el);
        if (count < depth) {
          count = depth;
        }
      }
    });
    return ++count;
  }
};
