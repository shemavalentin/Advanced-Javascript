/**
 * this term has different variations like LEXICAL SCOPE, LEXICAL ANALYSIS
 * but what is Lexical environment: it is simply where you write something.
 * because we know how the javascript works; that is: it looks through our codes and reads through our codes
 * where we write our codes is important. a lexical environment means that.
 *
 *
 * you can think of it as the universe/environment that gets created every time we create an execution context.
 *
 * When someone says, I'm doing a Lexical analysis or a compiler is doing a lexical analysis, all
 * it's saying is it's checking to see where the words were writen and their location.
 * Lexical means at compile time. it looks on the paper were codes are written.
 *
 * Functions are declared at global object to create global execution context.
 */

function printName() {
  return " Shema Valentin";
}

function findName() {
  function a() {
    // This function is lexically insidr the find my name world.
    // because this way, the compiler knowing where this function is written can decide
    // and make decisions as to where to put things and what action to take. and what
    // it can access in this world
  }
  return printName();
}

function sayMyName() {
  return findName();
}

window.sayMyName();

/* 
* in Javescript Every time we have a function, it creates a new world for us inside of that function. 
* We are alwayse shot up into that planet everytime we add it into the call stack. and inside that planet
we can do different things, have different information. and latter on they can communicate one each other.
* 



P.S: In javascript our lexical scope (available data + variables where the function was defined)
determines our available variables. Not whete the function id called(dynamic scope).

*/
