// Doing Constructor Functions in OOP

// No store function

function Elf(name, weapon) {
  // here we use this keyword, no return value
  this.name = name;
  this.weapon = weapon;
}

const peter1 = new Elf("peter", "stones"); // this will give error, to solve this we
// need to use new keyword. Constructor function requires new keyword.

console.log(peter.attack());
const sam1 = new Elf("sam", "fire"); //Elf is a function and every function has prototype property .
//sam1.name;

console.log(sam1.attack()); // here there is the .__proto__ in the background that is pointing
// to the Constructor Function up on the chain as attack() method is not a function
// peter1 or sam1's objects, so that both are able to use the same method, whether to
// copy the same method into different place in memory space.

// when we have a regular function like multipyBy5() the prototype property becomes
// useless. But when it is a Constructor Function (the one we can invoke with NEW)
// the prototype becomes useful.

// Native Constructor Function comes with things like call(), apply, bond, as
// Native Arrays comes with map(), forEach, reduce because they are built on the
// top of Array Constructor Function. In out case, we can add our own prototype
// function that we can add things to

// => creating my own prototype Function

Elf.prototype.attack = function () {
  // this is a regular function that is dynamically scoped
  // it doesn't matter where it is written it's whoever calls it. it is going to change
  // depending on who call it.

  // arrow function here will error out as it is lexically scoped.
  return " Attack with " + this.weapon;
};

/* P.S

The new Key automatically returns the object for us that we have above(that function
having this.name ...) and it will create the elf constructor.

it means it runs: this.name = name; and this.weapon = weapon;
construct elf function for us and give us access to peter1 and sam1.

* When a function is called, the new execition context is created and 
every function we call, we get the this and arguments attached to it.

 THE INTERESTING THING IS THAT WHEN WE USE THE NEW KEYWORD  instead of (this)
 pointing to window object like it usually does, the NEW keyword changes what (this)
 is pointing to when to when a new execution context is created.

 Instead, the NEW keyword will say hey, I want you to point (this) to the object
 we just created so that now this becomes peter1 or sam1. removing NEW keyword it 
 won't work. it won't create the object. NEW is very powerfull
*/

/*
and any function that is invoked using new keyword, it's called a constructor
function

Constructor functions are invoked using new keyword.

Always Constructor functions start with capital letters

*/

// LET'S LOOK HOW WE CAN CREATE A CONSTRUCTOR FUNCTION USING NATIVE FUNCTION
// IN JS

const Elf1 = new Function(
  "name",
  "weapon",
  `this.name = name;
  this.weapon = weapon;`
);

const valentin = new Elf1("valentin", "fireworks");
valentin; // {name: 'valentin', weapon: 'fireworks'}

// A Function Constructor or Constructor Function  are simply to allow us to
// use new keyword and create these objects for us.
