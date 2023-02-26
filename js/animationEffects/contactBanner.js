/////////////////////////////////////////
//CONTACT BANNER
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
