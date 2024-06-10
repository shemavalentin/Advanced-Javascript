/*
Here we have function that are nested in each other
they keep on adding to the stack and oversize the memory heap untill we can not add anymore and cause 
stack overflow
*/

// Let just use Recusion functions to keep on adding to the stack and break the function

function inception() {
  inception();
}
inception();
