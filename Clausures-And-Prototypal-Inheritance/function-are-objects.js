// functions are objects too in javascript

// We can invoke a function in 4 types:1 => as a method, 2. as calling a function, 3. using a method call();
// 4. by function constructor

// 1. functional

function one() {
  return 1;
}

one(); // This is a function invocation

//---2. Object ---------------------
const obj1 = {
  two: function () {
    // this function is an object cze it's inside an object
    return 1;
  },
};

obj1.two(); // Now the function is being called by obj1 instead to be this keyword
// the this keyword is updated to obj1. this might have to equal to window object.

//--- 3. using call() method -----

function three() {
  return 1;
}

three.call();

// Invoking a function by a function constructor

const four = new Function("return 4");
four();

// or   => it can be this constructor can receive parameters
const four1 = new Function("num", "return num");
four();

/*
Objects can not be called as functions do. we can't use the buit in method like
.call(), .bind(), .appy() or use some properties like name, ... 

functions are objects and are special type of object that is a callable objects
with the brackets notation for invoking the function containing the code.

It has some properties like call(), apply(), bind()

Why is this important? 

Because function can stored as data, move them arround, they can be passed arround like data.
not just perform some operations for us.
*/
