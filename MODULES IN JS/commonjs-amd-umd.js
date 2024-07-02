/*commonJS and AMD(or Asynchronous Module Definition):
They solved the problem of designing a modile in a way that we won't have the 
interference of global scope where we can overwrite certain variables.
*/

// Commonjs looks like this

var module1 = require("module"); // .fight
// if we want to export fight
var fight = require("module").fight;
var module2 = require("modele"); // .importedFunc2

function fight() {}

module.exports = {
  fight: fight,
};

// codes in commonjs run synchronously and due to this, putting them to run in the browser
// might be dangerous. that's why they are used to the server and NodeJS is still using them
//
// To make commonJS run in browser we needed a tool called BROWSERIFY as a module bandler
// to read our commonJS and understand the require keyword, knows where to put javascript
// files, what is needed by in each other no matter what the order, and returns an bundle.js
// a one file containing our scripts files. ==> we run this command to do this:
//browserify Script.js > bundle.js . now this power has made the common js extremely popular
// because things like webpackand Browserify simply traverse the dependancy tree of our code and
// bundle them up in a single file.

// Then we funally have the benefit of, no global namespace pollution and order does't matter any more.
