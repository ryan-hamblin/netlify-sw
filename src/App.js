import React, { Component } from 'react';
import './App.css';

import StarWarsList from './StarWarsList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Ryan's Star Wars Project</h1>
        </header>
        <StarWarsList />
      </div>
    );
  }
}

export default App;
