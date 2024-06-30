// Amazon shopping

const user = {
  name: "kim",
  active: true,
  cart: [],
  purchases: [],
};

// It looks like we need to compose these functions to able to pass the data
// to one function, then the other, etc ...  comming from left to right.

// What if we need to keep track of history of our user(logs). assum this as a database
let amazonHistory = [];

// let's create a compose function.
const compose =
  (f, g) =>
  (...args) =>
    f(g(...args)); // here we should have used the library(like LODASH, or Ramda to do for us the complexity)
//because we have alotof parameters.

/* const pipe =
  (f, g) =>
  (...args) =>
    g(f(...args)); */

// calling functions that are composed here
purchaseItem(
  emptyCart,
  buyItem,
  applyTaxToItems,
  addItemToCart // the order of these functions will change when using pipe to go from left to right
)(user, { name: "laptop", price: 200 });

// Let's create purchaseItem function
function purchaseItem(...fns) {
  return fns.reduce(compose);
}

function addItemToCart(user, item) {
  //added to keep track of logs of users
  amazonHistory.push(user);
  const updateCart = user.cart.concat(item); // the concat will copy and give us a new array.
  // using Object.assign to create a new empty object
  return Object.assign({}, user, { cart: updateCart });
}

function applyTaxToItems(user) {
  amazonHistory.push(user);
  const { cart } = user;
  const taxRate = 1.3;
  const updateCart = cart.map((item) => {
    return {
      name: item.name,
      price: item.price * taxRate,
    };
  });

  // return a new object with updated price
  return Object.assign({}, user, { cart: updateCart });
}

function buyItem(user) {
  amazonHistory.push(user);
  //Here I will move items in the cart to the purchases
  return Object.assign({}, user, { purchases: user.cart });
}

function emptyCart(user) {
  amazonHistory.push(user);
  // Removing items from the cart
  return Object.assign({}, user, { cart: [] });
}

// Implement a cart feature
// 1. Add items to cart
// 2. Add 3% tax to item in cart
// 3. Buy item: cart --> purchases
// 4. Empty cart

// Bonus

// Accept refunds   : let's say you want to keep track of user logs
function refunds() {}
// Track user history

// behind the scen Amazon can create functions like this to help
// Then the function is also composed with others.
function getUserState() {}

// may be amazon can create a function to go back in history or forward
// this also after it is created it is composed with others , no other hussles.
function goBack() {}
