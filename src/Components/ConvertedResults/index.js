import React, { useContext } from "react";
import { UnitsContext } from "../../UnitConverter/context";
import units from "../../UnitConverter/units";
import "./index.scss";

export const ConvertedResults = () => {
  const { unitType, inputUnit, inputValue } = useContext(UnitsContext);
  const unitsForSelectedType = units[unitType];

  const calculateBase = (inputUnit, unitsForSelectedType, inputValue) => {
    let convertedValues = [];
    const selectedUnit = unitsForSelectedType.filter(unit => {
      if (typeof inputUnit === "string") {
        return unit.name === inputUnit;
      }
      return unit.name === inputUnit.name;
    });
    const baseValue = selectedUnit[0].toBase(inputValue);
    convertedValues = unitsForSelectedType
      .filter(unit => {
        if (typeof inputUnit === "string") {
          return unit.name !== inputUnit;
        }
        return unit.name !== inputUnit.name;
      })
      .map(unit => ({
        unit: unit.name,
        value: Math.round(unit.fromBase(baseValue) * 100) / 100
      }));
    return convertedValues;
  };

  let convertedValues = calculateBase(
    inputUnit,
    unitsForSelectedType,
    inputValue
  );

  return (
    <div className="resultBoxes">
      {convertedValues.map(item => (
        <div className="box">
          {item.value} {item.unit}
        </div>
      ))}
    </div>
  );
};
