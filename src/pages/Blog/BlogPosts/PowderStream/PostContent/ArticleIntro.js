import React, { Component } from 'react';
import Markdown from 'markdown-to-jsx';
import intro from './introcontent.md';

class Article extends Component {
  constructor(props) {
    super(props);
    this.state = { md: '' };
  }

  componentDidMount() {
    fetch(intro)
      .then((res) => res.text())
      .then((md) => {
        this.setState({ md });
      });
  }

  render() {
    return <Markdown>{this.state.md}</Markdown>;
  }
}

export default Article;
