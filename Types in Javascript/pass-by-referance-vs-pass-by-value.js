// Primitive types are immutable

var a = 5;
var b = a; // this is like copying the value of a and past it to be.
// they don't relate each other.

// P.S: pass by value simply means copy a value and we create that value somewhere else in the memory

b++;

console.log(a);
console.log(b);

// what about passing by reference which is done on objects?

let obj1 = { name: "Yao", password: "123" };
//let obj2 = 'address in memory'

obj1 = obj2; // this is not copying obj1 and paste by showing that both obj1 and obj2 are pointing
// at the same location in the memory

obj2.password = "easypeasy";
console.log(obj1);

// // Both passwords changed because of pass by reference
console.log(obj2);

/* 
WHY PASSING BY VALUE IS GOOD? => It is good because we point at the same location
and avoid to copy and paste when we need the same content of an object unlike by passing
value

BUT IT COULD BAD: WHY? => Because somebody may come and change properties of an object
that points to the other object's location in memory heap and all get changed.
*/

// let's try on array to prove that arrays are objects and pass by referrance.

var c = [1, 2, 3, 4, 5];
var d = [].concat(c); // when we don't need to modify the c object.
//d = c; // here both objects are pointing to the same location and we save memory
d.push(123712378327812787812);
console.log(d);
console.log(c);

let obj = {
  a: "a",
  b: "b",
  c: {
    deep: "try and copy me",
  },
};
let clone = Object.assign({}, obj); //due to Object.assign(), the cloned object is not changed

// 2nd way of doing this: spread operator ...    . and it will cline the first layer
// what we call shallow clonning cze the c address which referance deep object does not change.
let clone2 = { ...obj };

// Now, how do we do deep cloning of an object? let's use JSON.parse() method.
let superClone = JSON.parse(JSON.stringify(obj));

obj.c.deep = "hahaha";
console.log(obj);
console.log(clone);
console.log(clone2);
console.log(superClone);
