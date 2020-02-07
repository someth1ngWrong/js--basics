let secondName = 'Ivanov'

function logUser() {
  let name = 'Ivan'
  console.log(name + ' ' + secondName);
}

logUser()
console.log('secondName: ' + secondName);
console.log('name: ' + name);

//2

function getFullName(name, secondName) {
  return `ИФ человека ${name} ${secondName}`
}
console.log(getFullName('Mark', 'Markov'));
let leoFullName = getFullName('Leo', 'Leontev')


//3
function sayHello(name = 'strenger') {
  alert(`hello ${name}!`)
}

//4
function makeCoffee(cups, withMilk) {
  if (withMilk) {
    return console.log(`Варю ${cups} кофе с молоко...!`);
  }
  return console.log(`Варю ${cups} без добавок...!`);
}

makeCoffee(22,true)
makeCoffee(10,false)


//findMax
function findMax(a,b) {
  if (a > b) {
  return a;
  }
  if (a < b) {
  return b;
  }
  if (a === b) {
  return 'a=b';
  }
}
console.log(findMax(10,5));



//addOne
function addOne(a) {
  return a + 1
}
console.log(addOne(20));



//showQuote
function showQuote(text, autor = ' Unknown autor') {
  return text + ' ' + autor
  if (text === undefined) {
    return
  }
}
console.log(showQuote('lox','pushkin'));


//nextEven
function nextEven (num) {
  if (num % 2 === 0) {
    return num + 2
  } else {
    return num + 1
  }
}
console.log(nextEven(11));
console.log(nextEven(12));







































//
