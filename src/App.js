import React, { Component } from 'react';

import './App.css';





class App extends Component {
  render() {
    return (
      <div className="App container-fluid">
        <div className="App-header">
          <i className="fa fa-address-book"> </i>
          <h2>Welcome to Contact App</h2>
        </div>
        <div className="container-fluid">
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default App;
