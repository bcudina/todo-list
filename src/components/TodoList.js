import React, { Component } from "react";
import TodoItem from "./TodoItem";

export default class TodoList extends Component {
  render() {
    const { item } = this.props;

    return (
      <div>
        <ul className="list-group my-5">
          <h3 className="text-capitalize text-center">todo list</h3>
          {item.mao((item) => {
            return <TodoItem key={item.id} title={item.title} />;
          })}
          <button type="button" className="btn btn-danger text-capitalize mt-5">
            clear list
          </button>
        </ul>
      </div>
    );
  }
}
