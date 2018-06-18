//Magic Numbers
const MAXIMUM_FITNESS = 10;
const MINIMUM_AGE = 0;
const MINIMUM_HUNGER = 0;

  function Pet(name) {
    this.name = name;
    this.age = MINIMUM_AGE;
    this.hunger = MINIMUM_HUNGER;
    this.fitness = MAXIMUM_FITNESS; 
  };
  
  Pet.prototype = {
    get isAlive() {
      return this.age < 30 && this.hunger < 10 && this.fitness > 0;
    }
  };

  // Object Prototype
  Pet.prototype.growUp = function() {
    this.age += 1;
    this.hunger += 5;
    this.fitness -= 3;
  };

  Pet.prototype.walk = function() {
    if (!this.isAlive) throw new Error('Your pet is no longer alive :(');
    else if ((this.fitness + 4) <= MAXIMUM_FITNESS) return this.fitness += 4;
    else this.fitness = 10;
  };

  
  Pet.prototype.feed = function() {
    if (!this.isAlive) throw new Error('Your pet is no longer alive :(');
    else if ((this.hunger - 3) >= MINIMUM_HUNGER) return this.hunger -= 3;
    else this.hunger = 0;
  };

  Pet.prototype.checkUp = function() {    
    if ((this.fitness <= 0) && (this.hunger >= 10)) return 'Your pet is no longer alive :(';  
    else if ((this.fitness <= 3) && (this.hunger >= 5)) return 'I am hungry AND I need a walk';
    else if (this.hunger >= 10) return 'Your pet is no longer alive :(';
    else if (this.hunger >= 5) return 'I am hungry';
    else if (this.fitness <= 0) return 'Your pet is no longer alive :(';
    else if (this.fitness <= 3) return 'I need a walk';
    else return 'I feel great';
  };

  
module.exports = Pet;
