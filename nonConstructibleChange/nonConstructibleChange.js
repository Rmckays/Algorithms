function nonConstructibleChange(coins) {
    const sorted = coins.sort((a,b) => a-b);
    if (sorted.length < 1) {
      return 1;
    }
    
    let change = 0;
    for (let i = 0; i < sorted.length; i++) {
      if (sorted[i] > change + 1)
      {
          return change += 1;
      }
  
      change += sorted[i];
  
      if (i === sorted.length - 1) {
        return change += 1;
      }
    }
  
    return change;
  }

  module.exports = nonConstructibleChange;