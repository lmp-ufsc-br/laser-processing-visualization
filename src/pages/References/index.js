import React from 'react';

import ReferenceCard from '../../components/ReferenceCard';
import { Container, Content } from './styles';

import LMD from './img/LMD.png';
import Ref1 from './img/simulation.png';

export default function References() {
  return (
    <>
      <Container>
        <Content>
          <ReferenceCard
            route="https://www.sciencedirect.com/science/article/pii/S0924013614002672"
            imgSrc={Ref1}
            description="A time based method for predicting the workpiece surface
             micro-topography under pulsed laser ablation"
          />
          <ReferenceCard
            route="/references"
            imgSrc={LMD}
            description="TESTTESTEST"
          />
          <ReferenceCard
            route="/references"
            imgSrc={LMD}
            description="TESTTESTEST"
          />
          <ReferenceCard
            route="/references"
            imgSrc={LMD}
            description="TESTTESTEST"
          />
        </Content>
      </Container>
    </>
  );
}
