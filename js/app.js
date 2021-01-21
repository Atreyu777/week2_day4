
// const drawingApp = {
//     name: 'Drawing Canvas App',
//     description: 'Canvas App for primitive shapes drawing',
//     author: 'Germán Álvarez',
//     version: '1.0.0',
//     license: undefined,
//     ctx: undefined,
//     canvasDom: undefined,
//     canvasSize: {
//         w: undefined,
//         h: undefined
//     },
//     init(id) {
//         this.canvasDOM = document.querySelector(`#${id}`)
//         this.ctx = this.canvasDOM.getContext('2d')
//         this.setDimensions()
//     },
//     setDimensions() {
//         this.canvasSize = {
//             w: window.innerWidth,
//             h: window.innerHeight
//         }
//         this.canvasDOM.setAttribute('width', this.canvasSize.w)
//         this.canvasDOM.setAttribute('height', this.canvasSize.h)
//     },
//     drawFilledRectangle() {
//         this.ctx.fillRect(this.canvasSize.w / 2 - 150, this.canvasSize.h / 2 - 150, 300, 300)
//         this.ctx.fillStyle = 'red'
//         this.ctx.fillRect(this.canvasSize.w / 2 - 50, this.canvasSize.h / 2 - 250, 100, 500)
//         this.ctx.fillStyle = '#ff00ff'
//         this.ctx.fillRect(this.canvasSize.w / 2 - 250, this.canvasSize.h / 2 - 50, 500, 100)
//     },
//     drawLinearSqare() {
//         this.ctx.strokeRect(this.canvasSize.w / 2 - 150, this.canvasSize.h / 2 - 150, 300, 300)
//         this.ctx.lineWidth = 10
//         this.ctx.strokeStyle = 'red'
//         this.ctx.strokeRect(50, this.canvasSize.h / 2 - 50, this.canvasSize.w - 100, 100)
//     },
//     drawLines() {
//         this.ctx.beginPath()
//         this.ctx.moveTo(500, 400)
//         this.ctx.lineTo(600, 500)
//         this.ctx.lineTo(700, 400)
//         this.ctx.closePath()
//         this.ctx.stroke()

//         this.ctx.lineWidth = 10
//         this.ctx.strokeStyle = 'red'
//         this.ctx.setLineDash([40, 40])
//         this.ctx.moveTo(50, this.canvasSize.h / 2)
//         this.ctx.lineTo(this.canvasSize.w - 100, this.canvasSize.h / 2)
//         this.ctx.stroke()
//     },
//     drawArc() {
//         this.ctx.fillStyle = 'red'
//         this.ctx.lineWidth = 5
//         this.ctx.arc(this.canvasSize.w / 2, this.canvasSize.h / 2, 100, 0, Math.PI * 2)
//         this.ctx.fill()
//         this.ctx.stroke()
//     },
//     writeText(text) {
//         this.ctx.font = '50px sans-serif'
//         this.ctx.fillText(text, 100, 100, 300)
//     },
//     showImage(imgName) {
//         let imageInstance = new Image()
//         imageInstance.src = `img/${imgName}`
//         imageInstance.onload = () => this.ctx.drawImage(imageInstance, 100, 100, 200, 200)
//     }
// }





// const animateApp = {
//     name: 'Animating Canvas App',
//     description: 'Canvas App for elements animation',
//     author: 'Germán Álvarez',
//     version: '1.0.0',
//     license: undefined,
//     ctx: undefined,
//     canvasDom: undefined,
//     camels: [],
//     frames: 0,
//     canvasSize: {
//         w: undefined,
//         h: undefined
//     },
//     init(id) {
//         this.canvasDOM = document.querySelector(`#${id}`)
//         this.ctx = this.canvasDOM.getContext('2d')
//         this.setDimensions()
//         this.createCamels()
//         this.drawAll()
//     },
//     setDimensions() {
//         this.canvasSize = {
//             w: window.innerWidth,
//             h: window.innerHeight
//         }
//         this.canvasDOM.setAttribute('width', this.canvasSize.w)
//         this.canvasDOM.setAttribute('height', this.canvasSize.h)
//     },
//     createCamels() {
//         const camel1 = new Camel(this.ctx, this.canvasSize, 0, 100, 200, 150, 4)
//         const camel2 = new Camel(this.ctx, this.canvasSize, 0, 300, 100, 80, 8)
//         const camel3 = new Camel(this.ctx, this.canvasSize, 0, 600, 300, 200, 2)

