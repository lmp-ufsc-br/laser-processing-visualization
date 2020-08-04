import React from 'react';

import { Container } from './styles';

export default function AppWrapper(props) {
  return <Container>{props.children}</Container>;
}
