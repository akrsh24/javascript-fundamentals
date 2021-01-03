let arr = [10, 4, 2, 3, 5, 6];
// arr=['a','c','b'];
//sorting comparator function 

//ascending order

let arr1 = arr.sort((a, b) => {
    if (a > b) return 1;
    else if (a < b) return -1;
    else return 0;
})

//descending order

console.log(arr1);

let arr2 = arr.sort((a, b) => {
    if (a > b) return -1;
    else if (a < b) return 1;
    else return 0;
})

// let arr1=arr.sort();

console.log(arr2);