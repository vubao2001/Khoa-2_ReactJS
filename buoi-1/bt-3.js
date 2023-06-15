
function checkCount(arr) {
    const countDict = {};
    let maxCount = 0;
    let result = null;

    for (let i = 0; i < arr.length; i++) {
        const key = arr[i];
        if (countDict[key]) {
            countDict[key]++;
        } else {
            countDict[key] = 1;
        }
        if (countDict[key] > maxCount) {
            maxCount = countDict[key];
            result = key;
        }
    }

    return { value: result, count: maxCount };
}

console.log(checkCount([1, 2, 3, 5, 5, 6, 6]))