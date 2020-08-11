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

      s.noStroke();
      s.fill(0);
      s.ellipse(12.5, 12.5, 50, 50);

      const pos = s.createVector(30, 30);
      const mouse = s.createVector(s.mouseX, s.mouseY);

      const v = P5.Vector.sub(mouse, pos);
      /** s.translate(30, 30);
      s.stroke(255, 0, 0);
      s.strokeWeight(2);
      s.line(0, 0, v.x, v.y);
      */
      if (s.mouseIsPressed) {
        s.translate(30, 30);
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
