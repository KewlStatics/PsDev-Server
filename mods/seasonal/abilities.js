"use strict";

exports.BattleAbilities = {
	// Frysinger
	funhouse: {
		onStart: function (source) {
			this.useMove('Topsy-Turvy', source);
		},
		id: "funhouse",
		name: "Funhouse",
		rating: 3.5,
	},
	// MattL
	gravitationalfield: {
		shortDesc: "On switch-in, this Pokemon causes the effects of Gravity to occur.",
		onStart: function (source) {
			this.addPseudoWeather('gravity', source);
		},
		id: "gravitationalfield",
		name: "Gravitational Field",
		rating: 4,
	},
	// Golui
	specialsnowflake: {
		onStart: function (source) {
			this.add('-ability', source, 'Special Snowflake');
			this.add('message', 'All moves that target a Special Snowflake will become Special!');
		},
		onTryHit: function (target, source, move) {
			if (move.category !== 'Status') {
				move.category = 'Special';
			}
		},
		id: "specialsnowflake",
		name: "Special Snowflake",
		rating: 3,
	},
};
