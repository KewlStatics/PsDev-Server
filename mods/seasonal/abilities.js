'use strict';

exports.BattleAbilities = {
	"gravitationalfield": {
		shortDesc: "On switch-in, this Pokemon causes the effects of Gravity to occur.",
		onStart: function (source) {
			this.addPseudoWeather('gravity', source);
		},
		id: "gravitationalfield",
		name: "Gravitational Field",
		rating: 4,
		num: -2,
	},
};