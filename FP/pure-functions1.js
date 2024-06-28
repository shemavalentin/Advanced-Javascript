// what are pure functions?  there is two main things

// 1.  A pure function has to always return the same output
// given the same inputs.

// 2.   The function can not modify anythind outside itself. No side effects

// example: no side effects and given the same inputs --> same output no matter
// how many times we call it.

// 1. no side effects:

const array = [1, 2, 3];
function mutateArray(arr) {
  arr.pop();
}
mutateArray(array); // if we run this, it will give us undefined Cze no we dont return anything
mutateArray(array); // [1]

// but something interested here when we do console.log
console.log(array); // ans: [1,2] only

/* This function has side effects because it is modifying 
the array outside in the global object.

We don't control what might happen if someone calls it again
*/

const array1 = [1, 2, 3]; // this is a shared state that can interact with anything
function mutateArray(arr) {
  arr.forEach((item) => {
    arr.push(1);
  });
}
//let's create another array to mutate the above array
function mutateArray1(arr) {
  arr.pop();
}

mutateArray(array); // if we run this, it will give us undefined Cze no we dont return anything
mutateArray(array); // [1]
mutateArray1(array); // [1,2,1,1]

// but something interested here when we do console.log
console.log(array);

// The order for function calls matter. and this can cause buggs
