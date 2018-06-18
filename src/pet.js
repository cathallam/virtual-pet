  //Option 1
  
  function Pet(name) {
    //this.name = name, this refers to the object returned from by calling new Pet(), 
   //so this.name refers to the name property of that object.
    this.name = name;
    this.age = 0;
    this.hunger = 0;
    this.fitness = 10;
  }
  
  // OBJECTS PROTOTYPE
  Pet.prototype.growUp = function() {
    this.age += 1;
    this.hunger += 5;
    this.fitness -= 3;
  };

//OPTION 2 INSTANCE METHOD
//function Pet(name) {
   // this.name = name;
    //this.age = 0;
    // this.growUp = function() {
    //   this.age += 1;
    // };
 // }
  

module.exports = Pet;
