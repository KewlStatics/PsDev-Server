"use strict";

exports.BattleStatuses = {
	// Innate abilities
	// manu 11
	arachnophobia: {
		effectType: 'Ability',
		onStart: function (target, source) {
			source.addVolatile('baddreamsinnate');
		},
		onModifyDamage: function (damage, source, target, move) {
			if (move.typeMod < 0) {
				return this.chainModify(2);
			}
		},
	},
	// atomicllamas, manu 11, SpaceBass
	baddreamsinnate: {
		effectType: 'Ability',
		onResidual: function (pokemon) {
			if (!pokemon.hp) return;
			const thisSide = pokemon.side;
			if (thisSide.foe.active.length) {
				const opponent = thisSide.foe.active[0];
				if (opponent.hp && opponent.status === 'slp') {
					this.damage(opponent.maxhp / 8, opponent, pokemon, "Bad Dreams");
				}
			}
		},
	},
	// Teremiare
	coinflip: {
		effectType: 'Ability',
		onStart: function (target, source) {
			this.add('message', source.name + ' flips a coin!');
			const pool = ['atk', 'def', 'spa', 'spd', 'spe'].sample(2), boost1 = pool[0], boost2 = pool[1];
			source.boosts[boost1] = 6;
			this.add('-setboost', source, boost1, source.boosts[boost1]);
			const foes = source.side.foe.active;
			if (foes.length && foes[0].hp) {
				const opponent = foes[0];
				opponent.boosts[boost2] = 6;
				this.add('-setboost', opponent, boost2, opponent.boosts[boost2]);
			}
		},
	},
	// Giagantic
	deltastreaminnate: {
		effectType: 'Ability',
		onStart: function (target, source) {
			this.setWeather('deltastream', source, "Delta Stream");
		},
		onAnySetWeather: function (target, source, weather) {
			if (this.getWeather().id === 'deltastream' && !(weather.id in {desolateland: 1, primordialsea: 1, deltastream: 1})) return false;
		},
		onSwitchOut: function (pokemon) {
			if (this.getWeather().id === 'deltastream') {
				if (pokemon.side.foe.active.length) {
					const opponent = pokemon.side.foe.active[0];
					if (opponent.hasAbility('deltastream') || (opponent.volatiles['deltastreaminnate'])) {
						this.weatherData.source = opponent;
					} else {
						this.clearWeather();
					}
				} else {
					this.clearWeather();
				}
			}
		},
		onFaint: function (pokemon) {
			if (this.getWeather().id === 'deltastream') {
				if (pokemon.side.foe.active.length) {
					const opponent = pokemon.side.foe.active[0];
					if (opponent.hasAbility('deltastream') || (opponent.volatiles['deltastreaminnate'])) {
						this.weatherData.source = opponent;
					} else {
						this.clearWeather();
					}
				} else {
					this.clearWeather();
				}
			}
		},
	},
	// Blast Chance
	flipside: {
		effectType: 'Ability',
		onStart: function (target, source) {
			this.useMove('Topsy-Turvy', source);
			this.add('message', source.name + '\'s Flipside has reversed type matchups against it!');
		},
		onEffectiveness: function (typeMod, target, type, move) {
			// The effectiveness of Retreat isn't reverted
			if (move && move.id === 'retreat') return;
			if (move && !this.getImmunity(move, type)) return 1;
			return -typeMod;
		},
	},
	// Gangnam Style
	gonnamakeyousweat: {
		effectType: 'Ability',
		onResidual: function (pokemon) {
			if (!pokemon.hp) return;
			this.heal(this.modify(pokemon.maxhp, 0.15), pokemon, pokemon, "Gonna Make You Sweat");
		},
	},
	// Haund
	prodigy: {
		effectType: 'Ability',
		onStart: function (target, source) {
			this.addPseudoWeather('prodigyweather', source, "Prodigy");
		},
		onSwitchOut: function (pokemon) {
			const foes = pokemon.side.foe.active;
			if (this.pseudoWeather['prodigyweather'] && !(foes.length && foes[0].volatiles['prodigy'])) {
				this.removePseudoWeather('prodigyweather', pokemon);
			}
		},
		onFaint: function (pokemon) {
			const foes = pokemon.side.foe.active;
			if (this.pseudoWeather['prodigyweather'] && !(foes.length && foes[0].volatiles['prodigy'])) {
				this.removePseudoWeather('prodigyweather', pokemon);
			}
		},
	},
	// qtrx
	qtrxinnate: {
		effectType: 'Ability',
		onStart: function (target, source) {
			source.addVolatile('focusenergy');
			source.addVolatile('telekinesis');
		},
		onDragOut: function (pokemon) {
			if (pokemon.isDuringAttack) {
				this.add('-message', "But it had no effect!");
				return null;
			}
		},
		onResidual: function (pokemon) {
			if (!pokemon.hp) return;
			this.add('-message', pokemon.name + "'s aura of spammy letters is tearing at the very fabric of reality!");
			this.useMove(((this.random(2) === 1) ? 'trickroom' : 'wonderroom'), pokemon);
		},
	},
	// SpaceBass
	spacebassinnate: {
		effectType: 'Ability',
		onStart: function (target, source) {
			source.addVolatile('baddreamsinnate');
		},
		onSwitchOut: function (pokemon) {
			pokemon.heal(2 * pokemon.maxhp / 3);
		},
	},

	// Weathers
	prodigyweather: {
		effectType: 'Pseudoweather',
		duration: 0,
		onStart: function (battle, source, effect) {
			this.add('message', source.name + "'s " + effect + " has inverted categories of attacking moves on the battlefield!");
		},
		onModifyMove: function (move) {
			if (move.category === 'Physical') {
				move.category = 'Special';
			} else if (move.category === 'Special') {
				move.category = 'Physical';
			}
		},
		onEnd: function () {
			this.add('message', "Categories of attacking moves on the battlefield have returned to normal!");
		}
	},
};