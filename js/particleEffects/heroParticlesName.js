///////////////////////////////////////////////
//HERO CANVAS (PARTICL EFFECT)
///////////////////////////////////////////////
window.addEventListener('load', function () {
  const canvas = document.getElementById('canvasNameHeader')
  const ctx = canvas.getContext('2d', {
    // willReadFrequently: true,
  })
  const canvasNameHeader = document.getElementById('canvasNameHeader')
  canvas.width = canvasNameHeader.clientWidth
  canvas.height = canvasNameHeader.clientHeight

  class Particle {
    constructor(effect, x, y, color) {
      this.effect = effect
      this.x = Math.random() * this.effect.canvasWidth
      this.y = Math.random() * this.effect.canvasHeight
      this.color = color
      this.originX = Math.floor(x)
      this.originY = Math.floor(y)
      this.size = ((Math.random() * 1 + 1) * this.effect.gap) / 2 + 0.5
      // this.size = 2
      // this.size = canvasNameHeader.clientHeight * 0.002
      this.dx = 0
      this.dy = 0
      this.vx = 0
      this.vy = 0
      this.force = 0
      this.angle = 0
      this.distance = 0
      this.friction = Math.random() * 0.2 + 0.15
      this.ease = Math.random() * 0.1 + 0.02 // number between 0.005 and 0.105
    }
    draw() {
      this.effect.context.fillStyle = this.color
      this.effect.context.fillRect(this.x, this.y, this.size, this.size)
      // this.effect.context.beginPath()
      // this.effect.context.arc(this.x, this.y, this.size, 0, Math.PI * 2)
      // this.effect.context.fill()
    }
    update() {
      this.dx = this.effect.mouse.x - this.x // distance between mouse and particle
      this.dy = this.effect.mouse.y - this.y
      this.distance = this.dx * this.dx + this.dy * this.dy
      this.force = -this.effect.mouse.radius / this.distance

      if (this.distance < this.effect.mouse.radius) {
        this.angle = Math.atan2(this.dy, this.dx)
        this.vx += this.force * Math.cos(this.angle)
        this.vy += this.force * Math.sin(this.angle)
      }

      this.x += (this.vx *= this.friction) + (this.originX - this.x) * this.ease
      this.y += (this.vy *= this.friction) + (this.originY - this.y) * this.ease
    }
  }

  class Effect {
    constructor(context, canvasWidth, canvasHeight) {
      this.context = context
      this.canvasWidth = canvasWidth
      this.canvasHeight = canvasHeight
      this.textX = this.canvasWidth / 20
      this.textY = this.canvasHeight / 2
      this.maxTextWidth = this.canvasWidth * 0.6

      if (canvasNameHeader.clientWidth >= canvasNameHeader.clientHeight) {
        this.fontSize =
          (canvasNameHeader.clientWidth / canvasNameHeader.clientHeight) * 70
      } else if (canvasNameHeader.clientHeight > canvasNameHeader.clientWidth) {
        this.fontSize =
          (canvasNameHeader.clientWidth / canvasNameHeader.clientHeight) * 70
      }

      console.log(this.fontSize)
      this.lineHeight = this.fontSize * 1.15
      this.textInput = document.getElementById('canvasNameHeader')
      this.verticalOffset = 180
      this.textInput.addEventListener('keyup', (e) => {
        if (e.key !== ' ') {
          this.context.clearRect(0, 0, this.canvasWidth, this.canvasHeight)
          this.wrapText(e.target.value)
        }
      })
      // particle text
      this.particles = []
      this.gap = 2
      this.mouse = {
        radius: 50000,
        x: 0,
        y: 0,
      }
      canvas.addEventListener('mousemove', (e) => {
        const rect = canvas.getBoundingClientRect()
        this.mouse.x = e.x - rect.left
        this.mouse.y = e.y - rect.top
      })

      canvas.addEventListener('touchmove', (e) => {
        this.mouse.x = e.x
        this.mouse.y = e.y
      })
    }
    wrapText(text) {
      // canvas settings
      const gradient = this.context.createLinearGradient(
        0,
        0,
        this.canvasWidth,
        this.canvasHeight
      )
      gradient.addColorStop(0.2, 'white')
      gradient.addColorStop(0.5, 'white')
      gradient.addColorStop(0.8, 'white')
      // gradient.addColorStop(0.35, 'white')
      // gradient.addColorStop(0.5, ' #00adb5')
      // gradient.addColorStop(0.65, 'white')
      this.context.fillStyle = gradient
      this.context.textAlign = 'left'
      this.context.textBaseline = 'middle'
      this.context.lineWidth = 1
      // this.context.strokeStyle = 'black'
      this.context.fontStyle = 'normal '
      this.context.fontWeight = '500 '
      this.context.font =
        this.context.fontStyle +
        this.context.fontWeight +
        this.fontSize +
        'px Poppins'

      // break multiline text
      let linesArray = []
      let words = text.split('\n')
      let lineCounter = 0
      let line = ''
      for (let i = 0; i < words.length; i++) {
        let testLine = line + words[i] + ' '
        if (this.context.measureText(testLine).width > this.maxTextWidth) {
          line = words[i] + ' '
          lineCounter++
        } else {
          line = testLine
        }
        linesArray[lineCounter] = line
      }
      let textHeight = this.lineHeight * lineCounter
      this.textY = this.canvasHeight / 2 - textHeight / 2 + this.verticalOffset
      linesArray.forEach((el, index) => {
        this.context.fillText(
          el,
          this.textX,
          this.textY + index * this.lineHeight
        )
        // this.context.strokeText(
        //   el,
        //   this.textX,
        //   this.textY + index * this.lineHeight
        // )
      })
      this.convertToParticles()
    }
    convertToParticles() {
      this.particles = []
      const pixels = this.context.getImageData(
        0,
        0,
        this.canvasWidth,
        this.canvasHeight
      ).data
      this.context.clearRect(0, 0, this.canvasWidth, this.canvasHeight)
      for (let y = 0; y < this.canvasHeight; y += this.gap) {
        for (let x = 0; x < this.canvasWidth; x += this.gap) {
          const index = (y * this.canvasWidth + x) * 4
          const alpha = pixels[index + 3]
          if (alpha > 0) {
            const red = pixels[index]
            const green = pixels[index + 1]
            const blue = pixels[index + 2]
            const color = 'rgb(' + red + ',' + green + ',' + blue + ')'
            this.particles.push(new Particle(this, x, y, color))
          }
        }
      }
    }

    // constellations() {
    //   for (let a = 0; a < this.particles.length; a++) {
    //     for (let b = a; b < this.particles.length; b++) {
    //       const dx = this.particles[a].x - this.particles[b].x
    //       const dy = this.particles[a].y - this.particles[b].y
    //       const distance = Math.hypot(dy, dx)
    //       const connectDistance = this.gap * 2.1
    //       if (distance < connectDistance) {
    //         const opacity = 1 - distance / connectDistance
    //         const position = this.particles[a].size / 2
    //         this.context.beginPath()
    //         this.context.moveTo(
    //           this.particles[a].x + position,
    //           this.particles[a].y + position
    //         )
    //         this.context.lineTo(
    //           this.particles[b].x + position,
    //           this.particles[b].y + position
    //         )
    //         this.context.save()
    //         this.context.globalAlpha = opacity
    //         this.context.stroke()
    //         this.context.restore()
    //       }
    //     }
    //   }
    // }
    render() {
      this.particles.forEach((particle) => {
        particle.update()
        particle.draw()
      })
      // constellations()
    }

    //resize canvas
    resize(width, height) {
      this.canvasWidth = width
      this.canvasHeight = height
      this.textX = this.canvasWidth / 5
      this.textY = this.canvasHeight / 5
      this.maxTextWidth = this.canvasWidth * 1
      this.fontSize = canvasNameHeader.clientWidth / 2.5
    }
  }

  // resize canvas on window resize

  // window.addEventListener('resize', function () {
  //   location.reload()
  //   // this.alert('refresh browser after resizing')
  // })

  const effect = new Effect(ctx, canvas.width, canvas.height)
  // effect.wrapText(effect.textInput.value)
  effect.wrapText("Hi, I'm Jakob.\nI'm a web developer.")
  effect.render()

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    effect.render()
    requestAnimationFrame(animate)
  }
  animate()

  window.addEventListener('resize', function () {
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
    effect.resize(canvas.width, canvas.height)
    effect.wrapText(effect.textInput.value)
    effect.wrapText("Hi, I'm Jakob.\nI'm a web developer.")
  })
})
