import React from 'react';
import P5Canvas from './P5Canvas';
import History from './History';

import { Content, TitleContainer, Container, Title } from './styles';

export default function Solidification() {
  return (
    <>
      <Content>
        <TitleContainer>
          <h1>Solidificaton</h1>
          <h3>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
            gravida bibendum faucibus. Suspendisse porta dapibus nisi, sit amet
            aliquet lacus vehicula eu.
          </h3>
        </TitleContainer>
        <Container>
          <P5Canvas />
        </Container>
        <Title>
          <h2>Histórico:</h2>
          <hr />
        </Title>
        <History />
      </Content>
    </>
  );
}

/** <Link href="https://youthful-lewin-abd50c.netlify.app/">Home</Link>

      <List>
        <li>
          <Link href="https://youthful-lewin-abd50c.netlify.app/">Ref 1</Link>
          <Link href="https://youthful-lewin-abd50c.netlify.app/">Ref 2</Link>
        </li>
      </List> */
