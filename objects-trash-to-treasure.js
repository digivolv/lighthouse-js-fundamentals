const smartGarbage = function (trash, bins) {
  // Your code in here ...
  let keys = Object.keys(bins);
  console.log(keys)
  for (let i = 0; i < keys.length; i++) {
    if (keys[i] === trash) {
      bins[trash] ++
    }
  }return bins
}



console.log(smartGarbage('recycling', { waste: 4, recycling: 2, compost: 5 }));
