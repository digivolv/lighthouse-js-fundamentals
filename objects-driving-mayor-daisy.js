const carPassing = (cars, speed) => {
  const car = { speed, time: Date.now() };
  cars.push(car);
  return cars;
}




//all codes beyond this are tests

const cars = [
  {
    time: 1568329654807,
    speed: 40,
  },
  {
    time: 1568329821632,
    speed: 42,
  },
  {
    time: 1568331115463,
    speed: 35
  }
]

console.log(cars)

const speed = 38

carPassing(cars, speed)

console.log(cars)