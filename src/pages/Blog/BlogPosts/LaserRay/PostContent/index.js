import React from 'react';
import { ContentWrapper } from './styles';
import ArticleFirstPart from './ArticleFirstPart';
import Intro from './ArticleIntro';
import ArticleSecondPart from './ArticleSecondPart';
import CurrentCanvas from './P5Canvas/CurrentCanvas';
import ExampleCanvas1 from './P5Canvas/ExampleCanvas1';

function BlogContent(props) {
  return (
    <ContentWrapper>
      <h6>{props.title}</h6>
      <hr />
      <Intro />
      <CurrentCanvas />
      <ArticleFirstPart />
      <ExampleCanvas1 />
      <ArticleSecondPart />
    </ContentWrapper>
  );
}

export default BlogContent;
