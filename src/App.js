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

  randomItem() {
    alert(list[Math.floor(Math.random() * list.length)])
  }

  render() {
    return (
      <div className="add-menu-item">
        <input type="text" id="current-item" />
        <p>What will you do?</p>
        <button onClick={this.addItem}>Add to List</button>
        <button onClick={this.randomItem}>Choose Random</button>
      </div>
    );
  }
}

class TodoListItem extends Component {
  removeItem(value) {
    return function() {
      let ind = list.indexOf(value);
      if (ind === 0)  list.shift();
      else {
        for (let i = ind; i < list.length - 1; ++i)
          list[i] = list[i+1];

        list.pop();
      }

      renderApp();
    }
  }

  render() {
    return (
      <tr>
        <td colSpan="20">{this.props.value}</td>
        <td onClick={this.removeItem(this.props.value)} className="close" align="center">X</td>
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
                <TodoListItem key={item} value={item} />
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
