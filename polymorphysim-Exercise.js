class Character {
  constructor(name, weapon) {
    this.name = name;
    this.weapon = weapon;
  }
  attack() {
    return "atack with " + this.weapon;
  }
}
//Polymorphism--

class Queen extends Character {
  constructor(name, weapon, behavior) {
    super(name, weapon);
    this.behavior = behavior;
  }
  attack() {
    console.log(super.attack());
    return `I am the ${this.name} of ${this.kind}, now bow down to me! `;
  }
}
const victoria = new Queen("Victoria", "army", "hearts");

victoria.attack();
