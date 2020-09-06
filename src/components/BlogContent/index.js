import React from 'react';
import { Content } from './styles';

function BlogContent(props) {
  return (
    <Content>
      <h6>{props.title}</h6>
      <hr />
      {props.children}
    </Content>
  );
}

export default BlogContent;
