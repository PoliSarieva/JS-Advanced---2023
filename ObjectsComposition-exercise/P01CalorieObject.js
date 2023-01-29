function solve (input) {
    let productObj = {};

    for (let i = 0; i < input.length; i+=2) {
        let product = input[i];
        let calories = input[i + 1];
        productObj[product] = Number(calories);
    }

    console.log(productObj);
}

solve(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']);