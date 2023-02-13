function isValidSubsequence(array, sequence) {
    let index = 0;
    let subLength = 0;
    sequence.forEach((item) => {
        for (let i = index; i < array.length;) {
            if (array[i] === item) {
                index = i + 1;
                subLength++;
                break;
            }

            i++;
        }
    });

    if (subLength === sequence.length){
        return true;
    }

    return false;
}

module.exports = isValidSubsequence;