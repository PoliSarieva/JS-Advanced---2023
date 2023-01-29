function solve(input) {
    let car = {};
    car.model = input.model;
    let engine = null;

    if (input.power <= 90) {
        engine = {power: 90, volume: 1800}; 
    } else if (input.power <= 120) {
        engine = {power: 120, volume: 2400}; 
    } else if (input.power <= 200) {
        engine = {power: 200, volume: 3500}; 
    }
    car.engine = engine;

    car.carriage = { type: input.carriage, color: input.color }
    let currentWheels =input.wheelsize;
    if (input.wheelsize % 2 === 0) {
        currentWheels = input.wheelsize - 1;
    }

    let wheelsArr = [];
    for (let i = 1; i <= 4; i++) {
        wheelsArr.push(currentWheels);
        
    }

    car.wheels = wheelsArr;
    return car;
    
}


/* { model: 'Opel Vectra',
  engine: { power: 120,
            volume: 2400 },
  carriage: { type: 'coupe',
              color: 'grey' },
  wheels: [17, 17, 17, 17] }*/


solve({ model: 'Opel Vectra',
power: 110,
color: 'grey',
carriage: 'coupe',
wheelsize: 17 });