function xoatrung (arr) {
    let newArray = [];
    arr.map(item => {
        if (newArray.indexOf(item) === -1) {
            newArray.push(item);
        }
    });

    return newArray;
}

console.log(xoatrung([1, 2, 3, 3,2,4,5,5,6]));