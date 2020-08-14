import React, { useEffect, useState } from 'react';
import drive from 'drive-db';

import ReferenceCard from '../../components/ReferenceCard';
import { Container, Content } from './styles';

const SHEET_ID = '1BolFKBm8zPFCCosqEhH1m7MZ6NK8zUGn5Wne91aW62k';

export default function References() {
  const [state, setState] = useState([]);

  const fetchFromDrive = async () => {
    const result = await drive({
      sheet: SHEET_ID,
      tab: '1',
      cache: 0,
    });

    setState(result);
    console.log(result);
  };

  useEffect(() => {
    fetchFromDrive();
  }, []);

  return (
    <>
      <Container>
        <Content>
          {state.map((reference) => (
            <ReferenceCard
              route={reference.referenceurl}
              imgSrc={reference.imageurl}
              description={reference.description}
            />
          ))}
        </Content>
      </Container>
    </>
  );
}
