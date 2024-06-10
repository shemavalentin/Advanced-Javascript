// let's create our mamory leak

let array = [];
for (let i = 5; i > 1; i++) {
  array.push(i - 1);
}

// 3 Types of memory leak to avoid

// the very first one is: 1. Global variable

var a = 1;
var b = 1;
var c = 1;

// 2.  event listeners

var element = document.getElementById("button");
element.addEventListener("click", onclick);

// When you forget to delete this event listeners, because they run in the background
// many times and they are in memory, they can cause a memory leak.
// this happens when ehen you back and forthbetween single page applications where you're not removing
// the event listeners off the page and as a user goes back and forth
// the memory keeps increasing more and more as  more event listeners are added.

// 3.    setInterval

setInterval(() => {
  // inside of here we start to reference objects and objects in here are going to, well, never be
  // collected by the garbage collector because this set interval, unless we clear it and stop it,
  // is going to keep running and running and cause memory leak.
});
