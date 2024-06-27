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
  }
}

const fionah = new Elf("Fiona", "Ninja Stars", "house");
fionah;
const shrek = new Elf("Shrek", "club", "green");
shrek;

// Now we can use the same codes over and over in a well organized way
// by inheriting the base class(Charactor) and add more properties
// as we want.this is so poweful
