class Slime {
  constructor() {
    this.y = height / 2
    this.x = 64
    this.gravity = 0.6
    this.lift = -16
    this.velocity = 0

    this.show = function () {
      fill(255)
      ellipse(this.x, this.y, 32, 32)
    }

    this.goUp = function () {
      this.velocity += this.lift
    }

    this.update = function () {
      this.velocity += this.gravity
      this.velocity *= 0.9
      this.y += this.velocity

      if (this.y > height) {
        this.y = height
        this.velocity = 0
      }

      if (this.y < 0) {
        this.y = 0
        this.velocity = 0
      }

    }

  }
}

class Obstacle {
  constructor() {
    this.x = width
    this.w = 30
    this.topMin = 50
    this.botMin = height - 100
    this.gapStart = random(this.topMin, this.botMin)
    this.gapLength = 200
    this.speed = 3


    this.show = function () {
      fill(0)
      if (this.highlight) {
        fill('#FF0863')
      }
      //rect(this.x, 0, this.w, this.gapStart)
      rect(this.x, this.gapStart + this.gapLength, this.w, height)
    }
    this.update = function () {
      this.x -= this.speed
    }
    this.offscreen = function () {
      return this.x < -this.w
    }

    this.hits = function (slime) {
      if (slime.y > this.gapStart + this.gapLength) {
        if (slime.x > this.x && slime.x < this.x + this.w) {
          this.highlight = true
          return true
        }
      }
      this.highlight = false
      return false
    }
  }
}

let slime
let obstacles = []
let pipesCleared
let obstaclesHit
let playQuality
let mic
let slimebody

function preload(){
  img = loadImage('slime.png');
}

function setup(){
  let canvas = createCanvas(800, 400)
  canvas.parent('canvasContainer')
  
  slime = new Slime()
  
  pipesCleared = 0
  obstaclesHit = 0
  playQuality = 10
  obstacles.push(new Obstacle())
  mic = new p5.AudioIn();
  mic.start();
  
}

function draw(){
  
  clear()
  fill(0, 0, 255)
  textSize(20)
  textFont("Helvetica")
  text('Obstacles Cleared: ' + pipesCleared, 20, 20)
  text('Obstacle Damage: ' + obstaclesHit, 20, 40)
  text('Play Quality: ' + String(1 + (pipesCleared / obstaclesHit) || 4).substring(0, 4) + '/5', 20, 60)
  slime.show()
  slime.update()
  // background('#FF0000')
  
    if (frameCount % 100 == 0) {
        obstacles.push(new Obstacle())
    }  
  
  for (let i = obstacles.length - 1; i >= 0; i--){
      obstacles[i].show()
      obstacles[i].update()
      
      if (obstacles[i].hits(slime)){
        obstaclesHit++
      }
      
      if (obstacles[i].offscreen()){
          obstacles.splice(i, 1)
          pipesCleared++   
      }      
  }
  let vol = mic.getLevel();
  text("Your Voice Level: "+vol,20,80);
  if (vol>=0.2){
    slime.goUp()
  }
  
}