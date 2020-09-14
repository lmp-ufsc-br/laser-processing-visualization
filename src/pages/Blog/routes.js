import React from 'react';
import Route from '../../routes/Route';

import Home from '../Home';
import Template from './BlogPosts/Template';
import LaserMatter from './BlogPosts/LaserMatter';
import Resistance from './BlogPosts/Resistance';
import LaserRay from './BlogPosts/LaserRay';
import Microstructure from './BlogPosts/Microstructure';

export default function Routes() {
  return (
    <>
      <Route exact path="/blog" component={Home} />
      <Route path="/template-post" component={Template} />
      <Route path="/laser-matter" component={LaserMatter} />
      <Route path="/resistance" component={Resistance} />
      <Route path="/laser-ray" component={LaserRay} />
      <Route path="/microstructure" component={Microstructure} />
    </>
  );
}
