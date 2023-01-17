function solve(arr, delimiter) {
    let deli = delimiter;
    let separetedArr = arr.join(deli);
    console.log(separetedArr);
}

solve (['One', 
'Two', 
'Three', 
'Four', 
'Five'], 
'-');

solve(['How about no?', 
'I',
'will', 
'not', 
'do', 
'it!'], 
'_');