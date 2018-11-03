import React, { Component } from 'react';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom'
import LoginContainer from './containers/LoginContainer.jsx';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path='/login' component={LoginContainer}/>
          <Redirect path='/*' to='/login' />
        </Switch>
      </Router>
    )
  }
}

export default App;