import React, { Component } from "react";

export default class TodoItem extends Component {
  render() {
    const { title, handleDelate, handleEdit } = this.props;
    return (
      <li className="list-group-item text-capitalize d-flex justify-content-between my-2">
        <h6>{title}</h6>
        <div className="todo-icon">
          <span className="mx-2 text-success" onClick={handleEdit}>
            <i className="fas fa-pen" />
          </span>
          <span className="mx-2 text-danger" onClick={handleDelate}>
            <i className="fas fa-trash" />
          </span>
        </div>
      </li>
    );
  }
}
