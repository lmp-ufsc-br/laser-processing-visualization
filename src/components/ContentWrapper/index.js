import React from 'react';

import { Container } from './styles';

export default function ContentWrapper(props) {
  return <Container>{props.children}</Container>;
}
