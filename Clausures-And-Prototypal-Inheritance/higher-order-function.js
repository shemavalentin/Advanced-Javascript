//A Higher Order Function (HOF) is a function that either takes a function
//as an argument or returns another function.

// Now why higher order are important?  let's look an example

// let's say a function that lets users log in

function letsAdamlogin() {
  let arr = [];
  for (let i = 0; i < 100000000; i++) {
    // this will take longer to verify
    arr.push(i);
  }
  return "Access granted to Adam";
}

// Our company has a lot of employees who need to log in to the system.
// let's say eva needs to login wich will require me to copy the same codes.

function letsEvalogin() {
  let arr = [];
  for (let i = 0; i < 100000000; i++) {
    // this will take longer to verify
    arr.push(i);
  }
  return "Access granted to Eva";
}
letsAdamlogin();
letsEvalogin(); // the best practices of DRY already killed and we are repeating ourselves,
// what if we have millions of employees? will we do this copy and past all the time?

// LET USE THE SECOND LEVEL FUNCTION TO GAIN SOME MORE POWERS.
// A function that accepts parameters

// ex:

function letUserlogin(user) {
  let arr = [];
  for (let i = 0; i < 1000000; i++) {
    // this will take longer to verify
    arr.push(i);
  }
  return "Access granted to " + user;
}
letUserlogin("Eva");

//let's refactor this function a little abit
const giveAccessTo = (name) => "access granted to" + name;

function letUserlogin(user) {
  // we now tell the function what data to use
  let arr = [];
  for (let i = 0; i < 1000000; i++) {
    arr.push(i);
  }
  return giveAccessTo(user);
}
letUserlogin("Eva");

// Let's say we have the other user who is admin

function letAdminlogin(admin) {
  // we now tell the function what data to use
  let arr = [];
  for (let i = 0; i < 1000000; i++) {
    arr.push(i);
  }
  return giveAccessTo(admin);
}
letUserlogin("admin");

/*
Here we just copied more codes we are not DRY. we may have many roles(managers, secretaries) in a company
 */

/* THIS IS WHERE HIGHER ORDERS COME INTO PLAY
We can give it the data, and also tell the function what to do or some extra abilities
when we actually invoke it.
*/

// Ex:

const getAccessTo = (name) => "Access granted to" + name;

function authentication(verify) {
  let arr = [];
  for (let i = 0; i < 1000000; i++) {
    arr.push(i);
  }
  return true;
}

// let's create a function that play the general function to authenticate users.
// this function should be a higher level function that returns or accept a function as paramenter

const getAccessToo = (name) => "Access granted to" + name;

function letPerson(person, fn) {
  // here we gain the power to tell it what
  // data to use + the function. replace fn to be more descriptive.
  if (person.level === "admin") {
    fn(500000);
  } else if (person.level === "user") {
    fn(100000);
  }

  return getAccessToo(person.name);
}
// let's call the function and pass it object and a function
letPerson({ level: "admin", name: "Beni" }, authentication);

// ----------------------------------------------------------
// by making thing more general, we can do things like this
const getAccessTo1 = (name) => "Access granted to" + name;

function authentication(verify) {
  // person here is not working here cze it is not use
  // we add another verification to say if(person.admin){ then do this authentications}
  let arr = [];
  for (let i = 0; i < 1000000; i++) {
    arr.push(i);
  }
  return getAccessToo(person.name);
}

function sing(person) {
  return "la la la lala" + person.name;
}

function letPerson(person, fn) {
  // here we gain the power to tell it what
  // what data to use + the function. replace fn to be more descriptive.
  if (person.level === "admin") {
    return fn(person);
  } else if (person.level === "user") {
    return fn(person);
  }
}

// let's call the function and pass it object and a function

letPerson({ level: "admin", name: "Beni" }, authentication);

// with higher order functions we are able to tell function what to do while invocation
// we have a lotof flexibility.

// Our codes are dry now

// ===========  EXERCISE ON HIGHER ORDER FUNCTION ====

const multiplyBy = function (num1) {
  return function (num2) {
    return num1 * num2;
  };
};
const multiplyByTwo = multiplyBy(2);
const multiplyByNine = multiplyBy(9);
multiplyByTwo(4);
multiplyByNine(5);

// we can write it with a cleaner way by using arrow keys

const multiply = (num1) => (num2) => num1 * num2;

// const multiplyByThree = multiply(3);
// multiplyByThree(45)

/* We can even pass that arrow function with parameters as written 
by only call and the engine will know that it is going to call 
a function */

multiply(4)(5);
