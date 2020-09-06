import React from 'react';
import Route from '../../routes/Route';

import Home from '../Home';
import AABlogTemplate from './BlogPosts/AABlogTemplate';
import LaserMatter from './BlogPosts/LaserMatter';
import Resistance from './BlogPosts/Resistance';

export default function Routes() {
  return (
    <>
      <Route exact path="/blog" component={Home} />
      <Route path="/template-post" component={AABlogTemplate} />
      <Route path="/laser-matter" component={LaserMatter} />
      <Route path="/resistance" component={Resistance} />
    </>
  );
}
