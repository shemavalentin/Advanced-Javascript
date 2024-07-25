// Imperative vs Declarative

/*  Imperative code is  code that tells the machine what to do and how to do it.

Declarative code is code that tells the machine what to do and what should happen.
It doesn't tell the computer how to do things.

Let's think it this way.  => a computer is better at being imperative. means it 
needs to know how to do things.

We as humans are more declarative. if I tell my friend, hey can you pass me that
jug of water? I don't need to tell him, wolk over there, ....... and give me that
jug

*/

// example of imperative(for loops are pretty more of imperative)
for (i = 0; i < 1000; i++) {
  // this is imperative due to many instructions geven here.
  console.log(i);
}

// but we can make declarative
[]
  .forEach((item) => console.log(item))[123]
  .forEach((item) => console.log(item)); // this declarative: we don't tell the
// program what to do, or how to do it.

// The other example of imperative is jQuery

// Other front end frameworks like React are Declarative.

// Why are learning this? well, because FP is more declarative.

// In Function Composition we tell the function what to do not how to do it.
