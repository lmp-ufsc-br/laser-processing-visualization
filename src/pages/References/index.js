import React, { useEffect, useState } from 'react';
import drive from 'drive-db';

import { idList } from '../../config/sheets';

import ReferenceCard from '../../components/ReferenceCard';
import { Container, Content } from './styles';

const SHEET_ID = idList.laserMatter;

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
