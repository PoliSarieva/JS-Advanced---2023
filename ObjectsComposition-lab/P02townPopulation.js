function solve (input) {
    let town = {};

    for (const elem of input) {
        let name = elem.split(' <-> ')[0];
        let population = Number(elem.split(' <-> ')[1]);

        if (name in town) {
            town[name] += population;
        } else {
            town[name] = population;
        }
    }

    /*for ( let name in town) {
        console.log(`${name} : ${town[name]}`);
    }*/
    
    console.log(Object
            .entries(town)
            .map(([name, population]) => `${name} : ${population}`)
            .join('\n'));

}

solve (['Sofia <-> 1200000',
'Montana <-> 20000',
'New York <-> 10000000',
'Washington <-> 2345000',
'Las Vegas <-> 1000000']);

console.log('----------------------');

solve (['Istanbul <-> 100000',
'Honk Kong <-> 2100004',
'Jerusalem <-> 2352344',
'Mexico City <-> 23401925',
'Istanbul <-> 1000']);