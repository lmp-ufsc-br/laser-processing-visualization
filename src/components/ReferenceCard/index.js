import React from 'react';

import { Card, TextContent } from './styles';

export default function ReferenceCard(props) {
  return (
    <Card href={props.route} target="_blank">
      <img src={props.imgSrc} alt="" />
      <TextContent>
        <h2>{props.title}</h2>
        <p>{props.description}</p>
      </TextContent>
    </Card>
  );
}
