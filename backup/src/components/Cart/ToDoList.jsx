import React, { Component } from "react";
import ToDoItem from "./ToDoItem";

export default class ToDoList extends Component {
  state = {};
  render() {
    const { items, clearList, handleDelete, handleEdit } = this.props;
    return (
      <ul className="list-group my-5">
        <h3>Item List</h3>

        {items.map(item => {
          return (
            <ToDoItem
              key={item.id}
              title={item.title}
              handleDelete={() => handleDelete(item.id)}
              handleEdit={() => handleEdit(item.id)}
            />
          );
        })}
        <button className="btn-danger mt-5 text-capitalize" onClick={clearList}>
          clear list
        </button>
      </ul>
    );
  }
}
