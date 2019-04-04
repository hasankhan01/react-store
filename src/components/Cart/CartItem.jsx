import React from "react";

export default function CartItem({ item, value }) {
  const { id, title, img, price, total, count } = item;
  const { increment, decrement, removeItem } = value;
  return (
    <div className="row my-2 text-capitalize text-center">
      <div className="col-10 mx-auto col-lg-2">
        <img
          src={img}
          style={{ width: "4rem", height: "4rem" }}
          className="img-fluid"
          alt="product"
        />
      </div>
      <div className="col-10 mx-auto col-lg-2">
        <span className="d-lg-none">Product : </span>
        {title}
      </div>
      <div className="col-10 mx-auto col-lg-2">
        <span className="d-lg-none">Price : </span>${price}
      </div>
      <div className="col-10 mx-auto col-lg-2 my-lg-0">
        <div className="d-flex justify-content-center" />
        <span className="btn btn-min mx-1" onClick={() => decrement(id)}>
          -
        </span>
        <span>{count}</span>
        <span className="btn btn-plus mx-1" onClick={() => increment(id)}>
          +
        </span>
      </div>
      <div className="col-10 mx-auto col-lg-2">
        <div className="cart-icon" onClick={() => removeItem(id)}>
          <i className="fas fa-trash" />
        </div>
      </div>
      <div className="col-10 mx-auto col-lg-2">
        <strong>total item : ${total}</strong>
      </div>
    </div>
  );
}
