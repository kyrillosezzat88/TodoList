import React, { Component } from 'react';
import Todos from './todoList';
import AddTodo from './AddTodo';
class App extends Component {
  state ={
    Todos: [
      {id:1, Content:'Buy new Car'},
      {id:2 , Content: 'buy suplemnts'}
    ]
  }
  DeleteTodo = (id) => {
    let newTodo = this.state.Todos.filter(todo => {
      return todo.id !== id
    });
    this.setState({
      Todos:newTodo
    })
  }
  addTodo = (NewTodo) => {
    NewTodo.id = Math.random();
    let todo = [...this.state.Todos , NewTodo]
    this.setState({
      Todos:todo
    })
  }
  render() {
    return (
      <div className="App container ">
        <h1 className="center blue-text">TODO List</h1>
        <Todos todos ={this.state.Todos} Delete={this.DeleteTodo}/>
        <AddTodo addtodos ={this.addTodo} />
      </div>
    );
  }
}

export default App;
