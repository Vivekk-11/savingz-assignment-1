Number.prototype.comma = function () {
  return this.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

const a = 1000000;
console.log("Result:-", a.comma());
