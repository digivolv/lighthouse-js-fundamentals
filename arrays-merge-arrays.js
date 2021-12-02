const merge = (arrOne, arrTwo) => {
  let merged = arrOne.concat(arrTwo);  
  for (let i = 0; i < merged.length; i++) {
    for (let j = i+1; j < merged.length; j++){
      console.log(merged[i],merged[j])
      if (merged[i] >= merged[j]){
        let temp = merged[i];
        merged[i] = merged[j];
        merged[j] = temp;
      }
    }
  }return merged;
}

console.log(merge([ 4, 5, 6 ], [ 1, 2, 3, 4 ]), "=?", [ 1, 2, 3, 4, 4, 5, 6 ]);
console.log(merge([ 4 ], [ 2, 5, 8 ]), "=?", [ 2, 4, 5, 8 ]);
console.log(merge([ 1, 2, 6 ], []), "=?", [ 1, 2, 6 ]);
