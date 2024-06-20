/* let's say we have a function that we don't want someone new
in our team to change and run it multiple times and when this function 
runs it changes the view of the application

For example
\||/

We need to use clausure and encapsulation to set this function so that 
it'll run only once even though it is called multiple times.
 */

let view;
function initalize() {
  view = "👨‍🏭";
  console.log("View has been set");
}
initalize();
initalize();
initalize();
console.log(view);

// ---------------------------------
// this is done using Encapsulation in clausures.
function initalize() {
  function view() {
    view = "👨‍🏭";
  }
  return {
    view: view,
  };
}
const initializer = initalize();
initializer.view();

initalize();
initalize();
initalize();
console.log(view);
console.log("View has been set");

/// ============= or do  it by closure as  here =============================

let view1;
function initialize() {
  let calledTimes = 0;
  return function () {
    if (calledTimes > 0) {
      return;
    } else {
      view1 = "👨‍🏭";
      calledTimes++;
      console.log("View has been set");
    }
  };
}
const startOnce = initialize();
startOnce();
startOnce(); // This won't run
startOnce(); // this won't run
console.log(view1);
