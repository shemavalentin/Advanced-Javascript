/* 
When writing a program, we need a way to organize our codes because it allow us
to have more maintainable codes.

- If we have few variables to deal with, we can have only one file of javascript.

- When a variable defined in a specific scope, it can not be modified by other 
functions outside.

One function does't know what the second function is doing. but we need a way
to share information. how do we do thid?
*/

// We can define a var in the global scope(but this can cause problems)

user = { name: "tight" }; // here all functions will have access to this object through the scope chain. the global scope

function signIn() {
  var textfiled = "here";
}

function isHuman() {
  return ``;
} // this function doesn't know what signIn function is doing. but they may need to
// to share some information.

// ==> When we keep on adding data into that global scope object, this will cause problems

// Tight coupling: means everything is connected really really tightly.so that
// if I modify the user object, for example  one function needs name property
// to be tight and other needs to be nickname. that's means tight coupling.

// => It really means a lot of things having to depend on one another. this also
// creates hard to debug code. this is also poluting the global name space.
