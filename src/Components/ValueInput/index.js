import React, { useContext } from "react";
import { UnitsContext } from "../../UnitConverter/context";
import "./index.scss";

export const ValueInput = () => {
  const { inputValue, setInputValue } = useContext(UnitsContext);
  const onChangeInput = event => {
    const currentValue = event.target.value;
    setInputValue(currentValue);
  };
  return (
    <div className="inputValue">
      <input value={inputValue} onChange={onChangeInput} />
      <br />
    </div>
  );
};
