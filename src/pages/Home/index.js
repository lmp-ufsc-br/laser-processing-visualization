import React from 'react';

import { Content, TitleContainer } from './styles';
// import LMD from './img/LMD.png';

export default function Home() {
  return (
    <Content>
      <TitleContainer>
        <h1>Laser Simulation</h1>
        <h3>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
          gravida bibendum faucibus. Suspendisse porta dapibus nisi, sit amet
          aliquet lacus vehicula eu.
        </h3>
      </TitleContainer>
    </Content>
  );
}

/** <Link href="https://youthful-lewin-abd50c.netlify.app/">Home</Link>

      <List>
        <li>
          <Link href="https://youthful-lewin-abd50c.netlify.app/">Ref 1</Link>
          <Link href="https://youthful-lewin-abd50c.netlify.app/">Ref 2</Link>
        </li>
      </List> */
