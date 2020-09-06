import React from 'react';
import { ContentWrapper } from './styles';
import Content from './Article';

function BlogContent(props) {
  return (
    <ContentWrapper>
      <h6>{props.title}</h6>
      <hr />
      <Content />
    </ContentWrapper>
  );
}

export default BlogContent;
