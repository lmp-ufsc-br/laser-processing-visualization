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

    s.draw = () => {
      /** Laser Source */
      const laserSource = {
        /** X Coordinate of laser source position */
        x: 0,

        /** Y Coordinate of laser source position */
        y: 0,

        /** Diameter of laser source */
        diameter: 15,

        /** Color of laser source */
        color: {
          r: 255,
          g: 0,
          b: 0,
        },
      };
      /** Draw gray background with R, G and B with same value */
      s.background(200);

      /** Laser Source has no stroke (border line) */
      s.noStroke();

      /** Red fill color */
      s.fill(laserSource.color.r, laserSource.color.g, laserSource.color.b);

      /** Create 15px diameter circle, with the center positioned in coordinates (0,0) */
      s.ellipse(
        laserSource.x,
        laserSource.y,
        laserSource.diameter,
        laserSource.diameter
      );

      /** The variable "laserRayStartPosition" refers to the position vector of the Laser beam begin */
      const laserRayStartPosition = s.createVector(
        laserSource.x,
        laserSource.y
      );

      /** Mouse position vector */
      const laserRayDirection = s.createVector(
        s.mouseX + laserSource.x,
        s.mouseY + laserSource.y
      );

      /**
       * The vector "laserVector" is the result of the subtraction between the mouse vector and the pos vector;
       * This relation is found from the concept of vector sum;
       * The method sub takes the vectors that will be subtracted as parameters;
       */
      const laserVector = P5.Vector.sub(
        laserRayDirection,
        laserRayStartPosition
      );

      /**
       * Bottom wall
       * The wall is a line from x=0 to x=width (the own width fo canvas);
       * and y position is represented by the constant "bottomWall";
       */

      /** Create a bottom wall to limit the laser propagation */
      const bottomWall = {
        yPosition: 250,
        thickness: 5,
        color: 0,
      };

      s.stroke(bottomWall.color);
      s.strokeWeight(bottomWall.thickness);
      s.line(0, bottomWall.yPosition, s.width, bottomWall.yPosition);

      /**
       * If mouse is pressed, a line, that represents the laser beam is shot from position (0,0);
       * until position where it was clicked;
       */
      if (s.mouseIsPressed) {
        /** The incidence angle(radians) is equal to the arctan of mouseY position over the mouseX position */
        const incidenceAngleInRadians = s.atan(
          (s.mouseX - laserSource.x) / (s.mouseY - laserSource.y)
        );

        /** To convert radians to degrees, just calculate a rule of three */
        const incidenceAngleInDegrees = (180 * incidenceAngleInRadians) / s.PI;

        const textProperties = {
          edgeThickness: 0,
          color: {
            greyscale: 50,
          },
          x: 10,
          y: 350,
          decimalPlaces: 2,
        };

        s.strokeWeight(textProperties.edgeThickness);
        s.fill(textProperties.color.greyscale);
        s.text(
          `Ângulo de incidência: ${incidenceAngleInDegrees.toFixed(
            textProperties.decimalPlaces
          )}`,
          textProperties.x,
          textProperties.y
        );

        /** if the mouseY <= bottomWallPosition, the reflected line appears */
        if (laserVector.y <= bottomWall.yPosition) {
          /** Draw laser ray */
          s.stroke(
            laserSource.color.r,
            laserSource.color.g,
            laserSource.color.b
          );
          s.strokeWeight(2);
          s.line(laserSource.x, laserSource.y, laserVector.x, laserVector.y);
        } else {
          /**
           * A new vector was created to be copied to generate the reflected vector
           * This new vector has the y position fixed
           */

          const reflectedRay = {
            xStartPosition:
              laserSource.x +
              ((s.mouseX - laserSource.x) *
                (bottomWall.yPosition - laserSource.y)) /
                (s.mouseY - laserSource.y),
            thickness: 2,
            color: {
              r: 170,
              g: 0,
              b: 0,
            },
          };
          const guideBeam = {
            thickness: 2,
            color: {
              greyscale: 150,
            },
          };

          // Laser Ray
          s.stroke(
            laserSource.color.r,
            laserSource.color.g,
            laserSource.color.b
          );
          s.strokeWeight(guideBeam.thickness);
          s.line(
            laserSource.x,
            laserSource.y,
            reflectedRay.xStartPosition,
            bottomWall.yPosition
          );

          // Normal line
          s.stroke(0);
          s.strokeWeight(0.5);
          s.line(
            reflectedRay.xStartPosition,
            0,
            reflectedRay.xStartPosition,
            s.height
          );

          // Guide Beam
          s.stroke(guideBeam.color.greyscale);
          s.strokeWeight(guideBeam.thickness);
          s.line(
            reflectedRay.xStartPosition,
            bottomWall.yPosition,
            laserVector.x,
            laserVector.y
          );

          const refractedRayProperties = {
            refractiveIndex: 5,
            thickness: 2,
            color: {
              r: 0,
              g: 0,
              b: 255,
            },
          };

          const refractiveAngleInRadians = s.asin(
            s.sin(incidenceAngleInRadians) /
              refractedRayProperties.refractiveIndex
          );
          const refractiveAngleInDegrees =
            (180 * refractiveAngleInRadians) / s.PI;
          const xPosition =
            reflectedRay.xStartPosition +
            (s.height - bottomWall.yPosition) * s.tan(refractiveAngleInRadians);

          s.strokeWeight(textProperties.edgeThickness);
          s.fill(textProperties.color.greyscale);
          s.text(
            `Ângulo de refração: ${refractiveAngleInDegrees.toFixed(
              textProperties.decimalPlaces
            )}`,
            textProperties.x,
            370
          );

          // Refractive Beam
          s.stroke(
            refractedRayProperties.color.r,
            refractedRayProperties.color.g,
            refractedRayProperties.color.b
          );
          s.strokeWeight(refractedRayProperties.thickness);
          s.line(
            reflectedRay.xStartPosition,
            bottomWall.yPosition,
            xPosition,
            s.height
          );

          s.strokeWeight(textProperties.edgeThickness);
          s.fill(textProperties.color.greyscale);
          s.text(
            `Índice de refração: ${refractedRayProperties.refractiveIndex.toFixed(
              textProperties.decimalPlaces
            )}`,
            textProperties.x,
            270
          );

          const reflectionStartBaseVector = s.createVector(
            laserSource.x,
            laserSource.y
          );
          const reflectionEndBaseVector = s.createVector(
            reflectedRay.xStartPosition,
            bottomWall.yPosition
          );
          const reflectionBaseVector = P5.Vector.sub(
            reflectionEndBaseVector,
            reflectionStartBaseVector
          );
          /**
           * The reflection depends of a normal vector;
           * It behaves like a mirror
           */
          const normalVector = s.createVector(0, -1);
          /**
           * Variable "reflectedLaserVector" receives laserVector copy, and using the reflect method;
           * the vector is reflected;
           */
          const reflectedLaserVector = reflectionBaseVector.copy();
          reflectedLaserVector.reflect(normalVector);

          /** Draw reflected ray */

          s.stroke(
            reflectedRay.color.r,
            reflectedRay.color.g,
            reflectedRay.color.b
          );
          s.strokeWeight(reflectedRay.thickness);
          s.translate(
            reflectionBaseVector.x + laserSource.x,
            reflectionBaseVector.y + laserSource.y
          );
          s.line(0, 0, reflectedLaserVector.x, reflectedLaserVector.y);
        }
      }
    };
  };

  render() {
    return <Container ref={this.myRef} />;
  }
}
