import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Intro from './components/Intro';
import './App.css';

class App extends Component {
  state = {
    phoneNumber: null,
    loggedIn: false
  }

  onChange = (e) => {
    this.setState({
      phoneNumber: e.target.value
    });
  }

  render() {
    const { phoneNumber } = this.state;
    return (
      <Router>
        <div className="App">
          <Intro onChange={this.onChange} phoneNumber={phoneNumber}/>
        </div>
      </Router>
    );
  }
}

export default App;
