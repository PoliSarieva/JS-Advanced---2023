function solve(arr) {

    let increaseArr = [];
    increaseArr.push(arr[0]);
    for (let i = 1; i < arr.length; i++) {
        
        if (arr[i] >= increaseArr[increaseArr.length - 1]) {
            increaseArr.push(arr[i])
        }
        
    }
   return increaseArr;

   /*let biggestNumber = arr[0];
   return arr.reduce((acc, currElem) => {
        if (biggestNumber <= currElem) {
            acc.push(currElem);
            biggestNumber = currElem;
        }

        return acc + currElem;
   }, []);*/
}

solve ([1, 3, 8, 4, 10, 12, 3, 2, 24]);
solve ([1, 2, 3,4]);
solve ([20, 3, 2, 15,6, 1]);
