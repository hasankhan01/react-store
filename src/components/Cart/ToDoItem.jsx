import React, { Component } from "react";

export default class ToDoItem extends Component {
  render() {
    const {
      title,
      price,
      model,
      description,
      handleDelete,
      handleEdit
    } = this.props;
    return (
      <li className="list-group-item text-capitalize d-flex justify-content-between my-2">
        <h6>{title}</h6>
        <h6>${price}</h6>
        <h6>{model}</h6>
        <h6>{description}</h6>
        <div>
          <span className="mx-2 text-success" onClick={handleEdit}>
            <i className="fas fa-pen" />
          </span>
          <span className="mx-2 text-danger" onClick={handleDelete}>
            <i className="fas fa-trash" />
          </span>
        </div>
      </li>
    );
  }
}
