import React, { useContext } from "react";
import { UnitsContext } from "../../UnitConverter/context";
import types from "../../UnitConverter/types";
import "./index.scss";

export const SelectType = () => {
  const { unitType, setUnitType } = useContext(UnitsContext);
  const onChangeType = event => {
    const currentType = event.target.value;
    setUnitType(currentType);
  };
  return (
    <div className="selectType">
      <select value={unitType} onChange={onChangeType}>
        {types.map(option => (
          <option value={option}>{option}</option>
        ))}
      </select>
      <br />
    </div>
  );
};
