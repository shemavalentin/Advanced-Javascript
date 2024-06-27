// Closures are of important and give you super power in javascript

/* THEY ARE OF TWO IMPORTANCE EVEN THOUGH THERE ARE MORE

1. Memory Efficient
2. Encapsulation

these two are more muraculous and are superpower in Js
*/

// MEMORY EFFICIENT
function heavyDuty() {
  // using a nice way to create a big a big array
  const bigArray = new Array(7000).fill("😄");
  return bigArray;
}

heavyDuty();

// the above example may be silly but let's say we need access the by the index

function heavyDuty(index) {
  // using a nice way to create a big array
  const bigArray = new Array(7000).fill("😄");
  console.log("Created!");
  return bigArray[index];
}

heavyDuty(600);
// what if we call it multiple times?
heavyDuty(600); // Created and get destroyed
heavyDuty(600); // Created and get destroyed
heavyDuty(600); // Created and get destroyed

/*
We are creating a bigArray, filling in it some entries, adding data into
our memory which we have limited memory.

we are creating it everytime. every time we run this function, we create that
memory that hold that array and then we return it. And because nothing is referencing it
it get destroyed. this doesn't sound very efficient. Would it be great if there was
a way for us to create this array. and because we know it is going to be used alot
to only create it once and just have it in memory therefore we can access it instead 
of doing all that work.how can we do that with closures.
*/

heavyDuty(600);
heavyDuty(600);
heavyDuty(600);

// using a closure function

function heavyDuty2() {
  // using a nice way to create a big a big array
  const bigArray = new Array(7000).fill("😄");
  console.log("Created again!");
  // creating a function closure to reference the function that we will run
  // multiple times.
  return function (index) {
    return bigArray[index];
  };
}
const getHeavyDuty = heavyDuty2();

getHeavyDuty(688);
getHeavyDuty(700);
getHeavyDuty(800);
