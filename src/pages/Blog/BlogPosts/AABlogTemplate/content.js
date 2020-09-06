import React, { Component } from 'react';
import Markdown from 'markdown-to-jsx';
import articleMd from './content.md';

class Article extends Component {
  constructor(props) {
    super(props);
    this.state = { md: '' };
  }

  componentDidMount() {
    fetch(articleMd)
      .then((res) => res.text())
      .then((md) => {
        this.setState({ md });
      });
  }

  render() {
    return (
      <div className="article">
        <Markdown>{this.state.md}</Markdown>
      </div>
    );
  }
}

export default Article;
