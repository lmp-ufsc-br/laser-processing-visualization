import React from 'react';

import { Link, Form, SubmitButton, List, Content } from './styles';

export default function Home() {
  return (
    <Content>
      <Link href="https://youthful-lewin-abd50c.netlify.app/">Home</Link>

      <List>
        <li>
          <Link href="https://youthful-lewin-abd50c.netlify.app/">Ref 1</Link>
          <Link href="https://youthful-lewin-abd50c.netlify.app/">Ref 2</Link>
        </li>
      </List>
      <Form>
        <input type="text" placeholder="Adicionar referência" />
        <SubmitButton>Adicionar</SubmitButton>
      </Form>
    </Content>
  );
}
