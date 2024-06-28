const array1 = [1, 2, 3];
function removeLastItem(arr) {
  // let's create a new array by using concat() method to copy the ariginal array
  // whether to make equals which will pass by reference and point to the same location.
  // instead of pointing to the same location we have the copy of the original
  // array   : const newArray = array1 : this could couse the side effect.
  const newArray = [].concat(arr); // this is now a local variable. we have our copy. we are not modifying anything outside
  newArray.pop(); // we are doing pop here but it's on our copy not original array.
  // because here we don't affect the outside, we know what to expect.
  return newArray;
}
// function mutateArray1(arr) {
//     arr.forEach(item => {
//       arr.push(1)
//   })
// }

removeLastItem(array1); // [1, 2, 3]
console.log(removeLastItem(array1)); // [1, 2]

console.log(array1);

// ======================================

const array2 = [1, 2, 3];
function removeLastItem(arr) {
  const newArray = [].concat(arr);
  newArray.pop();
  return newArray;
}

// let's now multiply the array by two
function multiplyBy2(arr) {
  return arr.map((item) => item * 2);
}

console.log(removeLastItem(array2)); // [1, 2]
console.log(multiplyBy2(array2)); // [2, 4, 6]
console.log(array2); // original

// We have 3 distinct arrays and we did not do any side effect.
// Let's comfirm

const array3 = removeLastItem(array2);
const array4 = multiplyBy2(array2);
console.log(array2, array3, array4);

// ============= other example ===========

function a() {
  // is this a pure function? No, because the console.log is window specific.
  // we are using the browser to render something. this function is affecting the
  // outside world.
  console.log("hi");
}

// ===> SAME INPUT --> SAME OUTPUT ===

function a(num1, num2) {
  return num1 + num2;
}
a(3, 7); // whatever how manytimes you will run this fn, the result will be the same.
// this is what we call REFERENCIAL TRANSPERENCY.

// REFERENCIAL TRANSPERENCY: simply means, if I completely a(3, 7) to a(10)
// will it affect any part of my program?
// for example to demonstrate referential transperency

function b(num) {
  return num * 2;
}
// because functions are first citizens in Javascript(can be passed as data, as objects)
// we can do this
b(a(3, 7)); // 20

// then, REFERENTIAL TRANSPARENCY says: if I change b(a(3,7)) to b(10)
// will this change anything to the program?

b(10); // 20  it doesn't change anything because of the law of same inputs
// same outputs.

// these functions have no side effects, they are not affecting the outsid wold.
// they are only touching their own parameters. and parameters are local variables.

/*
THE IMPORTANCE OF PURE FUNCTIONS IS THAT IT MAKES FUNCTIONS VERY EASY TO 
TEST, VERY EASY TO COMPOSE, AND IT AVOIDS A LOT OF BUGS.

BECAUSE WE HAVE NO MUTATIONS, NO SHARED STATE, WE HAVE PREDICTABLE
FUNCTIONS THAT MINIMIZE THE BUGS IN OUR CODES.
*/

// Now, is it possible to have pure functions everywhere?
