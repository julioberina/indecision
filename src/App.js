import React from 'react';
import ReactDOM from 'react-dom';
import { Component } from 'react';
import './App.css';

const state = {
  index: 0, // current index for pagination
  list: []
}

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

    if (state.list.indexOf(item) > -1)
      alert("Item is already in the list!");
    else if (item === "")
      alert("Item cannot be empty!");
    else
      state.list.push(item);

    document.getElementById('current-item').value = "";
    renderApp();
  }

  randomItem() {
    alert(state.list[Math.floor(Math.random() * state.list.length)])
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

class TodoListPagination extends Component {
  nextFive() {
    if (state.index + 5 < state.list.length) {
      state.index = state.index + 5;
      renderApp();
    }
  }

  prevFive() {
    if (state.index - 5 > -1) {
      state.index = state.index - 5;
      renderApp();
    }
  }

  render() {
    if (state.list.length > 5) {
      return (
        <div>
          <br />
          <button onClick={this.prevFive}>Prev</button>
          <button onClick={this.nextFive}>Next</button>
        </div>
      );
    }
    else { return (<div></div>); }
  }
}

class TodoListItem extends Component {
  removeItem(value) {
    return function() {
      let ind = state.list.indexOf(value);
      if (ind === 0)  state.list.shift();
      else {
        for (let i = ind; i < state.list.length - 1; ++i)
          state.list[i] = state.list[i+1];

        state.list.pop();

        if (state.list.slice(state.index, state.index+5).length === 0 && state.index > 0)
          state.index = state.index - 5;
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
    if (state.list.length > 0) {
      return (
        <div className="todo-list">
          <table>
            <tbody>
              {
                state.list.slice(state.index, (state.index + 5)).map((item) =>
                  <TodoListItem key={item} value={item} />
                )
              }
            </tbody>
          </table>
          <TodoListPagination />
        </div>
      );
    }
    else { return (<div></div>); }
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
