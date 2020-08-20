import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import P5Canvas from './P5Canvas';
import History from './History';
import 'react-tabs/style/react-tabs.css';

import { Content, TitleContainer, Container } from './styles';

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
          <Tabs>
            <TabList id="List">
              <Tab>Visualização</Tab>
              <Tab>Histórico</Tab>
            </TabList>

            <TabPanel>
              <P5Canvas />
            </TabPanel>
            <TabPanel>
              <History />
            </TabPanel>
          </Tabs>
        </Container>
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
