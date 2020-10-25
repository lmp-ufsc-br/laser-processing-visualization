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

    const Particle = function (position) {
      this.diameter = 10;
      this.pos = position.copy();
    };

    Particle.prototype.isDead = function () {
      return this.lifeSpan < 0;
    };

    Particle.prototype.update = function () {
      this.diameter += 2;
    };

    Particle.prototype.display = function () {
      s.ellipse(this.pos.x, this.pos.y, this.diameter);
    };

    /** Sketch definition */

    s.setup = () => {
      s.createCanvas(this.myRef.current.clientWidth, 400);
      const origin = s.createVector(s.width / 2, s.height / 2);
      a = new Particle(origin);
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
  };

  render() {
    return <Container ref={this.myRef} />;
  }
}
