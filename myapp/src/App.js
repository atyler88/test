import React, { Component } from 'react';
import Ninjas from './Ninjas';

class App extends Component {
  state = {
    ninjas : [
      {name: 'ryu', age: 30, belt: "black", id: 1},
      {name: 'yoshi', age: 20, belt: "blue", id: 2},
      {name: 'ken', age: 31, belt: "purple", id: 3}
    ]
  }
  render() {
    return (
      <div className="App">
        <h1>My React App</h1>
        <p>welcome</p>
        <Ninjas ninjas={this.state.ninjas}/>
      </div>
    );
  }
}

export default App;
