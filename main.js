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
///////////////////////////////////////////////
//GSAP CURSOR AND TOUCH EVENTS
///////////////////////////////////////////////
window.addEventListener('load', function () {
  ///////////////////////////////////////////////
  //GSAP CURSOR
  gsap.set('.gsapCursor', { xPercent: -50, yPercent: -50 })
  let gsapCursor = document.querySelector('.gsapCursor')
  window.addEventListener('mousemove', (e) => {
    gsap.to(gsapCursor, 0.2, { x: e.clientX, y: e.clientY })
  })
  document.addEventListener('mousedown', function () {})
  document.addEventListener('mouseup', function () {})
  ///////////////////////////////////////////////
  //TOUCH EVENTS
  //cta-btn Touch Event:
  // let ctaBtn = document.querySelectorAll('.cta-btn')
  // ctaBtn.addEventListener('touchstart', () => {
  //   ctaBtn.classList.add('cta-btnTouch')
  // })
  //AboutMe Touch Events:
  // let chart = document.querySelectorAll('.chart')
  // chart.addEventListener('touchstart', () => {
  //   chart.classList.add('chartTouch')
  // })
  // let portfolioContentProjectImageMacbook = document.querySelector(
  //   '.portfolioContentProjectImageMacbook'
  // )
  // portfolioContentProjectImageMacbook.addEventListener('touchstart', () => {
  //   chart.classList.add('portfolioContentProjectImageMacbookTouch')
  // })
  // portfolioContentProjectImageMacbook.addEventListener('touchend', () => {
  //   chart.classList.remove('portfolioContentProjectImageMacbookTouch')
  // })
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
