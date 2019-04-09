const Park = require('../park.js');
const Dinosaur = require('../dinosaur.js');

describe('Park', function() {
  let park;
  let rex;
  let tri;
  let raptor;
  let neanderthal;
  let butterfree;

  beforeEach( () => {
    rex = new Dinosaur('t-rex', 'carnivore', 50);
    rexTwo = new Dinosaur('t-rex', 'carnivore', 36);
    tri = new Dinosaur('triceretops', 'herbivore', 20);
    raptor = new Dinosaur('velociraptor', 'carnivore', 30);
    neanderthal = new Dinosaur('neanderthal', 'omnivore', 10);
    butterfree = new Dinosaur('butterfree', 'herbivore', 40);
    park = new Park('Anatomy Park', 10, [rex, tri, neanderthal]);
  });

  test('should have a name', () => {
    // write your code here
    expect(park.name).toBe('Anatomy Park');
  });

  test('should have a ticket price', () => {
    // write your code here
    expect(park.ticketPrice).toBeGreaterThan(0);
  });

  test('should have a collection of dinosaurs', () => {
    // write your code here
    expect(park.dinosaurs.length).toBeGreaterThan(0);
  });

  test('should be able to add a dinosaur to its collection', () => {
    // write your code here
    park.addDino(raptor);
    expect(park.dinosaurs.length).toBe(4);
  });

  test('should be able to remove a dinosaur from its collection', () => {
    // write your code here
    park.removeDino(tri);
    expect(park.dinosaurs.length).toBe(2);
  });

  test('should be able to find the dinosaur that attracts the most visitors', () => {
    // write your code here
    expect(park.findBestDino()).toBe('t-rex');
  });

  test('should be able to find all dinosaurs of a particular species', () => {
    // write your code here
    park.addDino(rexTwo);
    expect(park.findSpecDino('t-rex').length).toBe(2);
  });

  test('should be able to remove all dinosaurs of a particular species', () => {
    // write your code here
    park.addDino(rexTwo);
    park.extinction('t-rex');
    expect(park.findSpecDino('t-rex').length).toBe(0);
  });

  test('calculate total visitors by day', () => {
    expect(park.dayVisit()).toBe(80);
  });

  test('calculate total visitors by year', () => {
    expect(park.yearVisit()).toBe(29200);
  });

  test('calculate revenue from ticket sales', () => {
    expect(park.revenue()).toBe(292000);
  });

  test('should be able to produce special array', () => {
    park.addDino(rexTwo);
    park.addDino(raptor);
    park.addDino(butterfree);
    expect(park.returnSpecies('carnivore', 'herbivore', 'omnivore')).toEqual({ 'carnivore': 3, 'herbivore': 2, 'omnivore': 1 })
  });
});
