let spots;

function setup() {
  createCanvas(800, 600);
  spots = new SpinSpots(width/2, height/2, -0.10, 90.0);
}

function draw() {
  background('orange');
  spots.update();
  spots.display();
}

class SpinSpots {
  constructor(x, y, s, d) {
    this.x = x;
    this.y = y;
    this.speed = s;
    this.dim = d;
    this.angle = 0.0;
  }

  update() {
    this.angle += this.speed;
  }

  display() {
    noStroke();
    push();
    translate(this.x, this.y);
    this.angle += this.speed;
    rotate(this.angle);
    ellipse(-this.dim/8, 0, this.dim, this.dim);
    ellipse(this.dim/2, 0, this.dim, this.dim);
    pop();
  }
}
