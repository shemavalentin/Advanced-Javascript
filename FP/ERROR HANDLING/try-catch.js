function fail() {
  try {
    console.log("this is working");
    throw new Error("Ooopsie!!!");
  } catch (error) {
    console.log(error.stack); // Error can have three properties(stack, message, name)
    console.log(error.massage); //
    console.log(error.name);
  }
}
fail();

/*
we try codes we need to evaluate for errors and when the compiler sees
the throw new it stops executing and pass to catch to display the error message.
what happens is: the try evaluate line by line. when it sees throw new Error, it stops 
execution and check if there is a catch block, then it passes this new Error object
to catch; 

*/

function fail() {
  try {
    throw new Error("Ooopsie!!!"); // it will stop by here and go to check if there is a catch block
    // to catch the error.
    console.log("this is working"); // this won't run.
  } catch (error) {
    console.log(error.stack);
  }
}
fail();

// ---------------------------

function fail() {
  try {
    throw new Error("Ooopsie!!!"); // it will stop by here and go to check if there is a catch block
    // to catch the error.
    console.log("this is working"); // this won't run.
  }  // when there is no catch block, it will raise a syntax error.
}
fail();

// ============================

function fail() {
  try {
    console.log("this is working"); 
    throw new Error("Ooopsie!!!"); 
  } catch (error) {
    console.log(error.stack);
  } finally {
      // this finally key says: whatever there is error or not, do something for me
      console.log('still good')
      return 'returning fail'
    }
    
    // codes written in here won't run because the compiler is running the try 
    // catch block.
}
fail();
 

/*
now this type of error handling is can be used to catch any type of synchronous errors.
*/


// TRY AND CATCH can be nested 
try {
    // this will be executed first
    try {
        something();  // this will throw an error
    } catch (e) {
        throw new Error(e)  // then catched here
    }
} catch (e) {
    console.log('got it', e)  // then finally the error will be catch in the parent try catch block.
}

// THIS TRY CATCH BLOCK WORKS ON SYCHRONOUS ERRORS/ SYNCHRONOUS CODE.

// for example , error in the following code won't be cought

try {
    setTimeout(function () {
        fakevariables;
    }, 1000)
} catch (e){
    console.log('got it', e) 
}

// then we need a way to handle asynchronous errors,