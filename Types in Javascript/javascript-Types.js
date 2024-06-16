// Primitive types (data that only represent a single value)
//-----------------
typeof 5; // in memory the value is 5
typeof true; // in memory the value is true
typeof "to be or not to be"; // single value
typeof undefined; // It is the abscence of a definition. It is used as the default value
// when the javascript engine initializes variables(hoisting). functions also return undefined when
// there is no return keyword. or when there is missing properties of an object.

typeof null; // it is the abscence of value.
typeof Symbol; // the value is symbok in memory

// Non Primitive types
//....................

typeof {};
typeof [];
typeof function () {};

// functions in JS are also objects.

/*TWO DISTINCT IN JS 

1. we have primitivie types
2. Non primitive types
*/
