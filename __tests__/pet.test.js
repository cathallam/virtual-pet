const Pet = require('../src/pet'); 
const MAXIMUM_FITNESS = 10;

describe('constructor', () => {
    it('returns an object', () => {
      expect(new Pet('Fido')).toBeInstanceOf(Object);
    });
  });

  describe('constructor', () => {
    it('has a initial age of 0', () => {
      const pet = new Pet('Fido');
      expect(pet.age).toEqual(0);
    });
  });

  describe('growUp', () => {
    it('increments the age by 1', () => {
      const pet = new Pet('Fido');
      pet.growUp();
      expect(pet.age).toEqual(1);
    });
  });
  
  describe('constructor', () => {
    it('has an initial hunger of 0', () => {
      const pet = new Pet('Fido');
      expect(pet.hunger).toEqual(0);
    });
  });

  describe('growUp', () => {
      it('increases the hunger by 5', () => {
          const pet = new Pet('Fido');
          pet.growUp();
          expect(pet.hunger).toEqual(5);
      });
    });describe('constructor', () => {
    it('has an initial hunger of 0', () => {
      const pet = new Pet('Fido');
      expect(pet.hunger).toEqual(0);
    });
  });  

    describe('growUp', () => {
        it('increments hunger by 5', () => {
          const pet = new Pet('Fido');
          pet.growUp();
          expect(pet.hunger).toEqual(5);
        });
      });
    
      describe('growUp', () => {
        it('decrements fitness by 3', () => {
          const pet = new Pet('Fido');
          pet.growUp();
          expect(pet.fitness).toEqual(7);
        });
      });

      describe('walk', () => {
        it('increases fitness by 4', () => {
          const pet = new Pet('fido');
          pet.fitness = 4;
          pet.walk();
          expect(pet.fitness).toEqual(8);
        });
      });

      describe('walk', () => {
        it('increases fitness by to a maximum of 10', () => {
          const pet = new Pet('fido');
          pet.fitness = 8;
          pet.walk();
          expect(pet.fitness).toEqual(MAXIMUM_FITNESS);
        });
      });

      describe('feed', () => {
        it('decreases hunger by 3', () =>{
          const pet = new Pet('Fido');
          pet.hunger = 9;
          pet.feed();
          expect(pet.hunger).toEqual(6);
        });
      });

      describe('feed', () => {
        it('decreases hunger to a minimum of 0', () => {
          const pet = new Pet('Fido');
          pet.hunger = 3;
          pet.feed();
          expect(pet.hunger).toEqual(0);
        });
      });