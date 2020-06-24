import React from "react";
import { SelectType } from "../selectType";
import { ValueInput } from "../ValueInput";
import { SelectUnit } from "../SelectUnit";
import "./index.scss";

export const FormDiv = () => {
  return (
    <div className="form">
      <h1> Unit Converter </h1>
      <SelectType />
      <ValueInput />
      <SelectUnit />
    </div>
  );
};
