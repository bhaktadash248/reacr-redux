import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';
import App from './App';
import Postcomponents from './Postcomponents';

class Home extends Component {
  render() {

    return (
      <div>
          <Switch>
              <Route exact path = '/' component= {App} />
              <Route path = '/:post_id' component = {Postcomponents} />
          </Switch>
      </div>
    );
  }
}

export default Home;
