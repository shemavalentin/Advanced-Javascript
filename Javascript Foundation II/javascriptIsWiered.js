function weird() {
  height = 50; // Here javascript is creating the variable environment, it doesn't know
  // what is height. height is not declared in the weired function because there is no var, let, or const.
  return height;
}
weird();

// javascript is going to look inside it's environment and find that it doesn't have height
// and it will go up to the scope chain to check in global environment and find nothing out there.

// then, it will declare it for you. but when you use the keyword like (use strict)
// it will tell you that the height is not declared.

// What happens here is what we call GLOBAL LEAKAGE VARIABLES.

/*ANOTHER EXAPLE*/

var heyhey = function doodle() {
  // do something
  doodle(); // we can only access it here.
  return "heyhey";
};
heyhey(); // this will return 'heyhey'

// but when you call
doodle(); // this will error out because function doodle is not accessible on the global execution variable
// environment. this is wierd too.  it is only accessed onside it's scope.
