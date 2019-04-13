import React, { Component } from "react";
export default class ToDoInput extends Component {
  render() {
    //const { errors } = this.state;
    const {
      item,
      price,
      model,
      description,
      handleChange,
      priceChange,
      modelChange,
      descriptionChange,
      handleSubmit,
      editItem,
      errors
    } = this.props;

    return (
      <div className="card card-body my-3">
        <form onSubmit={handleSubmit}>
          {errors.map(error => (
            <p
              className="text-center"
              style={{ color: "red", fontSize: 14 }}
              key={error}
            >
              Error: {error}
            </p>
          ))}

          <div className="row">
            <div className="form-group col-sm-12">
              <input
                type="text"
                className="form-control"
                placeholder="Title"
                value={item}
                onChange={handleChange}
                name="title"
              />
            </div>
            <div className="form-group col-sm-6">
              <input
                type="number"
                className="form-control"
                placeholder="Price"
                value={price}
                onChange={priceChange}
              />
            </div>
            <div className="form-group col-sm-6">
              <input
                type="text"
                className="form-control"
                placeholder="Model"
                value={model}
                onChange={modelChange}
              />
            </div>
            <div className="form-group col-sm-12">
              <textarea
                className="form-control"
                placeholder="Description"
                value={description}
                onChange={descriptionChange}
              />
            </div>
          </div>
          <button
            type="submit"
            className={
              editItem
                ? "btn btn-success btn-block mt-3"
                : "btn btn-primary btn-block mt-3"
            }
          >
            {editItem ? "Update item" : "Add item"}
          </button>
        </form>
      </div>
    );
  }
}
