function solve(input) {
    let sortInput = input.sort((a,b) => a.localeCompare(b));
    let productsArr = [];
    let char = '';
    for (let i = 0; i < sortInput.length; i++) {
        let product = sortInput[i].split(' : ');
        productsArr.push(product);

        if (sortInput[i][0] !== char) {
            console.log(sortInput[i][0]);
        }

        console.log(`${product[0]}: ${product[1]}`);
        char = sortInput[i][0];
    }
}

solve (['Appricot : 20.4',
'Fridge : 1500',
'TV : 1499',
'Deodorant : 10',
'Boiler : 300',
'Apple : 1.25',
'Anti-Bug Spray : 15',
'T-Shirt : 10']);
//Anti-Bug Spray: 15