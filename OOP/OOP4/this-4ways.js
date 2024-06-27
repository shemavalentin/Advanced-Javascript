// 4 ways to use THIS keyword
//----------------------------//

// 1. NEW BINDING: this new keyword is used with constructor functions

function Person(name, age) {
  this.name = name;
  this.age = age;
}

// creating object using the function/ class

const person1 = new Person("valentin", 32);
person1;

// the new binding allows us to assign (this) to the object that we instantiate

// 2. IMPLICITY BINDING  : here we use an object

const person = {
  name: "shema",
  age: 32,
  hi() {
    console.log("hi" + this.name); // the this keyword will refer to person object.
    //that is implicity binding, it's the most common one.
  },
};

// 3. EXPLICITY BINDING

// Here we dictate exactly what the this keyword should refer to.

const person3 = {
  name: "shema",
  age: 23,
  hi: function () {
    console.log("hi" + this.setTimeout); // you can remove the this keyword
  }.bind(window), // here this keyword is binded to window
};

person3.hi(); // hifunction setTimeout() { [native code] }: native from window object

// 4. ARROW FUNCTION
/*
Unlike all the other times above, where this was dynamically scoped
that is it gets determined whenever it gets called.

With the arrow functions we can do lexical scoping: that is whenever we 
write the function that's what this binds to.

*/

const person4 = {
  name: "shema",
  age: 40,
  hi: function () {
    var inner = () => {
      // this arrow function will influence the this keyword to refere to it as a function, whether to go to window object.
      console.log("hi" + this.name);
    };
  },
};
