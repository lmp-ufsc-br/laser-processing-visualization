import React from 'react';
import P5 from 'p5';

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
      s.createCanvas(200, 200);
    };

    s.draw = () => {
      s.background(0);
      s.fill(255);
      s.ellipse(s.mouseX, s.mouseY, 50, 50);
    };
  };

  render() {
    return <div ref={this.myRef} />;
  }
}
