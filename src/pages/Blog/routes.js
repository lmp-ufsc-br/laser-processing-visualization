import React from 'react';
import Route from '../../routes/Route';

import Home from '../Home';
import LaserMatter from '../LaserMatter';
import Resistance from '../Resistance';

export default function Routes() {
  return (
    <>
      <Route exact path="/blog" component={Home} />
      <Route path="/laser-matter" component={LaserMatter} />
      <Route path="/resistance" component={Resistance} />
    </>
  );
}
