function loop() {
  for (var i = 0; i < 5; i++) {
    console.log(i); // the for loop will loop until the condition is done and get
    // get out to execute the next function scoped console.log
  }
  console.log("Final", i); // that is here. but when we use let and const for block scoping
  // it won't run.
}

// what is going to happen when we run this function?

// it won't run because we did not invoke the function.

loop();

// let's decribe here

function loop2() {
  for (let i = 0; i < 5; i++) {
    console.log(i);
  }

  console.log("Final", 5); // It will errors out here because we are trying to
  // access the block scoped environment from outside because of let. with var we were able to access.
}

loop2();

/* TO REVIEW */

/*
The block scoping means to declare a variable not inside a function but arround
any curly brackets like if statements, for loop

*/
