import { Component, OnInit } from '@angular/core';
import * as p5 from 'p5';

@Component({
  selector: 'arcade-sketch',
  templateUrl: './sketch.component.html',
  styleUrls: ['./sketch.component.scss']
})
export class SketchComponent implements OnInit {
  ngOnInit(): void {
    const sketch = (p5: any) => {
      let penSize = 1;
      let penState = 0;
      
      p5.setup = () => {
        // let cnv = p5.createCanvas(p5.windowWidth - 100, 500);
        let cnv = p5.createCanvas(p5.windowWidth, p5.windowHeight);
        // var x = (p5.windowWidth - p5.width) / 2;
        // var y = (p5.windowHeight - p5.height) / 1;
        // cnv.position(x, y)
        // p5.background(255)
      }

      p5.draw = () => {
        if (p5.mouseIsPressed) {
          if (penState == 0) {
            p5.line(p5.mouseX, p5.mouseY, p5.pmouseX, p5.pmouseY);
          }
          if (penState == 1) {
            p5.ellipse(p5.mouseX, p5.mouseY, 10, 10);
          }
          if (penState == 2) {
            p5.line(p5.mouseX-5, p5.mouseY-5, p5.mouseX+5, p5.mouseY+5);
            p5.line(p5.mouseX+5, p5.mouseY-5, p5.mouseX-5, p5.mouseY+5);
          }
        }
      }

      p5.keyTyped = () => {
        const backgroundColorArray = [
          '#54478c', 
          '#2c699a', 
          '#048ba8', 
          '#0db39e',
          '#16db93',
          '#83e377',
          '#f3c4fb',
          '#b9e769',
          '#efea5a',
          '#f1c453',
          '#f29e4c',
          '#a01a58',
          '#892b64',
          '#f20089',
          '#d9ed92'
        ];
        const randomColor = Math.floor(Math.random() * backgroundColorArray.length);
        if (p5.key == 'c') {
          p5.background(backgroundColorArray[randomColor])
        }
        if (p5.key == 'r') {
          p5.stroke(255, 0, 0);
        }

        if (p5.key == 'b') {
          p5.stroke(0, 0, 255);
        }
        
        if (p5.key == 'x') {
          // x pen
          penState = 2;
        }
        
        if (p5.key == 'e') {
          // circle pen
          penState = 1;
        }
        
        if (p5.key == 'l') {
          // line pen
          penState = 0;
        }
      }

      p5.keyPressed = () => {
        if (p5.keyCode == p5.LEFT_ARROW && penSize > 1) {
          penSize -= 1;
        }
        
        if (p5.keyCode == p5.RIGHT_ARROW) {
          penSize += 1;
        }
          
        p5.strokeWeight(penSize);
      }

      p5.windowResized = () => {
        p5.resizeCanvas(p5.windowWidth, p5.windowHeight);
      }
    }
    var canvas = new p5(sketch);
  }
}
