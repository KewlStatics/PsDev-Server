'use strict';

exports.BattlePokedex = {
	missingno: {
		inherit: true,
		basespecies: "Unown",
		forme: "Mega",
		formeLetter: "M",
		baseStats: {hp:48, atk:136, def:0, spa:6, spd:255, spe:29}, // HP must be same as base forme (Unown). Took liberties with SpD since Spc only has to correspond with one stat anyway.
	},
	unown: {
		inherit: true,
		otherForms: ["missingno"],
	},
};
