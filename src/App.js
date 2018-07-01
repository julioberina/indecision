import React, { Component } from 'react';
import './App.css';

class TopBar extends Component {
  render() {
    return (
      <div className="topbar">
        <h1>Indecision App</h1>
      </div>
    );
  }
}

class AddListItem extends Component {
  render() {
    return (
      <div className="add-menu-item">
        <input type="text" id="current-item" />
        <p>What will you do?</p>
        <button>Add to List</button>
      </div>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div id="main">
        <TopBar />
        <AddListItem />
      </div>
    );
  }
}

export default App;
