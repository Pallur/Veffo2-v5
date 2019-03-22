import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './routes/home/Home';
import Lectures from './routes/lectures/Lectures';

import './App.scss';

class App extends Component {
  render() {
    return (
      <div className = "App">
        <Helmet defaultTitle = "Fyrirlestur" titleTemplate = "%s - Fyrirlestur">
          <html lang = "is" />
        </Helmet>
        <BrowserRouter>
          <Switch>
            <Route exact path = "/" component = { Home }/>
            <Route exact path = "/:slug" component={ Lectures } />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