//         this.camels.push(camel1, camel2, camel3)
//     },
//     drawAll() {
//         setInterval(() => {
//             this.clearScreen()
//             this.camels.forEach(elm => elm.draw())
//             this.frames++
//             this.frames % 20 === 0 ? this.createObstacle() : null
//         }, 70)
//     },
//     clearScreen() {
//         this.ctx.clearRect(0, 0, this.canvasSize.w, this.canvasSize.h)
//     },
//     createObstacle() {
//         console.log('AHORA CREARÍAMOS UN NUEVO OBSTÁCULO!')
//     }
// }




// class Camel {

//     constructor(ctx, canvasSize, posX, posY, width, height, speed) {

//         this.ctx = ctx

//         this.camelPos = { x: posX, y: posY }
//         this.camelSize = { w: width, h: height }
//         this.canvasSize = canvasSize
//         this.speed = speed

//         this.imgName = 'camel.png'
//         this.imageInstance = new Image()
//         this.imageInstance.src = `img/${this.imgName}`
//     }

//     draw() {
//         this.move()
//         this.ctx.drawImage(this.imageInstance, this.camelPos.x, this.camelPos.y, this.camelSize.w, this.camelSize.h)
//     }

//     move() {
//         if (this.camelPos.x >= this.canvasSize.w - this.camelSize.w || this.camelPos.x < 0) this.invertSpeed()
//         this.camelPos.x += this.speed
//     }

//     invertSpeed() {
//         this.speed *= -1
//     }
// }





const controlsApp = {
    name: 'Controlled Canvas App',
    description: 'Canvas App for elements controlling',
    author: 'Germán Álvarez',
    version: '1.0.0',
    license: undefined,
    ctx: undefined,
    canvasDom: undefined,
    ball: undefined,
    canvasSize: {
        w: undefined,
        h: undefined
    },
    keys: {
        left: 'ArrowLeft',
        right: 'ArrowRight'
    },
    init(id) {
        this.canvasDOM = document.querySelector(`#${id}`)
        this.ctx = this.canvasDOM.getContext('2d')
        this.setEventListeners()
        this.setDimensions()
        this.createBall()
        this.drawAll()
    },
    setEventListeners() {
        document.onkeyup = e => {
            if (e.key === this.keys.left) {
                this.ball.move(-5)
            }
            if (e.key === this.keys.right) {
                this.ball.move(5)
            }
        }
    },
    setDimensions() {
        this.canvasSize = {
            w: window.innerWidth,
            h: window.innerHeight
        }
        this.canvasDOM.setAttribute('width', this.canvasSize.w)
        this.canvasDOM.setAttribute('height', this.canvasSize.h)
    },
    createBall() {
        this.ball = new Ball(this.ctx, this.canvasSize, 100, 100, 100, 100)
    },
    drawAll() {
        setInterval(() => {
            this.clearScreen()
            this.ball.draw()
        }, 70)
    },
    clearScreen() {
        this.ctx.clearRect(0, 0, this.canvasSize.w, this.canvasSize.w)
    }
}



class Ball {

    constructor(ctx, canvasSize, posX, posY, width, height) {

        this.ctx = ctx
        this.canvasSize = canvasSize
        this.ballPos = {
            x: posX,
            y: posY
        }
        this.ballSize = {
            w: width,
            h: height
        }

        this.imageName = 'ball.png'
        this.imageInstance = new Image()
        this.imageInstance.src = `img/${this.imageName}`
    }

    draw() {
        this.ctx.drawImage(this.imageInstance, this.ballPos.x, this.ballPos.y, this.ballSize.w, this.ballSize.h)
    }

    move(distance) {
        this.ballPos.x += distance
    }
}