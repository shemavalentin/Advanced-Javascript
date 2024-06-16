// in JS almost everything is an object
const arr = [1, 2, 3];

// it is the same as saying

const arr1 = {
  0: 1,
  1: 2,
  3: 3,
};

// both they generate typeof object

// what if I need to check if an aray is an object

Array.isArray([1, 2, 3]); // true
Array.isArray({}); // false

// arrays in javascript are objects
