/* A core aspect of Object Oriented Programming is inheritance that means Passing
Knowledge down.

Let's create the game to internalize the OOP consepts
*/

class Elf {
  constructor(name, weapon) {
    this.name = name;
    this.weapon = weapon;
  }
  attack() {
    return "Attack with" + this.weapon;
  }
}

const fiona = new Elf("Fiona", "Ninja Stars");
// let's use spread operator to clone what fiona has
const ogre = { ...fiona };
ogre.__proto__; // res: {} , empty object
Elf.__proto__; // res: Elf{}         ogre is not pointing to the same location as fiona in memory.
console.log(fiona === ogre); // false
ogre.attack(); // this is an error because ogre is not referencing attack method.

// NOW HOW CAN WE EXTEND THE Elf object?
// ==> this is where inheritance comes in

// now let's rename the Elf class to better write clean codes
//
// To be able to do inheritace  let's do this

class Character {
  constructor(name, weapon) {
    this.name = name;
    this.weapon = weapon;
  }
  attack() {
    return "Attack with" + this.weapon;
  }
}

// Making subclassing in OOP

class Elf extends Character {
  // Now, To make it more interesting by adding extra property to what were inherited
  // from the base object that is Charactor

  constructor(name, weapon, type) {
    // it's important to use the super class to refere to the extended class/base object
    super(name, weapon);
    this.type = type;
  }
}

// Let's make another class of Ogre
class Ogre extends Character {
  constructor(name, weapon, color) {
    super(name, weapon);
    this.color = color;
  }

  // may be this one also has a method
  makeFort() {
    return "Strongest fort in the world made";

    // by creating a method here, is like making prototype underneath the hood
    // but javascript has done this for us as we used classes

    //Ogre.prototype.makeFort;
  }
}

const fionah = new Elf("Fiona", "Ninja Stars", "house");
fionah;
const shrek = new Ogre("Shrek", "club", "green");
shrek;

// Now we can use the same codes over and over in a well organized way
// by inheriting the base class(Charactor) and add more properties
// as we want.this is so poweful

// Let's make some test to check the prototype chain
console.log(Ogre.prototype.isPrototypeOf(shrek)); // true
console.log(Elf.prototype.isPrototypeOf(fiona)); // true
console.log(Character.prototype.isPrototypeOf(Ogre)); // False
console.log(Character.prototype.isPrototypeOf(Ogre.prototype)); // true

// but there an athor cleaner to test this using instance of
console.log(shrek instanceof Ogre); // true
console.log(fionah instanceof Ogre); // false
console.log(Elf instanceof Ogre); // false
console.log(fionah instanceof Elf); // true
console.log(fionah instanceof Character); // true  because it extends all the way from the character

// What is an instance: instance is when we use the new keyword and create
// a version of a class.

// INHERITANCE: Is inherting something from the higher class. and we use extends keyword.
/* In javaScript inhertance is not copying the functionality. It doesn't simply 
copy what we have in the inherted class(parent class).

instead, it links up the prototype chain. so we are not creating copies 
and making things inefficient.

So it is creating this efficient linking in javascript using prototypal inhertance.

and remember that javascript is all about objects. it is objects inherting from
objects. that's it. there are no technical classes.
 */
