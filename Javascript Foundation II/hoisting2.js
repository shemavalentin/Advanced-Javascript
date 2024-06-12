var favouriteFood = "grapes"; // This line will be hoisted first | it looks like this: var favoriteFood = undefined

var foodThoughts = function () {
  // This also is hoisted => var foodThoughts

  // It checks all the way at the beginning of the line and there is no var
  // now the Creation phase is done

  // during execution phase the engine will see the var inside here and hoist it above inside this function
  // and it will look like this: => var favoriteFood = undefined
  console.log(" Original favorite food:" + favouriteFood);

  var favouriteFood = " sushi";

  console.log(" New favorite food:" + favouriteFood);
};

foodThoughts();

// nowe after the creation Phase is done, the execution phase starts. there are no more the var
// or the function keywords needed.

// Now, foodThoughts() gets executed as long as javascripts engine sees the ()

// PS: Where it is possible we should avoid hoisting because it makes our code unpredictable
// we have to use const, and let. when you replace var with const and let, it errors out.

// Exercises 4

function bigbrother() {
  function littlebrother() {
    return "it is me";
  }
  return littlebrother();

  function littlebrother() {
    return "no me";
  }
}

console.log(bigbrother()); // what will be returned here?

// It will return: no me
