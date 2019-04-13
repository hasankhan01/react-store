import React from "react";

export default function Title({ name, title }) {
  return (
    <div className="col-sm-12 max-auto my-5 text-center text-title">
      <h1 className="text-capitalize font-weight-bold">
        {name} <strong className="text-blue">{title}</strong>
      </h1>
    </div>
  );
}
