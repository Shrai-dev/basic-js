const CustomError = require("../extensions/custom-error");

const chainMaker = {
  chain: [],
  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    this.chain.push(value);
    return this;
  },
  removeLink(position) {
    if (
      typeof position !== "number" ||
      position < 1 ||
      position > this.chain.length - 1
    ) {
      this.chain = [];
      throw new Error();
    }
    this.chain.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    let arr = this.chain.map((e) => "( " + e + " )").join("~~");
    this.chain = [];
    return arr;
  },
};

module.exports = chainMaker;
