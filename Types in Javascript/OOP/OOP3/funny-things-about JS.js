//

var a = new Number(5); // this is a constructor function. it's type will be an object
a;
typeof a; // 'object'

// the above is different to the following

// there is two different ways if constructing th

var b = 5;
b;
typeof b; // it's type is a number because we didn't use constructor function

a === b; //false
a == b; // true, because a got coerced to number

b. // here Javascript will see that you are trying to write an object

/*
In JS when we assign a variable, internally JS engine is going to construct
the number that we've added so that we have access to all method that it is listing
here when you start typing b. 

javascript sees that you want to use object method, so it automatically 
assumes you meant object instead of primitives. it runs constructor internally.
*/

new Date()// this has a built in prototype method so that on these dates we run
// different sort of methods

// Technically, everything in javascript is an object becouse everything
// has a constructor function for it. except (null and undefined) other ones 
// we have methods we can use.