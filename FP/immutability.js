// Immutability: it means not changing the data/ not changing the state
// but instead, making the copies of the state and returning a new state every time

const obj = { name: "Valentin" };
function clone(obj) {
  return { ...obj }; // this is pure
}

obj.name = "Beni"; // here we changed the object -->immutability(it is changind the copy of obj
// cloned not the outside)  Note: this function is pure.

// Ideally the clone is like doing the following
const obj = { name: "Valentin" };
function clone(obj) {
  return { ...obj }; // this is pure
}

// ideally is like creating a function that copies the state and change the original object
function updateName(obj) {
  // clone here is a function created above.
  const obj2 = clone(obj);
  obj2.name = "Nana";
  return obj2;
}

updateName(obj);
// If we do this
const updatedObj = updateName(obj);
console.log(obj, updatedObj);
// we were able to maintaine the immutability, we didn't change the state

// Otherwise, we are returning copies every time a change is made
