export default function Ship(p5) {
  this.pos = p5.createVector(p5.width/2, p5.height/2);
  this.r = 20;
  this.heading = 0;
  this.rotation = 0;
  this.vel = p5.createVector(0, 0);
  this.isBoosting = false;

  this.update = function() {
    if (this.isBoosting) {
      this.boost();
    }
    this.pos.add(this.vel);
    this.vel.mult(0.99);
  }

  this.boosting = function(b) {
    this.isBoosting = b;
  }

  this.boost = function() {
    var force = p5.Vector.fromAngle(this.heading);
    force.mult(0.1);
    this.vel.add(force);
  }

  this.render = function() {
    p5.noFill();
    p5.translate(this.pos.x, this.pos.y)
    p5.stroke(255);
    p5.rotate(this.heading + p5.PI / 2);
    p5.triangle(-this.r, this.r, this.r, this.r, 0, -this.r);
  }

  this.setRotation = function(angle) {
    this.rotation = angle;
  }

  this.turn = function() {
    this.heading += this.rotation
  }

  this.edges = function() {
    if (this.pos.x > p5.width + this.r) {
      this.pos.x = -this.r;
    } else if (this.pos.x < -this.r) {
      this.pos.x = p5.width + this.r;
    }

    if (this.pos.y > p5.height + this.r) {
      this.pos.y = -this.r;
    } else if (this.pos.y < -this.r) {
      this.pos.y = p5.height + this.r;
    }
  }
}