"use strict";

exports.BattleScripts = {
	randomSeasonalMeleeTeam: function (side) {
		let team = [];
		let variant = (this.random(2) === 1);
		let sets = {
			/*'Ace': {
				species: '', ability: '', item: '', gender: '',
				moves: [],
				signatureMove: '',
				evs: {}, nature: '',
			},*/
			'Aelita': {
				species: 'Porygon-Z', ability: 'Protean', item: 'Life Orb', gender: 'N',
				moves: [['boomburst', 'moonblast'][this.random(2)], 'quiverdance', 'chatter'],
				signatureMove: "Energy Field",
				evs: {hp:4, spa:252, spe:252}, nature: 'Modest',
			},
			'ajhockeystar': {
				species: 'Mienshao', ability: 'Magic Guard', item: 'Life Orb', gender: 'M',
				moves: ['knockoff', 'boltstrike', 'highjumpkick'],
				signatureMove: 'OH CANADA',
				evs: {hp:4, atk:252, spe:252}, nature: 'Jolly',
			},
			/*'Albacore': {
				species: '', ability: '', item: '', gender: '',
				moves: [],
				signatureMove: '',
				evs: {}, nature: '',
			},*/
			'AM': {
				species: 'Tyranitar', ability: 'Adaptability', item: (variant ? 'Lum Berry' : 'Choice Scarf'), gender: 'M',
				moves: (variant ? ['earthquake', 'diamondstorm', 'swordsdance', 'meanlook'] : ['knockoff', 'diamondstorm', 'earthquake']),
				signatureMove: "Predator",
				evs: {atk:252, def:4, spe: 252}, nature: 'Jolly',
			},
			/*'Andrew Goncel': {
				species: '', ability: '', item: '', gender: '',
				moves: [],
				signatureMove: 'Energy Field',
				evs: {}, nature: '',
			},*/
			/*'Antemortem': {
				species: '', ability: '', item: '', gender: '',
				moves: [],
				signatureMove: '',
				evs: {}, nature: '',
			},*/
			/*'Anty': {
				species: '', ability: '', item: '', gender: '',
				moves: [],
				signatureMove: '',
				evs: {}, nature: '',
			},*/
			'Aurora': {
				species: 'Landorus', ability: 'Sand Force', item: 'Life Orb', gender: 'F',
				moves: ['earthquake', 'rockslide', 'rockpolish'],
				signatureMove: "Aerial Fury",
				evs: {atk: 252, def: 4, spe: 252}, nature: 'Jolly',
			},
			/*'Articuno': {
				species: 'Articuno', ability: 'Magic Guard', item: 'Sitrus Berry', gender: 'F',
				moves: ['roost', 'calmmind', ['psychic', 'airslash', 'icebeam', 'thunderwave'][this.random(4)]],
				signatureMove: "True Support",
				evs: {hp:252, def:192, spa:64}, nature: 'Modest',
			},*/
			/*'ascriptmaster': {
				species: '', ability: '', item: '', gender: '',
				moves: [],
				signatureMove: '',
				evs: {}, nature: '',
			},*/
			/*'astara': {
				species: '', ability: '', item: '', gender: '',
				moves: [],
				signatureMove: '',
				evs: {}, nature: '',
			},*/
			/*'atomicllamas': {
				species: '', ability: '', item: '', gender: '',
				moves: [],
				signatureMove: '',
				evs: {}, nature: '',
			},*/
			/*'aurora': {
				species: '', ability: '', item: '', gender: '',
				moves: [],
				signatureMove: '',
				evs: {}, nature: '',
			},*/
			'awu': {
				species: 'Mawile', ability: 'Adaptability', item: 'Expert Belt', gender: 'F',
				moves: ['meteormash', 'bulletpunch', 'uturn'],
				signatureMove: "Ancestor's Rage",
				evs: {hp:252, atk:252, def:4}, nature: 'Adamant',
			},
			/*'beotrump': {
				species: '', ability: '', item: '', gender: '',
				moves: [],
				signatureMove: '',
				evs: {}, nature: '',
			},*/
			'biggie': {
				species: 'Snorlax', ability: 'Fur Coat', item: 'Leftovers', gender: 'M',
				moves: ['drainpunch', 'diamondstorm', 'kingsshield', 'knockoff', 'precipiceblades'],
				signatureMove: "Food Rush",
				evs: {hp:4, atk:252, spd:252}, nature: 'Adamant',
			},
			'Blast Chance': {
				species: 'Malamar', ability: 'Contrary', item: 'Leftovers', gender: ['M', 'F', 'N'][this.random(3)],
				moves: ['knockoff', 'rest', 'superpower'],
				signatureMove: "Doesn\'t this just win?",
				evs: {hp:252, def:4, spd:252}, nature: 'Careful',
			},
			/*'blitzamirin': {
				species: '', ability: '', item: '', gender: '',
				moves: [],
				signatureMove: '',
				evs: {}, nature: '',
			},*/
			'boTTT': {
				species: 'Regigigas', ability: ['Scrappy', 'Magic Guard'][this.random(2)], item: (variant ? 'Leftovers' : 'Chesto Berry'), gender: 'N', shiny: variant,
				moves: ['megapunch', 'drainpunch', (variant ? 'aromatherapy' : 'rest')],
				signatureMove: "Auto-Moderation",
				evs: {hp:60, atk:252, spd:196}, nature: 'Adamant',
			},
			'bumbadadabum': {
				species: 'Samurott', ability: 'Analytic', item: 'Leftovers', gender: 'M',
				moves: ['calmmind', 'originpulse', 'icebeam'],
				signatureMove: "Free Software",
				evs: {hp:252, spa:252, spd:4}, nature: 'Modest',
			},
			'Bummer': {
				species: 'Quagsire', ability: 'Trace', item: 'Leftovers', gender: 'M',
				moves: ['earthquake', 'icebeam', 'recover'],
				signatureMove: "Speedpaint",
				evs: {hp:252, atk:252, spa:4}, nature: 'Docile',
			},
			/*'chaos': {
				species: '', ability: '', item: '', gender: '',
				moves: [],
				signatureMove: '',
				evs: {}, nature: '',
			},*/
			/*'CoolStoryBrobat': {
				species: '', ability: '', item: '', gender: '',
				moves: [],
				signatureMove: '',
				evs: {}, nature: '',
			},*/
			'Crestfall': {
				species: 'Diancie', ability: 'Shield Dust', item: 'Diancite',
				moves: ['shellsmash', 'diamondstorm', 'earthpower'],
				signatureMove: "Light of Unruin",
				evs: {hp:252, spd: 68, spe:188}, nature: 'Timid',
			},
			/*'Duck': {
				species: '', ability: '', item: '', gender: '',
				moves: [],
				signatureMove: '',
				evs: {}, nature: '',
			},*/
			'Eevee General': {
				species: 'Eevee', ability: 'Prankster', item: 'Eviolite', gender: 'M',
				moves: ['extremespeed', 'swordsdance', ['milkdrink', 'knockoff', 'encore'][this.random(3)]],
				signatureMove: "Admin Things",
				evs: {hp:252, def:4, spe: 252}, nature: 'Jolly',
			},
			/*'Eyan': {
				species: '', ability: '', item: '', gender: '',
				moves: [],
				signatureMove: '',
				evs: {}, nature: '',
			},*/
			'Flying Kebab': {
				species: 'Cloyster', ability: 'Skill Link', item: 'White Herb', gender: 'M',
				moves: ['watershuriken', 'bulletseed', 'shellsmash'],
				signatureMove: "Frozen Kebab Skewers",
				evs: {atk:252, spd:4, spe:252}, nature: 'Jolly',
			},
			/*'Former Hope': {
				species: '', ability: '', item: '', gender: '',
				moves: [],
				signatureMove: '',
				evs: {}, nature: '',
			},*/
			/*'Freeroamer': {
				species: '', ability: '', item: '', gender: '',
				moves: [],
				signatureMove: '',
				evs: {}, nature: '',
			},*/
			'f(x)': {
				species: 'Rotom-Heat', ability: 'Levitate', item: 'Leftovers', shiny: true, gender: 'F',
				moves: ['voltswitch', 'fusionflare', 'thunderbolt'],
				signatureMove: "shake that brass",
				evs: {hp:252, spa:252, spe:4}, nature: 'Modest',
			},
			'galbia': {
				species: 'Stoutland', ability: 'Sand Rush', item: 'Life Orb', gender: 'M',
				moves: [['closecombat', 'earthquake'][this.random(2)], 'firefang', 'extremespeed'],
				signatureMove: "(dog)",
				evs: {atk:252, spe:252}, nature: 'Adamant',
			},
			'Gangnam Style': {
				species: 'Munchlax', ability: 'Run Away', item: 'Eviolite', gender: 'M',
				moves: ['geomancy', 'drainpunch', 'bodyslam'],
				signatureMove: "Mother, Father, Gentleman",
				evs: {hp:252, atk:252, def:4}, nature: 'Adamant',
			},
			/*'Geoff Bruedly': {
				species: '', ability: '', item: '', gender: '',
				moves: [],
				signatureMove: '',
				evs: {}, nature: '',
			},*/
			/*'Grim Auxiliatrix': {
				species: '', ability: '', item: '', gender: '',
				moves: [],
				signatureMove: '',
				evs: {}, nature: '',
			},*/
			'Hashtag': {
				species: 'Ursaring', ability: 'Scrappy', item: 'Choice Band', gender: 'M',
				moves: ['earthquake', 'explosion', 'u-turn'],
				signatureMove: "GOTTA GO STRATS",
				evs: {hp:4, atk:252, spe:252}, nature: 'Adamant',
			},
			'Haund': {
				species: 'Swellow', ability: 'Guts', item: 'Toxic Orb', gender: 'M',
				moves: ['boomburst', 'heatwave', 'ominouswind'],
				signatureMove: "Psychokinesis",
				evs: {atk:252, def:4, spe:252}, nature: 'Jolly',
			},
			/*'HiMyNamesL': {
				species: '', ability: '', item: '', gender: '',
				moves: [],
				signatureMove: '',
				evs: {}, nature: '',
			},*/
			'Hippopotas': {
				species: 'Hippopotas', ability: 'Regenerator', item: 'Eviolite', gender: 'M',
				moves: ['protect', 'stealthrock', 'spikes', 'toxicspikes', 'stickyweb'],
				signatureMove: "Hazard Pass",
				evs: {hp:252, def:252, spd:4}, ivs: {atk:0, spa:0}, nature: 'Bold',
			},
			/*'hollywood': {
				species: '', ability: '', item: '', gender: '',
				moves: [],
				signatureMove: '',
				evs: {}, nature: '',
			},*/
			'ih8ih8sn0w': {
				species: 'Deoxys-Speed', ability: 'Pressure', item: 'Leftovers', gender: 'N', shiny: true,
				moves: ['meteormash', 'stealthrock', (variant ? 'taunt' : 'magiccoat')],
				signatureMove: "Imprisonform",
				evs: {atk:252, spd:4, spe:252}, nature: 'Jolly',
			},
			/*'imanalt': {
				species: '', ability: '', item: '', gender: '',
				moves: [],
				signatureMove: '',
				evs: {}, nature: '',
			},*/
			/*'imas234': {
				species: '', ability: '', item: '', gender: '',
				moves: [],
				signatureMove: '',
				evs: {}, nature: '',
			},*/
			/*'innovamania': {
				species: '', ability: '', item: '', gender: '',
				moves: [],
				signatureMove: '',
				evs: {}, nature: '',
			},*/
			'Jasmine': {
				species: 'Mew', ability: 'Speed Boost', item: 'Focus Sash', gender: 'F',
				moves: ['taunt', 'explosion', 'protect'],
				signatureMove: "Reverse Transform",
				evs: {hp:84, atk:84, def:84, spa:84, spd:84, spe:84}, nature: 'Quirky',
			},
			/*'jdarden': {
				species: '', ability: '', item: '', gender: '',
				moves: [],
				signatureMove: '',
				evs: {}, nature: '',
			},*/
			'Joim': {
				species: 'Zapdos', ability: 'Tinted Lens', item: 'Life Orb', gender: 'M', shiny: true,
				moves: ['thunderbolt', 'hurricane', 'quiverdance'],
				signatureMove: "Gaster Blaster",
				evs: {hp:4, spa:252, spe:252}, nature: 'Modest',
			},
			'Lacuna': {
				species: 'Gallade', ability: 'Defiant', item: 'Fighting Gem', gender: 'M',
				moves: ['thunderwave', 'agility', 'zenheadbutt'],
				signatureMove: "Standing Full",
				evs: {atk:252, def:4, spe:252}, nature: 'Jolly',
			},
			/*'layell': {
				species: '', ability: '', item: '', gender: '',
				moves: [],
				signatureMove: '',
				evs: {}, nature: '',
			},*/
			'LegitimateUsername': {
				species: 'Shuckle', ability: 'Unaware', item: 'Leftovers', gender: 'M',
				moves: ['leechseed', 'rest', 'foulplay'],
				signatureMove: "Shell Fortress",
				evs: {hp:252, def:228, spd:28}, nature: 'Calm',
			},
			'Level 51': {
				species: 'Togekiss', ability: 'Parental Bond', item: 'Leftovers', gender: 'M',
				moves: ['superfang', ['roost', 'cottonguard'][this.random(2)], ['seismictoss', 'nightshade'][this.random(2)]],
				baseSignatureMove: 'trumpcard', signatureMove: "Next Level Strats",
				evs: {hp:252, spd:196, spe:60}, nature: 'Calm',
			},
			'LJ': {
				species: 'Giratina-Origin', ability: 'Levitate', item: 'Griseous Orb', gender: 'M',
				moves: ['dragondance', 'substitute', 'playrough'],
				signatureMove: "Chaos Wheel",
				evs: {atk:252, def:4, spe:252}, nature: 'Jolly',
			},
			/*'lyto': {
				species: '', ability: '', item: '', gender: '',
				moves: [],
				signatureMove: '',
				evs: {}, nature: '',
			},*/
			'm00ns': {
				species: 'Wobbuffet', ability: 'Shadow Tag', item: 'Leftovers', gender: 'F',
				moves: ['counter', 'mirrorcoat', 'encore'],
				signatureMove: "oh",
				evs: {hp:52, def:232, spd:224}, ivs: {atk:0}, nature: 'Bold',
			},
			'macle': {
				species: 'Greninja', ability: 'Protean', item: 'Life Orb', gender: 'M',
				moves: ['closecombat', 'vcreate', 'steameruption'],
				signatureMove: "Ribbit",
				evs: {atk:252, spa:252, spe:252}, nature: 'Lonely',
			},
			/*'manu11': {
				species: '', ability: '', item: '', gender: '',
				moves: [],
				signatureMove: '',
				evs: {}, nature: '',
			},*/
			/*'Marshmallon': {
				species: '', ability: '', item: '', gender: '',
				moves: [],
				signatureMove: '',
				evs: {}, nature: '',
			},*/
			'MattL': {
				species: 'Swampert', ability: 'Gravitational Field', item: 'Swampertite', gender: 'M',
				moves: ['raindance', 'earthquake', 'icepunch'],
				signatureMove: "Evaporating Surge",
				evs: {atk:252, def: 4, spe:252}, nature: 'Adamant',
			},
			/*'McMeghan': {
				species: '', ability: '', item: '', gender: '',
				moves: [],
				signatureMove: '',
				evs: {}, nature: '',
			},*/
			/*'Mizuhime': {
				species: '', ability: '', item: '', gender: '',
				moves: [],
				signatureMove: '',
				evs: {}, nature: '',
			},*/
			/*'Phable': {
				species: '', ability: '', item: '', gender: '',
				moves: [],
				signatureMove: '',
				evs: {}, nature: '',
			},*/
			'pluviometer': {
				species: 'Mismagius', ability: 'Levitate', item: 'Life Orb',
				moves: ['painsplit', 'earthpower', 'shadowball'],
				signatureMove: "Grammar Hammer",
				evs: {hp:4, spa:252, spe:252}, ivs: {atk:0}, nature: 'Timid',
			},
			'qtrx': {
				species: 'Unown', ability: 'Sturdy', item: 'Keyboard', gender: 'M',
				moves: [],
				signatureMove: "Hidden Power Normal",
				evs: {hp:252, atk:4, spa:252}, ivs: {spe:0}, nature: 'Quiet',
			},
			'Quite Quiet': {
				species: 'Heliolisk', ability: 'Regenerator', item: 'Life Orb', gender: 'F',
				moves: ['stealthrock', 'perishsong', 'nuzzle'],
				signatureMove: "Retreat",
				evs: {def:4, spa:252, spe:252}, nature: 'Timid',
			},
			'Raseri': {
				species: 'Musharna', ability: 'Synchronize', item: 'Leftovers', gender: ['M', 'F', 'N'][this.random(3)],
				moves: ['barrier', 'storedpower', 'moonblast'],
				signatureMove: "Purify Soul",
				evs: {hp:248, def:252, spd:8}, nature: 'Bold',
			},
			/*'Raven': {
				species: '', ability: '', item: '', gender: '',
				moves: [],
				signatureMove: '',
				evs: {}, nature: '',
			},*/
			/*'Rekeri': {
				species: '', ability: '', item: '', gender: '',
				moves: [],
				signatureMove: '',
				evs: {}, nature: '',
			},*/
			/*'RosieTheVenusaur': {
				species: '', ability: '', item: '', gender: '',
				moves: [],
				signatureMove: '',
				evs: {}, nature: '',
			},*/
			/*'Sam': {
				species: '', ability: '', item: '', gender: '',
				moves: [],
				signatureMove: '',
				evs: {}, nature: '',
			},*/
			/*'Scotteh': {
				species: '', ability: '', item: '', gender: '',
				moves: [],
				signatureMove: '',
				evs: {}, nature: '',
			},*/
			'scpinion': {
				species: 'Slowbro', ability: 'Unaware', item: 'Slowbronite',
				moves: ['slackoff', 'amnesia', 'steameruption'],
				signatureMove: "LOL! Room",
				evs: {hp:248, def:136, spd:124}, ivs: {spe:0}, nature: 'Relaxed',
			},
			/*'shrang': {
				species: '', ability: '', item: '', gender: '',
				moves: [],
				signatureMove: '',
				evs: {}, nature: '',
			},*/
			/*'Sigilyph': {
				species: '', ability: '', item: '', gender: '',
				moves: [],
				signatureMove: '',
				evs: {}, nature: '',
			},*/
			/*'sirDonovan': {
				species: '', ability: '', item: '', gender: '',
				moves: [],
				signatureMove: '',
				evs: {}, nature: '',
			},*/
			/*'Skitty': {
				species: '', ability: '', item: '', gender: '',
				moves: [],
				signatureMove: '',
				evs: {}, nature: '',
			},*/
			'SolarisFox': {
				species: 'Delphox', ability: 'Klutz', item: ['Choice Scarf', 'Choice Band', 'Choice Specs', 'Assault Vest', 'Lagging Tail', 'Flame Orb', 'Toxic Orb'].randomize()[0], gender: 'M',
				moves: ['trick', 'lavaplume', 'psyshock'],
				signatureMove: "Wonder Bark",
				evs: {hp:40, spa:216, spe:252}, ivs: {atk:0}, nature: 'Timid',
			},
			'SpaceBass': {
				species: 'Foongus', ability: 'Prankster', item: 'Eviolite', gender: 'M',
				moves: ['batonpass', 'ingrain', 'substitute'],
				signatureMove: "Army of Mushrooms",
				evs: {hp:252, def:128, spd:252}, nature: 'Sassy',
			},
			/*'Spy': {
				species: '', ability: '', item: '', gender: '',
				moves: [],
				signatureMove: '',
				evs: {}, nature: '',
			},*/
			/*'Steamroll': {
				species: '', ability: '', item: '', gender: '',
				moves: [],
				signatureMove: '',
				evs: {}, nature: '',
			},*/
			/*'Sweep': {
				species: '', ability: '', item: '', gender: '',
				moves: [],
				signatureMove: '',
				evs: {}, nature: '',
			},*/
			/*'TemporaryAnonymous': {
				species: '', ability: '', item: '', gender: '',
				moves: [],
				signatureMove: '',
				evs: {}, nature: '',
			},*/
			'The Immortal': {
				species: 'Blastoise', ability: 'Magic Bounce', item: 'Blastoisinite', gender: 'M',
				moves: ['shellsmash', 'steameruption', 'dragontail'],
				signatureMove: "Sleep Walk",
				evs: {hp:252, def:4, spd:252}, nature: 'Sassy',
			},
			'TONE114': {
				species: 'Clawitzer', ability: 'Mega Launcher', item: 'Life Orb', gender: 'M',
				moves: ['icebeam', 'darkpulse', 'aurasphere'],
				signatureMove: "Desolation Pulse",
				evs: {spa:252, spd:4, spe:252}, nature: 'Modest',
			},
			'Trickster': {
				species: 'Whimsicott', ability: 'Illuminate', item: 'Quick Claw', gender: 'M',
				moves: ['substitute', 'sing', 'gigadrain'],
				signatureMove: "Sacred Spear Explosion",
				evs: {hp:252, def:4, spe:252}, nature: 'Timid',
			},
			/*'urkerab': {
				species: '', ability: '', item: '', gender: '',
				moves: [],
				signatureMove: '',
				evs: {}, nature: '',
			},*/
			/*'Winry': {
				species: '', ability: '', item: '', gender: '',
				moves: [],
				signatureMove: '',
				evs: {}, nature: '',
			},*/
			'xfix': {
				species: 'Xatu', ability: 'Magic Bounce', item: 'Focus Sash', gender: 'M',
				moves: ['substitute', 'thunderwave', 'roost'],
				signatureMove: '(Glitch Dimension)',
				evs: {hp:252, spd:252, def:4}, nature: 'Calm',
			},
			'xShiba': {
				species: 'Fletchinder', ability: 'Gale Wings', item: 'Eviolite', gender: 'F',
				moves: ['dragonascent', 'sacredfire', 'roost'],
				signatureMove: "Go Inda Like Linda",
				evs: {hp:248, atk:252, spe:8}, nature: 'Adamant',
			},
			/*'Zarel': {
				species: '', ability: '', item: '', gender: '',
				moves: [],
				signatureMove: '',
				evs: {}, nature: '',
			},*/
			/*'Zebraiken': {
				species: '', ability: '', item: '', gender: '',
				moves: [],
				signatureMove: '',
				evs: {}, nature: '',
			},*/
		};

		/**
			No (ex-) staff mons to add:
			Dream Eater Gengar
			Anttya
			Jetpack
			Scyther NO Swiping
			Megazard
			Shiba
			Zero Lux Given
			Ksh13
			Pikachuun
			Giagantic
			Starmei
			Snowy
			Sonired
			iplaytennislol
			Bondie
			Death on Wings
			Dirpz
			Vapo
			teremiare
			SpecsMegaBeedrill
			Omega-Xis
			jackhiggins138
			Golui
			Alaitz
			nv
			Ciran
			Snobalt
			Clefairy
			Vexen4th
			Eeveelution Lover
			xJoelituh
			unfixable
			Hannahh
			rssp1
			Acast
			Kalalokki
			bludz
			E4 Flint
			Sailor Cosmos
			ih8ih8sn0w
			ajhockeystar
			Sunfished
			Lemonade
			soulgazer
			Flying Kebab
			Magnemite
			pluviometer
			Frysinger
			Galom
			Overneat
			DMT
			Iyarito
			Fireburn
			Hashtag
			sparktrain (no set)
			Always
			Champion Albert
			Blast
			Haund
			macle
			talkingtree
			GoodMorningEspeon
			HeaLnDeaL
			sparktrain
			Kid Wizard (extra, Joim will do this one)
			Juanma (extra, Joim will do this one)
		**/

		// Generate the team randomly.
		let pool = Object.keys(sets).randomize();
		for (let i = 0; i < 6; i++) {
			let set = sets[pool[i]];
			set.level = 100;
			set.name = pool[i];
			if (!set.ivs) {
				set.ivs = {hp:31, atk:31, def:31, spa:31, spd:31, spe:31};
			} else {
				for (let iv in {hp:31, atk:31, def:31, spa:31, spd:31, spe:31}) {
					set.ivs[iv] = set.ivs[iv] ? set.ivs[iv] : 31;
				}
			}
			// Assuming the hardcoded set evs are all legal.
			if (!set.evs) set.evs = {hp:84, atk:84, def:84, spa:84, spd:84, spe:84};
			set.moves = set.moves.sample(3).concat(set.signatureMove);
			team.push(set);
		}

		return team;
	},
};
