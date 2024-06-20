// IIFE: Intermediately Invoked Function Expression
// This was used by js programmers to solve the issue of global variables

// this function is a function expression  that is called immedialtely and JS engine
// going to see it as a function declaration due to the paranthesis. this pattern was used
// by libraries like JQuery to avoid variable collision.

(function () { })(); // this is an IIFE. anonymous function and immediately invoked.

// What if I make a function declaration like this:

function () { } ();  // this will error out telling that there is a synthax error
// you can't really call a function declaration immendiately

(function () { 
    // all what is written here will be accessed inside here.
})();