function sortedSquaredArray(array) {
    let start = 0;
    let end = array.length - 1;
    let returnArray = array.map(x => 0);
    for (let i = array.length -1; i >= 0; i--) {
        if (start === end) {
            returnArray[i] = array[end] ** 2;
        }

        if (Math.abs(array[end]) >= Math.abs(array[start])) {
            returnArray[i] = array[end] ** 2;
            end--;
        } else {
            returnArray[i] = array[start] ** 2;
            start++
        }
    }
    return returnArray;
}

module.exports = sortedSquaredArray;