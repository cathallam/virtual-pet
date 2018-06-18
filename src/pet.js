//Magic Numbers
const MAXIMUM_FITNESS = 10;
const MINIMUM_AGE = 0;
const MINIMUM_HUNGER = 0;
  
  function Pet(name) {
    //this.name = name, this refers to the object returned from by calling new Pet(), 
   //so this.name refers to the name property of that object.
    this.name = name;
    this.age = MINIMUM_AGE;
    this.hunger = MINIMUM_HUNGER;
    this.fitness = MAXIMUM_FITNESS;
  }
  
  // OBJECTS PROTOTYPE
  Pet.prototype.growUp = function() {
    this.age += 1;
    this.hunger += 5;
    this.fitness -= 3;
  };

  Pet.prototype.walk = function() {
    this.fitness += 4;
  }
  
  Pet.prototype.walk = function() {
    if ((this.fitness + 4) <= 10 ) {
      this.fitness += 4;
    } else {
      this.fitness = 10;
    }
  }
  

  

module.exports = Pet;
