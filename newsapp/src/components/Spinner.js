import React, { Component } from "react";
import loading from "./loading.svg";
const Spinner = () => {
  return (
    <div className="text-center">
      <img src={loading} alt="loading" style={{ width: "60px" }} />
    </div>
  );
};
export default Spinner;
