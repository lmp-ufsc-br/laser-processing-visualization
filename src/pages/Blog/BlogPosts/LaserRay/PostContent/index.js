import React from 'react';
import { ContentWrapper } from './styles';
import Content from './Article';
import Intro from './ArticleIntro';
import P5Canvas from './P5Canvas';

function BlogContent(props) {
  return (
    <ContentWrapper>
      <h6>{props.title}</h6>
      <hr />
      <Intro />
      <P5Canvas />
      <Content />
    </ContentWrapper>
  );
}

export default BlogContent;
