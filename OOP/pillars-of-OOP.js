/*
=> 1.   Unlike procedural programming where we just have functions modifying data 
with no real structure, OOP puts things in Objects. in a constainer and organizes
things into units that model real world application. this is ENCAPSULATION

In encapsulation we wrap codes into boxes that are related to one another.
so that these boxes can just interact with each other using the methods 
and properties that we make available. this makes code easier to maintain
and more reusable. The litte classes we created, we may use them whenever 
we want.

2      ABSTRUCTION: Abstruction simply means hidding the complexity from the user.
That is creating simpler interfaces such as hey, I'll take care of the class
all you do is instantiate a class, and there you go. take an example of Elf,

The idea of abstruction says: here are the method and properties that you can use
don't worry everything else, I'll do all the calculations behind the scene. and this
reduces the complexity because we see the method and understand what the class
can do.

3.      INHERTANCE: by inherting from the other classes we avoid having to rewrite the
same code. and we also save memoryspace by having share methods.

Inhertiance is a very important consept and it's my favorite part of OOP :)

4.      POLYMORPHISM: The term means Many Forms
the definition is still debatable. But the idea is the ability to call the same 
methods on different objects, and each object responding in different way. that is 
polymorphism.
*/

// POLYMORPHISM Example

class Character {
  constructor(name, weapon) {
    this.name = name;
    this.weapon = weapon;
  }
  attack() {
    return "Attack with" + this.weapon;
  }
}

class Elf extends Character {
  constructor(name, weapon, type) {
    super(name, weapon);
    this.type = type;
  }
  attack(cry) {
    return " Attack with" + cry;
  }
}
// Let's make another class of Ogre
class Ogre extends Character {
  constructor(name, weapon, color) {
    super(name, weapon);
    this.color = color;
  }
  attack() {
    return "arghhhhh";
  }
  // may be this one also has a method
  makeFort() {
    return "Strongest fort in the world made";
  }
}

const fionah = new Elf("Fiona", "Ninja Stars", "house");
fionah;
const shrek = new Ogre("Shrek", "club", "green");
fionah.attack("weee");
shrek.attack();

// In polymorphism we have the ability to process objects differently depending
// on their data type or classes.

/*
Because Javascript is a dynamically typed language, it actually limits the
amout of polymorphism that we can have. But the idea still the same.

The ability to redefine methods for derived classes and allowing us to reuse
some of the functionality but also customize methods to their own objects 
and classes.

Polymorphism is useful because we don't have to necessarily copy and  paste
code over and over. we can use some of the functionality from a super class
to adapt to our own specific needs.
*/
