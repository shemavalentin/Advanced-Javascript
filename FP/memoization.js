function addTo80(n) {
  return n + 80;
}
addTo80(5);
addTo80(5); // when we run this function, we have to go into the above steps over and over
addTo80(5); // here we run the calculations 3 different times.

// ==============================

function addTo80(n) {
  // what if this operation takes a realy long time?
  console.log("long time"); // we will alwayse run into these steps
  return n + 80;
}
addTo80(5);
addTo80(5);

// Is there a way to optimize this and once it is the same exact value of n
// it returns the result the cashed result.

// let's emprove the above function to use memoization.
//====================================================

function addTo80(n) {
  return n + 80;
}

// let's create an empty object to hold cashed objects.
let cache = {};
// function to check if a value exists in the cashe
function memoizedAddTo80(n) {
  if (n in cache) {
    // here I can use also cache.n as long as it's an object
    return cache[n]; // can use also cache.n
  } else {
    console.log("long time");
    cache[n] = n + 80;
    return cache[n];
  }
}
console.log("1", memoizedAddTo80(5));
console.log("2", memoizedAddTo80(5)); // Now it is momoized and it won't calculate again.

// if the parameter changes it will go through the function again.

/*
What is memoization now?

Memoization is a form of caching that involves caching the return value
of a function that is the return value of this function, based on its parameters. 

*/
