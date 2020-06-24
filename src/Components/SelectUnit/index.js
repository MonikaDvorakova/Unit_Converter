import React, { useContext } from "react";
import { UnitsContext } from "../../UnitConverter/context";
import units from "../../UnitConverter/units";
import "./index.scss";

export const SelectUnit = () => {
  const { unitType, inputUnit, setInputUnit } = useContext(UnitsContext);
  const onChangeUnit = event => {
    const currentUnit = event.target.value;
    setInputUnit(currentUnit);
  };
  return (
    <div className="selectUnit">
      <select value={inputUnit} onChange={onChangeUnit}>
        {units[unitType].map(option => (
          <option value={option.name}>{option.name}</option>
        ))}
      </select>
      <br />
    </div>
  );
};
