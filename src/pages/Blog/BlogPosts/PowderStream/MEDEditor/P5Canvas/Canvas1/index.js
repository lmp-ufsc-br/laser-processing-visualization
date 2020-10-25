import React from 'react';
import P5 from 'p5';

import { Container } from './styles';

export default class CurrentCanvas extends React.Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }

  componentDidMount() {
    this.myP5 = new P5(this.Sketch, this.myRef.current);
  }

  Sketch = (s) => {
    let a;

    s.setup = () => {
      s.createCanvas(this.myRef.current.clientWidth, 400);
      a = new Particle();
    };

    s.windowResized = () => {
      s.resizeCanvas(this.myRef.current.clientWidth, 400);
    };

    s.draw = () => {
      /** Draw gray background with R, G and B with same value */
      s.background(200);

      /** Laser Source has no stroke (border line) */
      s.noStroke();

      a.update();
      a.display();
    };

    let Particle = function () {
      this.diameter = 10;
    };

    Particle.prototype.update = function () {
      this.diameter += 2;
    };

    Particle.prototype.display = function () {
      s.ellipse(s.mouseX, s.mouseY, this.diameter);
    };
  };

  render() {
    return <Container ref={this.myRef} />;
  }
}
