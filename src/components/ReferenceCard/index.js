import React from 'react';

import { Card, TextContent } from './styles';
import LMD from '../../pages/Home/img/LMD.png';

export default function ReferenceCard(props) {
  return (
    <Card href={props.route}>
      <img src={LMD} alt="" />
      <TextContent>
        <h2>blabla</h2>
        <p>blablablablablablablablablablablablablablablabla</p>
      </TextContent>
    </Card>
  );
}
