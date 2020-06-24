import React, { useState } from 'react';
import { UnitsContext } from './context';
import types from './types';
import units from './units';

export const UnitsConverter = ({ children }) => {
	const [unitType, setUnitType] = useState(types[0]);
	const [inputUnit, setInputUnit] = useState(units[unitType][0]);
	const [inputValue, setInputValue] = useState(1);

	const setUnitAndInput = type => {
		setUnitType(type);
		setInputUnit(units[type][0]);
	};

	return (
		<UnitsContext.Provider
			value={{
				unitType,
				setUnitType: setUnitAndInput,
				inputUnit,
				setInputUnit,
				inputValue,
				setInputValue,
			}}
		>
			{children}
		</UnitsContext.Provider>
	);
};
