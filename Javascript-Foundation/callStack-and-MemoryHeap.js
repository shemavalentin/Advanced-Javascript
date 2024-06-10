// Call stack  +  Memory Heap

const number = 610; // This is to tell Javascript Engine, allocate memory for number
const string = "some text"; // Telling Javascript engine to allocate memory for a string

// Another way to think about it is like using an example of object
// allocate memory for an object .......... and it's values.
const human = {
  first: " Valentin",
  last: "Shema",
};

// A Mamory Heap is simply a free store, is a large region in memory
//that the javascript provides for us. It allows us to store data in unordered fashion. there is no order to this memory

// It just allows us to use varuables to point to different storage areas.

// CALL STACK

function subtractTwo(num) {
  return num - 2;
}

function calculate() {
  const sumTotal = 4 + 5;
  return subtractTwo(sumTotal);
}

// when you call this function, the engine is going to look in the memory heap
// then found where we have declared it and read it.

// if we add debugger statement in here which is going to pause the execution
debugger;

// the anonymous seen in the browser under the call stack means
// GLOBAL EXECUTION CONTEXT : it uses to come when there is no name for the given file.
calculate();

/*
The memory heap stores data in a first in last out mode 
the function or a variable that entered first, pops out the last
We use the memory heap to point to different variables and objects and data that we store 
so that we know where to look.
*/
