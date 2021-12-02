//Using loops without IndexOf method

/*const lastIndexOf = (array, value) => {
  for (let i = array.length ; i >= 0; i--) {
    if (array[i] === value){
      return i;
    }
  }return -1;
}*/



//using IndexOf method
const lastIndexOf = (array, value) => {
  return array.lastIndexOf(value);
}


console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 1), "=?", 3);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 2), "=?", 4);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 3), "=?", -1);
console.log(lastIndexOf([ 5, 5, 5 ], 5), "=?", 2);
console.log(lastIndexOf([], 3), "=?", -1);
console.log(lastIndexOf([2], 2), "=?", 0);
console.log(lastIndexOf([ 5, 4, 4 ], 5), "=?", 0);
console.log(lastIndexOf([3], 3), "=?", 0)
console.log(lastIndexOf([], 3), "=?", -1)