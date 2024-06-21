// function scope  Vs block scope

if (5 > 4) {
  var secret = "12345";
}
secret; // Because of function scope I can access variable secret

// we only create new function environment or new function scope when a function is created.
// otherwise no new environment created

/* Now, let's create a a Function scope*/

function a() {
  var secret = "12345";
}
secret; // this will give arror it is out of the scope. it can be accessed inside the function.

// In other programming languages, they use Block scope

// That is everytime I see the curly brackets, that is a new environment, that is a block, or new world.

if (5 > 4) {
  var secret = "12345";
}
// in other programming languages you wouldn't be able to call secret like this.
// because it is supposed to be out of the scope.
secret;

/* Then javascript saw this and wanted to enable block scope and introduce the 
use of const and let in ES6
*/

if (5 > 4) {
  let secret = "12345";
  // or

  //const secret = "12345"
}
secret; // by using const and let, you con't access the secret because it
// it is block scoped. you can only access it inside the scope. that  is block scoping

/*

You see varibles declared inside a block scope like if statements, for loops, 
can be accessed from the outside of the opening and closing curly brackets
when using function scope. It means you can use them from outside in function scope 
when we use (var) keyword.

this doesn't mean that you will never use var. there will be the cases you need it.


*/
