import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './containers/Home';
import Services from './containers/Services';
import StyleGuide from './containers/StyleGuide';
import Contact from './containers/Contact';

export default () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/Services" exact component={Services} />
    <Route path="/StyleGuide" exact component={StyleGuide} />
    <Route path="/Contact" exact component={Contact} />
  </Switch>
);
