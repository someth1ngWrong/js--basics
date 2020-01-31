//Задаем координаты коробля
let location1 = 5
let location2 = 6
let location3 = 7

//Координаты выстрела
let currentShot

//Сделано выстрелов
let shots = 0

//Попаданий
let hits = 0

//Убит?
let isSunk = false
console.log(2);
//пишем цикл, который работает, пока карабль не уонул
while (isSunk === false) {
  currentShot = Number(prompt('0-9'))
  if (currentShot > 9 || currentShot < 0) {
    alert('число за пределами')
  } else {
    shots += 1
  }
  console.log(shots);
  if (currentShot === location1 || currentShot === location2 || currentShot === location3) {
    hits += 1
  }

  if (hits === 3) {
    alert('Победа!')
    isSunk = true
  }
}
// while (isSunk === false) {
//   console.log(68);
  //спрашиваю координату выстрела у игрока
  // currentShot = Number(prompt('Введите число от 0 до 9:'))
  // isSunk = true
  // console.log(123);
//   //увеличиваю кол-во выстрелов
//
//   // shots = shots + 1
//   shots += 1
//   console.log(shots);
//
//   if (currentShot === location1) {
//     hits += 1
//   }
//   if (currentShot === location2) {
//     hits += 1
//   }
//   if (currentShot === location3) {
//     hits += 1
//   }
//   console.log(hits);
  //проверяю полал ли человек по кораблю
  //для этого сверяю координату выстрелв с каждой координатой корабля
  //если игрок попал, то увеличиваю кол-во попаданий

  //если попал три раза, то тобплю корабль

// }
