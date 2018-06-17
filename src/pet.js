  //Option 1
  function Pet(name) {
    this.name = name;
    this.age = 0;
  }
  
  Pet.prototype.growUp = function() {
    this.age += 1;
  };

//Option 2
//function Pet(name) {
   // this.name = name;
    //this.age = 0;
    // this.growUp = function() {
    //   this.age += 1;
    // };
 // }
  

module.exports = Pet;
