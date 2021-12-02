/*const judgeVegetable = (vegetables, metric) => {
    let winner
    for (let i = 0; i < vegetables.length; i++){
      for (let j = i + 1; j < vegetables.length; j++){
        console.log(vegetables[i], vegetables[j])
        if (vegetables[j][metric] > vegetables[i][metric]) {
          winner = vegetables[j].submitter;
      }
    }
  }return winner;
}  
*/

const judgeVegetable = (vegetables, metric) => {
  let winner
  for (let i = 0; i < vegetables.length; i += vegetables.length) {
    for (let j = i + 1; j < vegetables.length; j++) {
      console.log(vegetables[i], vegetables[j])
      if (vegetables[i][metric] > vegetables[j][metric]) {
        winner = vegetables[i].submitter;
      } else if (vegetables[i][metric] < vegetables[j][metric]) {
        winner = vegetables[j].submitter;
      }
    }
  } return winner;
}





/*
const judgeVegetable = (vegetables, metric) => {
    let winner = vegetables[0].submitter
    for (let i = 0; i < vegetables.length; i++){
        if (vegetables[0][metric] > vegetables[i+1][metric]) {
          winner = vegetables[i].submitter;
        } else if (vegetables[i+1][metric] > vegetables[0][metric]){
         winner = vegetables[i+1].submitter;
    } 
  }return winner;
} */

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
