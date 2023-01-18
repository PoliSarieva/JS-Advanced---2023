function cityTaxes (name, population, treasury) {

    let city = {
        name: name,
        population: population,
        treasury: treasury,
        taxRate: 10,
        collectTaxes() { 
            this.treasury = this.taxRate * this.population;
        },
        applyGrowth(percentage) { 
            this.population += Math.floor(this.population * percentage/100);
        },
        applyRecession(percentage) {
            this.treasury -= Math.ceil(this.treasury * percentage /100);
         },
    };

    return city;
}

const city = cityTaxes('Tortuga',7000,15000);

city.collectTaxes();
console.log(city.treasury);

city.applyGrowth(5);
console.log(city.population);

city.applyRecession(15);
console.log(city.treasury);
