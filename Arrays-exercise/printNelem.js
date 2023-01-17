function solve (arr, number) {
    let step = number;
    let newArr = [];

    for (let i = 0; i < arr.length; i+= step) {
        newArr.push(arr[i]);
    }

    return newArr;

    //return arr.filter((_, index) => index%step == 0);
}

solve (['5', '20', '31', '4', '20'], 
2);

solve (['dsa','asd', 'test', 'tset'], 
2);

solve (['1', '2','3', '4', '5'], 
6);