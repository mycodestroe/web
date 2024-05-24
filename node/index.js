var largestNumber = function (nums) {
  if (nums.length === 1) {
    return nums.join("");
  }
  let commons = [];

  nums.forEach((item) => {
    commons = [...commons, ...item.toString().split("")];
  });
  commons.sort((a, b) => b - a);
  return commons.join("");
};
console.log(largestNumber([3, 30, 34, 5, 9])); // "9534330"
