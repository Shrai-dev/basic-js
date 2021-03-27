const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  //throw new CustomError('Not implemented');
  // remove line with error and write your code here
  if (!Array.isArray(arr)) {
    throw new Error();
  }
  let newArr = [];
  let i = 0;
  while (i < arr.length) {
    switch (arr[i]) {
      case "--discard-next":
        i = i + 2;
        break;
      case "--discard-prev":
        if (arr[i - 2] !== "--discard-next") {
          newArr.pop();
        }
        i++;
        break;
      case "--double-next":
        if (arr[i + 1] !== undefined) {
          newArr.push(arr[i + 1]);
        }
        i++;
        break;
      case "--double-prev":
        if (arr[i - 1] !== undefined && arr[i - 2] !== "--discard-next") {
          newArr.push(arr[i - 1]);
        }
        i++;
        break;
      default:
        newArr.push(arr[i]);
        i++;
    }
  }
  return newArr;
  // for (let i = 0; i < arr.length; i++) {
  //   if (arr[i] === "--discard-next") {
  //     newArr.splice(arr[i], 2);
  //   } else if (arr[i] === "--discard-next" && arr[i + 1] === undefined) {
  //     newArr.splice(arr[i], 1);
  //   } else if (arr[0] === "--discard-prev") {
  //     newArr.splice(arr[0], 1);
  //   } else if (arr[i] === "--discard-prev") {
  //     newArr.splice(arr[i], 1);
  //   } else if (arr[i] === "--double-next") {
  //     newArr.splice(arr[i], 1, arr[i + 1]);
  //   } else if (arr[i] === "--double-next" && arr[i + 1] === undefined) {
  //     newArr.splice(arr[i], 1);
  //   } else if (arr[i] === "--double-prev") {
  //     newArr.splice(arr[i], 1, arr[i - 1]);
  //   } else if (arr[0] === "--double-prev") {
  //     newArr.splice(arr[0], 1);
  //   }
  //   return newArr;
  // }
  // return newArr;
};
