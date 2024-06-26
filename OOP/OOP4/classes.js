// nobody really likes using prototypes it's kind of looks wierd.
// ES6 introduced classes

// Object oriented programming was created in mind with classes

// classes: a class being a blue of what we want to build or want to be created

// ES 6 class

class Elf {
  // Constructor:something that gets run everytime we instantiate or use the new keyword on class.
  constructor(name, weapon) {
    this.name = name;
    this.weapon = weapon;
  }
  // Now the beauty of class is that as OOP sugests, we want to keep all our
  // functionality inside this box. All the properties, all the states, all the methods
  // all the actions together

  // adding a method to act on our states inside the class
  attack() {
    return " Attack with " + this.weapon;
  }
}

const peter = new Elf("peter", "stones");
console.log(peter instanceof Elf); // returns true. => used to see if peter is an instance of elf
// peter is an object, NEW Keyword is used to call a class and instantiate an object
console.log(peter.attack());
const sam1 = new Elf("sam", "fire");
console.log(sam1.attack());

// like the above we now have OOP): not really. classes in javascript is what we call
// syntactic sugar. underneath the hood, in javascript we are still using prototypal inheritance

// We are not using classes as class work in other languages

/*
PS: 1. you may be asked in interview if classes exist in JS?
Answer yes. but in background it's running prototypal inheritance.

2.  By the way, you can ask yourself why the task method was not added
to the constructor?? Why do we just put it outside the constructor?

This is an interesting question you might get in an interview.

==> ANS:  everytime we use a new keyword and create or instantiate a class
the constructor function gets run and it is because each Elf(name of our class here)
has a unique name and perhaps a unique weapon.

but attack() is shared by all instances of the class.

If we moved the attack  method to the constructor, that's going to take up
memory space.

instead of creating attack method from each objct, which is what we would do 
if we added the constructor and that's something we've been trying to avoid,
instead, we just have one, one function in one location that all these instances 
can access. that's it. it is efficient and beauty.

*/
