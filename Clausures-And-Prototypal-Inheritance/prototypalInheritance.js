/* As said in javascript, everything in JS is object.

for example arrays can get access to the properties and methods of the object in javascript
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

/* When we go up again, we get the base object as we've seen on arrays. let's see */

a.__proto__.__proto__;

// {__defineGetter__: ƒ, __defineSetter__: ƒ, hasOwnProperty: ƒ, __lookupGetter__: ƒ, __lookupSetter__: ƒ, …}

// An other example about object.

const obj1 = {}; // I'm able to create this object because of the base object. it inherits from the base object

obj1.__proto__; //  {__defineGetter__: ƒ, __defineSetter__: ƒ, hasOwnProperty: ƒ, __lookupGetter__: ƒ, __lookupSetter__: ƒ, …}
