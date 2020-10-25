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
    /** Particle definition */

    const Particle = function (position, diameter) {
      this.diameter = diameter;
      this.pos = position.copy();
      this.vel = s.createVector(0, 0);
      this.acc = s.createVector(0, 0);
      this.lifeSpan = 255;
    };

    Particle.prototype.isDead = function () {
      return this.lifeSpan < 0;
    };

    Particle.prototype.update = function () {
      this.acc = P5.Vector.random2D().setMag(0.2);
      this.vel.add(this.acc);
      this.pos.add(this.vel);
      this.lifeSpan -= 1;
    };

    Particle.prototype.display = function () {
      s.fill(255, this.lifeSpan);
      s.noStroke();
      s.ellipse(this.pos.x, this.pos.y, this.diameter);
    };

    /** PARTICLE SYSTEM */

    const ParticleSystem = function (position, mean, std) {
      this.mean = mean;
      this.std = std;
      this.origin = position.copy();
      this.particles = [];
    };

    ParticleSystem.prototype.addParticle = function () {
      this.particles.push(
        new Particle(this.origin, 100 * s.randomGaussian(this.mean, this.std))
      );
    };

    ParticleSystem.prototype.run = function () {
      this.particles.forEach((particle, index) => {
        particle.update();

        if (particle.isDead()) {
          this.particles.splice(index, 1);
        }

        particle.display();
      });
    };

    /** Sketch definition */

    let system;

    const mean = 0.08;
    const std = 0.01;
    const scaledDiameter = 10; // px

    s.setup = () => {
      s.createCanvas(this.myRef.current.clientWidth, 400);
      const origin = s.createVector(s.width / 2, s.height / 2);
      system = new ParticleSystem(origin, mean, std);
    };

    s.windowResized = () => {
      s.resizeCanvas(this.myRef.current.clientWidth, 400);
    };

    s.draw = () => {
      s.background(0);

      system.addParticle();
      system.run();
    };
  };

  render() {
    return <Container ref={this.myRef} />;
  }
}
