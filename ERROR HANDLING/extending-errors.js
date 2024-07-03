// Imagin you are running a node server and you need to
// controll errors so that you will provide error message that
// do not reveal too much information of what real happen.

// And in security you should not provide error messagege detailing what
// happening. so using OOPs we can do like the following

class AuthenticationError extends Error {
  constructor(message) {
    super(message);
    // here we need to modify the name of the error
    this.name = "authentication error";
    this.favoriteSnack = "grapes";
  }
}
//throw new authenticationError('oopsie');
// let's assign it to a variable

const a = new AuthenticationError("oopsie");

// Now let's call an other property/state of the above class to return its value

a.favoriteSnack; // returns grapes.

/// So we never want to reveal the full message to the client as hackers
/// or bad actors may use this error to compromize your system

/// use this to customize the error messages shown to clients.

/*   
Let's say we are in a team of developers, we can decide to control erros in one
place and provide different error messages depending on how which kind of errors
and our error are handled in different ways.
*/

/// More on this, these classes are reusable, other people may use them
/// without any problem to reveal any information

class AuthenticationError extends Error {
  constructor(message) {
    super(message);

    this.name = "authentication error";
    this.message = "grapes";
  }
}

class DatabaseError extends Error {
  constructor(message) {
    super(message);

    this.name = "Database";
    this.message = "grapes";
  }
}

class PermissionError extends Error {
  constructor(message) {
    super(message);

    this.name = "Permission";
    this.message = "grapes";
  }
}

const c = new AuthenticationError("oopsie");
c.message;
// We can create different instances
c instanceof AuthenticationError;

// Creating instance of DatabaseError
const d = new DatabaseError("Something went wrong");
d.message;

// etc
