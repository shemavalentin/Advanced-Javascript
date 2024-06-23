// This keyword is the object that the function is a property of

// This means symply:

Obj.somefunction(this); // when we do something inside the function, now we have access to the this keyword

// this referes to the object that the function is a property of.

// In the Developer tool when you type this, it shows you that it refers to windows object.

this === window;

// The this get set during the execution context as window.
// When the global execution context is created during the execution phase, the
// global object and this that are equal they get created too.

function a() {
  console.log(this);
}
a(); // It will give us " window ". now this === window

// it means we are calling window.(a); what is the object that the function is a property of?

// now, a() is a property of window object.

// Another example:

function b() {
  console.log(this);
}
b(); // the result is: window

// but when we put the 'use strict' like in the following, it will be undefined

function b() {
  "use strict"; // " use restrict" was created to avoid common mistakes in JS
  // the use strict allows us to not have the this where this referes to the window object. in the global scope
  // It actually retricts the global execution context to look in the global context through lexical chain.
  console.log(this);
}
b();

// this is initially created at globl context execution and it is also created
// when a new function is created. every function has this object keyword.

/* A real example*/

const obj = {
  name: "Billy",
  sing: function () {
    // here we can also write sing(){return "lalala" + this.name} wich is a little bit cleaner
    return "lalala" + this.name; // this here is refering to it's object obj
    // return 'lalala' + 'billy'; we could have written like this but when name: Billy
    // changes, the function will return error. it won't be dynamic. but when we use
    // this with the object property when the property changes also the function will change accordingly.
  },
};

obj.sing();

// Rule of thumb: this referes to whatever that is at the left of the dot.object that the function is a property of
// Whatever that is at the left.
/*
  TO REMEMBER: With an object we access properties and methods of an object and 
  a method of an object is a function that is inside an object.

  The property and methods are accessed using the dot notation.

  and when it cames to this, this simply referes to inside of this function 
  what is to the left of the dot? well, object
 */

const obj1 = {
  name: "Claire",
  sing() {
    return " lalala " + this.name;
  },
  // what if I add another function
  singAgain() {
    //return "lalala " + this.name + "!"; // but this is not good, being a good programmer is to be DRY
    // What we have to do is to not copy the same code over and over. we have to call the function that
    // has we want to add to then add this addition.

    return this.sing() + "!";
  },
};

obj1.singAgain();

// Now, why the this keyword is so important

// 1. It gives methods access to their objects
// 2. execute same code for multiple objects.

// Let's give another examples to explain the second point

function importantPerson() {
  console.log(this.name + "!");
}

const name = "valentin";
const obj2 = {
  name: "Cossy",
  importantPerson: importantPerson, // calling this function (method as it is inside the object) to execute our codes
};

const obj3 = {
  name: "Jaccob",
  importantPerson: importantPerson, // a function(method as it is inside the object) called to execute codes of this objects.
};

obj2.importantPerson();

// this keyword is like asking 'who called me'
// and it heps us to clean up our codes.

/* Advanced exercise*/

const a = function () {
  console.log("a", this);
  const b = function () {
    console.log("b", this);
    const c = {
      hi: function () {
        console.log("c", this);
      },
    };
    c.hi();
  };
  b();
};
a();

// it will result the following:
/*
a Window {window: Window, self: Window, document: document, name: '', location: Location, …}
b Window {window: Window, self: Window, document: document, name: '', location: Location, …}
c {hi: ƒ}*/

/*
=> a() function is pointing to the wondows object. no other some other thing to the left of the 
dot
=> a() function executed b inside of it. a(b());

=> hi() function a property of c object. to mean, left of the dot when using this keyword
there will be c.  : c.hi();
*/

// =========================================

// another example

const ob = {
  name: "Billy",
  sing() {
    console.log("a", this);
    var anotherFunc = function () {
      console.log("b", this);
    };
    anotherFunc(); // was called inside the sing function. object did not really call this function.

    // because this function was not called by the ob means it is not it's property.
    // In Javascript, this keyword defaults to window object.
  },
};

/* Now the result 
ob.sing();
a {name: 'Billy', sing: ƒ}
b Window {window: Window, self: Window, document: document, name: '', location: Location, …}

every thing in javascript is lexically scoped. => how you write it determines
what we have available, except this keyword.

the this keyword is actually dynamcally scoped
that is, it doesn't matter where it is written, it matters how the function was called.
*/

/* Now to solve the pitfall there are two possible ways, let's look */

// 1. using arrow function
const object = {
  name: "Billy",
  sing() {
    console.log("a", this);
    var anotherFunc = () => {
      // now the pitfall solved by using arrow function in ES6. THIS is not refering now
      // to windows object.
      console.log("b", this);
    };
    anotherFunc();
  },
};

object.sing();

// by using bind();

const objec = {
  name: "Billy",
  sing() {
    console.log("a", this);
    var anotherFunc = function () {
      console.log("b", this);
    };
    return anotherFunc.bind(this);
  },
};

object.sing()(); // here I called the function twice and the returned function is
// binded to the objec object so that (this) keyword does not refer to window object
// but on the current object. this was used before ES6.

/* OR USING self method. this was used in JQuery and the first version of the Angular */

const obje1 = {
  name: "Billy",
  sing() {
    console.log("a", this);
    var self = this;
    var anotherFunc = function () {
      console.log(self);
    };
    return anotherFunc;
  },
};

object.sing()();
