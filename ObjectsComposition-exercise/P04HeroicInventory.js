function solve(inputArr) {
    let heroInfo = {};
    let rezult = [];

    for (let i = 0; i < inputArr.length; i++) {
        let currentHero = inputArr[i].split(' / ');
        let name = currentHero.shift();
        let level = currentHero.shift();
        let listItems = currentHero;
        let items = [];

        for (const elem of listItems) {
            items.push(elem);
        }

       
        rezult.push({name, level, items});
    }
   
    
    console.log(JSON.stringify(rezult));
}

solve(['Isacc / 25 / Apple, GravityGun',
'Derek / 12 / BarrelVest, DestructionSword',
'Hes / 1 / Desolator, Sentinel, Antara']);

//
solve(['Jake / 1000 / Gauss, HolidayGrenade']);