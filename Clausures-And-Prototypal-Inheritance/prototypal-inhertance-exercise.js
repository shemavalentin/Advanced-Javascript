// Exercise - extend the functionality of a built in object

// #1
// Date object => to have a new method .lastYear() which
// shows you last year 'YYYY' format.

new Date("1900-10-10").lastYear();
//'1899'
// Let's see the answer
Date.prototype.lastYear = function () {
  // When you turn this function into an arrow function
  // it gives an error because of the nature of this keyword. because it looks in
  // the parent object, and the arrow function pushes it to not go beyond of the block scope of the method whete it is.
  console.log(this);
  return this.getFullYear - 1;
};

// ============================================================//

// #Bonus
// Modify .map() to print'🗺️' at the end of each iteration.
console.log([1, 2, 3].map());

// ANS

Array.prototype.map = function () {
  let arr = [];
  for (let i = 0; i < this.length; i++) {
    arr.push(this[i] + "🗺️");
  }
  return arr;
};

console.log([1, 2, 3].map());

// this is very dangerous in that to modify the map method is very dangerous becouse
// when someone comes and modify this method it might change all the project where map
// was used.

// So, we never do this we really have another way of doing prototype inheritance using classes

/* OTHER EXERCISE 

How would you be able to create your own .bind() method using call or apply.
*/
// ANS
Function.prototype.bind = function (whoIsCallingMe) {
  const self = this;
  return function () {
    return self.apply(whoIsCallingMe, arguments);
  };
};
