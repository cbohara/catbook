import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import CatsPage from './components/cats/CatsPage';
import CatPage from './components/cats/CatPage';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Route path="/cats" component={CatsPage} >
      <Route path="/cats/:id" component={CatPage} />
    </Route>
  </Route>
);
