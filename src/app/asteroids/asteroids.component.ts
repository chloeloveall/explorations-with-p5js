import { Component, OnInit } from '@angular/core';
import Ship from './js/ship';
import Asteroid from './js/asteroid';
import * as p5 from 'p5';

@Component({
  selector: 'arcade-asteroids',
  templateUrl: './asteroids.component.html',
  styleUrls: ['./asteroids.component.scss']
})
export class AsteroidsComponent implements OnInit {
  ngOnInit(): void {
    
    const asteroids = (p5: any) => { 
      let ship: Ship;
      var cnv = p5;

      p5.setup = () => {
        cnv = p5.createCanvas(p5.windowWidth, p5.windowHeight)
        cnv.parent('asteroidsContainer')
        ship = new Ship(p5)
      }

      p5.draw = () => {
        p5.background(0)
        // p5.translate(ship.pos.x, ship.pos.y)
        ship.render()
        ship.turn()
        ship.update()
        ship.edges()

        for (let i = 0; i < asteroids.length; i++) {

        }
      }

      p5.keyReleased = () => {
        ship.setRotation(0)
        ship.boosting(false)
      }

      p5.keyPressed = () => {
        if (p5.keyCode == p5.RIGHT_ARROW) {
          ship.setRotation(0.1)
        } else if (p5.keyCode == p5.LEFT_ARROW) {
          ship.setRotation(-0.1)
        } 
        else if (p5.keyCode == p5.UP_ARROW) {
          ship.boosting(true)
        }
      }
    }
  var canvas = new p5(asteroids);
  }
}
