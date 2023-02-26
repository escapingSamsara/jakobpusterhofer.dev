/////////////////////////////////////////
//CONTACT BANNER
/////////////////////////////////////////

/////////////////////////////////////////
//Contact Banner 2 (upper)
const root3 = document.documentElement
const marqueeElementsDisplayed3 = getComputedStyle(root3).getPropertyValue(
  '--marquee3-elements-displayed'
)
const marqueeContentThree = document.querySelector('ul.marquee-content3')

root3.style.setProperty(
  '--marquee3-elements',
  marqueeContentThree.children.length
)

for (let i = 0; i < marqueeElementsDisplayed3; i++) {
  marqueeContentThree.appendChild(
    marqueeContentThree.children[i].cloneNode(true)
  )
}

/////////////////////////////////////////
//Contact Banner 2 (lower)
// const root4 = document.documentElement
// const marqueeElementsDisplayed4 = getComputedStyle(root4).getPropertyValue(
//   '--marquee4-elements-displayed'
// )
// const marqueeContentFour = document.querySelector('ul.marquee-content4')

// root4.style.setProperty(
//   '--marquee4-elements',
//   marqueeContentFour.children.length
// )

// for (let i = 0; i < marqueeElementsDisplayed4; i++) {
//   marqueeContentFour.appendChild(marqueeContentFour.children[i].cloneNode(true))
// }
