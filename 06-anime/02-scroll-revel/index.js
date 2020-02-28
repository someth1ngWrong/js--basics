// 1

let controller = new ScrollMagic.Controller()

let box1 = document.querySelector('#box-1')
let box1Animation = anime({
  targets: box1,
  translateX: 500,
  rotate: [0,360],
  duritation: 1500,
  autoplay: false
})

new ScrollMagic.Scene({
  targetElement: box1,
  triggerHook: 'onEnter'
})

.addTo(controller)
.on('enter', function(){
  box1Animation.play()
})

// 2
let box2 = document.querySelector('#box-2')
let box2Animation = anime({
  targets: box2,
  translateX: '80vw',
  rotate: '+=10turn',
  easing: 'linear',
  autoplay: false
})
let section3 = document.querySelector('#section-3')
new ScrollMagic.Scene({
  triggerElement: section3,
  duration: section3.getBoundingClientRect().height
})
.addTo(controller)
.setPin(box2)
.on('progress', (event) => {
  box2Animation.seek(box2Animation.duration * event.progress)
})

// 3

let lastSection = document.getElementById('last-section')
let loader = document.querySelector('.loader')
let circlesWarpper = document.querySelector('.circles-warpper')

let loadingScene = new ScrollMagic.Scene({
  triggerElement: loader,
  triggerHook: 'onEnter'
})

.addTo(controller)
.on('enter', () => {
  setTimeout(addCircles, 2000,20)
})

function addCircles (amount) {
  let count = 0
  while (amount > count) {
    let newDiv = document.createElement('div')
    newDiv.classList.add('circle')
    newDiv.style.background = getRandomRGBColor()
    circlesWarpper.append(newDiv)
    count +=1
    console.log(count);
  }
}

function getRandomRGBColor() {
return `rgb(${getRGBcode()},${getRGBcode()},${getRGBcode()})`
}

function getRGBcode() {
  return Math.round(Math.random() * 255)
}
























//
