import React from 'react';
import MediaCard from '../../components/MaterialUICard';
import ReferenceCard from '../../components/ReferenceCard';
import { Container, Content } from './styles';

export default function References() {
  return (
    <>
      <Container>
        <Content>
          <MediaCard />
          <MediaCard />
          <MediaCard />
        </Content>
        <Content>
          <ReferenceCard route="https://p5js.org/reference/#/p5/constrain" />
          <ReferenceCard route="https://p5js.org/reference/#/p5/constrain" />
          <ReferenceCard route="https://p5js.org/reference/#/p5/constrain" />
        </Content>
      </Container>
    </>
  );
}
