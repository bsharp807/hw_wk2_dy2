class Park {
  constructor(name, ticketPrice, dinosaurs){
    this.name = name;
    this.ticketPrice = ticketPrice;
    this.dinosaurs = dinosaurs;
  }

  addDino(dino){
    this.dinosaurs.push(dino);
  };

  removeDino(dino){
    this.dinosaurs.splice(this.dinosaurs.indexOf(dino),1);
  };

  findBestDino(){
    let most = 0
    let bestDino = ''
    for(let dino of this.dinosaurs){
      if(dino._guestsAttractedPerDay > most){
        most = dino._guestsAttractedPerDay;
        bestDino = dino.species;
      };
    return bestDino;
    }
  };

  findSpecDino(species){
    let spec = this.dinosaurs.filter(function (dino) {
        return dino.species.includes(species);
    });
    return spec;
  };

  extinction(species){
    let spec = this.dinosaurs.filter(function (dino) {
        return !dino.species.includes(species);
    });
    this.dinosaurs = spec;
  };

  dayVisit(){
    let total = 0;
    for(let dino of this.dinosaurs){
      total += dino._guestsAttractedPerDay;
    };
  return total;
  };

  yearVisit(){
    return this.dayVisit() * 365;
  };

  revenue(){
    return this.yearVisit() * this.ticketPrice;
  };

  returnSpecies(typeA, typeB, typeC){
    let a = this.dinosaurs.filter(function (dinoA) {
        return dinoA.diet.includes(typeA);
      });
    let b = this.dinosaurs.filter(function (dinoB) {
        return dinoB.diet.includes(typeB);
      });
    let c = this.dinosaurs.filter(function (dinoC) {
        return dinoC.diet.includes(typeC);
      });

    let categories = {
      carnivore: a.length,
      herbivore: b.length,
      omnivore: c.length
    };
    return categories;
  };
}
module.exports = Park;
