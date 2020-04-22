import React, { Component } from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import "bootstrap/dist/css/bootstrap.min.css";
import uuid from "uuid/v1";

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

  //*----------

  handleSubmit = (e) => {
    e.preventDefault();

    const newItem = {
      id: this.state.id,
      title: this.state.item,
    };

    const updateItems = [...this.state.items, newItem];

    this.setState({
      items: updateItems,
      item: "",
      id: uuid(),
      editItem: false,
    });
  };
  //*----------
  clearList = () => {
    this.setState({
      items: [],
    });
  };

  //*----------

  handleDelate = (id) => {
    const filterItems = this.state.items.filter((item) => item.id !== id);
    this.setState({ items: filterItems });
  };

  //*----------

  handleEdit = (id) => {
    const filterItems = this.state.items.filter((item) => item.id !== id);
    const selectedItems = this.state.items.find((item) => item.id === id);
    this.setState({
      items: filterItems,
      item: selectedItems.title,
      editItem: true,
      id: id,
    });
  };

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
              handleSubmit={this.handleSubmit}
              editItem={this.state.editItem}
            />
            <TodoList
              items={this.state.items}
              clearList={this.clearList}
              handleDelate={this.handleDelate}
              handleEdit={this.handleEdit}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
