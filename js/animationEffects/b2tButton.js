/////////////////////////////////////////
// B2T BUTTON
/////////////////////////////////////////
let b2tBtn = document.getElementById('b2tBtn')
const showAnim = gsap
  .from('#b2tBtn', {
    start: 'top top',
    yPercent: -200,
    paused: true,
    duration: 0.4,
    // scrub: false,
    ease: 'easeInOut',
  })
  .progress(1)
ScrollTrigger.create({
  trigger: '#heroWrapper',
  start: 'top top',
  end: 99999,
  onUpdate: (self) => {
    self.direction === -1 ? showAnim.play() : showAnim.reverse()
  },
})
// Progress Bar
gsap.from('.progressBar', {
  scrollTrigger: {
    trigger: '#navBar',
    scrub: true,
    start: 'top top',
    end: () => `+=${document.body.offsetHeight * 4.5}`,
  },
  scaleY: 0,
  scaleX: 0,
  transformOrigin: 'center center',
  ease: 'none',
})
