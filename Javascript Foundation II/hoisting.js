/* 
*HOISTING: is the behavior of moving the variables or function declarations to the top of their
respective inviroments during compilation phase.

==> Variables are partially hoisted
==> Function declarations are hoisted

*/
console.log("1----------------");

// When I console.log var teddy before I declare

console.log(teddy); // result: undefined   // in most languages it is not like this
// this is becouse in js there hoisting that allocates the memory before execution

// I can even run the function before I write it down

console.log(sing()); // this is due to hoisting. It is the javascript engine allocating memory for
// the variables and functions that it sees in your code during the creation phase before it
// executes it.

var teddy = "bear";
function sing() {
  console.log("ohhh la la ala ala");
}

// 1. There is something called the Creation Phase: That is when we use the global object and the
// This keyword, and they equal each other.

// 2. And then there the second phase, which is the execution phase, this is while we run our codes.

// 3. Another important thing is something that devide the above mentioned phases.
// that thing is: HOISTING
/*

During the creation phase, the javascript engine is going to look through the code.
and as soon as it sees two things, either the VAR or the FUNCTION keyword, it's going
to say, let's allocate the memory as long as I found these keywords.


const and  let keywords are not hoisted, as well as it sees these it will error out.
And in most languages where is no hoisting, you will see errors. we woudn't be able 
to use variables or functions before we've actually written them.  the compiler won't know 
anything about it.

*/

console.log("1---------------");
console.log(teddy);
console.log(sing2()); // this will error out, because sing2() it's not a function here.

console.log(sing2); // But when we use var sing2 it will be hoisted and assigned UNDEFINED

// USING FUNCTION EXPRESSION

var sing2 = function () {
  console.log("uhhh lalala lala lal");
};

// => During the creation phase the (var) variable is going to be hoisted up and it's
// going to be assigned UNDEFINED initially.

// with the function expression, is only going to be run after it was defined.

console.log(sing2()); // but if we move it here it will work properly because it is used after
// the function is defined.

// USING FUNCTION DECLARATION
function sing() {
  console.log("ohhh la la la la");
}

// -----------  TO REVIEW --------------

// =>  With our global execution context, we have a few things that happens.
// We have the global object
// and THIS object during the creation phase that gets assigned.

// => During the execution phase we run the code.

// but it is important to remember that during this creation phase, we also have the act of hoisting
// Something that is quite unique in Javascript where we see the function or the var keywords
// as the first items on the line , we allocate space for them on our heap to make sure that the
// javascript engine is ready for the execution.
