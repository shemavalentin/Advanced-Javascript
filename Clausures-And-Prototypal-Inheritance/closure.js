function a() {
  let grandpa = "grandpa";
  return function b() {
    let father = "father";
    let random = 12345; // not referenced, will get garbage collected
    return function c() {
      let son = "son";
      return `closure inherited all the scopes: ${grandpa} > ${father} > ${son}`;
    };
  };
}

a()()();

// closure inherited all the scopes: grandpa > father > son

/* Here the function a() will be popped off the call stack but the variable grandpa will be 
put into the memory heap as it's referenced. and because the function a doesn't have any other
parameters, in it's environment variable there will be only grandpa.

The sama as to function b and c.


function a and c are higher order but c is not, it is a normal function

* parameters are treated like local variables that get get store in environment variable
*/

/* If the javascript is running, wait 5 years and finally call closure function (booStirng() after how may years
even though it will be off stack or the boo() function is off the stack
it will still remeber for me the string (Thereze) we gave it five years ago.

That is because parameters are treated like local variables that get stored in variabel
environments.

So, I can wait 5 years and hold on to information in memory.

*/

const closure = (grandma) => (mother) => (daughter) => {
  return `${grandma} > ${mother} > ${daughter}`;
};

//closure("therese")("Gahongayire")("Rugina");

// grandma > mother > daughter

const booString = closure("Therese");
booString();
// after 5 years
const booStringName = booString();
booStringName();

// Another example

function callMeMayBe() {
  //const callMe = "Hi! I am now here"; // this line should have poped off the stack when the
  setTimeout(function () {
    console.log(callMe); // ..... this was executed here.
    const callMe = "Hi! I am now here"; // Here also will work, it doesn't matter of where it is defined.
  }, 4000);
}

callMeMayBe();
