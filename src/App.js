import React from 'react';
import ReactDOM from 'react-dom';
import { Component } from 'react';
import './App.css';

const state = {
  list: ['Item one', 'Item two', 'Item three'],
};

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

class TodoList extends Component {
  render() {
    return (
      <div className="todo-list">
        <table>
          <tbody>
            {
              state.list.map((item) =>
                <tr key={item}>
                  <td colSpan="20" key={item}>{item}</td>
                  <td className="close" align="center">X</td>
                </tr>
              )
            }
          </tbody>
        </table>
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
        <TodoList />
      </div>
    );
  }
}

export function renderApp() {
  return ReactDOM.render(<App />, document.getElementById('root'));
}
