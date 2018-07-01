import React from 'react';
import ReactDOM from 'react-dom';
import { Component } from 'react';
import './App.css';

const list = ['Item one', 'Item two', 'Item three'];

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
  addItem() {
    let item = document.getElementById('current-item').value;

    if (list.indexOf(item) > -1)
      alert("Item is already in the list!");
    else
      list.push(item);

    document.getElementById('current-item').value = "";
    renderApp();
  }

  render() {
    return (
      <div className="add-menu-item">
        <input type="text" id="current-item" />
        <p>What will you do?</p>
        <button onClick={this.addItem}>Add to List</button>
      </div>
    );
  }
}

class TodoListItem extends Component {
  render() {
    return (
      <tr key={this.props.keyValue}>
        <td colSpan="20" key={this.props.keyValue}>{this.props.value}</td>
        <td className="close" align="center">X</td>
      </tr>
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
              list.map((item) =>
                <TodoListItem key={item} keyValue={item} value={item} />
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
