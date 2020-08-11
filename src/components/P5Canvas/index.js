import React from 'react';
import P5 from 'p5';

import { Container } from './styles';

export default class P5Canvas extends React.Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }

  componentDidMount() {
    this.myP5 = new P5(this.Sketch, this.myRef.current);
  }

  Sketch = (s) => {
    s.setup = () => {
      s.createCanvas(400, 400);
    };

    s.draw = () => {
      s.background(200);

      /** Laser Source hasn't a stroke */
      s.noStroke();
      /** Red fill color */
      s.fill(255, 0, 0);
      /** It's a 15px diameter circle, with the center positioned in coordinates (0,0) */
      s.ellipse(0, 0, 15, 15);

      /** The variable "pos" refers to the position vector of the Laser beam begin */
      const pos = s.createVector(0, 0);

      /** The variable "mouse" refers to the mouse position vector */
      const mouse = s.createVector(s.mouseX, s.mouseY);

      /**
       * The vector "v" is the result of the subtraction between the mouse vector and the pos vector;
       * This relation is found from the concept of vector sum;
       * The method sub takes the vectors that will be subtracted as parameters;
       */
      const v = P5.Vector.sub(mouse, pos);

      /**
       * If mouse is pressed, a line, that represents the laser beam is shot from position (0,0)
       * until position where it was clicked
       */

      if (s.mouseIsPressed) {
        s.stroke(255, 0, 0);
        s.strokeWeight(2);
        s.line(0, 0, v.x, v.y);
      }
    };
  };

  render() {
    return <Container ref={this.myRef} />;
  }
}
