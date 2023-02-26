/////////////////////////////////////////
// PORTFOLIO BANNER
/////////////////////////////////////////

const root2 = document.documentElement
const marqueeElementsDisplayed2 = getComputedStyle(root2).getPropertyValue(
  '--marquee2-elements-displayed'
)
const marqueeContentTwo = document.querySelector('ul.marquee-content2')

root2.style.setProperty(
  '--marquee2-elements',
  marqueeContentTwo.children.length
)

for (let i = 0; i < marqueeElementsDisplayed2; i++) {
  marqueeContentTwo.appendChild(marqueeContentTwo.children[i].cloneNode(true))
}
