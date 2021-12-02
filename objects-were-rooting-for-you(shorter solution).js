
const judgeVegetable = (vegetables, metric) => {
  let winner = vegetables[0].submitter;
  for (let i = 1; i < vegetables.length; i ++) {
      console.log(vegetables[0], vegetables[i])
      if (vegetables[0][metric] > vegetables[i][metric]) {
        winner = vegetables[0].submitter;
      } else if (vegetables[0][metric] < vegetables[i][metric]) {
        winner = vegetables[i].submitter;
      }
  } return winner;
}




const vegetables = [
  {
    submitter: 'Old Man Franklin',
    redness: 3993,
    plumpness: 5
  },
  {
    submitter: 'Sally Tomato-Grower',
    redness: 2,
    plumpness: 8
  },
  {
    submitter: 'Hamid Hamidson',
    redness: 4,
    plumpness: 3
  },
  {
    submitter: 'ASDASDASD',
    redness: 299999,
    plumpness: 3
  }
]

const metric = 'redness'

console.log(judgeVegetable(vegetables, metric))
