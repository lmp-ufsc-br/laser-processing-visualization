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
      s.createCanvas(800, 400);
    };

    /** X coordinate of the laser source */
    const laserSourcePositionX = 0;

    /** Y coordinate of the laser source */
    const laserSourcePositionY = 0;

    /** Diameter of the laser source */
    const laserSourceDiameter = 15;

    /** The red scale begins in 0 (white) and end in 255(red) */
    const laserSourceRedFill = 255;

    s.draw = () => {
      /** Draw gray background with R, G and B with same value */
      s.background(200);

      /** Laser Source has no stroke (border line) */
      s.noStroke();

      /** Red fill color */
      s.fill(laserSourceRedFill, 0, 0);

      /** Create 15px diameter circle, with the center positioned in coordinates (0,0) */
      s.ellipse(
        laserSourcePositionX,
        laserSourcePositionY,
        laserSourceDiameter,
        laserSourceDiameter
      );

      /** The variable "laserRayStartPosition" refers to the position vector of the Laser beam begin */
      const laserRayStartPosition = s.createVector(0, 0);

      /** The variable "laserRayEndPosition" refers to the mouse position vector */
      const laserRayEndPosition = s.createVector(s.mouseX, s.mouseY);

      /**
       * The vector "laserVector" is the result of the subtraction between the mouse vector and the pos vector;
       * This relation is found from the concept of vector sum;
       * The method sub takes the vectors that will be subtracted as parameters;
       */
      const laserVector = P5.Vector.sub(
        laserRayEndPosition,
        laserRayStartPosition
      );

      /** Create a bottom wall to limit the laser propagation */
      const bottomWallPosition = 250;
      s.stroke(0);
      s.strokeWeight(5);
      /**
       * The wall is a line from x=0 to x=width (the own width fo canvas);
       * and y position is represented by the constant "bottomWall", whose value is 300;
       */
      s.line(0, bottomWallPosition, s.width, bottomWallPosition);

      /**
       * If mouse is pressed, a line, that represents the laser beam is shot from position (0,0);
       * until position where it was clicked;
       */
      if (s.mouseIsPressed) {
        s.stroke(255, 0, 0);
        s.strokeWeight(2);
        s.line(0, 0, laserVector.x, laserVector.y);

        /** if the mouseY >= bottomWallPosition, the reflected line appears */

        if (laserVector.y >= bottomWallPosition) {
          /**
           * A new vector was created to be copied to generate the reflected vector
           * This new vector has the y position fixed
           */
          const xLaserReflectedStartPosition =
            (s.mouseX * bottomWallPosition) / s.mouseY;
          const reflectionStartBaseVector = s.createVector(0, 0);
          const reflectionEndBaseVector = s.createVector(
            xLaserReflectedStartPosition,
            bottomWallPosition
          );
          const reflectionBaseVector = P5.Vector.sub(
            reflectionEndBaseVector,
            reflectionStartBaseVector
          );
          /**
           * The reflection depends of a normal vector;
           * It behaves like a mirror
           */
          const normalVector = s.createVector(0, 1);
          /**
           * Variable "reflectedLaserVector" receives laserVector copy, and using the reflect method;
           * the vector is reflected;
           */
          const reflectedLaserVector = reflectionBaseVector.copy();
          reflectedLaserVector.reflect(normalVector);

          s.stroke(170, 0, 0);
          s.strokeWeight(2);
          s.translate(reflectionBaseVector.x, reflectionBaseVector.y);
          s.line(0, 0, reflectedLaserVector.x, reflectedLaserVector.y);
        }
      }
    };
  };

  render() {
    return <Container ref={this.myRef} />;
  }
}
