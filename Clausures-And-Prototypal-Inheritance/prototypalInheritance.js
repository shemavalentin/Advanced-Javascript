/* As said in javascript, everything in JS is object.

for example arrays can get access to the properties and methods of the Object (the parent objects) in javascript
and same with functions through the chains called prototipal inheritance

Let's see this in codes using the special way in javascript
 */

// if I do

const array = [];
// press enter when in developer tool

array.__proto__; // then press enter,  we see an array. we need to write the underscores proto underscores
// to go up the prototype inheritance chain to get object.

// Let's go up again
array.__proto__.__proto__; // we get a BASE OBJECT where everything including functions and arrays
// get created. it doesn't look like an array but object with {}.

/* LET'S NOW USE FUNCTION TO SEE */
function a() {} // an empty object

// What if I go up the prototype chain?
a.__proto__; // result: ƒ () { [native code] }. this is a BASE FUNCTION where all function
// are created from.

/* When we go up again, we get the Base Object as we've seen on arrays. let's see */

a.__proto__.__proto__;

// {__defineGetter__: ƒ, __defineSetter__: ƒ, hasOwnProperty: ƒ, __lookupGetter__: ƒ, __lookupSetter__: ƒ, …}

// An other example about object.

const obj1 = {}; // I'm able to create this object because of the base object. it inherits from the base object

obj1.__proto__; //  {__defineGetter__: ƒ, __defineSetter__: ƒ, hasOwnProperty: ƒ, __lookupGetter__: ƒ, __lookupSetter__: ƒ, …}

// =========================================================================== //

let dragon = {
  name: "Tanya",
  fire: true,
  fight() {
    return 5;
  },

  sing() {
    return ` I am ${this.name}, the breather of fire`;
  },
};
// dragon.sing();
// dragon.fight();

// Let's say we add another object, and we needed to borrow a method from dragon objet.
// how to do this?

let lizard = {
  name: "Kiki",
  fight() {
    return 1;
  },
};

// To borrow a method we use bind() method
const singLizard = dragon.sing.bind(lizard);

// Let's display the result
console.log(singLizard());

// ========= LET'S SAY THE ABOVE OBJECT GETS COMPLICATED ========

let dragone = {
  name: "Tanya",
  fire: true,
  fight() {
    return 5;
  },

  sing() {
    if (this.fire) {
      return ` I am ${this.name}, the breather of fire`;
    }
  },
};

let lizard1 = {
  name: "Kiki",
  fight() {
    return 1;
  },
};

const singLizard1 = dragone.sing.bind(lizard);
console.log(singLizard1()); // It will result undefined cze the lizard1 does not have the ability of fire set to true
// to satisfay the condition in sing method above.

/* What if we need to perhaps inherit a bunch of properties for the lizard as well to make it poweful
this is where prototypal inhertance comes in. 

What if we create a prototype chain that say, I want object lizard to inherit 
all properties and methods from dragon?

HOW CAN WE DO THIS?
*/

// We will do prototype chain like the following

lizard1.__proto__ = dragone;
lizard1.sing(); // I am Kiki the breather of fire
lizard1.fire; // true
lizard1.fight(); // 1

dragone.__proto__; // gives a base object.

/* by using the .__proto__ we are able to inherit through the prototype chain 
all the method and properties of the dragon and override anything that we've already
declared in our own object that is name and fight stay with us.

but as soon as we say something like sing, Javascript engine is going to say 
lizard1.sing(), hey lizard, let's sing? and then it's going to look through the
properties and say hmm I don't see sing here. I'm going to go up the prototype chain
(because we've created the prorotype chain) and see dragon, do you have sing?
and if dragon has sing then it's going to run it
*/

// when I need to check if an object is a prototype of anorther

dragone.isPropertypeOf(lizard1); // true
lizard1.isPropertypeOf(dragone); // false : It is not dragone inherits lizard1 but lizard1 inheriting dragone.

// ===================== ANOTHER EXERCISE =======================

let dragon3 = {
  name: "Tanya",
  fire: true,
  fight() {
    return 5;
  },

  sing() {
    if (this.fire) {
      return ` I am ${this.name}, the breather of fire`;
    }
  },
};

let lizard3 = {
  name: "Kiki",
  fight() {
    return 1;
  },
};

// Let's create a prototype chain to see how we gain all properties and a method from other object

lizard3.__proto__ = dragon3;
//let's now loop through the lozard3 object to see if it has gained the properties from the parent obj
for (let prop in lizard3) {
  //console.log(prop);
  // Let's here check the properties of lizard3 that it has before it has inherted the dragon3.
  // we use the method that we get from the base object that is (hasOwnProperty)

  if (lizard3.hasOwnProperty(prop)) {
    console.log(prop); // lizard3 only has name and fight others have been inheritad from the prototype chain dragon3.
  }
}

// The javascript engine looks for you through the prototype chain automatically and finds
// hasOwnProperty and use it. it does it automatically

/* NOW, WHY PROTOTYPAL INHERITANCE IS USEFUL?

The fact that objects can share  prototypes means that you can have objects with properties
that are pointing to the same location in memory thus being more efficient.

Imagine if we a ton of lizards and we just copied all the functionality of the dragon onto the
lizard into a different place in memory. that can get overwhelming.

instead, with prototypal inheritance we avoided copying all the functionalities into different
places in memory, we it in just one place.

Anything that inherits from dragon will use sing() method instances, because JS is going to look
up to the prototype chain, which makes things really interesting. now we are being efficient with
our codes. we are not repeating ourselves and we are saving ourselves memory.

*/

// name: is an optional field for a function.
