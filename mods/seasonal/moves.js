"use strict";

exports.BattleMovedex = {
	// Eevee General
	adminthings: {
		accuracy: 100,
		category: "Status",
		id: "adminthings",
		isNonstandard: true,
		name: "Admin Things",
		pp: 5,
		priority: 0,
		flags: {protect: 1, reflectable: 1, mirror: 1, authentic: 1},
		selfSwitch: true,
		boosts: {atk: -1, spa: -1},
		secondary: false,
		onHit: function (target, source) {
			target.trySetStatus('psn', source);  // Doesn't use the status property to prevent the move
			target.addVolatile('taunt', source); // from failing before executing all actions.
			if (source.name === 'Eevee General') this.add("c|~Eevee General|Sorry but I have to go! Please submit your request in <<adminrequests>> and we'll look at it soon.");
		},
		target: "normal",
		type: "Normal",
	},
	// Aurora
	aerialfury: {
		accuracy: 100,
		basePower: 100,
		category: "Physical",
		id: "aerialfury",
		isNonstandard: true,
		name: "Aerial Fury",
		pp: 10,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1, gravity: 1},
		secondary: false,
		onTryHit: function (target, source) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "Defog", source);
			this.add('-anim', source, "Bounce", target);
		},
		target: "normal",
		type: "Flying",
	},
	// spacebass
	armyofmushrooms: {
		accuracy: true,
		basePower: 0,
		categoty: "Status",
		id: "armyofmushrooms",
		isNonstandard: true,
		isViable: true,
		name: "Army of Mushrooms",
		pp: 10,
		priority: 1,
		flags: {snatch: 1},
		beforeTurnCallback: function (pokemon) {
			this.boost({def: 1, spd: 1}, pokemon, pokemon, 'mushroom army');
		},
		onHit: function (pokemon) {
			this.useMove("spore", pokemon);
			this.useMove("leechseed", pokemon);
			this.useMove("powder", pokemon);
		},
		secondary: false,
		target: "self",
		type: "Grass",
	},
	// awu
	ancestorsrage: {
		accuracy: 100,
		basePower: 80,
		category: "Physical",
		id: "ancestorsrage",
		isNonstandard: true,
		isViable: true,
		name: "Ancestor's Rage",
		pp: 10,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		secondary: {
			chance: 30,
			volatileStatus: 'confusion',
		},
		onTryHit: function (target, source) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "Psystrike", target);
		},
		target: "normal",
		type: "Fairy",
	},
	// boTTT
	automoderation: {
		accuracy: true,
		basePower: 40,
		basePowerCallback: function (pokemon, target) {
			let boosts = target.positiveBoosts();
			if (boosts) {
				this.add('-message', target.name + " was " + ['warned', 'muted', 'roombanned', 'locked', 'blacklisted', 'banned', 'permabanned'][(boosts < 8 ? boosts - 1 : 7)] + " by boTTT. (Automated moderation: spamming boosts)");
			}
			return 40 * Math.pow(1.5, boosts);
		},
		category: "Physical",
		id: "automoderation",
		isNonstandard: true,
		isViable: true,
		name: "Auto-Moderation",
		pp: 35,
		priority: 3,
		flags: {authentic: 1, mirror: 1},
		onTryHit: function (target, source) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "Luster Purge", target);
		},
		ignoreDefensive: true,
		secondary: false,
		target: "normal",
		type: "Ghost",
	},
	// Fireburn
	barnall: {
		accuracy: 90,
		basePower: 75,
		category: "Physical",
		id: "barnall",
		isNonstandard: true,
		isViable: true,
		name: "BARN ALL",
		pp: 5,
		noPPBoosts: true,
		priority: 0,
		flags: {protect: 1, mirror: 1, defrost: 1},
		onTryHit: function (target, source) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "Overheat", target);
		},
		onBasePower: function (basePower, pokemon, target) {
			if (target.status === 'brn') {
				return this.chainModify(2);
			}
		},
		// Implementation for ignoring Flash Fire is in Omega-Xis's Flash Fire innate
		// That ability does not otherwise appear in this format
		secondary: false,
		target: "normal",
		type: "Fire",
	},
	// Ace
	bignarstie: {
		accuracy: 100,
		basePower: 85,
		category: "Physical",
		id: "bignarstie",
		isNonstandard: true,
		isViable: true,
		name: "Big Narstie",
		pp: 15,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		onTryHit: function (target, source) {
			if (source.name === 'Ace') {
				this.add('c|@Ace|AAAUAUUUGOGOOHOOHOHOHOHOHOHOHOOHOH');
			}
			this.attrLastMove('[still]');
			this.add('-anim', source, "Dragon Rush", target);
		},
		secondary: {
			chance: 30,
			status: 'par',
		},
		target: "normal",
		type: "Dragon",
	},
	// atomicllamas
	bitchycomment: {
		accuracy: 95,
		basePower: 100,
		category: "Special",
		id: "bitchycomment",
		isNonstandard: true,
		isViable: true,
		name: "Bitchy Comment",
		pp: 15,
		priority: 0,
		flags: {protect: 1, mirror: 1, sound: 1, authentic: 1},
		onTryHit: function (target, source) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "Taunt", source);
		},
		secondary: {
			chance: 50,
			status: 'brn', 
		},
		target: "normal",
		type: "Psychic",
	},
	// Teremiare
	brokenmirror: {
		accuracy: true,
		basePower: 0,
		category: "Status",
		id: "brokenmirror",
		isViable: true,
		isNonstandard: true,
		name: "Broken Mirror",
		pp: 10,
		priority: 4,
		flags: {},
		stallingMove: true,
		volatileStatus: 'brokenmirror',
		onTryHit: function (pokemon) {
			return !!this.willAct() && this.runEvent('StallMove', pokemon);
		},
		onHit: function (pokemon) {
			pokemon.addVolatile('stall');
		},
		effect: {
			duration: 1,
			onStart: function (target) {
				this.add('-singleturn', target, 'Protect');
			},
			onTryHitPriority: 3,
			onTryHit: function (target, source, move) {
				if (!move.flags['protect'] || move.category === 'Status') return;
				this.add('-activate', target, 'Protect');
				let lockedmove = source.getVolatile('lockedmove');
				if (lockedmove) {
					// Outrage counter is reset
					if (source.volatiles['lockedmove'].duration === 2) {
						delete source.volatiles['lockedmove'];
					}
				}
				let sourceBoosts = {};
				for (let i in source.boosts) {
					source.boosts[i] = -source.boosts[i];
				}
				source.setBoost(sourceBoosts);
				this.add('-invertboost', source, '[from] move: Broken Mirror');
				return null;
			},
		},
		secondary: false,
		target: "self",
		type: "Dark",
	},
	// Snobalt
	capbust: {
		accuracy: 100,
		basePower: 90,
		category: "Special",
		defensiveCategory: "Physical",
		id: "capbust",
		isViable: true,
		isNonstandard: true,
		name: "Cap Bust",
		pp: 15,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		onTryHit: function (target, source) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "Psyshock", target);
		},
		onEffectiveness: function (typeMod, type) {
			if (type === 'Fairy') return 1;
		},
		secondary: false,
		target: "normal",
		type: "Fighting",
	},
	// LJ
	chaoswheel: {
		accuracy: true,
		basePower: 100,
		category: "Physical",
		id: "chaoswheel",
		isViable: true,
		isNonstandard: true,
		name: "Chaos Wheel",
		pp: 15,
		priority: 0,
		flags: {contact: 1, mirror: 1},
		onTryHit: function (target, source) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "Shadow Force", target);
		},
		secondary: false,
		target: "normal",
		type: "Ghost",
	},
	// Vexen IV
	debilitate: {
		accuracy: true,
		basePower: 0,
		category: "Status",
		id: "debilitate",
		isViable: true,
		isNonstandard: true,
		name: "Debilitate",
		pp: 30,
		priority: 0,
		flags: {protect: 1, reflectable: 1, mirror: 1},
		onTryHit: function (target, source) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "Night Shade", target);
		},
		boosts: {
			def: -1,
			spd: -1,
			spe: -1,
		},
		secondary: false,
		target: "allAdjacentFoes",
		type: "Dark",
	},
	// Blast Chance
	doesntthisjustwin: {
		accuracy: true,
		basePower: 0,
		category: "Status",
		id: "doesntthisjustwin",
		isViable: true,
		isNonstandard: true,
		name: "Doesn\'t this just win?",
		pp: 10,
		priority: 0,
		flags: {},
		sleepUsable: true,
		onTryHit: function (pokemon) {
			if (pokemon.status !== 'slp') return false;
		},
		onHit: function (pokemon) {
			for (let j = 0; j < 2; j++) {
				let moves = [];
				for (let i = 0; i < pokemon.moveset.length; i++) {
					let move = pokemon.moveset[i].id;
					let noSleepTalk = {
						assist:1, belch:1, bide:1, chatter:1, copycat:1, focuspunch:1, mefirst:1, metronome:1, mimic:1, mirrormove:1, naturepower:1, sketch:1, sleeptalk:1, uproar:1, doesntthisjustwin:1,
					};
					if (move && !(noSleepTalk[move] || this.getMove(move).flags['charge'])) {
						moves.push(move);
					}
				}
				let randomMove = '';
				if (moves.length) randomMove = moves[this.random(moves.length)];
				if (!randomMove) {
					return false;
				}
				if (randomMove === "rest" && pokemon.hp < pokemon.maxhp) {
					pokemon.cureStatus();
				}
				this.useMove(randomMove, pokemon);
			}
		},
		secondary: false,
		target: "self",
		type: "Psychic",
	},
	// galbia
	dog: {
		accuracy: 80,
		basePower: 130,
		category: "Physical",
		id: "dog",
		isNonstandard: true,
		name: "(dog)",
		pp: 15,
		priority: 0,
		flags: {contact: 1, protect: 1},
		onModifyMove: function (move) {
			if (this.isWeather('sandstorm')) move.accuracy = true;
		},
		ignoreImmunity: true,
		onTryHit: function (target, source) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "Outrage", target);
		},
		secondary: false,
		target: "normal",
		type: "Normal",
	},
	// Mizuhime
	doublelaser: {
		accuracy: 90,
		basePower: 90,
		category: "Special",
		id: "doublelaser",
		name: "Double Laser",
		pp: 40,
		priority: 0,
		flags: {pulse: 1, protect: 1, mirror: 1},
		multihit: 2,
		onTryHit: function (target, source) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "Water Pulse", target);
		},
		secondary: false,
		target: "normal",
		type: "Water",
	},
	// TONE114
	desolationpulse: {
		accuracy: 90,
		basePower: 50,
		category: "Special",
		id: "desolationpulse",
		name: "Desolation Pulse",
		pp: 5,
		priority: 0,
		isViable: true,
		isNonstandard: true,
		flags: {pulse: 1, protect: 1, mirror: 1},
		onTryHit: function (target, source) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "Dark Pulse", source);
			this.add('-anim', source, "Origin Pulse", target);
		},
		onHit: function (target, pokemon) {
			pokemon.addVolatile('desolationpulse');
		},
		effect: {
			duration: 1,
			onAfterMoveSecondarySelf: function (pokemon, target, move) {
				if (!target || target.fainted || target.hp <= 0) this.boost({spa:1, spd:1, spe:1}, pokemon, pokemon, move);
				pokemon.removeVolatile('desolationpulse');
			},
		},
		willCrit: true,
		secondary: false,
		target: "normal",
		type: "Water",
	},
	// Aelita
	energyfield: {
		accuracy: 100,
		basePower: 150,
		category: "Special",
		id: "energyfield",
		isNonstandard: true,
		isViable: true,
		name: "Energy Field",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		onModifyMove: function (move) {
			if (this.isWeather(['raindance', 'primordialsea'])) {
				move.accuracy = true;
			} else if (this.isWeather(['sunnyday', 'desolateland'])) {
				move.accuracy = 50;
			}
		},
		onTryHit: function (target, source) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "Parabolic Charge", source);
			this.add('-anim', source, "Parabolic Charge", source);
			this.add('-anim', source, "Ion Deluge", target);
		},
		self: {boosts:{spa:-1, spd:-1, spe:-1}},
		secondary: {
			chance: 40,
			status: 'par',
		},
		target: "normal",
		type: "Electric",
	},
	// Giagantic
	eternalashes: {
		accuracy: 100,
		basePower: 0,
		category: "Status",
		id: "eternalashes",
		isNonstandard: true,
		isViable: true,
		name: "Eternal Ashes",
		pp: 10,
		priority: 0,
		flags: {reflectable: 1, protect: 1, powder: 1, mirror: 1, defrost: 1},
		onTryHit: function (target) {
			this.attrLastMove('[still]');
			this.add('-anim', target, "Spore", target);
			if (!target.runStatusImmunity('powder')) {
				this.add('-immune', target, '[msg]');
				return null;
			}
		},
		onHit: function (target) {
			target.trySetStatus('brn');
		},
		secondary: {
			chance: 100,
			volatileStatus: 'eternalashes',
		},
		effect: {
			onStart: function (pokemon) {
				this.add('-start', pokemon, 'Eternal Ashes');
			},
			onBasePowerPriority: 99,
			onBasePower: function () {
				this.add('-message', 'Eternal Ashes weakened the power of moves!');
				return this.chainModify(0.65);
			},
		},
		target: "normal",
		type: "Fire",
	},
	// MattL
	evaporatingsurge: {
		accuracy: 85,
		basePower: 110,
		category: "Physical",
		id: "evaporatingsurge",
		isNonstandard: true,
		isViable: true,
		name: "Evaporating Surge",
		pp: 5,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		onEffectiveness: function (typeMod, type) {
			if (type === 'Water') return 1;
		},
		onTryHit: function (target, source) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "Bolt Strike", target);
		},
		secondary: false,
		target: "allAdjacentFoes",
		type: "Water",
	},
	// Winry
	fighttothedeath: {
		accuracy: true,
		basePower: 0,
		category: "Status",
		id: "fighttothedeath",
		isNonstandard: true,
		isViable: true,
		name: "Fight to the Death",
		pp: 3,
		noPPBoosts: true,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		onTryHit: function () {
			this.attrLastMove('[still]');
		},
		onHit: function (target, source) {
			this.useMove(['Guillotine', 'Fissure', 'Sheer Cold', 'Horn Drill'][this.random(4)], source);
		},
		secondary: false,
		target: "normal",
		type: "Fighting",
	},
	// bumbadadabum
	freesoftware: {
		accuracy: 95,
		basePower: 110,
		category: "Special",
		id: "freesoftware",
		isNonstandard: true,
		isViable: true,
		name: "Free Software",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		secondary: {chance: 30, status: 'par'},
		onTryHit: function (target, source) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "Electro Ball", source);
		},
		onHit: function (target, source) {
			if (source.name === 'bumbadadabum') {
				this.add('c|@bumbadadabum|I\'d just like to interject for a moment. What you\'re referring to as Linux, is in fact, GNU/Linux, or as I\'ve recently taken to calling it, GNU plus Linux. Linux is not an operating system unto itself, but rather another free component of a fully functioning GNU system made useful by the GNU corelibs, shell utilities and vital system components comprising a full OS as defined by POSIX.');
				this.add('c|@bumbadadabum|Many computer users run a modified version of the GNU system every day, without realizing it. Through a peculiar turn of events, the version of GNU which is widely used today is often called Linux, and many of its users are not aware that it is basically the GNU system, developed by the GNU Project.');
				this.add('c|@bumbadadabum|There really is a Linux, and these people are using it, but it is just a part of the system they use. Linux is the kernel: the program in the system that allocates the machine\'s resources to the other programs that you run. The kernel is an essential part of an operating system, but useless by itself; it can only function in the context of a complete operating system. Linux is normally used in combination with the GNU operating system: the whole system is basically GNU with Linux added, or GNU/Linux. All the so-called Linux distributions are really distributions of GNU/Linux!');
			}
		},
		target: "normal",
		type: "Electric",
	},
	// flying kebab
	frozenkebabskewers: {
		accuracy: 100,
		basePower: 25,
		category: "Physical",
		id: "frozenkebabskewers",
		isViable: true,
		isNonstandard: true,
		name: "Frozen Kebab Skewers",
		pp: 10,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		multihit: [2, 5],
		onTryHit: function (target, source) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "Icicle Spear", target);
		},
		secondary: {
			chance: 10,
			onHit: function (target, source) {
				if (this.random(2) === 0) {
					this.boost({atk: 1}, source, source);
				} else {
					this.boost({spe: 1}, source, source);
				}
			},
		},
		onAfterMove: function (source) {
			if (this.random(10) === 3) {
				this.boost({spd: 1}, source, source);
			}
		},
		target: "normal",
		type: "Ice",
	},
	// biggie
	foodrush: {
		accuracy: 90,
		basePower: 100,
		category: "Physical",
		id: "foodrush",
		isNonstandard: true,
		isViable: true,
		name: "Food Rush",
		pp: 10,
		priority: -6,
		flags: {contact: 1, protect: 1, mirror: 1},
		forceSwitch: true,
		onTryHit: function (target, source) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "Brave Bird", target);
		},
		self: {boosts: {evasion: -1}},
		target: "normal",
		type: "Normal",
	},
	// Sigilyph
	gammarayburst: {
		accuracy: 90,
		basePower: 300,
		category: "Special",
		id: "gammarayburst",
		isNonstandard: true,
		isViable: true,
		name: "Gamma Ray Burst",
		pp: 5,
		priority: 0,
		flags: { protect: 1,mirror: 1 },
		onEffectiveness: function (typeMod) {
			if (typeMod < 0) return 0;
		},
		onPrepareHit: function (target, source) {
			if (toId(source.name) === 'sigilyph') {
				this.add('c|@Sigilyph|**SOOOOGOOOOLOOOOPH**');
			}
			this.attrLastMove('[still]');
			this.add('-anim', source, "Cosmic Power", source);
			this.add('-anim', source, "Explosion", source);
			this.add('-anim', source, "Light of Ruin", target);
		},
		selfdestruct: true,
		secondary: false,
		target: "allAdjacent",
		type: "Psychic",
	},
	// Joim
	gasterblaster: {
		accuracy: 90,
		basePower: 150,
		category: "Special",
		id: "gasterblaster",
		isNonstandard: true,
		name: "Gaster Blaster",
		pp: 5,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		onEffectiveness: function (typeMod, type, move) {
			return typeMod + this.getEffectiveness('Ice', type);
		},
		onTryHit: function (target, source) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "Hyper Beam", target);
		},
		onAfterHit: function (target, source) {
			if (target.hp > 0) {
				source.addVolatile('mustrecharge');
			}
		},
		secondary: false,
		target: "normal",
		type: "Electric",
	},
	// xfix
	glitchdimension: {
		accuracy: true,
		basePower: 0,
		category: "Status",
		id: "glitchdimension",
		isNonstandard: true,
		name: "(Glitch Dimension)",
		pp: 10,
		priority: 0,
		multihit: [2, 5],
		flags: {},
		onHit: function (target, source) {
			// The PP could be increased properly, instead of this silly hack,
			// but I like this hack, so it stays. It's intentionally buggy move, after all.
			const ppData = source.getMoveData('glitchdimension');
			if (ppData && ppData.pp) {
				ppData.pp = Math.round(ppData.pp * 10 + this.random(3) + 5) / 10;
			}
			this.useMove(Object.keys(exports.BattleMovedex).sample(), target);
		},
		onTryHit: function (target, source, effect) {
			if (!source.isActive) return null;
			// This easter egg shouldn't happen too often.
			// The values here are meaningful, but I will provide the exercise in
			// figuring them out to whoever reads the code. Don't want to spoil
			// the fun in that.
			if (this.random(722) === 66) {
				this.addPseudoWeather('glitchdimension', source, effect, '[of] ' + source);
			}
		},
		effect: {
			duration: 5,
			onStart: function (target, source) {
				// Why do I make way too complex easter eggs that nobody will
				// notice? I don't know, but I did that in previous Super Staff
				// Bros., so let's continue with the tradition.
				const colors = [
					// CSS basic colors
					"black (is that even a color)", "silver", "gray", "white",
					"maroon", "red", "purple", "fuchsia", "green", "lime",
					"olive", "yellow", "navy", "blue", "teal", "aqua", "orange",
					// Pokemon Games
					"gold", "crystal", "ruby", "sapphire", "emerald", "diamond",
					"pearl", "platinum", "X", "Y",
					// PMD gummis (some don't make sense as colors, but whatever)
					"brown", "clear", "grass", "pink", "royal", "sky", "wander", "wonder",
					// Game Boy Color colors
					"strawberry", "grape", "kiwi", "dandelion", "atomic purple", "Pikachu & Pichu",
					// Game Boy Color palettes
					"dark brown", "pastel mix", "dark blue", "dark green", "reverse",
					// Why not?
					"shiny", "randomly", "'); DROP TABLE colors; --", "Ho-Oh", "blue screen",
				];
				this.add('-message', "Ho-Oh is now colored " + colors.sample(this.random(3) + 1).join(" and ") + "! As well as every other \u3069\u25C0mon.");
			},
			onEffectiveness: function () {
				return this.random(3) - 1;
			},
			onEnd: function () {
				this.add('-message', "Ho-Oh is no longer colored!");
			},
		},
		secondary: false,
		target: "self",
		type: "Normal",
	},
	// xShiba
	goindalikelinda: {
		accuracy: true,
		basePower: 0,
		category: "Status",
		id: "goindalikelinda",
		isNonstandard: true,
		isViable: true,
		name: "Go Inda Like Linda",
		pp: 30,
		priority: 0,
		flags: {snatch: 1},
		boosts: {
			spe: 2,
			atk: 4,
		},
		secondary: false,
		target: "self",
		type: "Flying",
	},
	// Hashtag
	gottagostrats: {
		accuracy: 95,
		basePower: 100,
		category: "Physical",
		id: "gottagostrats",
		isNonstandard: true,
		isViable: true,
		name: "GOTTA GO STRATS",
		pp: 10,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		onPrepareHit: function (target, source) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "Last Resort", target);
		},
		onHit: function (target, pokemon) {
			pokemon.addVolatile('fellstinger');
		},
		secondary: false,
		target: "normal",
		type: "Normal",
	},
	// pluviometer
	grammarhammer: {
		accuracy: 100,
		basePower: 104, // Pixilate
		category: "Special",
		id: "grammarhammer",
		isNonstandard: true,
		isViable: true,
		name: "Grammar Hammer",
		pp: 15,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1, defrost: 1},
		onPrepareHit: function (target, source) {
			this.attrLastMove('[still]');
			this.add('-anim', target, "Fusion Flare", target);
		},
		secondary: {
			chance: 100,
			status: 'brn',
		},
		target: "normal",
		type: "Fairy",
	},
	// Snowy
	hailwhitequeen: {
		accuracy: true,
		basePower: 0,
		category: "Status",
		id: "hailwhitequeen",
		isNonstandard: true,
		isViable: true,
		name: "Hail Whitequeen",
		pp: 5,
		priority: 4,
		flags: {},
		stallingMove: true,
		volatileStatus: 'hailwhitequeen',
		onTryHit: function (pokemon) {
			return !!this.willAct() && this.runEvent('StallMove', pokemon);
		},
		onHit: function (pokemon) {
			pokemon.addVolatile('stall');
		},
		effect: {
			duration: 1,
			onStart: function (target) {
				this.add('-singleturn', target, 'Protect');
			},
			onTryHitPriority: 3,
			onTryHit: function (target, source, move) {
				if (!move.flags['protect'] || move.category === 'Status') return;
				this.add('-activate', target, 'Protect');
				let lockedmove = source.getVolatile('lockedmove');
				if (lockedmove) {
					// Outrage counter is reset
					if (source.volatiles['lockedmove'].duration === 2) {
						delete source.volatiles['lockedmove'];
					}
				}
				if (move.flags['contact'] && move.category === 'Physical') {
					for (let i = 0; i < source.side.pokemon.length; i++) {
						let pokemon = source.side.pokemon[i];
						if (pokemon.status === 'frz') return null;
					}
					source.trySetStatus('frz');
				}
				return null;
			},
		},
		secondary: false,
		target: "self",
		type: "Ice",
	},
	// nv
	hamsterdance: {
		accuracy: 100,
		basePower: 0,
		category: "Status",
		id: "hamsterdance",
		isNonstandard: true,
		isViable: true,
		name: "Hamster Dance",
		pp: 30,
		priority: 0,
		flags: {authentic: 1, protect: 1, mirror: 1},
		onPrepareHit: function (target, source) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "Dragon Dance", source);
		},
		onHit: function () {
			this.add('-clearallboost');
			for (let i = 0; i < this.sides.length; i++) {
				for (let j = 0; j < this.sides[i].active.length; j++) {
					if (this.sides[i].active[j] && this.sides[i].active[j].isActive) this.sides[i].active[j].clearBoosts();
				}
			}
		},
		secondary: {
			chance: 100,
			volatileStatus: 'confusion',
		},
		target: "normal",
		type: "Normal",
	},
	// Anttya
	hax: {
		accuracy: true,
		basePower: 0,
		category: "Status",
		id: "hax",
		isNonstandard: true,
		isViable: true,
		name: "Hax",
		pp: 10,
		priority: 0,
		flags: {},
		onPrepareHit: function (target, source) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "Taunt", target);
		},
		onModifyMove: function (move) {
			let rand = this.random(10);
			if (rand < 1) {
				move.onHit = function (pokemon) {
					this.damage(this.getDamage(pokemon, pokemon, 40), pokemon, pokemon, {
						id: 'confused',
						effectType: 'Move',
						type: '???',
					});
				}
			} else if (rand < 3) {
				move.boosts = {
					spa: 2,
					spd: 2,
					spe: 2,
				};
			} else {
				move.target = "normal";
				if (rand < 5) {
					move.onPrepareHit = function (target, source) {
						this.attrLastMove('[still]');
						this.add('-anim', source, "Fairy Lock", target);
					};
					move.onHit = function (target, source) {
						source.trySetStatus('par');
						source.addVolatile('confusion');
						target.trySetStatus('par');
						target.addVolatile('confusion');
					}
				} else {
					move.accuracy = 90;
					move.basePower = 80;
					move.category = "Special";
					move.flags = {protect: 1};
					move.willCrit = true;
					move.onPrepareHit = function (target, source) {
						this.attrLastMove('[still]');
						this.add('-anim', source, "Mist Ball", target);
					};
				}
			}
		},
		secondary: false,
		target: "self",
		type: "Normal",
	},
	// Hippopotas
	hazardpass: {
		accuracy: 100,
		basePower: 0,
		category: "Status",
		id: "hazardpass",
		isNonstandard: true,
		isViable: true,
		name: "Hazard Pass",
		pp: 20,
		priority: 0,
		flags: {protect: 1, reflectable: 1, mirror: 1, sound: 1, authentic: 1},
		selfSwitch: true,
		onHit: function (pokemon) {
			let hazards = ['stealthrock', 'spikes', 'toxicspikes', 'stickyweb'].randomize();
			pokemon.side.addSideCondition(hazards[0]);
			pokemon.side.addSideCondition(hazards[1]);
		},
		secondary: false,
		target: "normal",
		type: "Dark",
	},
	// qtrx
	hiddenpowernormal: {
		accuracy: true,
		basePower: 0,
		category: "Status",
		id: "hiddenpowernormal",
		isNonstandard: true,
		isViable: true,
		name: "Hidden Power Normal",
		pp: 65,
		priority: 0,
		flags: {snatch: 1, authentic: 1},
		onModifyMove: function (move, source) {
			if (source.template.isMega) {
				move.name = "SUPER GLITCH";
				if (this.p1.pokemon.filter(mon => !mon.fainted).length > 1 && this.p2.pokemon.filter(mon => !mon.fainted).length > 1) {
					source.addVolatile('hiddenpowernormal');
					move.forceSwitch = true;
					move.selfSwitch = true;
				}
			} else {
				move.name = "KEYBOARD SMASH";
			}
		},
		onPrepareHit: function (target, source) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "Fairy Lock", target);
			this.add('-anim', target, "Fairy Lock", target); // DRAMATIC FLASHING
		},
		onHit: function (target, source) {
			if (!source.template.isMega) {
				let gibberish = '';
				let hits = 0;
				let hps = ['hiddenpowerbug', 'hiddenpowerdark', 'hiddenpowerdragon', 'hiddenpowerelectric', 'hiddenpowerfighting', 'hiddenpowerfire', 'hiddenpowerflying', 'hiddenpowerghost', 'hiddenpowergrass', 'hiddenpowerground', 'hiddenpowerice', 'hiddenpowerpoison', 'hiddenpowerpsychic', 'hiddenpowerrock', 'hiddenpowersteel', 'hiddenpowerwater'];
				let hitcount = [3, 4, 4, 4, 4, 5, 5, 6, 6][this.random(9)];
				if (source.name === 'qtrx') this.add('c|@qtrx|/me slams face into keyboard!');
				source.isDuringAttack = true; // Prevents the user from being kicked out in the middle of using Hidden Powers.
				for (let i = 0; i < hitcount; i++) {
					if (target.hp !== 0) {
						let len = 16 + this.random(35);
						gibberish = '';
						for (let j = 0; j < len; j++) gibberish += String.fromCharCode(48 + this.random(79));
						this.add('-message', gibberish);
						this.useMove(hps[this.random(16)], source, target);
						hits++;
					}
				}
				this.add('-message', 'Hit ' + hits + (hits === 1 ? 'time!' : ' times!'));
				source.isDuringAttack = false;
			} else if (source.volatiles['hiddenpowernormal']) {
				target.swapping = true;
				source.swapping = true;
			} else {
				this.useMove("explosion", source, target);
			}
		},
		effect: {
			duration: 1,
			onAfterMoveSecondarySelf: function (source, target) {
				if (source.swapping && target.swapping) {
					this.add("raw|<div class=\"broadcast-blue\"><b>" + source.side.name + " will trade " + source.name + " for " + target.side.name + "'s " + target.name + ".</b></div>");
					this.add('message', "Link standby... Please wait.");
				} else {
					this.add('message', "Trade cancelled.");
				}
			},
		},
		secondary: false,
		target: "normal",
		type: "Normal",
	},
	// SpecsMegaBeedrill
	highfive: {
		accuracy: 100,
		basePower: 30,
		category: "Special",
		id: "highfive",
		isViable: true,
		isNonstandard: true,
		name: "High Five",
		pp: 35,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		multihit: 5,
		onTryHit: function (target, source) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "Pin Missile", target);
		},
		target: "normal",
		type: "Bug",
	},
	// urkerab
	holyorders: {
		accuracy: true,
		basePower: 0,
		category: "Status",
		id: "holyorders",
		isNonstandard: true,
		isViable: true,
		name: "Holy Orders",
		pp: 10,
		priority: 0,
		flags: {},
		onHit: function (target, source) {
			this.useMove("healorder", source);
			this.useMove("defendorder", source);
			this.useMove("attackorder", source);
		},
		secondary: false,
		target: "self",
		type: "Fighting",
	},
	// ih8ih8sn0w
	imprisonform: {
		accuracy: true,
		basePower: 0,
		category: "Status",
		id: "imprisonform",
		isNonstandard: true,
		isViable: true,
		name: "Imprisonform",
		pp: 5,
		noPPBoosts: true,
		priority: 0,
		flags: {},
		onPrepareHit: function (target, source) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "Heal Block", source);
			this.add('-anim', target, "Heal Block", target);
		},
		onHit: function (target, source) {
			if (!source.transformInto(target, source)) {
				return false;
			}
		},
		self: {volatileStatus: 'Imprison'},
		secondary: false,
		target: "normal",
		type: "Dark",
	},
	// Alaitz
	kissblast: {
		accuracy: 95,
		basePower: 100,
		category: "Special",
		id: "kissblast",
		isNonstandard: true,
		isViable: true,
		name: "Kiss Blast",
		pp: 10,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1, heal: 1},
		drain: [3, 4],
		onPrepareHit: function (target, source) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "Fairy Lock", target);
			this.add('-anim', source, "Giga Impact", target);
		},
		self: {boosts: {spa: 1}},
		secondary: {
			chance: 100,
			volatileStatus: 'leechseed',
		},
		target: "normal",
		type: "Fairy",
	},
	// Crestfall
	lightofunruin: {
		accuracy: 90,
		basePower: 140,
		category: "Special",
		id: "lightofunruin",
		isNonstandard: true,
		isViable: true,
		name: "Light of Unruin",
		pp: 5,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		isUnreleased: true,
		drain: [1, 2],
		self: {boosts: {def: -1, spd: -1}},
		secondary: false,
		onTryHit: function (target, source) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "Light Of Ruin", target);
		},
		target: "normal",
		type: "Fairy",
	},
	// scpinion
	lolroom: {
		accuracy: true,
		basePower: 0,
		category: "Status",
		id: "lolroom",
		isNonstandard: true,
		pp: 5,
		priority: 0,
		flags: {mirror: 1},
		onHit: function (target, source, effect) {
			if (this.pseudoWeather['trickroom']) {
				this.removePseudoWeather('trickroom', source, effect, '[of] ' + source);
			} else {
				this.addPseudoWeather('trickroom', source, effect, '[of] ' + source);
			}
		},
		volatileStatus: 'lolroom',
		effect: {
			onStart: function (pokemon) {
				this.add('-start', pokemon, 'LOL! Room');
				let newatk = pokemon.stats.spd;
				let newdef = pokemon.stats.spa;
				pokemon.stats.spa = newatk;
				pokemon.stats.spd = newdef;
			},
			onCopy: function (pokemon) {
				this.add('-start', pokemon, 'LOL! Room');
				let newatk = pokemon.stats.spd;
				let newdef = pokemon.stats.spa;
				pokemon.stats.spa = newatk;
				pokemon.stats.spd = newdef;
			},
			onEnd: function (pokemon) {
				this.add('-end', pokemon, 'LOL! Room');
				let newatk = pokemon.stats.spd;
				let newdef = pokemon.stats.spa;
				pokemon.stats.spa = newatk;
				pokemon.stats.spd = newdef;
			},
			onRestart: function (pokemon) {
				pokemon.removeVolatile('LOL! Room');
			},
		},
		secondary: false,
		target: "self",
		type: "Psychic",
	},
	// Jetpack
	"malicioushypnosis": {
		accuracy: 100,
		basePower: 90,
		category: "Special",
		id: "psychic",
		isViable: true,
		isNonstandard: true,
		name: "Psychic",
		pp: 5,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		onPrepareHit: function (target, source) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "Hypnosis", target);
		},
		secondary: {
			chance: 35,
			status: 'slp',
		},
		target: "normal",
		type: "Psychic",
	},
	// Death on Wings
	monoflying: {
		accuracy: true,
		basePower: 0,
		category: "Status",
		id: "monoflying",
		isNonstandard: true,
		name: "Mono Flying",
		pp: 20,
		priority: 0,
		flags: {mirror: 1, gravity: 1},
		onHit: function (target, source) {
			if (this.pseudoWeather['monoflying']) {
				this.removePseudoWeather('monoflying', source);
			} else {
				this.addPseudoWeather('monoflying', source);
			}
		},
		effect: {
			duration: 5,
			onStart: function () {
				this.add('message', 'All active Pokemon became pure Flying-type!');
				// Only aesthetic; actual implementation below
				for (let s in this.sides) {
					const thisSide = this.sides[s];
					for (let p in thisSide.active) {
						const pokemon = thisSide.active[p];
						if (pokemon.types == 'Flying' || !pokemon.hp) continue; // coerce with ==
						pokemon.setType('Flying', true);
						this.add('-start', pokemon, 'typechange', 'Flying');
					}
				}
			},
			onResidualOrder: 90,
			onUpdate: function (pokemon) {
				if (pokemon.types == 'Flying' || !pokemon.hp) return;
				pokemon.setType('Flying', true);
				this.add('-start', pokemon, 'typechange', 'Flying');
			},
			onSwitchIn: function (pokemon) {
				if (pokemon.types == 'Flying' || !pokemon.hp) return;
				pokemon.setType('Flying', true);
				this.add('-start', pokemon, 'typechange', 'Flying');
			},
			onEnd: function () {
				this.add('message', 'Active Pokemon are no longer forced to be pure Flying-type.');
				for (let s in this.sides) {
					const thisSide = this.sides[s];
					for (let p in thisSide.active) {
						const pokemon = thisSide.active[p];
						if (pokemon.template.types == 'Flying' || !pokemon.hp) continue;
						pokemon.setType(pokemon.template.types, true);
						this.add('-end', pokemon, 'typechange');
					}
				}
			},
		},
		secondary: false,
		onTryHit: function (target, source) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "Defog", source);
		},
		target: "self",
		type: "Flying",
	},
	// gangnam style
	motherfathergentleman: {
		accuracy: 80,
		basePower: 70,
		category: "Physical",
		id: "motherfathergentleman",
		isNonstandard: true,
		name: "Mother, Father, Gentleman",
		pp: 15,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		multihit: 3,
		secondary: false,
		onTryHit: function (target, source) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "Agility", source);
			this.add('-anim', source, "Sky Drop", source);
		},
		target: "normal",
		type: "Dark",
	},
	// Overneat
	neattokick: {
		accuracy: 90,
		basePower: 130,
		category: "Physical",
		id: "neattokick",
		isViable: true,
		name: "Neatto Kick",
		pp: 10,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1, gravity: 1},
		hasCustomRecoil: true,
		onTryHit: function (target, source) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "High Jump Kick", target);
		},
		onMoveFail: function (target, source) {
			this.damage(source.maxhp / 2, source, source, 'highjumpkick');
		},
		secondary: {
			chance: 50,
			status: 'par',
		},
		target: "normal",
		type: "Fighting",
	},
	// Level 51
	nextlevelstrats: {
		accuracy: true,
		category: "Status",
		id: "nextlevelstrats",
		isNonstandard: true,
		name: "Next Level Strats",
		pp: 5,
		noPPBoosts: true,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		boosts: {spe: 1},
		onTryHit: function (pokemon) {
			if (pokemon.level >= 200) return false;
		},
		onHit: function (pokemon) {
			pokemon.level += 10;
			if (pokemon.level > 200) pokemon.level = 200;
			this.add('-message', 'Level 51 advanced 10 levels! It is now level ' + pokemon.level + '!');
		},
		secondary: false,
		target: "self",
		type: "Normal",
	},
	// Golui
	notfriezaenough: {
		accuracy: 100,
		basePower: 120,
		category: "Special",
		id: "notfriezaenough",
		isViable: true,
		isNonstandard: true,
		name: "Not Frieza Enough",
		pp: 5,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		onEffectiveness: function (typeMod, type) {
			if (type === 'Water') return 1;
		},
		onTryHit: function (target, source) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "Sheer Cold", target);
		},
		onHit: function () {
			this.setWeather('Hail');
		},
		secondary: {
			chance: 10,
			status: 'frz',
		},
		self: {
			boosts: {
				spa: -1,
				spd: -1,
			},
		},
		target: "normal",
		type: "Ice",
	},
	// m00ns
	oh: {
		accuracy: 100,
		category: "Status",
		id: "oh",
		isNonstandard: true,
		name: "oh",
		pp: 30,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		boosts: {atk: -1, spa: -1},
		self: {boosts: {spe: 1}},
		secondary: false,
		target: "normal",
		type: "Dark",
	},
	// ajhockeystar
	ohcanada: {
		accuracy: 55,
		category: "Status",
		id: "ohcanada",
		isNonstandard: true,
		isViable: true,
		name: "OH CANADA",
		pp: 35,
		priority: 0,
		flags: {reflectable: 1, protect: 1, mirror: 1},
		secondary: false,
		onTryHit: function (target, source) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "Icy Wind", target);
			this.add('-anim', source, "Haze", source);
		},
		onHit: function (target, source) {
			if (target.setStatus('frz')) {
				this.add('-message', source.name + " has become trapped in sticky maple syrup!");
				this.boost({spe: -2}, source, source);
			}
		},
		onMoveFail: function (target, source) {
			this.add('-message', source.name + " has become trapped in sticky maple syrup!");
			this.boost({spe: -1}, source, source);
		},
		target: 'normal',
		type: "Ice",
	},
	// Andy
	pilfer: {
		accuracy: true,
		basePower: 70,
		category: "Physical",
		id: "pilfer",
		isNonstandard: true,
		name: "Pilfer",
		pp: 15,
		priority: 1,
		flags: {protect: 1, authentic: 1},
		onTryHit: function (target, pokemon) {
			let decision = this.willMove(target);
			if (decision) {
				let noMeFirst = {
					mefirst:1, speedpaint:1,
				};
				let move = this.getMoveCopy(decision.move.id);
				if (move.category === 'Status' && !noMeFirst[move]) {
					this.useMove(move, pokemon);
					this.attrLastMove('[still]');
					this.add('-anim', pokemon, "Night Slash", target);
					return;
				}
			}
			return false;
		},
		secondary: false,
		pressureTarget: "foeSide",
		target: "normal",
		type: "Dark",
	},
	// Megazard
	playdead: {
		accuracy: 100,
		basePower: 0,
		category: "Status",
		id: "playdead",
		isNonstandard: true,
		name: "Play Dead",
		pp: 25,
		priority: -3,
		flags: {},
		onTryHit: function (target, source) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "Grudge", target);
		},
		volatileStatus: 'playdead',
		effect: {
			duration: 3,
			onStart: function (pokemon) {
				this.add('-start', pokemon, 'Play Dead');
				this.add('message', 'Playing Dead causes its moves to all turn into Ghost-type!');
			},
			onModifyMove: function (move) {
				if (move.id !== 'struggle') {
					move.type = 'Ghost';
				}
			},
			onEnd: function (pokemon) {
				this.add('-end', pokemon, 'Play Dead');
			},
		},
		secondary: false,
		target: "normal",
		type: "Fairy",
	},
	// AM
	predator: {
		accuracy: 100,
		basePower: 40,
		basePowerCallback: function (pokemon, target) {
			if (target.beingCalledBack) {
				return 120;
			}
			return 60;
		},
		category: "Physical",
		id: "predator",
		isNonstandard: true,
		isViable: true,
		name: "Predator",
		pp: 20,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		boosts: {atk:-1, spa:-1, accuracy:-2},
		beforeTurnCallback: function (pokemon, target) {
			target.side.addSideCondition('predator', pokemon);
			if (!target.side.sideConditions['predator'].sources) {
				target.side.sideConditions['predator'].sources = [];
			}
			target.side.sideConditions['predator'].sources.push(pokemon);
		},
		onModifyMove: function (move, source, target) {
			if (target && target.beingCalledBack) move.accuracy = true;
		},
		onTryHit: function (target, pokemon) {
			target.side.removeSideCondition('predator');
		},
		effect: {
			duration: 1,
			onBeforeSwitchOut: function (pokemon) {
				this.debug('Pursuit start');
				let sources = this.effectData.sources;
				this.add('-activate', pokemon, 'move: Pursuit');
				for (let i = 0; i < sources.length; i++) {
					if (sources[i].moveThisTurn || sources[i].fainted) continue;
					this.cancelMove(sources[i]);
					// Run through each decision in queue to check if the Pursuit user is supposed to Mega Evolve this turn.
					// If it is, then Mega Evolve before moving.
					if (sources[i].canMegaEvo) {
						for (let j = 0; j < this.queue.length; j++) {
							if (this.queue[j].pokemon === sources[i] && this.queue[j].choice === 'megaEvo') {
								this.runMegaEvo(sources[i]);
								break;
							}
						}
					}
					this.runMove('predator', sources[i], pokemon);
				}
			},
		},
		secondary: false,
		target: "normal",
		type: "Dark",
	},
	// Haund
	psychokinesis: {
		accuracy: 100,
		basePower: 90,
		category: "Special",
		id: "psychokinesis",
		isNonstandard: true,
		isViable: true,
		name: "Psychokinesis",
		pp: 10,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		secondary: false,
		onTryHit: function (target, source) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "Aura Sphere", target);
		},
		onHit: function (target, source) {
			for (let boost in target.boosts) {
				if (target.boosts[boost] > 0) {
					source.boosts[boost] += target.boosts[boost];
					if (source.boosts[boost] > 6) source.boosts[boost] = 6;
					target.boosts[boost] = 0;
					this.add('-setboost', source, boost, source.boosts[boost]);
					this.add('-setboost', target, boost, target.boosts[boost]);
				}
			}
		},
		target: "normal",
		type: "Fighting",
	},
	// Zero Lux Given
	punray: {
		accuracy: 100,
		basePower: 80,
		category: "Physical",
		id: "punray",
		isNonstandard: true,
		isViable: true,
		name: "Pun Ray",
		pp: 20,
		priority: 0,
		flags: {protect: 1, mirror: 1, distance: 1},
		secondary: {
			chance: 100,
			volatileStatus: 'confusion',
		},
		target: "any",
		type: "Flying",
	},
	// Pikachuun
	pureskill: {
		accuracy: true,
		basePower: 0,
		category: "Special",
		id: "pureskill",
		isViable: true,
		name: "Pure Skill",
		pp: 5,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		onModifyMove: function (move) {
			move.type = "???";
			const rand = this.random(20);
			if (rand < 9) {
				move.damageCallback = function (source, target) {
					return Math.max(target.hp / 2, target.maxhp / 4);
				}
			} else if (rand < 11) {
				move.onHit = function (target, source) {
					this.attrLastMove('[still]');
					this.add('-anim', source, "Explosion", target);
					this.damage(source.maxhp, source, source);
					if (toId(source.name) === 'pikachuun') {
						this.add('c|+Pikachuun|i\'ve been outskilled');
					}
					return true;
				}
			} else {
				move.basePower = 255;
			}
		},
		secondary: false,
		target: "normal",
		type: "Normal",
	},
	// Raseri
	purifysoul: {
		accuracy: true,
		basePower: 0,
		category: "Status",
		id: "purifysoul",
		isNonstandard: true,
		isViable: true,
		name: "Purify Soul",
		pp: 10,
		priority: 0,
		flags: {snatch: 1, heal: 1},
		heal: [1, 2],
		boosts: {spa:1, spd:1},
		secondary: false,
		onTryHit: function (target, source) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "Dazzling Gleam", source);
		},
		target: "self",
		type: "Normal",
	},
	// DMT
	reallybigswordsdance: {
		accuracy: true,
		basePower: 0,
		category: "Status",
		desc: "Raises the user's Attack by 2 stages.",
		shortDesc: "Raises the user's Attack by 2.",
		id: "reallybigswordsdance",
		isNonstandard: true,
		isViable: true,
		name: "Really Big Swords Dance",
		pp: 20,
		priority: 0,
		flags: {snatch: 1},
		boosts: {atk: 5},
		secondary: false,
		onTryHit: function (target, source) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "Swords Dance", source);
			this.add('-anim', source, "Swords Dance", source);
		},
		target: "self",
		type: "Normal",
	},
	// Quite Quiet
	retreat: {
		accuracy: 100,
		basePower: 60,
		category: "Special",
		id: "retreat",
		isNonstandard: true,
		isViable: true,
		name: "Retreat",
		pp: 20,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		onEffectiveness: function (typeMod, type, move) {
			return 1;
		},
		selfSwitch: true,
		secondary: false,
		target: "normal",
		onTryHit: function (target, source) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "Volt Switch", target);
		},
		type: "Electric",
	},
	// Jasmine
	reversetransform: {
		accuracy: true,
		category: "Status",
		id: "reversetransform",
		isNonstandard: true,
		name: "Reverse Transform",
		pp: 1,
		noPPBoosts: true,
		priority: 0,
		flags: {protect: 1, mirror: 1, authentic: 1},
		onHit: function (target, source) {
			if (!target.transformInto(source, target)) {
				return false;
			}
			target.canMegaEvo = false;
		},
		target: "normal",
		type: "Normal",
	},
	// macle
	ribbit: {
		accuracy: true,
		basePower: 90,
		category: "Physical",
		id: "ribbit",
		isNonstandard: true,
		isViable: true,
		name: "Ribbit",
		pp: 40,
		priority: 0,
		flags: {protect: 1, mirror: 1, sound: 1, authentic: 1},
		onTryHit: function (target, source) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "Boomburst", target);
		},
		onHit: function (pokemon) {
			let oldAbility = pokemon.setAbility('soundproof');
			if (oldAbility) {
				this.add('-endability', pokemon, oldAbility, '[from] move: Ribbit');
				this.add('-ability', pokemon, 'Soundproof', '[from] move: Ribbit');
				return;
			}
			if (source.name === 'macle') this.add("c|+macle|Follow the Frog Blog - http://gonefroggin.wordpress.com");
		},
		target: "normal",
		type: "Water",
	},
	// Starmei
	rkoouttanowhere: {
		accuracy: 100,
		basePower: 0,
		damageCallback: function (pokemon) {
			return (this.random(50, 151) * pokemon.level) / 100;
		},
		category: "Special",
		id: "rkoouttanowhere",
		isNonstandard: true,
		name: "RKO Outta Nowhere",
		pp: 35,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		onTryHit: function (target, source) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "Surf", target);
		},
		secondary: false,
		target: "normal",
		type: "Water",
	},
	// Trickster
	sacredspearexplosion: {
		accuracy: 100,
		basePower: 100,
		category: "Special",
		desc: "No additional effect.",
		shortDesc: "No additional effect. Hits adjacent foes.",
		id: "sacredspearexplosion",
		isNonstandard: true,
		isViable: true,
		name: "Sacred Spear Explosion",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		onTryHit: function (target, source) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "Megahorn", target);
			this.add('-anim', target, "Explosion", source);
			this.add('-formechange', target, target.template.species, ''); //resets sprite after explosion
		},
		onEffectiveness: function (typeMod, type, move) {
			return typeMod + this.getEffectiveness('Steel', type);
		},
		secondary: {chance: 30, status: 'brn'},
		target: "allAdjacentFoes",
		type: "Fairy",
	},
	// Freeroamer
	screwthismatchup: {
		accuracy: true,
		basePower: 0,
		category: "Status",
		id: "screwthismatchup",
		isNonstandard: true,
		isViable: true,
		name: "Screw This Matchup",
		pp: 5,
		priority: 0,
		flags: {},
		boosts: {atk: 2},
		secondary: false,
		onTryHit: function (target, source) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "Cosmic Power", source);
		},
		onHit: function (target, source) {
			if (!source.types[1] || source.types[0] !== 'Fighting' || source.species !== 'Lucario') return true;
			const foes = source.side.foe.active;
			if (foes.length && foes[0].hp) {
				const opponent = foes[0], mytype = source.types[1];
				if (opponent.types[0] === source.types[1]) {
					source.setType('Fighting');
					this.add('-start', source, 'typechange', 'Fighting');
				} else if (opponent.types[0] === 'Fighting') {
					opponent.types[0] = mytype;
					if (opponent.types[1] !== mytype) {
						this.add('message', opponent.name + '\'s primary typing became ' + source.types[1] + '!');
					} else {
						opponent.setType(mytype);
						this.add('-start', opponent, 'typechange', mytype);
					}
					source.setType('Fighting');
					this.add('-start', source, 'typechange', 'Fighting');
				} else {
					opponent.types[0] = mytype;
					source.types[1] = opponent.types[0];
					if (opponent.types[1] !== mytype) {
						this.add('message', opponent.name + '\'s primary typing (' + opponent.types[0] + ') was exchanged with ' + source.name + '\'s secondary typing (' + mytype + ')!');
					} else {
						opponent.setType(mytype);
						this.add('-start', opponent, 'typechange', mytype);
						this.add('message', source.name + '\'s secondary typing became ' + source.types[1] + '!');
					}
				}
			}
		},
		target: "self",
		type: "Normal",
	},
	// f(x)
	shakethatbrass: {
		accuracy: true,
		basePower: 0,
		category: "Status",
		id: "shakethatbrass",
		isNonstandard: true,
		name: "shake that brass",
		pp: 20,
		priority: 0,
		onTryHit: function (target, pokemon) {
			const move = pokemon.moveset.map(x => x.id).filter(x => x !== 'shakethatbrass').sample();
			pokemon.addVolatile('shakethatbrass');
			this.useMove(move, pokemon, target);
			return null;
		},
		flags: {protect: 1, authentic: 1},
		effect: {
			duration: 1,
			onBasePowerPriority: 4,
			onBasePower: function (basePower) {
				return this.chainModify(1.5);
			},
			onAccuracy: function (accuracy) {
				return 100;
			},
		},
		secondary: false,
		target: "adjacentFoe",
		type: "Normal",
	},
	// Legitimate Username
	shellfortress: {
		accuracy: true,
		basePower: 0,
		category: "Status",
		id: "shellfortress",
		isNonstandard: true,
		isViable: true,
		name: "Shell Fortress",
		pp: 15,
		priority: 0,
		flags: {snatch: 1},
		boosts: {def:2, spd:2, atk:-4, spa:-4, spe:-4},
		secondary: false,
		target: "self",
		type: "Normal",
	},
	// The Immortal
	sleepwalk: {
		accuracy: true,
		basePower: 0,
		category: "Status",
		id: "sleepwalk",
		isNonstandard: true,
		isViable: true,
		name: "Sleep Walk",
		pp: 10,
		priority: 0,
		flags: {},
		sleepUsable: true,
		onTryHit: function (target, source) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "Healing Wish", target);
		},
		onHit: function (pokemon) {
			if (pokemon.status !== 'slp') {
				if (pokemon.hp >= pokemon.maxhp) return false;
				if (!pokemon.setStatus('slp')) return false;
				pokemon.statusData.time = 3;
				pokemon.statusData.startTime = 3;
				this.heal(pokemon.maxhp);
				this.add('-status', pokemon, 'slp', '[from] move: Rest');
			}
			let moves = [];
			for (let i = 0; i < pokemon.moveset.length; i++) {
				let move = pokemon.moveset[i].id;
				if (move && move !== 'sleeptalk') moves.push(move);
			}
			let move = '';
			if (moves.length) move = moves[this.random(moves.length)];
			if (!move) return false;
			this.useMove(move, pokemon);
			let activate = false;
			let boosts = {};
			for (let i in pokemon.boosts) {
				if (pokemon.boosts[i] < 0) {
					activate = true;
					boosts[i] = 0;
				}
			}
			if (activate) pokemon.setBoost(boosts);
			if (!pokemon.informed && source.name === 'The Immortal') {
				this.add('c|~The Immortal|I don\'t really sleep walk...');
				pokemon.informed = true;
			}
		},
		secondary: false,
		target: "self",
		type: "Normal",
	},
	// Scyther NO Swiping
	sniperswipes: {
		accuracy: 100,
		basePower: 50,
		category: "Physical",
		id: "sniperswipes",
		isNonstandard: true,
		name: "Sniper Swipes",
		pp: 10,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		onTryHit: function (target, source) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "X-Scissor", target);
		},
		onAfterMove: function (source) {
			if (toId(source.name) === 'scythernoswiping') {
				this.add('c|+Scyther NO Swiping|Oh baby a triple!!!');
			}
		},
		onEffectiveness: function (typeMod) {
			return -typeMod;
		},
		multihit: 3,
		target: "normal",
		type: "Bug",
	},
	// HiMyNamesL
	solarstorm: {
		accuracy: 100,
		basePower: 120,
		category: "Special",
		id: "solarstorm",
		name: "Solar Storm",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		onTryHit: function (target, source) {
			this.attrLastMove('[still]');
			this.add('-prepare', source, 'Solar Beam', target);
			this.add('-anim', source, 'Solar Beam', target);
		},
		onBasePowerPriority: 4,
		onBasePower: function () {
			if (this.isWeather(['raindance', 'primordialsea', 'sandstorm', 'hail'])) {
				return this.chainModify(0.5);
			}
		},
		secondary: false,
		target: "normal",
		type: "Grass",
	},
	// Bummer
	speedpaint: {
		accuracy: true,
		category: "Status",
		id: "speedpaint",
		isNonstandard: true,
		name: "Speedpaint",
		pp: 10,
		priority: 1,
		flags: {protect: 1, authentic: 1},
		onTryHit: function (target, pokemon) {
			let decision = this.willMove(target);
			if (decision) {
				let noMeFirst = {
					chatter:1, counter:1, covet:1, focuspunch:1, mefirst:1, metalburst:1, mirrorcoat:1, struggle:1, thief:1, speedpaint:1, pilfer:1,
				};
				let move = this.getMoveCopy(decision.move.id);
				if (!noMeFirst[move]) {
					this.useMove(move, pokemon, target);
					return null;
				}
			}
			return false;
		},
		secondary: false,
		pressureTarget: "foeSide",
		target: "normal",
		type: "Normal",
	},
	// Lacuna
	standingfull: {
		accuracy: 100,
		basePower: 75,
		category: "Physical",
		id: "standingfull",
		isNonstandard: true,
		name: "Standing Full",
		pp: 10,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1, punch: 1},
		onTryHit: function (target, source) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "Splash", source);
		},
		onHit: function (target, source) {
			if (!target.hasAbility('shielddust')) {
				if (target.lastDamage > 0 && source.lastAttackedBy && source.lastAttackedBy.thisTurn && source.lastAttackedBy.pokemon === target) {
					if (this.random(100) < 30) {
						target.addVolatile('confusion');
					}
				} else {
					target.addVolatile('confusion');
				}
			}
		},
		target: "normal",
		type: "Fighting",
	},
	// manu 11
	surskitenergy: {
		accuracy: 95,
		basePower: 130,
		category: "Special",
		id: "surskitenergy",
		isViable: true,
		isNonstandard: true,
		name: "Surskit Energy",
		pp: 5,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		onEffectiveness: function (typeMod, type) {
			return typeMod + this.getEffectiveness('Bug', type);
		},
		onPrepareHit: function (target, source) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "Rototiller", target);
			this.add('-anim', source, "Origin Pulse", target);
		},
		secondary: {
			chance: 100,
			sideCondition: 'stickyweb',
		},
		target: "normal",
		type: "Water",
	},
	// Dream Eater Gengar
	sweetdreams: {
		accuracy: 90,
		basePower: 0,
		category: "Status",
		id: "sweetdreams",
		isViable: true,
		isNonstandard: true,
		name: "Sweet Dreams",
		pp: 25,
		priority: 0,
		flags: {reflectable: 1, protect: 1, mirror: 1},
		onPrepareHit: function (target, source) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "Dark Void", target);
		},
		onHit: function (target, source) {
			// TODO: Clarify the logic of the move with OP
			let highcost = false;
			if (target.status !== 'slp') {
				if (!target.trySetStatus("slp", source)) return false;
				highcost = true;
			} else if (target.volatiles["nightmare"] && target.volatiles["sweetdreams"]) {
				return false;
			}
			this.directDamage(this.modify(source.maxhp, (highcost? 0.5 : 0.25)), source, source);
			target.addVolatile("nightmare");
			target.addVolatile("sweetdreams", source);
		},
		effect: {
			onStart: function (pokemon) {
				if (pokemon.status !== 'slp') {
					return false;
				}
				this.add('-start', pokemon, 'Sweet Dreams');
			},
			onResidualOrder: 8,
			onResidual: function (pokemon) {
				let target = this.effectData.source.side.active[pokemon.volatiles['sweetdreams'].sourcePosition];
				if (!target || target.fainted || target.hp <= 0) {
					return;
				}
				let damage = this.damage(pokemon.maxhp / 8, pokemon, target);
				if (damage) {
					this.heal(damage, target, pokemon);
				}
			},
			onUpdate: function (pokemon) {
				if (pokemon.status !== 'slp') {
					pokemon.removeVolatile('sweetdreams');
					this.add('-end', pokemon, 'Sweet Dreams', '[silent]');
				}
			},
		},
		secondary: {
			chance: 100,
			self: {
				boosts: {def: -1, spd: -1},
			},
		},
		target: "normal",
		type: "Ghost",
	},
	// imas234
	sweg: {
		accuracy: 100,
		basePower: 90,
		category: "Special",
		id: "sweg",
		isViable: true,
		isNonstandard: true,
		name: "Sweg",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		onPrepareHit: function (target, source) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "Roar of Time", target);
		},
		onHit: function (target, source) {
			this.boost({atk:2}, target, source);
			target.addVolatile('confusion', source);
		},
		secondary: {
			chance: 30,
			status: 'par',
		},
		target: "normal",
		type: "Dragon",
	},
	// Iyarito
	tomalawey: {
		accuracy: true,
		basePower: 0,
		id: "tomalawey",
		isViable: true,
		isNonstandard: true,
		name: "Tomala wey",
		pp: 5,
		noPPBoosts: true,
		priority: 4,
		flags: {},
		stallingMove: true,
		volatileStatus: 'protect',
		onPrepareHit: function (pokemon) {
			return !!this.willAct() && this.runEvent('StallMove', pokemon);
		},
		onHit: function (pokemon) {
			pokemon.addVolatile('stall');
		},
		boosts: {
			spa: 1,
			spd: 1,
			spe: 1,
		},
		secondary: false,
		target: "self",
		type: "Ground",
	},
	// Vapo
	wetwork: {
		accuracy: true,
		basePower: 0,
		category: "Status",
		id: "wetwork",
		isViable: true,
		isNonstandard: true,
		name: "Wetwork",
		pp: 10,
		priority: -7,
		flags: {heal: 1, mirror: 1},
		onPrepareHit: function (target, source) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "Water Pulse", target);
		},
		onHit: function (target, source) {
			let moved = false;
			if (!this.pseudoWeather['trickroom']) {
				this.addPseudoWeather('trickroom', source);
				moved = true;
			}
			if (source.maxhp !== source.hp) {
				this.heal(this.modify(target.maxhp, 0.5), target, source);
				moved = true;
			}
			if (!moved) return false;
		},
		secondary: false,
		target: "self",
		type: "Water",
	},
	// Solaris Fox
	wonderbark: {
		accuracy: true,
		basePower: 0,
		category: "Status",
		id: "wonderbark",
		isNonstandard: true,
		name: "Wonder Bark",
		pp: 1,
		noPPBoosts: true,
		priority: 3,
		flags: {reflectable: 1, sound: 1, authentic: 1},
		volatileStatus: 'flinch',
		onPrepareHit: function (target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "Cosmic Power", target);
			this.add('-anim', source, "Hyper Voice", source);
		},
		onHit: function (pokemon, source) {
			this.add('-message', 'You hear a sound echo across the universe. Things seem different now.');
			let newMoves = ['boomburst', 'flamethrower', 'freezedry', 'thunderbolt', 'steameruption', 'gigadrain', 'bugbuzz',
				'darkpulse', 'psychic', 'shadowball', 'flashcannon', 'dragonpulse', 'moonblast', 'focusblast', 'aeroblast',
				'earthpower', 'sludgebomb', 'paleowave', 'bodyslam', 'flareblitz', 'iciclecrash', 'volttackle', 'waterfall',
				'leafblade', 'xscissor', 'knockoff', 'shadowforce', 'ironhead', 'outrage', 'playrough', 'closecombat',
				'bravebird', 'earthquake', 'stoneedge', 'extremespeed', 'stealthrock', 'spikes', 'toxicspikes', 'stickyweb',
				'quiverdance', 'shellsmash', 'dragondance', 'recover', 'toxic', 'willowisp', 'leechseed',
			].randomize();
			for (let i = 0; i < pokemon.moveset.length; i++) {
				let moveData = Tools.getMove(newMoves[i]);
				let moveBuffer = {
					move: moveData.name,
					id: moveData.id,
					pp: moveData.pp,
					maxpp: moveData.pp,
					target: moveData.target,
					disabled: false,
					used: false,
				};
				pokemon.moveset[i] = moveBuffer;
				pokemon.baseMoveset[i] = moveBuffer;
				pokemon.moves[i] = toId(moveData.name);
			}
		},
		secondary: false,
		target: "normal",
		type: "Dark",
	},
	// Frysinger
	zapconfirmed: {
		accuracy: 100,
		basePower: 15,
		category: "Special",
		id: "zapconfirmed",
		isViable: true,
		isNonstandard: true,
		name: "ZAP Confirmed",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		multihit: 7,
		onTryHit: function (target, source) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "Charge Beam", target);
		},
		secondary: {
			chance: 30,
			status: 'par',
		},
		target: "normal",
		type: "Electric",
	},
};
