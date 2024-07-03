// let's use clausure to emprove this function

function addTo80(n) {
  return n + 80;
}

//let cache = {};   // this is changing the value out of this function
function memoizedAddTo80() {
  let cache = {}; // Once it is like this, once the func get call this will always
  //reset and not memoize values and the cache became an empty object.
  // to solve this let's use clausures. and this is a way to avoid the global scope
  return function (n) {
    if (n in cache) {
      // now because of clausures, we are able to access the object cache
      return cache[n];
    } else {
      console.log("long time");
      cache[n] = n + 80;
      return cache[n];
    }
  };
}
// because when you run this function it will return another function, you need to
// assign it to a variable and call that variable

const memoized = memoizedAddTo80();
console.log("1", memoized(5)); // took long time at first
console.log("2", memoized(5)); // already in cache and memoized cze it's the same parameter
console.log("3", memoized(4)); // took longer cze it's a new param

// console.log("1", memoizedAddTo80(5));
// console.log("2", memoizedAddTo80(5));

//
