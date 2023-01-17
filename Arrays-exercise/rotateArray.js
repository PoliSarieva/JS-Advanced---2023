function solve (arr, number) {

    for (let i = 1; i <= number; i++) {
        let rotateElem = arr.pop();
        arr.unshift(rotateElem);
    }

    console.log(arr.join(' '));
}

solve (['1', '2', '3', '4'], 
2);

solve (['Banana', 'Orange', 'Coconut', 'Apple'], 
15);