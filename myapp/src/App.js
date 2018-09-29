import React, { Component } from 'react';
import Ninjas from './Ninjas';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>My React App</h1>
        <p>welcome</p>
        <Ninjas name="ryu" age="25" belt="black"/>
        <Ninjas name="yoshi" age="30" belt="green"/>
      </div>
    );
  }
}

export default App;
