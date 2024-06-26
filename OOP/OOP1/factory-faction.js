// to understand the OOP consepts let's create a basic game with elves(elf),..

// let's start with a naive way

// 1step

const elf = {
  name: "Orwell",
  weapon: "bow",
  attack() {
    return "attack with " + elf.weapon;
  },
};

// what if I need to many elves

const elf2 = {
  name: "Sally", // state : to mean data that is in the object (or attributes)
  weapon: "bow", // state
  attack() {
    // this method is manipulating states, it is interacting with state. modify it.
    return "attack with " + elf.weapon;
  },
};
elf.name;
elf2.attack;

// it is clear that we are not DRY,  once we need more elves, we will copy and paste.
// we need to clean up this

// 2nd step using FACTORY FUNCTIONS

// Factory Functions as name suggests, are functions that act like factories.
// they create objects for us.

// let's create one:

function createElf(name, weapon) {
  return {
    name: "name", // with ES6 symplified to name onyly
    weapon: "weapon", // with ES6 symplified to weapon onyly
    attack() {
      return "attack with " + weapon;
    },
  };
}

const peter = createElf("peter", "stones");
peter.attack();

// the beaty of factory functions is that when I need more elves it is simple,
// no more copy and past

// but there is still a problem. what if we have 1000 elves? will we keep on copying?
// we need to have other way of doing this. cze we are creating this method many times in
// memory and occupy different place in memory. we can use other technique to
// share the same property with the olready created method

const sam = createElf("sam", "fire");
sam.attack();

// see OOP2
