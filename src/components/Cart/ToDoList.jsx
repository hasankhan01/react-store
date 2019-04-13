import React, { Component } from "react";
import ToDoItem from "./ToDoItem";

export default class ToDoList extends Component {
  state = {};
  render() {
    const { items, clearList, handleDelete, handleEdit } = this.props;
    return (
      <ul className="list-group list-group-flush my-5">
        <h3>Product List</h3>

        {items.map(item => {
          return (
            <ToDoItem
              key={item.id}
              title={item.title}
              price={item.price}
              model={item.model}
              description={item.description}
              handleDelete={() => handleDelete(item.id)}
              handleEdit={() => handleEdit(item.id)}
            />
          );
        })}
        <button className="btn btn-success btn-block mt-3" onClick={clearList}>
          Clear list
        </button>
      </ul>
    );
  }
}
