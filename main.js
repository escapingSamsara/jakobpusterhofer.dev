///////////////////////////////////////////////
//PRELOADER
///////////////////////////////////////////////

window.addEventListener('load', function () {
  const preload = document.getElementById('preloader')
  this.setTimeout(function () {
    preload.classList.add('preload-finish')
  }, 50)
  this.setTimeout(function () {
    preload.style.display = 'none'
  }, 100)
})
//preloading screen end

//wiggle button effet:
// const card = document.querySelector('.cta-btn-resume')
// window.addEventListener('mousemove', (e) => {
//   let x = e.pageX - innerWidth / 2
//   let y = e.pageY - innerHeight / 2
//   card.style.transform = `translate(${x / 40}px, ${y / 40}px)`
// })

// //text morph
// /*
// 	This pen cleverly utilizes SVG filters to create a "Morphing Text" effect. Essentially, it layers 2 text elements on top of each other, and blurs them depending on which text element should be more visible. Once the blurring is applied, both texts are fed through a threshold filter together, which produces the "gooey" effect. Check the CSS - Comment the #container rule's filter out to see how the blurring works!
// */

// const elts = {
//   text1: document.getElementById('text1'),
//   text2: document.getElementById('text2'),
// }

// // The strings to morph between. You can change these to anything you want!
// const texts = ['Click', 'to', 'find', 'out', 'more', 'about', 'me']

// // Controls the speed of morphing.
// const morphTime = 1
// const cooldownTime = 0.25

// let textIndex = texts.length - 1
// let time = new Date()
// let morph = 0
// let cooldown = cooldownTime

// elts.text1.textContent = texts[textIndex % texts.length]
// elts.text2.textContent = texts[(textIndex + 1) % texts.length]

// function doMorph() {
//   morph -= cooldown
//   cooldown = 0

//   let fraction = morph / morphTime

//   if (fraction > 1) {
//     cooldown = cooldownTime
//     fraction = 1
//   }

//   setMorph(fraction)
// }

// A lot of the magic happens here, this is what applies the blur filter to the text.
// function setMorph(fraction) {
//   // fraction = Math.cos(fraction * Math.PI) / -2 + .5;

//   elts.text2.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`
//   elts.text2.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`

//   fraction = 1 - fraction
//   elts.text1.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`
//   elts.text1.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`

//   elts.text1.textContent = texts[textIndex % texts.length]
//   elts.text2.textContent = texts[(textIndex + 1) % texts.length]
// }

// function doCooldown() {
//   morph = 0

//   elts.text2.style.filter = ''
//   elts.text2.style.opacity = '100%'

//   elts.text1.style.filter = ''
//   elts.text1.style.opacity = '0%'
// }

// // Animation loop, which is called every frame.
// function animate() {
//   requestAnimationFrame(animate)

//   let newTime = new Date()
//   let shouldIncrementIndex = cooldown > 0
//   let dt = (newTime - time) / 1000
//   time = newTime

//   cooldown -= dt

//   if (cooldown <= 0) {
//     if (shouldIncrementIndex) {
//       textIndex++
//     }

//     doMorph()
//   } else {
//     doCooldown()
//   }
// }

// // Start the animation.
// animate()

///////////////////////////////////////////////
//TOUCH EVENTS
///////////////////////////////////////////////

// touch events
document.addEventListener('touchstart', function (e) {
  console.log('touchstart')

  e.preventDefault()
  e.stopImmediatePropagation()
  e.stopPropagation()
})
document.addEventListener('touchend', function (e) {
  console.log('touchend')

  e.preventDefault()
  e.stopImmediatePropagation()
  e.stopPropagation()
})
//------------------------------------------------------------

///////////////////////////////////////////////
//GSAP CURSOR
///////////////////////////////////////////////
window.addEventListener('load', function () {
  //GSAP CURSOR Start
  gsap.set('.gsapCursor', { xPercent: -50, yPercent: -50 })

  let gsapCursor = document.querySelector('.gsapCursor')

  window.addEventListener('mousemove', (e) => {
    gsap.to(gsapCursor, 0.2, { x: e.clientX, y: e.clientY })
  })
  document.addEventListener('mousedown', function () {})
  document.addEventListener('mouseup', function () {})

  // function addHoverHandlers(elements, className) {
  //   elements.forEach((element) => {
  //     element.addEventListener('mouseover', () => {
  //       gsapCursor.classList.add(className)
  //     })
  //     element.addEventListener('mouseleave', () => {
  //       gsapCursor.classList.remove(className)
  //     })
  //   })
  // }
  // addHoverHandlers(document.querySelectorAll('ul'), 'gsapCursorHoverNav')
  // addHoverHandlers(document.querySelectorAll('h1'), 'gsapCursorHover')
  // addHoverHandlers(document.querySelectorAll('h2'), 'gsapCursorHover')
  // addHoverHandlers(document.querySelector('.aboutHeader'), 'gsapCursorHover')
  // addHoverHandlers(
  //   document.querySelector('.portfolioHeader'),
  //   'gsapCursorHover'
  // )
  // addHoverHandlers(document.querySelector('.contactHeader'), 'gsapCursorHover')
  // addHoverHandlers(document.querySelector('.widgetHeader'), 'gsapCursorHover')
  // addHoverHandlers(
  //   document.querySelector('.paragraphHoverGSAP'),
  //   'gsapCursorHover'
  // )
  // addHoverHandlers(
  //   document.querySelector('.buttonHoverGSAP'),
  //   'gsapCursorHover'
  // )
  // addHoverHandlers(document.querySelectorAll('.icon'), 'gsapCursorHover')
  // addHoverHandlers(document.querySelector('.aboutSkillsOthers'))
  // addHoverHandlers(document.querySelectorAll('button'), 'gsapCursorHover')
  // addHoverHandlers(document.querySelectorAll('.logo'), 'gsapCursorHover')
  // addHoverHandlers(document.querySelectorAll('svg'), 'gsapCursorHover')
  // addHoverHandlers(document.querySelectorAll('a'), 'gsapCursorHover')
  // addHoverHandlers(document.querySelectorAll('img'), 'gsapCursorHoverImg')
  // addHoverHandlers(document.querySelectorAll('svg'), 'gsapCursorHoverImg')
  // addHoverHandlers(document.querySelectorAll('canvas'), 'gsapCursorHoverCanvas')
  // addHoverHandlers(document.querySelectorAll('input'), 'gsapCursorHoverInput')
  // addHoverHandlers(document.querySelectorAll('p'), 'gsapCursorHover')
  // addHoverHandlers(document.querySelector('.contactText'), 'gsapCursorHover')
  // //GSAP CURSOR End
})
