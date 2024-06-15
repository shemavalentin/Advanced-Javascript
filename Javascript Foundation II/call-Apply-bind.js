// these functions are mostly asked in seniol developers interviews

function a() {
  console.log("hi");
}
a.call(); // when we invoke a function evrytime there is that call method.
// but we often use the shorthand and remove the call() and write a();
a.apply(); // apply() also works the same as call(); they do the same thing

/* Let's see more examples about call() and apply */
// let's say a game

const wizard = {
  name: "Merlin",
  health: 50,
  heal() {
    return (this.health = 100);
  },
};

// let's create another object

const archer = {
  name: "Robbin Hood",
  health: 30,

  // Now what if we want to use the heal() method and we don't want to repeat ourselves by copying and pasting?
  // what we need now is to be able to borrow using call and apply and remain DRY.
  // We don't want to add to memory.
};

// how to do this??

console.log("1", archer);
wizard.heal.call(archer);
console.log("2", archer);

// ===========  call() can also receive parameters ============

const wizard1 = {
  name: "Merlin",
  health: 50,
  heal(num1, num2) {
    return (this.health += num1 + num2);
  },
};

// let's create another object

const archer1 = {
  name: "Robbin Hood",
  health: 30,
};

// how to do this??
console.log("1", archer1);
wizard1.heal.call(archer1, 50, 30); // here call() keeps taking parameters, paramether
wizard1.heal.apply(archer1, 50, 30); // here call() takes array of parameters. that's the only difference.
console.log("2", archer1);

// the choice of what to use will depend on if you need to pass a list of paramenter
// or use arrays. the important thing is to see if the method you want to borrow has
// the this keyword so that it can be dynamic

/* What about BIND()?

well, simillar to call() and apply(), bind allows us to use the method from another object
wille the two immediately runs the function, bind() method returns a function
with a certain parameters. it is usually used when we want a function to be called latter
on with a certain type of context or certain type of this keyword.

*/

const wizard2 = {
  name: "Merlin",
  health: 50,
  heal(num1, num2) {
    return (this.health += num1 + num2);
  },
};

// let's create another object

const archer2 = {
  name: "Robbin Hood",
  health: 30,
};

// how to do this??
console.log("1", archer1);

// to use bind we have to declare it as a function to use latter on as described
// the function to borrow should have the this keyword.
// bind method allows us to store the method for latter use.
const wizardArcher = wizard1.heal.bind(archer1, 100, 30);
// then call the function to use it
wizardArcher();

console.log("2", archer1);

// exercise====================>

// const array = [1,2,3];

// function getMaxNumber(arr){
//   //code here
// }

// getMaxNumber(array) // should return 3

const array = [1, 2, 3];

function getMaxNumber(arr) {
  return Math.max.apply(null, arr);
}

console.log(getMaxNumber(array));

//==========================

var b = {
  name: "Jay",
  say() {
    console.log(this);
  },
};

var c = {
  name: "Jay",
  say() {
    return function () {
      console.log(this);
    };
  },
};

var d = {
  name: "Jay",
  say() {
    return () => console.log(this);
  },
};

d.say(); // here it will return a function. but when we call it twice:
d.say()(); // this keyword will be lexically scoped inside the function due to arrwo function.

// == HOW TO SOLVE THIS ISSUE--

const character = {
  name: "Simon",
  getCharacter() {
    return this.name;
  },
};
const giveMeTheCharacterNOW = character.getCharacter;

//How Would you fix this?
console.log("?", giveMeTheCharacterNOW()); //this should return 'Simon' bud doesn't

// Answer

const character1 = {
  name: "Simon",
  getCharacter() {
    return this.name;
  },
};
const giveMeTheCharacterNOWo = character.getCharacter.bind(character); //here we used the bind method to bind to obj charactor

console.log("?", giveMeTheCharacterNOW());
