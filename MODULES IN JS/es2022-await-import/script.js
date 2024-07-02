import { largeNumber } from "./script.js";

/*const a = largeNumber;
const b = 7;

console.log(a, b);
*/
// How can we use top level await to expand upon this, remember
// await helps us await something like a fetch function which retuned a promise
// but we also use it on things like import.

// the await can be used to import modules conditionaly, where a module to be imported
// there is a condition to be fulfilled first.

// let do this

let x;
if (1 === 1) {
  const { largeNumber } = await import("./script2.js"); // here the error will raise
  // saying that largeNumber is not defined. it's because largeNumber is not a global scoped
  // large number. here as we are using const, it is now block scoped.
  // we need to declare a variable outside and try to access it from internal

  x = largeNumber;
}

const c = 7;
console.log(largeNumber, c);

// the top level await helps me to import a module when a conditon is true,
// we can even decide to not import modules at the top of our files as this is
// westing ressources, only import it when it is needed.
