import types from './types';

export default {
	[types[0]]: [
		{ name: 'm', fromBase: v => v, toBase: v => v },
		{ name: 'km', fromBase: v => v / 1000, toBase: v => v * 1000 },
		{ name: 'dm', fromBase: v => v * 10, toBase: v => v / 10 },
		{ name: 'cm', fromBase: v => v * 100, toBase: v => v / 100 },
		{ name: 'mm', fromBase: v => v * 1000, toBase: v => v / 1000 },
		{ name: 'mile', fromBase: v => v / 1609.34, toBase: v => v * 1609.34 },
		{ name: 'nautical mile', fromBase: v => v / 1852, toBase: v => v * 1852 },
		{ name: 'inch', fromBase: v => v * 39.3701, toBase: v => v / 39.3701 },
		{ name: 'ft', fromBase: v => v * 3.28084, toBase: v => v / 3.28084 },
	],
	[types[1]]: [
		{ name: 'm2', fromBase: v => v, toBase: v => v },
		{ name: 'km2', fromBase: v => v / 1000000, toBase: v => v * 1000000 },
		{ name: 'dm2', fromBase: v => v * 100, toBase: v => v / 100 },
		{ name: 'cm2', fromBase: v => v * 10000, toBase: v => v / 10000 },
		{ name: 'mm2', fromBase: v => v * 1000000, toBase: v => v / 1000000 },
		{ name: 'are', fromBase: v => v / 100, toBase: v => v * 100 },
		{ name: 'hectare', fromBase: v => v / 10000, toBase: v => v * 10000 },
		{ name: 'square mile', fromBase: v => v * 3.861e-7, toBase: v => v / 3.861e-7 },
		{ name: 'acres', fromBase: v => v * 0.000247105, toBase: v => v / 0.000247105 },
		{ name: 'square inch', fromBase: v => v * 1550, toBase: v => v / 1550 },
		{ name: 'square ft', fromBase: v => v * 10.7639, toBase: v => v / 10.7639 },
	],
	[types[2]]: [
		{ name: 'm3', fromBase: v => v, toBase: v => v },
		{ name: 'dm3', fromBase: v => v * 1000, toBase: v => v / 1000 },
		{ name: 'cm3', fromBase: v => v * 1000000, toBase: v => v / 1000000 },
		{ name: 'mm3', fromBase: v => v * 1000000000, toBase: v => v / 1000000000 },
		{ name: 'cubic inch', fromBase: v => v * 61023.7, toBase: v => v / 61023.7 },
		{ name: 'cubic ft', fromBase: v => v * 35.3147, toBase: v => v / 35.3147 },
	],
	[types[3]]: [
		{ name: 'K', fromBase: v => v, toBase: v => v },
		{ name: '°C', fromBase: v => v - 273.15, toBase: v => v + 273.15 },
		{ name: '°F', fromBase: v => (v - 273.15) * 1.8 + 32, toBase: v => (v - 32) / 1.8 + 273.15 },
	],
};
