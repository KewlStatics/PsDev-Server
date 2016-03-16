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
	// atomicllamas, manu 11
	baddreamsinnate: {
		effectType: 'Ability',
		onResidual: function (pokemon) {
			if (!pokemon.hp) return;
			const thisSide = pokemon.side;
			if (thisSide.foe.active.length) {
				const opponent = thisSide.foe.active[0];
				if (opponent.hp && opponent.status === 'slp') {
					this.add('-ability', pokemon, 'Bad Dreams');
					this.damage(opponent.maxhp / 8, opponent, pokemon, "Bad Dreams");
				}
			}
		},
	},
	// Teremiare
	coinflip: {
		effectType: 'Ability',
		onStart: function (target, source) {
			this.add('-ability', source, 'Coin Flip');
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
	// nv
	cuteness: {
		effectType: 'Ability',
		onStart: function (target, source) {
			this.add('-ability', source, 'Cuteness');
			const foes = source.side.foe.active;
			if (foes.length && foes[0].hp) {
				this.boost({atk:-1, def:-1, spa:-1, spd:-1, spe:-1, evasion:-1}, foes[0], source, source);
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
			this.add('-ability', source, 'Flipside');
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
	// Winry
	hellacute: {
		effectType: 'Ability',
		onModifyDef: function () {
			return this.chainModify(3.2);
		},
		onModifySpD: function () {
			return this.chainModify(3.2);
		},
		onModifyAtk: function () {
			return this.chainModify(1.7);
		},
		onModifySpA: function () {
			return this.chainModify(1.7);
		},
		onAfterDamage: function (damage, target, source, move) {
			if (move && target.volatiles['hellacute']) {
				this.add('-ability', target, 'Hella Cute');
				this.boost({def: -1, spd: -1}, source, target, move);
			}
		},
		onModifyMove: function (move) {
			if (move.ohko) {
				move.onMoveFail = function (target, source) {
					this.attrLastMove('[still]');
					this.add('-anim', source, "Explosion", target);
					this.damage(source.maxhp, source, source);
				};
			}
		},
		onAnyAccuracy: function (accuracy, target, source, move) {
			if (move.ohko) return 50;
			return accuracy;
		},
	},
	// Scyther NO Swiping
	mountaineerinnate: {
		effectType: 'Ability',
		onDamage: function (damage, target, source, effect) {
			if (effect && effect.id === 'stealthrock') {
				return false;
			}
		},
		onTryHit: function (target, source, move) {
			if (move.type === 'Rock' && !target.activeTurns) {
				this.add('-immune', target, '[msg]', '[from] ability: Mountaineer');
				return null;
			}
		},
	},
	// Haund
	prodigy: {
		effectType: 'Ability',
		onStart: function (target, source) {
			this.add('-ability', source, 'Prodigy');
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
		onSwitchOut: function (pokemon) {
			pokemon.heal(this.modify(pokemon.maxhp, 0.4));
		},
	},
	// SpecsMegaBeedrill
	weed: {
		effectType: 'Ability',
		onStart: function (target, source) {
			this.add('-ability', source, 'Weed');
			this.add('-anim', source, 'Geomancy', source);
			this.add('-message', source.name + " is high on Weed!");
		},
		onModifySpe: function () {
			return this.chainModify(2.2);
		},
		onModifyAtk: function () {
			return this.chainModify(3);
		},
		onModifySpA: function () {
			return this.chainModify(3);
		},
	},
	// Snobalt
	whitemagic: {
		effectType: 'Ability',
		name: 'White Magic',
		onTryHit: function (target, source, move) {
			if (target !== source && move.type === 'Fairy') {
				if (!this.boost({spe:1})) {
					this.add('-immune', target, '[msg]', '[from] ability: White Magic');
				}
				return null;
			}
		},
	},

	// Weathers
	hail: {
		inherit: true,
		onStart: function (battle, source, effect) {
			if (effect && effect.effectType === 'Ability') {
				if (effect.id === 'holyhail') this.effectData.duration = 0;
				this.add('-weather', 'Hail', '[from] ability: ' + effect, '[of] ' + source);
			} else {
				this.add('-weather', 'Hail');
			}
		},
		durationCallback: function (source) {
			if (!source) return 5;
			if (source.getAbility() === 'Holy Hail') return 0;
			if (source.hasItem('icyrock')) return 8;
			return 5;
		},
		onWeatherModifyDamage: function (damage, attacker, defender, move) {
			if (attacker.getAbility() === 'Holy Hail' && move.type === 'Ice') {
				return this.chainModify(1.5);
			}
		},
		onModifySpD: function (spd, pokemon) {
			if (pokemon.getAbility() === 'Holy Hail' && pokemon.hasType('Ice') && this.isWeather('hail')) {
				return this.modify(spd, 1.5);
			}
		},
	},
	prodigyweather: {
		effectType: 'Pseudoweather',
		duration: 0,
		onStart: function () {
			this.add('message', "Categories of attacking moves on the battlefield have become inverted!");
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
		},
	},
};
