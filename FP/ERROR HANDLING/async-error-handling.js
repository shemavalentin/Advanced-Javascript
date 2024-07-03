// when you use try and catch in an async function, the operation will continue
// the execution as there no error handling. we need a way to handle async errors

// we use .CATCH() method to handle asynchronous errors

// let's see how to handle errors in PROMISES and  also in ASYNC AWAIT
// which will have an interesting way of handling errors.

// PROMISES
Promise.resolve("asyncfail") // when you run this it will return a promise
  .then((response) => {
    // we have to use .then to return something from a promise
    console.log(response); // now it will return the asyncfail
  });

// ==============================

// when we do this

Promise.resolve("asyncfail")
  .then((response) => {
    // let's throw an error
    throw new Error("#1 fail"); // this cause a big problem when there is no
    // catch especially in the browser. it cause what we call SILENT FAIL.
    //it fails silently. our codes could have failed and we have no idea,
    // this is extremly dangerous.
    return response;
  })
  .then((response) => {
    console.log(response);
  });

// =========================== using .catch  to catch error

Promise.resolve("asyncfail")
  .then((response) => {
    // let's throw an error
    throw new Error("#1 fail");
    return response;
  })
  .then((response) => {
    console.log(response);
  })
  //   .catch((err) => {
  //     console.log(err);
  //   });
  .catch((err) => {
    // return err;
    throw new Error("#2", err); // this will let's the compiler go to the 2nd catch
  })
  //we can we keep on chaining
  .then((response) => {
    console.log(response.message); // will console.log fail
  })
  // keep on chaining
  .catch((err) => {
    console.log("final error", err); // this won't run because of the 1st throw error.
    // when the first throw error is hit, the compiler starts to look for .catch()
    // the first it finds that's the error will be returned.
  });

// ==========================================================

// WHAT IF WE HAVE A PROMISE INSIDE ANOTHER PROMISE

Promise.resolve("asyncfail")
  .then((response) => {
    Promise.resolve().then(() => {
      // When the promise first run it's a pending promise
      // the compiler doesn't care, and there no error inside here,
      // and it reads synchronously, it continues
      throw new Error("#3 fail");
    });
    return 5;
  })
  .then((response) => {
    console.log(response);
  })
  //   .catch((err) => {
  //     console.log(err);
  //   });
  .catch((err) => {
    // return err;
    throw new Error("#2", err); // this will let's the compiler go to the 2nd catch
  })
  //we can we keep on chaining
  .then((response) => {
    console.log(response.message); // will console.log fail
  })
  // keep on chaining
  .catch((err) => {
    console.log("final error", err); // this won't run because of the 1st throw error.
    // when the first throw error is hit, the compiler starts to look for .catch()
    // the first it finds that's the error will be returned.
  });

/// Sincerely , we need to hande errors at each promise when they are nested.
/// we have to catch error at each level of nested promises as asynchronous
/// error handling might be tricky

// let's fix the error now

Promise.resolve("asyncfail")
  .then((response) => {
    Promise.resolve()
      .then(() => {
        throw new Error("#3 fail");
      })
      .catch(console.log);
    return 5;
  })
  .then((response) => {
    console.log(response);
  })
  .catch((err) => {
    console.log("final error", err);
  });
