import React from 'react';
import {Provider} from 'react-redux';
import {NavLink, HashRouter as Router, Route, Switch} from 'react-router-dom';

import {Articles} from '../articles/articles.container';
import {ViewArticleContainer} from '../articles/view-article/view-article.container';
import {Home} from '../home';


export const App = ({store}) => (
  <Provider store={store}>
    <Router>
      <div>
        <div>
          <NavLink className="mr3" to="/">Filter Form</NavLink>
          <NavLink to="/articles">Articles List</NavLink>
        </div>
        <Route exact path="/" component={Home} />
        <Route exact path="/articles" component={Articles} />
        <Route path="/article/:id" component={ViewArticleContainer} />
      </div>
    </Router>
  </Provider>
);
