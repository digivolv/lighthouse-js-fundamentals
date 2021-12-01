const moves = ['north', 'north', 'west', 'west', 'north', 'east','north']  


/*
finalPosition = (moves) => {
  let position = [0 , 0];
  for (const move of moves) {
    if (moves = 'north') {
      position[1] ++;
    } else if (moves = 'east') {
      position[0] ++;
    } else if (moves = 'south') {
      position[1] --;
    } else if (moves = 'west') {
      position[0] --;
    }
  } return position;
}
*/


finalPosition = (moves) => {
  let position = [0 , 0];
  for (let i = 0; i < moves.length; i++) {
    if (moves[i] === 'south') {
      position[1] --;
    } else if (moves[i] === 'east') {
      position[0] ++;
    } else if (moves[i] === 'north') {
      position[1] ++;
    } else if (moves[i] === 'west') {
      position[0] --;
    }
  } return position;
}

console.log(finalPosition(moves));

