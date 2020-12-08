import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Login from './Login';
import Lessons from './Lessons';
import LessonDetail from './LessonDetail';
import NavBar from './NavBar';
import SignIn from './SignIn';
import HomePage from './homePage';

export default class App extends Component {
  state = {
    token: null
  };

  // Login хийх функц
  handleLogin = (token) => {
    this.setState({ token });
    localStorage.setItem('token', token);
    this.router.history.push('/lessons');
  };

  handleLogout = () => {
    localStorage.removeItem('token');
    this.setState({ token: null });
    this.router.history.push('/');
  };

  render() {
    return (
      <Router ref={(router) => (this.router = router)}>
        <NavBar onLogout={this.handleLogout} />
        <div className='container'>
          <Switch>
            <Route exact path='/lessons' component={Lessons} />
            <Route path='/lessons/:id' component={LessonDetail} />
            <Route exact path='/' component={HomePage} />
            <Route
              path='/login'
              render={() => <Login onLogin={this.handleLogin} />}
            />
            <Route path='/sign-in' component={SignIn} />
          </Switch>
        </div>
      </Router>
    );
  }
}
