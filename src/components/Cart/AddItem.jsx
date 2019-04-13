import React, { Component } from "react";
import ToDoInput from "./ToDoInput";
import ToDoList from "./ToDoList";
import uuid from "uuid";
import Title from "../Title";

function valid(item, price, model, description) {
  const errors = [];
  if (item.length === 0) {
    errors.push("Title is empty");
  }
  if (price.length === 0) {
    errors.push("Price is empty");
  }
  if (model.length === 0) {
    errors.push("Model is empty");
  }
  if (description.length === 0) {
    errors.push("Description is empty");
  }
  return errors;
}

export default class AddItem extends Component {
  state = {
    items: [],
    id: uuid,
    item: "",
    price: "",
    model: "",
    description: "",
    editPrice: false,
    editItem: false,
    editModel: false,
    errors: []
  };
  handleChange = e => {
    this.setState({
      item: e.target.value
    });
  };
  priceChange = e => {
    this.setState({
      price: e.target.value
    });
  };
  modelChange = e => {
    this.setState({
      model: e.target.value
    });
  };
  descriptionChange = e => {
    this.setState({
      description: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { item, price, model, description } = this.state;

    const errors = valid(item, price, model, description);
    if (errors.length > 0) {
      this.setState({ errors });
      return;
    }
    const newItem = {
      id: this.state.id,
      title: this.state.item,
      price: this.state.price,
      model: this.state.model,
      description: this.state.description
    };
    // console.log(newItem);

    const updatedItems = [...this.state.items, newItem];

    this.setState({
      items: updatedItems,
      item: "",
      price: "",
      model: "",
      description: "",
      id: uuid(),
      editItem: false,
      editPrice: false,
      editModel: false
    });
  };

  clearList = () =>
    this.setState({
      items: []
    });

  handleDelete = id => {
    const filteredItems = this.state.items.filter(item => item.id !== id);
    this.setState({
      items: filteredItems
    });
  };

  handleEdit = id => {
    const filteredItems = this.state.items.filter(item => item.id !== id);
    const selectedItem = this.state.items.find(item => item.id === id);

    const selectedPrice = this.state.items.find(price => price.id === id);
    const selectedModel = this.state.items.find(model => model.id === id);
    const selectedDescription = this.state.items.find(
      description => description.id === id
    );

    this.setState({
      items: filteredItems,
      item: selectedItem.title,
      price: selectedPrice.price,
      model: selectedModel.model,
      description: selectedDescription.description,
      editItem: true,
      editPrice: true,
      editModel: true,
      id: id,
      errors: []
    });
  };

  render() {
    return (
      <div className="container">
        <div className="row justify-content-md-center">
          <div className="col-md-9">
            <Title name="Add" title="New Product" />
            <ToDoInput
              item={this.state.item}
              price={this.state.price}
              model={this.state.model}
              description={this.state.description}
              handleChange={this.handleChange}
              priceChange={this.priceChange}
              modelChange={this.modelChange}
              descriptionChange={this.descriptionChange}
              handleSubmit={this.handleSubmit}
              editItem={this.state.editItem}
              errors={this.state.errors}
            />

            <ToDoList
              items={this.state.items}
              clearList={this.clearList}
              handleDelete={this.handleDelete}
              handleEdit={this.handleEdit}
            />
          </div>
        </div>
      </div>
    );
  }
}
