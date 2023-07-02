
const arr1 = [1, 3, 9, 4, 5, 2, 4];

// console.log(arr1.sort((a, b) => a-b));
arr1.sort((a, b) => {
    console.log(a);
    // console.log("--------------------------------")
    // console.log(b);
});

console.log("--------------------------------")

// console.log(arr1.sort((a, b) => b-a));
arr1.sort((a, b) => {
    // console.log(a);
    // console.log("--------------------------------")
    console.log(b);
});
