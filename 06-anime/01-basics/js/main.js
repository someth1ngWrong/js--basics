let targsAnimation01 = anime({
  targets: '.targs .box',
  translateX: 300,
  autoplay: false
})

let targsBtn01 = document.getElementById('targsBtn01')
targsBtn01.onclick = targsAnimation01.play

let propsAnimation01 = anime({
  targets: '.props .box',
  translateX: 400,
  rotate: 180,
  backgroundColor: '#126373',
  borderRadius: [0, '50%'],
  easing: 'easeInOutQuad',
  autoplay: false
})

let propsBtn01 = document.getElementById('propsBtn01')
propsBtn01.onclick = propsAnimation01.play

let valsAnimation01 = anime({
  targets: '.vals .circle',
  translateX: 500,
  duration: 1000,
  backgroundColor: 'rgba(0,0,255,1)',
  easing: 'easeOutQuint',
  autoplay: false,
  delay: anime.stagger([100,1500]),
  rotate: anime.stagger([-180,180])
})

let valsBtn01 = document.getElementById('valsBtn01')
valsBtn01.onclick = valsAnimation01.play

let path = anime.path('path')
let svgMotion = anime({
  targets: '.svgAnime .circle',
  translateX: path('x'),
  translateY: path('y'),
  rotate: path('angle'),
  easing: 'linear',
  duration: 15000,
  loop: true
})

// let prevTranslateX = 0
// let funcAnimation01 = anime ({
//   targets: '.func-move .box'
//   translateX: ,
//
//   changeComplete: function(el) {
//     console.log('Anima fin');
//     console.log('Anima fin');
//   },
//   autoplay: false;
// })
//
// let funcBtn01 = document.getElementById('funcBtn01')
// funcBtn01.onclick = funcAnimation01.play















//
