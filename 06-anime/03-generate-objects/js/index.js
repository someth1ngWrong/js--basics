let numberOfRects = 20

for (let i = 0; i < numberOfRects; i += 1) {
  let div = document.createElement('div')

  if (anime.random(0,100) % 2 === 0) {
    let size = `${anime.random(0,500)}px`
    div.style.width = size
    div.style.height = size
    div.style.borderRadius = '100%'
  } else {
    div.style.width = `${anime.random(0,500)}px`
    div.style.height = `${anime.random(0,500)}px`
  }

  div.style.background = `rgb(${anime.random(0,255)},${anime.random(0,255)},${anime.random(0,255)})`
  div.style.transform = `translate(${anime.random(0,100)}vw,${anime.random(0,100)}vh) rotate(${anime.random(0,360)}deg)`

  div.onmouseenter = function(e) {
    let elStyle = e.target.style
    let elWidthNum = Number(elStyle.width.slice(0,-2))
    let elHeightNum = Number(elStyle.height.slice(0,-2))

    if (elWidthNum === elHeightNum) {
      let size = `${anime.random(0,500)}px`
      elStyle.width = size
      elStyle.height = size
    } else {
      elStyle.width = `${anime.random(0,500)}px`
      elStyle.height = `${anime.random(0,500)}px`
    }

    elStyle.background = `rgb(${anime.random(0,255)},${anime.random(0,255)},${anime.random(0,255)})`
    elStyle.transform = `translate(${anime.random(0,100)}vw,${anime.random(0,100)}vh) rotate(${anime.random(0,360)}deg)`
  }

  document.body.append(div)
}
let fonts = [
  'Abril Fatface',
  'Aclonica',
  'Black Ops One',
  'Courier Prime',
  'Poppins',
  'Press Start 2P',
  'Raleway',
  'Righteous',
  'Special Elite',
  'VT323'
]
let word = Math.random().toString(36).slice(-10)
let numberOfWords = 20

for (let i = 0; i < numberOfWords; i += 1) {
  let p = document.createElement('p')


  word.split('').forEach(letter => {
    let span = document.createElement('span')
    span.innerText = letter
    span.style.fontFamily = fonts[anime.random(0,10)]
    span.style.fontSize = `${anime.random(0,5)}vw`
    span.style.color = `rgb(${anime.random(0,255)},${anime.random(0,255)},${anime.random(0,255)})`
    p.append(span)
  })


  p.style.transform = `translate(${anime.random(0,80)}vw,${anime.random(0,80)}vh) rotate(${anime.random(0,360)}deg)`


  // p.style.color =  `rgb(${anime.random(0,255)},${anime.random(0,255)},${anime.random(0,255)})`
  // p.style.fontFamily = fonts[anime.random(0,9)]
  // p.style.fontSize = `${anime.random(20,100)}px`
  // p.innerText = word
  // p.style.transform = `translate(${anime.random(5,40)}vw,${anime.random(5,40)}vh) rotate(${anime.random(0,360)}deg)`
  // p.style.fontWeight = anime.random(400,900)
  document.body.append(p)
}
