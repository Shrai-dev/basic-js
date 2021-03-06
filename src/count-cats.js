const CustomError = require("../extensions/custom-error");

module.exports = function countCats(arr) {
  let arr1 = [].concat(...arr);
  let num = 0;
  for (let i=0; i<arr1.length; i++) {
    if (arr1[i] === '^^') 
      num = num + 1;      
  } return num;
};
