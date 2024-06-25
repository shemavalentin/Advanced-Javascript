/*function createElf(name, weapon) {
  return {
    name,
    weapon,
    attack() {
      return "attack with " + weapon;
    },
  };
}

const peter = createElf("peter", "stones");
peter.attack();

const sam = createElf("sam", "fire");
sam.attack();*/

// to solve this problem we can use prototypal inheritance or manually by storing
// the functionality above(globaly) and share it with others from outside.

//================================================================
// creating a store object
const elfFunction = {
  attack() {
    //return "attack with " + weapon; // here use this keyword to avoid reference error
    // and know who called the weapon
    return "attack with " + this.weapon;
  },
};

function createElf(name, weapon) {
  return {
    name,
    weapon,
  };
}

const peter1 = createElf("peter", "stones");
///Adding a line linking the createElf and the store object
peter1.attack = elfFunction.attack;
peter1.attack();

const sam1 = createElf("sam", "fire");
sam1.att = elfFunction.attack;
sam1.attack();

// this is manually done

// instead of manual practice,we can use another little tool in JS called object.create()
// to create that link to join the two parts of the code, the prototype chain
//that heps us to look up the chain

// creating a store object
const elfFuncStore = {
  attack() {
    //return "attack with " + weapon; // here use this keyword to avoid reference error
    // and know who called the weapon
    return "attack with " + this.weapon;
  },
};

function createElf(name, weapon) {
  //creating the object linkage
  let newElf = Object.create(elfFuncStore); // Object.create() creates a link btn
  console.log(newElf); // empy object created by the Object.create(). we are doing prototypal inher
  console.log(newElf.__proto__); // we get elfFunction object.

  // attaching the new object to the property
  newElf.name = name; // this parameter we receive from the function
  newElf.weapon = weapon; // this parameter we receive from the function

  //   return {
  //     name,
  //     weapon,
  //   };
}

const peter1 = createElf("peter", "stones");

peter1.attack();

const sam1 = createElf("sam", "fire");

sam1.att();

/* 
PS: THIS VERY LAST IS CLEAN AND NOT MANUAL. BUT HERE IS THE THING, THIS IS NOT
ACCEPTED BY THE JAVASCRIPT COMMUNITY AS A WHOLE.

THE GOAL HERE WAS TO GET CLOSER AND CLOSER TO OBJECT ORIENTED PROGRAMMING
*/
