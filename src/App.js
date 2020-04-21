import React, { Component } from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

import "bootstrap/dist/css/bootstrap.min.css";
import uuid from "uuid";
import { render } from "@testing-library/react";

//*********************class

class App extends Component {
  state = {
    items: [],
    id: uuid(),
    item: "",
    editItem: false,
  };
  //*********************funkcije-metode
  handleChange = (e) => {
    this.setState({
      item: e.target.value,
    });
  };

  handleSubmit =e=>{
    e.preventDefault();
  }

  const newItem = {
    id:this.state.id,
    title:this.state
  }

  const updateItems= [...this.state.items, newItem];


  this.setState({
    items:updateItems,
    item:'',
    id:uuid(),
    editItem:false

  })
  //*********************render-return

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto col-md-8 mt-4">
            <h3 className="text-capitalize text-center">todo input</h3>
            <TodoInput
              item={this.state.item}
              handleChange={this.handleChange}
            />
            <TodoList items={this.state.items}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
