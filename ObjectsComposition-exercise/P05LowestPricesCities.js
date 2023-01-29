function solve(input) {
    let productsArr = [];

    for (let i = 0; i < input.length; i++) {
        let [town, product, price] = input[i].split(' | ');

        // if array contained current products
        if (productsArr.filter(x => x.product === product).length > 0) {

        // find all equal product in array
            let infoObj = productsArr.find(x => x.product === product);

            //find product with lower price
            if(infoObj.price > Number(price)) {
                infoObj.price = Number(price);
                infoObj.town = town;
            } 

            //if array don't contained product
        }else {
            let infoObj = {product,town, price: Number(price)};
            productsArr.push(infoObj);
        }
    }

    for (let product of productsArr) {
        console.log(`${product.product} -> ${product.price} (${product.town})`);
    }
}

solve(['Sample Town | Sample Product | 1000',
    'Sample Town | Orange | 2',
    'Sample Town | Peach | 1',
    'Sofia | Orange | 3',
    'Sofia | Peach | 2',
    'New York | Sample Product | 1000.1',
    'New York | Burger | 10']
);

/*Sample Product -> 1000 (Sample Town)
Orange -> 2 (Sample Town)
Peach -> 1 (Sample Town)
Burger -> 10 (New York) */