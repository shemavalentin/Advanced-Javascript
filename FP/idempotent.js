// Idempotence
function notGood() {
  return Math.random();
}
notGood();

// let pass a parameter
function notGood(num) {
  return Math.random(num);
}
notGood(5); // no matter how many times we call it,the result will be the same
// It looks pure function but it somehow different

// if we do the following

function notGood(num) {
  console.log(num); // this will give 5 and whatever how many times we call this
  // it will give the same result.
  // it console logs 5 from the outside the world. it is idempotent(multiple calls
  // is going to give same result) even though it is not pure because it is communicating
  // with outside the world.
}
notGood(5);

// deleting a user from the database is idempotent also: because you can not
// delete one user multiple times. once you delete him/her once then you continous
// deleting the same user you will see Empty field many times.

// Idempotent is often seen in APIs like HTTP get requests
// I can do an API call and I expect thatthis API call given some sort of
// parameter, is going to return the same results, even though we are communicating
// with the ouside world.

/* 
NOW, why idempotent is so important? Why can't we just say everything
should be pure?  What do we care about idempotence?

ANS: This idea of being able to something a thousand times and always giving you
the same result is extemely valuable when it comes to things like parallel and 
distributed computation. because it makes our codes predictable.


THE OTHER IMPORTANCE OF IDEMPOTENT IS: Being able to call youself multiple times.
no matter what. ex:

*/
Math.abs(Math.abs(-50)); // 50, whatever how many times this function calls itself
// results will always ne the same.
