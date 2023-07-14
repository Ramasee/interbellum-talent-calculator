import { TalentData } from "../../TalentContext";
import { talentText, requireAll } from "../../utils";

const backgrounds = requireAll(
  require.context("../../assets/tree-backgrounds/dwarf"),
);
const icons = requireAll(require.context("../../assets/icons/dwarf"));

export const data: TalentData = {
  "Ironbreaker": {
    name: "Ironbreaker",
    background: backgrounds["ironbreaker"],
    icon: icons["archetype_tank"],
    talents: {
      "Masochist": {
        name: "Masochist",
        pos: "a8",
        icon: icons["rrtac_masochist"],
        maxRank: 1,
        reqPoints: 25,
        type: "renown tactic",
        description: talentText`Whenever you are attacked while your Guard is active, you will gain 15 adrenaline per second for 3 seconds.`,
      },
      "Agility": {
        name: "Agility",
        pos: "d5",
        icon: icons["stat_agl"],
        maxRank: 2,
        reqPoints: 10,
        type: "passive",
        description: talentText`Increases your Agility by ${[
          100,
          185,
          255,
          310,
          350,
        ]}.`,
      },
      "Ballistic Skill": {
        name: "Ballistic Skill",
        pos: "d4",
        icon: icons["stat_bal"],
        maxRank: 2,
        reqPoints: 5,
        type: "passive",
        description: talentText`Increases your Ballistic Skill by ${[
          100,
          185,
          255,
          310,
          350,
        ]}.`,
      },
      "Initiative": {
        name: "Initiative",
        pos: "c3",
        icon: icons["stat_ini"],
        maxRank: 2,
        reqPoints: 0,
        type: "passive",
        description: talentText`Increases your Initiative by ${[
          100,
          185,
          255,
          310,
          350,
        ]}.`,
      },
      "Intelligence": {
        name: "Intelligence",
        pos: "f4",
        icon: icons["stat_int"],
        maxRank: 2,
        reqPoints: 5,
        type: "passive",
        description: talentText`Increases your Intelligence by ${[
          100,
          185,
          255,
          310,
          350,
        ]}.`,
      },
      "Strength": {
        name: "Strength",
        pos: "e4",
        icon: icons["stat_str"],
        maxRank: 3,
        reqPoints: 5,
        type: "passive",
        description: talentText`Increases your Strength by ${[
          100,
          185,
          255,
          310,
          350,
        ]}.`,
      },
      "Toughness": {
        name: "Toughness",
        pos: "d3",
        icon: icons["stat_tou"],
        maxRank: 5,
        reqPoints: 0,
        type: "passive",
        description: talentText`Increases your Toughness by ${[
          100,
          185,
          255,
          310,
          350,
        ]}.`,
      },
      "Willpower": {
        name: "Willpower",
        pos: "g3",
        icon: icons["stat_wil"],
        maxRank: 3,
        reqPoints: 0,
        type: "passive",
        description: talentText`Increases your Willpower by ${[
          100,
          185,
          255,
          310,
          350,
        ]}.`,
      },
      "Wounds": {
        name: "Wounds",
        pos: "f5",
        icon: icons["stat_wou"],
        maxRank: 3,
        reqPoints: 10,
        type: "passive",
        description: talentText`Increases your Wounds by ${[
          100,
          185,
          255,
          310,
          350,
        ]}.`,
      },
      "Weapon Skill": {
        name: "Weapon Skill",
        pos: "f3",
        icon: icons["stat_ws"],
        maxRank: 3,
        reqPoints: 0,
        type: "passive",
        description: talentText`Increases your Weapon Skill by ${[
          100,
          185,
          255,
          310,
          350,
        ]}.`,
      },
      "Stabilized": {
        name: "Stabilized",
        pos: "a4",
        icon: icons["tac_arche"],
        maxRank: 1,
        reqPoints: 5,
        type: "career tactic",
        description: talentText`Increase your mass by 1.`,
      },
      "Ancestral Inheritance": {
        name: "Ancestral Inheritance",
        pos: "a2",
        icon: icons["tac_race_dwarf"],
        maxRank: 0,
        reqPoints: 0,
        type: "career tactic",
        description: talentText`You are immune to effects that apply stacks of Reduced Armor.`,
      },
      "Stoutness of Stone": {
        name: "Soutness of Stone",
        pos: "b2",
        icon: icons["tac_race_dwarf"],
        maxRank: 0,
        reqPoints: 0,
        type: "career tactic",
        description: talentText`Your mass is increased by 1.`,
      },
      "Long-Held Grudge": {
        name: "Long-Held Grudge",
        pos: "c2",
        icon: icons["tac_class_1"],
        maxRank: 0,
        reqPoints: 0,
        type: "career tactic",
        description: talentText`Your maximum Grudge amount is increased by 50.`,
      },
      "Heavy Burden": {
        name: "Heavy Burden",
        pos: "d2",
        icon: icons["tac_class_2"],
        maxRank: 0,
        reqPoints: 0,
        type: "career tactic",
        description: talentText`Heavy Blow will now apply a 6 second ailment to the target. They will take 2% MAP + 27 physical damage every second for every 33 Grudge you have.`,
      },
      "Weapon Aptitude": {
        name: "Weapon Aptitude",
        pos: "e2",
        icon: icons["noicon"],
        maxRank: 0,
        reqPoints: 0,
        type: "passive",
        description: talentText`Ironbreakers equip one-handed axes and shields.`,
      },
	  "Hedgehog": {
        name: "Hedgehog",
        pos: "f2",
        icon: icons["morale_hedgehog"],
        maxRank: 0,
        reqPoints: 0,
        type: "morale 1",
        cost: "no cost",
        range: "self",
        cast: "instant cast",
        cooldown: "no cooldown",
        blue: "Costs 360 adrenaline",
        description: talentText`All groupmates within 100 feet gain 3 stacks of Enhanced Block.`,
      },
      "Champion's Challenge": {
        name: "Champion's Chalenge",
        pos: "g2",
        icon: icons["morale_grapple"],
        maxRank: 0,
        reqPoints: 0,
        type: "morale 2",
        cost: "no cost",
        range: "7.5ft range",
        cast: "instant cast",
        cooldown: "no cooldown",
        blue: "Costs 720 adrenaline",
        description: talentText`Applies a debuff to target enemy and yourself for 10 seconds. Movement speed is reduced to 0 for the duration.`,
      },
      "Distracting Bellow": {
        name: "Distracting Bellow",
        pos: "h2",
        icon: icons["morale_distractingbellow"],
        maxRank: 0,
        reqPoints: 0,
        type: "morale 3",
        cost: "no cost",
        range: "self",
        cast: "instant cast",
        cooldown: "no cooldown",
        blue: "Costs 1800 adrenaline",
        description: talentText`Up to 48 enemies within 30ft of you receive a debuff. For 10 seconds, they cannot benefit from Cover.`,
      },
      "Immaculate Defense": {
        name: "Immaculate Defense",
        pos: "i2",
        icon: icons["morale_immaculatedefense"],
        maxRank: 0,
        reqPoints: 0,
        type: "morale 4",
        cost: "no cost",
        range: "self",
        cast: "instant cast",
        cooldown: "no cooldown",
        blue: "Costs 3600 adrenaline",
        description: talentText`Groupmates within 100 feet gain 25 stacks of a buff for 20 seconds. Each stack grants 3% damage reduction. A stack is removed each time they are attacked by an ability; 4 additional stacks are removed if the ability is single target.`,
      },
      "Mountain Spirit": {
        name: "Mountain Spirit",
        pos: "i4",
        icon: icons["morale_mountainspirit"],
        maxRank: 1,
        reqPoints: 5,
        type: "morale 1",
        cost: "no cost",
        range: "self",
        cast: "instant cast",
        cooldown: "no cooldown",
        blue: "Costs 360 adrenaline",
        description: talentText`You gain a buff for 10 seconds that increases armor by 2000.`,
      },
      "Recite the Dammaz Kron": {
        name: "Morale 2 Spec",
        pos: "i5",
        icon: icons["abi_dw_face03"],
        maxRank: 1,
        reqPoints: 10,
        type: "morale 2",
        cost: "no cost",
        range: "self",
        cast: "instant cast",
        cooldown: "no cooldown",
        blue: "Costs 720 adrenaline",
        description: talentText`Gain a buff for 15 seconds. Gain an additional 5 Grudge whenever a groupmate is attacked and deal 13% MAP + 160 ichor damage to the attacker.`,
      },
      "Dwarven Sprint": {
        name: "Dwarven Sprint",
        pos: "i7",
        icon: icons["abi_dw_figure12"],
        maxRank: 1,
        reqPoints: 20,
        type: "morale 3",
        cost: "no cost",
        range: "self",
        cast: "instant cast",
        cooldown: "no cooldown",
        blue: "Costs 1800 adrenaline",
        description: talentText`You gain a buff for 20 seconds. For the duration, you gain 5 mass and 25% movement speed.`,
      },
      "Oathbound": {
        name: "Oathbound",
        pos: "i8",
        icon: icons["abi_dw_oathstone"],
        maxRank: 1,
        reqPoints: 25,
        type: "morale 4",
        cost: "no cost",
        range: "self",
        cast: "instant cast",
        cooldown: "no cooldown",
        blue: "Costs 3600 adrenaline",
        description: talentText`Gain a buff for 30 seconds. For the duration, you gain 1000 restoration power and each time you spend Grudge all groupmates within 100 feet gain a Runic Shield.`,
      },
      "Grudge": {
        name: "Grudge",
        pos: "a1",
        icon: icons["abi_grudge"],
        maxRank: 0,
        reqPoints: 0,
        type: "passive",
        description: talentText`You have a maximum of 100 Grudge. You gain 3 Grudge whenever any groupmate within 100 feet of you is attacked but not when you are attacked.`,
      },
      "Grudging Blow": {
        name: "Grudging Blow",
        pos: "b1",
        icon: icons["abi_dw_melee11"],
        maxRank: 0,
        reqPoints: 0,
        type: "skill",
        cost: "no cost",
        range: "7.5ft range",
        cast: "instant cast",
        cooldown: "no cooldown",
        description: talentText`Deals 110 piercing damage to target enemy. You will generate 3 Grudge.`,
      },
      "Grudge Unleashed": {
        name: "Grudge Unleashed",
        pos: "c1",
        icon: icons["abi_dw_figure02"],
        maxRank: 0,
        reqPoints: 0,
        type: "spell",
        cost: "no cost",
        range: "self",
        cast: "instant cast",
        cooldown: "no cooldown",
        blue: "Costs 25 Grudge",
        description: talentText`You generate 75 action points.`,
      },
	  "Guard": {
        name: "Guard",
        pos: "d1",
        icon: icons["abi_guard"],
        maxRank: 0,
        reqPoints: 0,
        type: "ability",
        cost: "no cost",
        range: "150ft range",
        cast: "instant cast",
        cooldown: "no cooldown",
        description: talentText`Applies Guard to target groupmate. While you are within 30 feet of them, they will gain 50% of you armor, resistances, and block. You will lose these stats for the duration and for 5 seconds after the effect is broken.`,
      },
      "Heavy Blow": {
        name: "Heavy Blow",
        pos: "e1",
        icon: icons["abi_dw_heavyblow"],
        maxRank: 0,
        reqPoints: 0,
        type: "skill",
        cost: "50 action points",
        range: "7.5ft range",
        cast: "instant cast",
        cooldown: "no cooldown",
        description: talentText`Deals 26% + 348 piercing damage to target enemy.`,
      },
      "Binding Grudge": {
        name: "Binding Grudge",
        pos: "f1",
        icon: icons["abi_dw_foot01"],
        maxRank: 0,
        reqPoints: 0,
        type: "skill",
        cost: "no cost",
        range: "7.5ft range",
        cast: "instant cast",
        cooldown: "no cooldown",
        blue: "Costs 25 Grudge",
        description: talentText`Deals 4% MAP + 60 ichor damage to target enemy and applies Ensnared and Momentum to them. Your defensive target and yourself will gain a blessing for 10 seconds. For the duration, gain 20% block chance.\n\nEnsnared reduces movement speed by 30% for 16 seconds.\nMomentum prevents the application of Ensnared for 8 seconds.`,
      },
      "Inspiring Attack": {
        name: "Inspiring Attack",
        pos: "g1",
        icon: icons["abi_dw_oathbound"],
        maxRank: 0,
        reqPoints: 0,
        type: "skill",
        cost: "no cost",
        range: "7.5ft range",
        cast: "instant cast",
        cooldown: "no cooldown",
        blue: "Costs 25 Grudge",
        description: talentText`Deals 17% MAP + 220 piercing damage to target enemy. Your defensive target and yourself will gain 1 stack of Enhanced Ballistic Skill and a blessing for 10 seconds. For the duration, gain 10% critical chance.`,
      },
      "Away With Ye": {
        name: "Away With Ye",
        pos: "h1",
        icon: icons["abi_dw_figure21"],
        maxRank: 0,
        reqPoints: 0,
        type: "skill",
        cost: "50 action points",
        range: "7.5ft range",
        cast: "instant cast",
        cooldown: "10s cooldown",
        description: talentText`Knocks target enemy away from you.`,
      },
      "Runic Shield": {
        name: "Runic Shield",
        pos: "i1",
        icon: icons["abi_dw_melee19"],
        maxRank: 0,
        reqPoints: 0,
        type: "spell",
        cost: "no cost",
        range: "self",
        cast: "instant cast",
        cooldown: "no cooldown",
        blue: "Costs 40 Grudge",
        description: talentText`Your defensive target and yourself gain a blessing for 10 seconds. You will absorb damage equal to 31% RP + 409 for the duration.`,
      },
	  "Fire Bomb": {
        name: "Fire Bomb",
        pos: "h4",
        icon: icons["abi_firebomb"],
        maxRank: 1,
        reqPoints: 5,
        prereq: "Cavern Fighting",
        arrows: [{ dir: "right", from: "g4", to: "h4" }],
        type: "skill",
        cost: "no cost",
        range: "65ft range",
        cast: "instant cast",
        cooldown: "no cooldown",
        blue: "Costs 1 grenade",
        description: talentText`Deals 11% RAP + 140 corporeal damage to up to 3 enemies within a 20ft area you select.`,
      },
	  "Flashbang Grenade": {
        name: "Flashbang Grenade",
        pos: "g5",
        icon: icons["abi_flashbangg"],
        maxRank: 1,
        reqPoints: 10,
        prereq: "Cavern Fighting",
        arrows: [{ dir: "down", from: "g4", to: "g5" }],
        type: "skill",
        cost: "no cost",
        range: "65ft range",
        cast: "instant cast",
        cooldown: "10s cooldown",
        blue: "Costs 1 grenade",
        description: talentText`Jams target enemy interrupting the next ability cast within 3 seconds.`,
      },
	  "Cave-In": {
        name: "Cave-In",
        pos: "c6",
        icon: icons["abi_dw_figure15"],
        maxRank: 1,
        reqPoints: 15,
        type: "skill",
        cost: "60 action points",
        range: "7.5ft range",
        cast: "instant cast",
        cooldown: "20s cooldown",
        description: talentText`Applies Knocked-down and Unstoppable to target enemy.\n\nKnocked-down prevents all control of your character for 3 seconds.\nUnstoppable prevents the application of Knocked-down and Staggered for 30 seconds.`,
      },
	  "Shield Sweep": {
        name: "Shield Sweep",
        pos: "g8",
        icon: icons["abi_dw_guardedattack"],
        maxRank: 1,
        reqPoints: 25,
        type: "skill",
        cost: "no cost",
        range: "self",
        cast: "instant cast",
        cooldown: "no cooldown",
        blue: "Costs 35 Grudge",
        description: talentText`Deals 12% MAP + 170 impact damage to up to 9 enemies within 30ft in front of you.`,
      },
      "Skin of Iron": {
        name: "Skin of Iron",
        pos: "d9",
        icon: icons["abi_dw_skinofiron"],
        maxRank: 1,
        reqPoints: 30,
        type: "spell",
        cost: "no cost",
        range: "100ft range",
        cast: "instant cast",
        cooldown: "no cooldown",
        blue: "Costs 30 Grudge",
        description: talentText`Your defensive target and yourself gain a blessing for 10 seconds. For the duration, you will gain 1500 armor.`,
      },
      "Grip of Stone": {
        name: "Grip of Stone",
        pos: "f9",
        icon: icons["abi_dw_gripofstone"],
        maxRank: 1,
        reqPoints: 30,
        type: "spell",
        cost: "150 action points",
        range: "self",
        cast: "1.0s cast",
        cooldown: "30s cooldown",
        description: talentText`Up to 48 enemies within 30 feet of you have their movement speed reduced by 90% for 3 seconds. Does not effect target that have Cover from you.`,
      },
	  "Alone but not Afraid": {
        name: "Alone but not Afraid",
        pos: "a5",
        icon: icons["tac_spec_2"],
        maxRank: 1,
        reqPoints: 10,
        type: "career tactic",
        description: talentText`You generate 6 Grudge whenever you are attacked but 0 when groupmates are attacked. Grudging Blow will generate 3 more Grudge.`,
      },
	  "Gromril Armor": {
        name: "Gromril Armor",
        pos: "c5",
        icon: icons["tac_spec_3"],
        maxRank: 1,
        reqPoints: 10,
        type: "career tactic",
        description: talentText`Whenever you take direct damage, you will gain 2000 armor but lose 20% movement speed for 5 seconds.`,
      },
	  "Oath of Reclamation": {
        name: "Oath of Reclamation",
        pos: "b6",
        icon: icons["tac_spec_7"],
        maxRank: 1,
        reqPoints: 15,
        type: "career tactic",
        description: talentText`You gain Restoration Power equal to 50% of your armor.`,
      },
	  "The Flashiest": {
        name: "The Flashiest",
        pos: "g6",
        icon: icons["tac_spec_6"],
        maxRank: 1,
        reqPoints: 15,
        prereq: "Flashbang Grenade",
        arrows: [{ dir: "down", from: "g5", to: "g6" }],
        type: "career tactic",
        description: talentText`Flashbang Grenade will now affect up to 23 other enemies within 20 feet of the target if they do not have Cover from you.`,
      },
	  "Dwarven Riposte": {
        name: "Dwarven Riposte",
        pos: "a7",
        icon: icons["tac_spec_8"],
        maxRank: 1,
        reqPoints: 20,
        type: "career tactic",
        description: talentText`Whenever you block or dodge an attack, you will gain 30 Grudge. This effect cannot happen more than once every 2 seconds.`,
      },
	  "Punishing Knock": {
        name: "Punishing Knock",
        pos: "d7",
        icon: icons["tac_spec_5"],
        maxRank: 1,
        reqPoints: 20,
        type: "career tactic",
        description: talentText`Inspiring Attack will apply a 10 second cripple on the target. For the duration, target will have -33% outgoing healing.`,
      },
	  "Ancestor Shields": {
        name: "blueprint",
        pos: "b8",
        icon: icons["tac_spec_4"],
        maxRank: 1,
        reqPoints: 25,
        type: "career tactic",
        description: talentText`Whenever you block an attack, you will gain 15% damage reduction for 5 seconds. Shield Sweep costs 10 less Grudge.`,
      },
      "Overprotective": {
        name: "Overprotective",
        pos: "e3",
        icon: icons["abi_grudge"],
        maxRank: 2,
        reqPoints: 0,
        type: "passive",
        description: talentText`As long as you are under 51 Grudge, gain ${[
          1,
          2,
        ]} additional Grudge each time a groupmate is attacked.`,
      },
	  "Improved Grudging Blow": {
        name: "Improved Grudging Blow",
        pos: "c4",
        icon: icons["abi_dw_melee11"],
        maxRank: 1,
        reqPoints: 5,
        type: "passive",
        description: talentText`Grudging Blow will now deal ${[
          4,
          8,
        ]}% MAP additional damage.`,
      },
	  "Cavern Fighting": {
        name: "Cavern Fighting",
        pos: "g4",
        icon: icons["abi_dw_cavein"],
        maxRank: 1,
        reqPoints: 5,
        type: "passive",
        description: talentText`Inspiring attack will now deal 10% more damage and generates 1 grenade for you.`,
      },
	  "Engage": {
        name: "Engage",
        pos: "e5",
        icon: icons["abi_engage"],
        maxRank: 3,
        reqPoints: 10,
        type: "passive",
        description: talentText`Enemies that you deal direct damage to will have their outgoing damage reduced by ${[
          2,
          4,
          6,
        ]}% for 5 seconds.`,
      },
	  "Improved Block": {
        name: "Improved Block",
        pos: "e6",
        icon: icons["archetype_tank"],
        maxRank: 5,
        reqPoints: 15,
        type: "passive",
        description: talentText`Your chance to block is increased by ${[
          2,
          4,
          6,
          8,
          10,
        ]}.`,
      },
	  "Shell Shock": {
        name: "Shell Shock",
        pos: "h6",
        icon: icons["abi_dw_range13"],
        maxRank: 2,
        reqPoints: 15,
        prereq: "Fire Bomb",
        arrows: [{ dir: "down", from: "h4", to: "h6" }],
        type: "passive",
        description: talentText`Enemies you hit with Fire Bomb will receive a 5 second debuff. The next ally to hit them will gain ${[
          10,
          20,
        ]}% RP health.`,
      },
	  "Hold the Line": {
        name: "Hold the Line",
        pos: "e7",
        icon: icons["abi_cover"],
        maxRank: 1,
        reqPoints: 20,
        type: "passive",
        description: talentText`Groupmates within 50 feet behind you have Cover from all enemies up to 100 feet in front of you.\n\nCover reduces the damage of area of effect attacks by 25% in addition to providing immunity to some effects.`,
      },
	  "Band Together": {
        name: "Band Together",
        pos: "f7",
        icon: icons["abi_bandtogether"],
        maxRank: 5,
        reqPoints: 20,
        type: "passive",
        description: talentText`Groupmates within 30 feet of you have their damage reduction increased by ${[
          2,
          4,
          6,
          8,
          10,
        ]}%. This effect is surpressed for 5 seconds whenever you are hit by a single-target ability.`,
      },
	  "Call to Clan": {
        name: "Call to Clan",
        pos: "h8",
        icon: icons["abi_dw_chainhot"],
        maxRank: 4,
        reqPoints: 25,
        type: "passive",
        description: talentText`Binding Grudge, Inspiring Attack, Runic Shield, and Skin of Iron have a ${[
          25,
          50,
          75,
          100,
        ]}% chance to apply 1 stack of Enhanced Hardiness to your defensive target and yourself.`,
      },
    },
  },
  "Hammerer": {
    name: "Hammerer",
    background: backgrounds["hammerer"],
    icon: icons["archetype_dps"],
    talents: {
      "Break Loose": {
        name: "Break Loose",
        pos: "a8",
        icon: icons["rrtac_breakloose"],
        maxRank: 1,
        reqPoints: 25,
        type: "renown tactic",
        description: talentText`Movement skills you use will now remove Ensnared and Rooted from you.`,
      },
      "Agility": {
        name: "Agility",
        pos: "d5",
        icon: icons["stat_agl"],
        maxRank: 1,
        reqPoints: 10,
        type: "passive",
        description: talentText`Increases your Agility by ${[
          100,
          185,
          255,
          310,
          350,
        ]}.`,
      },
      "Ballistic Skill": {
        name: "Ballistic Skill",
        pos: "d4",
        icon: icons["stat_bal"],
        maxRank: 2,
        reqPoints: 5,
        type: "passive",
        description: talentText`Increases your Ballistic Skill by ${[
          100,
          185,
          255,
          310,
          350,
        ]}.`,
      },
      "Initiative": {
        name: "Initiative",
        pos: "c3",
        icon: icons["stat_ini"],
        maxRank: 1,
        reqPoints: 0,
        type: "passive",
        description: talentText`Increases your Initiative by ${[
          100,
          185,
          255,
          310,
          350,
        ]}.`,
      },
      "Intelligence": {
        name: "Intelligence",
        pos: "f4",
        icon: icons["stat_int"],
        maxRank: 3,
        reqPoints: 5,
        type: "passive",
        description: talentText`Increases your Intelligence by ${[
          100,
          185,
          255,
          310,
          350,
        ]}.`,
      },
      "Strength": {
        name: "Strength",
        pos: "e4",
        icon: icons["stat_str"],
        maxRank: 4,
        reqPoints: 5,
        type: "passive",
        description: talentText`Increases your Strength by ${[
          100,
          185,
          255,
          310,
          350,
        ]}.`,
      },
      "Toughness": {
        name: "Toughness",
        pos: "d3",
        icon: icons["stat_tou"],
        maxRank: 4,
        reqPoints: 0,
        type: "passive",
        description: talentText`Increases your Toughness by ${[
          100,
          185,
          255,
          310,
          350,
        ]}.`,
      },
      "Willpower": {
        name: "Willpower",
        pos: "g3",
        icon: icons["stat_wil"],
        maxRank: 3,
        reqPoints: 0,
        type: "passive",
        description: talentText`Increases your Willpower by ${[
          100,
          185,
          255,
          310,
          350,
        ]}.`,
      },
      "Wounds": {
        name: "Wounds",
        pos: "f5",
        icon: icons["stat_wou"],
        maxRank: 3,
        reqPoints: 10,
        type: "passive",
        description: talentText`Increases your Wounds by ${[
          100,
          185,
          255,
          310,
          350,
        ]}.`,
      },
      "Weapon Skill": {
        name: "Weapon Skill",
        pos: "f3",
        icon: icons["stat_ws"],
        maxRank: 4,
        reqPoints: 0,
        type: "passive",
        description: talentText`Increases your Weapon Skill by ${[
          100,
          185,
          255,
          310,
          350,
        ]}.`,
      },
      "Stabilized": {
        name: "Stabilized",
        pos: "a4",
        icon: icons["tac_arche"],
        maxRank: 1,
        reqPoints: 5,
        type: "career tactic",
        description: talentText`Increase your mass by 1.`,
      },
      "Racial Tactic 1": {
        name: "Racial Tactic 1",
        pos: "a2",
        icon: icons["tac_arche"],
        maxRank: 0,
        reqPoints: 0,
        type: "career tactic",
        description: talentText`Text of tactic.`,
      },
      "Racial Tactic 2": {
        name: "Racial Tactic 2",
        pos: "b2",
        icon: icons["tac_arche"],
        maxRank: 0,
        reqPoints: 0,
        type: "career tactic",
        description: talentText`Text of tactic.`,
      },
      "Class Tactic 1": {
        name: "Class Tactic 1",
        pos: "c2",
        icon: icons["tac_arche"],
        maxRank: 0,
        reqPoints: 0,
        type: "career tactic",
        description: talentText`Text of tactic.`,
      },
      "Class Tactic 2": {
        name: "Class Tactic 2",
        pos: "d2",
        icon: icons["tac_arche"],
        maxRank: 0,
        reqPoints: 0,
        type: "career tactic",
        description: talentText`Text of tactic.`,
      },
      "Weapon Aptitude": {
        name: "Weapon Aptitude",
        pos: "e2",
        icon: icons["noicon"],
        maxRank: 0,
        reqPoints: 0,
        type: "passive",
        description: talentText`Specialization is able to equip these weapons.`,
      },
	  "Sever Nerve": {
        name: "Sever Nerve",
        pos: "f2",
        icon: icons["morale_severnerve"],
        maxRank: 0,
        reqPoints: 0,
        type: "morale 1",
        cost: "no cost",
        range: "7.5ft range",
        cast: "instant cast",
        cooldown: "no cooldown",
        blue: "Costs 360 adrenaline",
        description: talentText`Deals 50% MAP + 400 physical damage to the target.`,
      },
      "Broad Swings": {
        name: "Broad Swings",
        pos: "g2",
        icon: icons["morale_broadswings"],
        maxRank: 0,
        reqPoints: 0,
        type: "morale 2",
        cost: "no cost",
        range: "self",
        cast: "instant cast",
        cooldown: "no cooldown",
        blue: "Costs 720 adrenaline",
        description: talentText`You gain a  buff for 10 seconds. Your single target abilities will target two additional enemies within 15ft in front of you.`,
      },
      "Force of Will": {
        name: "Force of Will",
        pos: "h2",
        icon: icons["morale_forceofwill"],
        maxRank: 0,
        reqPoints: 0,
        type: "morale 3",
        cost: "no cost",
        range: "self",
        cast: "instant cast",
        cooldown: "no cooldown",
        blue: "Costs 1800 adrenaline",
        description: talentText`All groupmates within 100ft gain a buff for 10 seconds. Action point costs are reduced by 75% for the duration.`,
      },
      "Frenzied Slaughter": {
        name: "Frenzied Slaughter",
        pos: "i2",
        icon: icons["morale_frenziedslaughter"],
        maxRank: 0,
        reqPoints: 0,
        type: "morale 4",
        cost: "no cost",
        range: "self",
        cast: "instant cast",
        cooldown: "no cooldown",
        blue: "Costs 3600 adrenaline",
        description: talentText`All groupmates within 100ft gain a buff for 15 seconds. +40% outgoing damage and 50% reduced cooldowns for the duration.`,
      },
    },
  },
  "Longbeard": {
    name: "Longbeard",
    background: backgrounds["longbeard"],
    icon: icons["archetype_tank"],
    talents: {
      "Masochist": {
        name: "Masochist",
        pos: "a8",
        icon: icons["rrtac_masochist"],
        maxRank: 1,
        reqPoints: 25,
        type: "renown tactic",
        description: talentText`Whenever you are attacked while your Guard is active, you will gain 15 adrenaline per second for 3 seconds.`,
      },
      "Agility": {
        name: "Agility",
        pos: "d5",
        icon: icons["stat_agl"],
        maxRank: 2,
        reqPoints: 10,
        type: "passive",
        description: talentText`Increases your Agility by ${[
          100,
          185,
          255,
          310,
          350,
        ]}.`,
      },
      "Ballistic Skill": {
        name: "Ballistic Skill",
        pos: "d4",
        icon: icons["stat_bal"],
        maxRank: 2,
        reqPoints: 5,
        type: "passive",
        description: talentText`Increases your Ballistic Skill by ${[
          100,
          185,
          255,
          310,
          350,
        ]}.`,
      },
      "Initiative": {
        name: "Initiative",
        pos: "c3",
        icon: icons["stat_ini"],
        maxRank: 2,
        reqPoints: 0,
        type: "passive",
        description: talentText`Increases your Initiative by ${[
          100,
          185,
          255,
          310,
          350,
        ]}.`,
      },
      "Intelligence": {
        name: "Intelligence",
        pos: "f4",
        icon: icons["stat_int"],
        maxRank: 2,
        reqPoints: 5,
        type: "passive",
        description: talentText`Increases your Intelligence by ${[
          100,
          185,
          255,
          310,
          350,
        ]}.`,
      },
      "Strength": {
        name: "Strength",
        pos: "e4",
        icon: icons["stat_str"],
        maxRank: 3,
        reqPoints: 5,
        type: "passive",
        description: talentText`Increases your Strength by ${[
          100,
          185,
          255,
          310,
          350,
        ]}.`,
      },
      "Toughness": {
        name: "Toughness",
        pos: "d3",
        icon: icons["stat_tou"],
        maxRank: 5,
        reqPoints: 0,
        type: "passive",
        description: talentText`Increases your Toughness by ${[
          100,
          185,
          255,
          310,
          350,
        ]}.`,
      },
      "Willpower": {
        name: "Willpower",
        pos: "g3",
        icon: icons["stat_wil"],
        maxRank: 3,
        reqPoints: 0,
        type: "passive",
        description: talentText`Increases your Willpower by ${[
          100,
          185,
          255,
          310,
          350,
        ]}.`,
      },
      "Wounds": {
        name: "Wounds",
        pos: "f5",
        icon: icons["stat_wou"],
        maxRank: 3,
        reqPoints: 10,
        type: "passive",
        description: talentText`Increases your Wounds by ${[
          100,
          185,
          255,
          310,
          350,
        ]}.`,
      },
      "Weapon Skill": {
        name: "Weapon Skill",
        pos: "f3",
        icon: icons["stat_ws"],
        maxRank: 3,
        reqPoints: 0,
        type: "passive",
        description: talentText`Increases your Weapon Skill by ${[
          100,
          185,
          255,
          310,
          350,
        ]}.`,
      },
      "Stabilized": {
        name: "Stabilized",
        pos: "a4",
        icon: icons["tac_arche"],
        maxRank: 1,
        reqPoints: 5,
        type: "career tactic",
        description: talentText`Increase your mass by 1.`,
      },
      "Racial Tactic 1": {
        name: "Racial Tactic 1",
        pos: "a2",
        icon: icons["tac_arche"],
        maxRank: 0,
        reqPoints: 0,
        type: "career tactic",
        description: talentText`Text of tactic.`,
      },
      "Racial Tactic 2": {
        name: "Racial Tactic 2",
        pos: "b2",
        icon: icons["tac_arche"],
        maxRank: 0,
        reqPoints: 0,
        type: "career tactic",
        description: talentText`Text of tactic.`,
      },
      "Class Tactic 1": {
        name: "Class Tactic 1",
        pos: "c2",
        icon: icons["tac_arche"],
        maxRank: 0,
        reqPoints: 0,
        type: "career tactic",
        description: talentText`Text of tactic.`,
      },
      "Class Tactic 2": {
        name: "Class Tactic 2",
        pos: "d2",
        icon: icons["tac_arche"],
        maxRank: 0,
        reqPoints: 0,
        type: "career tactic",
        description: talentText`Text of tactic.`,
      },
      "Weapon Aptitude": {
        name: "Weapon Aptitude",
        pos: "e2",
        icon: icons["noicon"],
        maxRank: 0,
        reqPoints: 0,
        type: "passive",
        description: talentText`Specialization is able to equip these weapons.`,
      },
	  "Hedgehog": {
        name: "Hedgehog",
        pos: "f2",
        icon: icons["morale_hedgehog"],
        maxRank: 0,
        reqPoints: 0,
        type: "morale 1",
        cost: "no cost",
        range: "self",
        cast: "instant cast",
        cooldown: "no cooldown",
        blue: "Costs 360 adrenaline",
        description: talentText`All groupmates within 100ft gain 3 stacks of Enhanced Block.`,
      },
      "Champion's Challenge": {
        name: "Champion's Chalenge",
        pos: "g2",
        icon: icons["morale_grapple"],
        maxRank: 0,
        reqPoints: 0,
        type: "morale 2",
        cost: "no cost",
        range: "7.5ft range",
        cast: "instant cast",
        cooldown: "no cooldown",
        blue: "Costs 720 adrenaline",
        description: talentText`Applies a debuff to target enemy and yourself for 10 seconds. Movement speed is reduced to 0 for the duration.`,
      },
      "Distracting Bellow": {
        name: "Distracting Bellow",
        pos: "h2",
        icon: icons["morale_distractingbellow"],
        maxRank: 0,
        reqPoints: 0,
        type: "morale 3",
        cost: "no cost",
        range: "self",
        cast: "instant cast",
        cooldown: "no cooldown",
        blue: "Costs 1800 adrenaline",
        description: talentText`Up to 48 enemies within 30ft of you receive a debuff. For 10 seconds, they cannot benefit from Cover.`,
      },
      "Immaculate Defense": {
        name: "Immaculate Defense",
        pos: "i2",
        icon: icons["morale_immaculatedefense"],
        maxRank: 0,
        reqPoints: 0,
        type: "morale 4",
        cost: "no cost",
        range: "self",
        cast: "instant cast",
        cooldown: "no cooldown",
        blue: "Costs 3600 adrenaline",
        description: talentText`Groupmates within 100ft gain 25 stacks of a buff for 20 seconds. Each stack grants 3% damage reduction. A stack is removed each time they are attacked by an ability; 4 additional stacks are removed if the ability is single target.`,
      },
    },
  },
};
