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
      s.createCanvas(600, 500);
    };

    s.draw = () => {
      /** Laser Source */
      const laserSource = {
        /** X Coordinate of laser source position */
        x: 250,

        /** Y Coordinate of laser source position */
        y: 50,

        /** Diameter of laser source */
        diameter: 100,

        thickness: 20,

        /** Color of laser source */
        color: {
          r: 0,
          g: 0,
          b: 0,
        },
      };
      /** Draw gray background with R, G and B with same value */
      s.background(200);

      s.stroke(laserSource.color.r, laserSource.color.g, laserSource.color.b);
      s.fill(laserSource.color.r, laserSource.color.g, laserSource.color.b);
      s.rect(
        laserSource.x,
        laserSource.y,
        laserSource.diameter,
        laserSource.thickness
      );

      const lensProperties = {
        xCenter: 300,
        yCenter: 250,
        xDiameter: 140,
        yDiameter: 30,
        color: {
          r: 0,
          g: 0,
          b: 0,
        },
      };

      s.noFill();
      s.stroke(
        lensProperties.color.r,
        lensProperties.color.g,
        lensProperties.color.b
      );
      s.strokeWeight(1);
      s.ellipse(
        lensProperties.xCenter,
        lensProperties.yCenter,
        lensProperties.xDiameter,
        lensProperties.yDiameter
      );

      const numberOfRays = 9;

      for (let n = 0; n <= numberOfRays - 1; n++) {
        function xPositions(n) {
          return (
            laserSource.x + (n * laserSource.diameter) / (numberOfRays - 1)
          );
        }
        // console.log(xPositions(n))
        function yPositions(n) {
          return (
            lensProperties.yCenter -
            lensProperties.yDiameter *
              s.sqrt(
                0.25 -
                  s.sq(
                    (xPositions(n) - lensProperties.xCenter) /
                      lensProperties.xDiameter
                  )
              )
          );
        }
        s.stroke(255, laserSource.color.g, laserSource.color.b);
        s.strokeWeight(2);
        s.line(
          xPositions(n),
          laserSource.y + laserSource.thickness,
          xPositions(n),
          yPositions(n)
        );
      }
    };
  };

  render() {
    return <Container ref={this.myRef} />;
  }
}
