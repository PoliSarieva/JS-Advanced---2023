function solve (arr) {

    arr.sort((a,b) => a - b);
    let modifArr = [];
    while (arr.length > 0) {
    modifArr.push(arr.shift());
    modifArr.push(arr.pop());

    }
    return modifArr;
}

solve ([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]);