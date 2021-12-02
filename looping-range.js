const range = (start, end, step) => {
  let newArray = [];
  if ((start === false || !end || !step) || (start >= end) || (step <= 0)) {
    return newArray;
  }
  for (start; start <= end; start += step) {
    newArray.push(start);
  }
  return newArray;
}

console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));
console.log(range(0, 8, 2));