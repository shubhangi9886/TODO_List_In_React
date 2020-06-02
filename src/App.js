import React, { Component } from 'react';
import TodoInput from './Components/TodoInput';
import Todo_List from './Components/Todo_List';
import 'bootstrap/dist/css/bootstrap.min.css';
import uuid from "uuid";
import './App.css';

class App extends Component {
  state = {
    items: [],
    id: uuid(),
  item: "",
  editItem: false
  };

  handleChange = e => {
    this.setState({
      item: e.target.value
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();


    const newItem = {
      id:this.state.id,
      item:this.state.item
    }


    console.log(newItem);

    const updatedItems = [...this.state.items,newItem]

    this.setState({
      items:updatedItems,
      item:'',
      id:uuid(),
      editItem:false
    })
  }
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto col-md-8 mt-4">
            <h3 className="text-capitalize text-center">Todo input</h3>
            <TodoInput item={this.state.item}
              handleChange={this.handleChange}
              handleSubmit={this.handleSubmit} />
            <Todo_List items={this.state.items} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;