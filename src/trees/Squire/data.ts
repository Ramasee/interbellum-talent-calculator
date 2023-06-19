import { TalentData } from "../../TalentContext";
import { talentText, requireAll } from "../../utils";

const backgrounds = requireAll(
  require.context("../../assets/tree-backgrounds/empire"),
);
const icons = requireAll(require.context("../../assets/icons/empire"));

export const data: TalentData = {
  "Captain": {
    name: "Captain",
    background: backgrounds["captain"],
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
        maxRank: 3,
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
        maxRank: 3,
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
        maxRank: 2,
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
        maxRank: 1,
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
      "Emperor's Ward": {
        name: "Emperor's Ward",
        pos: "a2",
        icon: icons["tac_race_empire"],
        maxRank: 0,
        reqPoints: 0,
        type: "career tactic",
        description: talentText`Whenever you use a basic attack, you will gain a 400 absorb for 3 seconds.`,
      },
      "Sigmar's Favored": {
        name: "Sigmar's Favored",
        pos: "b2",
        icon: icons["tac_race_empire"],
        maxRank: 0,
        reqPoints: 0,
        type: "career tactic",
        description: talentText`Whenever you receive a direct heal, you will also be healed for 120 + 8% wounds.`,
      },
      "Well-Trained": {
        name: "Well-Trained",
        pos: "c2",
        icon: icons["tac_class_2"],
        maxRank: 0,
        reqPoints: 0,
        type: "career tactic",
        description: talentText`Vicious Slash will now apply an affliction to the target for 6 seconds which stacks up to 3 times. Deals 3% MAP + 33 ichor damage every second and generates 1 Mandate.`,
      },
      "Bellow Commands": {
        name: "Bellow Commands",
        pos: "d2",
        icon: icons["tac_class_1"],
        maxRank: 0,
        reqPoints: 0,
        type: "career tactic",
        description: talentText`Abilities that spend Mandate will generate 125 action points for you. Strike no longer generates action points.`,
      },
      "Weapon Aptitude": {
        name: "Weapon Aptitude",
        pos: "e2",
        icon: icons["archetype_tank"],
        maxRank: 0,
        reqPoints: 0,
        type: "passive",
        description: talentText`Captains equip one-handed swords and shields.`,
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
      "Shatter Confidence": {
        name: "Shatter Confidence",
        pos: "i4",
        icon: icons["morale_shatter"],
        maxRank: 1,
        reqPoints: 5,
        type: "morale 1",
        cost: "no cost",
        range: "7.5ft range",
        cast: "instant cast",
        cooldown: "no cooldown",
        blue: "Costs 360 adrenaline",
        description: talentText`Removes up to 3 enchantments and 1 blessing from the target.`,
      },
      "In Command": {
        name: "In Command",
        pos: "i5",
        icon: icons["morale_incommand"],
        maxRank: 1,
        reqPoints: 10,
        type: "morale 2",
        cost: "no cost",
        range: "self",
        cast: "instant cast",
        cooldown: "no cooldown",
        blue: "Costs 720 adrenaline",
        description: talentText`Generates 100 Mandate.`,
      },
      "Emperor's Champion": {
        name: "Emperor's Champion",
        pos: "i7",
        icon: icons["morale_empchamp"],
        maxRank: 1,
        reqPoints: 20,
        type: "morale 3",
        cost: "no cost",
        range: "self",
        cast: "instant cast",
        cooldown: "no cooldown",
        blue: "Costs 1800 adrenaline",
        description: talentText`You gain a buff for 20 seconds. You gain 250 ballistic skill, 250 intelligence, and 250 strength.`,
      },
      "Summon the Elector Counts": {
        name: "Summon the Elector Counts",
        pos: "i8",
        icon: icons["em_sword_2h_t5_02"],
        maxRank: 1,
        reqPoints: 25,
        type: "morale 4",
        cost: "no cost",
        range: "7.5ft range self",
        cast: "instant cast",
        cooldown: "no cooldown",
        blue: "Costs 3600 adrenaline",
        description: talentText`All groupmates and up to 18 allies within 100 feet of you gain the blessing effects from all of your Mandates.`,
      },
      "Mandate": {
        name: "Mandate",
        pos: "a1",
        icon: icons["abi_mandate"],
        maxRank: 0,
        reqPoints: 0,
        type: "passive",
        description: talentText`You have a maximum of 100 Mandate. You gain 1 Mandate per second. You will lose 2 Mandate whenever you take direct damage. (1s ICD)`,
      },
      "Strike": {
        name: "Strike",
        pos: "b1",
        icon: icons["abi_strike"],
        maxRank: 0,
        reqPoints: 0,
        type: "skill",
        cost: "no cost",
        range: "7.5ft range",
        cast: "instant cast",
        cooldown: "no cooldown",
        description: talentText`(Basic Attack) Deals 110 piercing damage to target enemy.`,
      },
      "On Your Guard!": {
        name: "On Your Guard!",
        pos: "c1",
        icon: icons["abi_onyourguard"],
        maxRank: 0,
        reqPoints: 0,
        type: "spell",
        cost: "no cost",
        range: "self",
        cast: "instant cast",
        cooldown: "no cooldown",
        blue: "Costs 35 Mandate",
        description: talentText`Groupmates within 100ft gain a blessing for 8 seconds. For the duration, they will have their block chance increased by 35%.\nGroupmates within 100ft gain 1 stack of Enhanced Toughness and a enchantment for 60 seconds. For the duration, they will gain 1 stack of Enhanced Toughness every 10 seconds.`,
      },
      "Vicious Slash": {
        name: "Vicious Slash",
        pos: "d1",
        icon: icons["abi_viciousslash"],
        maxRank: 0,
        reqPoints: 0,
        type: "skill",
        cost: "36 action points",
        range: "7.5ft range",
        cast: "instant cast",
        cooldown: "no cooldown",
        description: talentText`Deals 21% MAP + 280 piercing damage to target enemy.`,
      },
      "Guard": {
        name: "Guard",
        pos: "e1",
        icon: icons["abi_guard"],
        maxRank: 0,
        reqPoints: 0,
        type: "ability",
        cost: "no cost",
        range: "150ft range",
        cast: "instant cast",
        cooldown: "no cooldown",
        description: talentText`Applies Guard to target groupmate. While you are within 30ft of them, they will gain 50% of your armor, resistances, and block. You will lose these stats for the duration and for 5 seconds after the effect is broken.`,
      },
      "Crippling Blow": {
        name: "Crippling Blow",
        pos: "f1",
        icon: icons["abi_shackle"],
        maxRank: 0,
        reqPoints: 0,
        type: "skill",
        cost: "50 action points",
        range: "7.5ft range",
        cast: "instant cast",
        cooldown: "no cooldown",
        description: talentText`Deals 12% MAP + 152 impact damage and applies Ensnared and Momentum to the target.\n\nEnsnared reduces movement speed by 30% for 8 seconds.\nMomentum prevents the application of Ensnared for 8 seconds.`,
      },
      "To Victory!": {
        name: "To Victory!",
        pos: "g1",
        icon: icons["abi_tovictory"],
        maxRank: 0,
        reqPoints: 0,
        type: "spell",
        cost: "no cost",
        range: "self",
        cast: "instant cast",
        cooldown: "no cooldown",
        blue: "Costs 35 Mandate",
        description: talentText`Groupmates within 100ft gain a blessing for 8 seconds. For the duration, they will have 1.0s faster cast times.\nGroupmates within 100ft gain an enchantment for 60 seconds. For the duration, they will gain 50% pushback immunity.`,
      },
      "Repel": {
        name: "Repel",
        pos: "h1",
        icon: icons["abi_repel"],
        maxRank: 0,
        reqPoints: 0,
        type: "skill",
        cost: "50 action points",
        range: "7.5ft range",
        cast: "instant cast",
        cooldown: "10s cooldown",
        description: talentText`Knocks the enemy away and applies Immovable to them.\n\nImmovable prevents application of Knockbacks, Pulls, and the Rooted status for 20 seconds.`,
      },
      "Perseverance": {
        name: "Perseverance",
        pos: "i1",
        icon: icons["abi_perseverance"],
        maxRank: 0,
        reqPoints: 0,
        type: "spell",
        cost: "no cost",
        range: "self",
        cast: "instant cast",
        cooldown: "20s cooldown",
        description: talentText`You gain a blessing for 10 seconds. Each time you are attacked, you will gain 10 action points and gain 1 stack of Enhanced Armor.`,
      },
	   "Stay Focused!": {
        name: "Stay Focused!",
        pos: "g4",
        icon: icons["abi_stayfocused"],
        maxRank: 1,
        reqPoints: 5,
        type: "spell",
        cost: "no cost",
        range: "self",
        cast: "instant cast",
        cooldown: "no cooldown",
		blue: "Costs 35 Mandate",
        description: talentText`Groupmates within 100ft gain a blessing for 8 seconds. For the duration, they will gain 20% healing received.\nGroupmates within 100ft gain 1 stack of Enhanced Willpower and an enchantment for 60 seconds. For the duration, they will gain 1 stack of Enhanced Willpower every 10 seconds.`,
      },
	  "Distract": {
        name: "Distract",
        pos: "h5",
        icon: icons["abi_distract"],
        maxRank: 1,
        reqPoints: 10,
        type: "spell",
        cost: "40 action points",
        range: "65ft range",
        cast: "instant cast",
        cooldown: "10s cooldown",
        description: talentText`Jams the target for the next 3 seconds interupting the next ability cast.`,
      },
	  "To Glory!": {
        name: "To Glory!",
        pos: "e6",
        icon: icons["abi_toglory"],
        maxRank: 1,
        reqPoints: 15,
        type: "spell",
        cost: "no cost",
        range: "self",
        cast: "instant cast",
        cooldown: "no cooldown",
        blue: "Costs 35 Mandate",
        description: talentText`Groupmates within 100ft gain a blessing for 8 seconds. For the duration, they will gain 15 adrenaline per second.\nGroupmates within 100ft gain an enchantment for 60 seconds. For the duration, they will gain 2 action points per second.`,
      },
	  "Bind Weapon": {
        name: "Bind Weapon",
        pos: "e8",
        icon: icons["abi_bindweapon"],
        maxRank: 1,
        reqPoints: 25,
        type: "skill",
        cost: "30 action points",
        range: "7.5ft range",
        cast: "instant cast",
        cooldown: "10s cooldown",
        description: talentText`Applies Disarmed and Inevitable to the target.\n\nDisarmed prevents the use of skills for 5 seconds.\nInevitable prevents the application of Disarmed and Silenced for 20 seconds.`,
      },
      "Stand Strong!": {
        name: "Stand Strong!",
        pos: "d9",
        icon: icons["abi_standstrong"],
        maxRank: 1,
        reqPoints: 30,
        type: "spell",
        cost: "no cost",
        range: "self",
        cast: "instant cast",
        cooldown: "no cooldown",
        blue: "Costs 35 Mandate",
        description: talentText`Groupmates within 100ft gain a blessing for 8 seconds. For the duration, they will have their AP costs reduced by 50%.\n\nGroupmates within 100ft gain a enchantment for 60 seconds. For the duration, they will gain 450 HP4.`,
      },
      "Emperor's Fury": {
        name: "Emperor's Fury",
        pos: "f9",
        icon: icons["abi_emperorsfury"],
        maxRank: 1,
        reqPoints: 30,
        type: "skill",
        cost: "70 action points",
        range: "self",
        cast: "2.0s cast",
        cooldown: "30s cooldown",
        description: talentText`You apply Staggered and Unstoppable to up to 48 enemies within 30 feet in front of you. This effect does not apply to targets that have Cover to you.\n\nStaggered prevents all control of your character for 5 seconds or until you are attacked. Unstopped prevents you from being Knocked-down or Staggered for 30 seconds.`,
      },
	  "Mandated Defense": {
        name: "Mandated Defense",
        pos: "a5",
        icon: icons["tac_spec_7"],
        maxRank: 1,
        reqPoints: 10,
        type: "career tactic",
        description: talentText`You will no longer lose Mandate whenever you are attacked.`,
      },
	  "Slice Through": {
        name: "Slice Through",
        pos: "b5",
        icon: icons["tac_spec_5"],
        maxRank: 1,
        reqPoints: 10,
        type: "career tactic",
        description: talentText`Crippling Blow will now apply to up to 2 other enemies within 15 feet of your target.`,
      },
	  "Staying Power": {
        name: "Staying Power",
        pos: "b6",
        icon: icons["tac_spec_4"],
        maxRank: 1,
        reqPoints: 15,
        type: "career tactic",
        description: talentText`Reduce the cooldown of Perseverance and Vigilance by 50%.`,
      },
	  "Improved Distract": {
        name: "Improved Distract",
        pos: "h6",
        icon: icons["tac_spec_9"],
        maxRank: 1,
        reqPoints: 15,
        prereq: "Distract",
        arrows: [{ dir: "down", from: "h5", to: "h6" }],
        type: "career tactic",
        description: talentText`Distract will now work on up to 23 additional enemies within 20 feet of the target as long as those targets do not have cover.`,
      },
	  "Dirty Tricks": {
        name: "Dirty Tricks",
        pos: "a7",
        icon: icons["tac_spec_6"],
        maxRank: 1,
        reqPoints: 20,
        type: "career tactic",
        description: talentText`Whenever you block an attack, two groupmates within 100ft gain 1 stack of Enhanced Fortitude.`,
      },
	  "To Action!": {
        name: "To Action!",
        pos: "e7",
        icon: icons["tac_spec_8"],
        maxRank: 1,
        reqPoints: 20,
        prereq: "To Glory!",
        arrows: [{ dir: "down", from: "e6", to: "e7" }],
        type: "career tactic",
        description: talentText`Increases the action point per second value of To Glory! by 3.`,
      },
	  "Coordination": {
        name: "Coordination",
        pos: "c8",
        icon: icons["tac_spec_3"],
        maxRank: 1,
        reqPoints: 25,
        type: "career tactic",
        description: talentText`All of your abilities cost 5 less Mandate.`,
      },
	  "Loyalty to the Empire": {
        name: "Loyalty to the Empire",
        pos: "e3",
        icon: icons["abi_mandate"],
        maxRank: 3,
        reqPoints: 0,
        type: "passive",
        description: talentText`You gain ${[
          1,
          2,
          3,
        ]} Mandate each time you spend action points or use Strike.`,
      },
	  "Gilded Shield": {
        name: "Gilded Shield",
        pos: "c4",
        icon: icons["abi_onyourguard"],
        maxRank: 2,
        reqPoints: 5,
        type: "passive",
        description: talentText`Whenever you cast On Your Guard!, all groupmates within 100 feet of you will gain ${[
          1,
          2,
        ]} stacks of Enhanced Armor.`,
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
	  "Improved Vicious Slash": {
        name: "Improved Vicious Slash",
        pos: "d6",
        icon: icons["abi_viciousslash"],
        maxRank: 2,
        reqPoints: 15,
        type: "passive",
        description: talentText`Reduce the action point cost of Vicious Slash by ${[
          3,
          6,
        ]}.`,
      },
	  "Will to Survive": {
        name: "Will to Survive",
        pos: "f6",
        icon: icons["abi_perseverance"],
        maxRank: 5,
        reqPoints: 15,
        type: "passive",
        description: talentText`You gain ${[
          5,
          10,
          15,
          20,
          25,
        ]}% damage reduction while under the effect of Perseverance.`,
      },
	  "Hold the Line": {
        name: "Hold the Line",
        pos: "c7",
        icon: icons["abi_cover"],
        maxRank: 1,
        reqPoints: 20,
        type: "passive",
        description: talentText`Groupmates within 50 feet behind you have Cover from all enemies up to 100 feet in front of you.\n\nCover reduces the damage of area of effect attacks by 25% in addition to providing immunity to some effects.`,
      },
	  "Band Together": {
        name: "Band Together",
        pos: "g7",
        icon: icons["abi_bandtogether"],
        maxRank: 5,
        reqPoints: 20,
        type: "passive",
        description: talentText`Groupmates within 30 feet of you will have their damage reduction increased by ${[
          2,
          4,
          6,
          8,
          10,
        ]}%. This effect is supressed for 5 seconds whenever you are hit by a single-target ability.`,
      },
      "Rush of Command": {
        name: "Rush of Command",
        pos: "g8",
        icon: icons["abi_rushofcommand"],
        maxRank: 4,
        reqPoints: 25,
        type: "passive",
        description: talentText`You generate ${[
          1,
          2,
          3,
          4,
        ]} adrenaline per second for each passive effect of Mandates you cast that are active on you.`,
      },
    },
  },
  "Order of Glinting Steel": {
    name: "Order of Glinting Steel",
    background: backgrounds["reiksguard"],
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
        maxRank: 3,
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
        maxRank: 3,
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
        maxRank: 2,
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
        maxRank: 1,
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
        reqPoints: 10,
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
        description: talentText`Knights of the Order of Glinting Steel equip two-handed swords.`,
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
  "Knight of the Blazing Sun": {
    name: "Knight of the Blazing Sun",
    background: backgrounds["kotbs"],
    icon: icons["archetype_offsupport"],
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
        maxRank: 3,
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
        maxRank: 4,
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
        maxRank: 3,
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
        maxRank: 1,
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
        maxRank: 5,
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
      "Fleet-Footed": {
        name: "Fleet-Footed",
        pos: "a4",
        icon: icons["tac_arche"],
        maxRank: 1,
        reqPoints: 10,
        type: "career tactic",
        description: talentText`Your base movement speed is increased by 15%. Your mass is decreased by 1.`,
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
        description: talentText`Knights of the Blazing Sun equip two-handed swords.`,
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
};
