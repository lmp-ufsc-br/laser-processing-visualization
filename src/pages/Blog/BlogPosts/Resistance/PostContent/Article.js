import React, { Component } from 'react';
import Markdown from 'markdown-to-jsx';
import content from './content.md';

class Article extends Component {
  constructor(props) {
    super(props);
    this.state = { md: '' };
  }

  componentDidMount() {
    fetch(content)
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
