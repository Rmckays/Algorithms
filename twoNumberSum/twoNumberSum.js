function twoNumberSum(array, targetSum) {
    let hashTable = {};
    let sumArray = [];
    array.forEach(value => {
        let sum = targetSum - value;

        if (hashTable.hasOwnProperty(sum)){
            sumArray.push(sum);
            sumArray.push(value);
        }
        hashTable[value] = value;
    });

    return sumArray;
}

module.exports = twoNumberSum;