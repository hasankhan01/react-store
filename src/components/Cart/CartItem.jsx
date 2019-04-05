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
      <div className="col-10 mx-auto col-lg-2 pt-3">
        <span className="d-lg-none">Product : </span>
        {title}
      </div>
      <div className="col-10 mx-auto col-lg-2 pt-3">
        <span className="d-lg-none">Price : </span>${price}
      </div>
      <div className="col-10 mx-auto col-lg-2 my-lg-0 pt-3">
        <span className="btn-min mx-3" onClick={() => decrement(id)}>
          <i className="fas fa-minus" />
        </span>
        <span className="pt-3">{count}</span>
        <span className="btn-plus mx-3  pt-3" onClick={() => increment(id)}>
          <i className="fas fa-plus" />
        </span>
      </div>
      <div className="col-10 mx-auto col-lg-2 pt-3">
        <div className="cart-icon" onClick={() => removeItem(id)}>
          <i className="fas fa-trash" />
        </div>
      </div>
      <div className="col-10 mx-auto col-lg-2 pt-3">
        <strong> ${total}</strong>
      </div>
    </div>
  );
}
