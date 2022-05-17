import { TalentData } from "../../TalentContext";
import { talentText, requireAll } from "../../utils";

const backgrounds = requireAll(
  require.context("../../assets/tree-backgrounds/empire"),
);
const icons = requireAll(require.context("../../assets/icons/empire"));

export const data: TalentData = {
  "Arsonist": {
    name: "Arsonist",
    background: backgrounds["hothead"],
    icon: icons["archetype_dps"],
    talents: {
      "Motivated": {
        name: "Motivated",
        pos: "a2",
        icon: icons["rrtac_motivated"],
        maxRank: 1,
        reqPoints: 5,
        description: talentText`You gain 5 adrenaline every second while in combat.`,
      },
      "Strength in Numbers": {
        name: "Strength in Numbers",
        pos: "b2",
        icon: icons["rrtac_strengthinnumbers"],
        maxRank: 1,
        reqPoints: 5,
        description: talentText`Whenever you use a basic attack, all groupmates within 100 feet that also have this tactic will gain a stack. Max 5 stacks, each stack grants 2 adrenaline per second for a duration of 5 seconds.`,
      },
      "Uncontrolled": {
        name: "Uncontrolled",
        pos: "a4",
        icon: icons["rrtac_uncontrolled"],
        maxRank: 1,
        reqPoints: 15,
        description: talentText`Whenever Unstoppable, Inevitable, or Immovable is applied to you, you will gain 20 adrenaline per second over 5 seconds.`,
      },
      "Stay in Formation": {
        name: "Stay in Formation",
        pos: "b4",
        icon: icons["rrtac_stayinformation"],
        maxRank: 1,
        reqPoints: 15,
        description: talentText`Whenever you are attacked by an opponent you have Cover from, you will gain 10 adrenaline per second for 3 seconds.`,
      },
      "Gotta Go Fast": {
        name: "Gotta Go Fast",
        pos: "b6",
        icon: icons["rrtac_gottagofast"],
        maxRank: 1,
        reqPoints: 25,
        description: talentText`You gain 1 stack of Revelry every second while moving.\n\nRevelry: 1 adrenaline per second. Stacks 15 times and lasts 3 seconds.`,
      },
      "Festive Chaos": {
        name: "Festivity",
        pos: "a6",
        icon: icons["rrtac_festivechaos"],
        maxRank: 1,
        reqPoints: 25,
        description: talentText`You gain 2 stacks of Revelry each time you use an ability. Whenever you critically hit, you will lose all stacks of Revelry.\n\nRevelry: 1 adrenaline per second. Stacks 15 times and lasts 3 seconds.`,
      },
      "Fatass": {
        name: "Fatass",
        pos: "a8",
        icon: icons["rrtac_fatass"],
        maxRank: 1,
        reqPoints: 35,
        description: talentText`Increases your mass by 1.`,
      },
      "Verge of Victory": {
        name: "Verge of Victory",
        pos: "a9",
        icon: icons["rrtac_vergeofvictory"],
        maxRank: 1,
        reqPoints: 40,
        description: talentText`Whenever you land a killing blow, you will gain 20 adrenaline per second for 8 seconds. Whenever a groupmate within 100ft lands a killing blow, you will gain 5 adrenaline per second for 8 seconds.`,
      },
      "Agility": {
        name: "Agility",
        pos: "b5",
        icon: icons["stat_agl"],
        maxRank: 1,
        reqPoints: 20,
        description: talentText`Increases your Agility by ${[
          40,
          95,
          165,
          250,
          350,
        ]}.`,
      },
      "Ballistic Skill": {
        name: "Ballistic Skill",
        pos: "b7",
        icon: icons["stat_bal"],
        maxRank: 3,
        reqPoints: 30,
        description: talentText`Increases your Ballistic Skill by ${[
          40,
          95,
          165,
          250,
          350,
        ]}.`,
      },
      "Initiative": {
        name: "Initiative",
        pos: "b3",
        icon: icons["stat_ini"],
        maxRank: 3,
        reqPoints: 10,
        description: talentText`Increases your Initiative by ${[
          40,
          95,
          165,
          250,
          350,
        ]}.`,
      },
      "Intelligence": {
        name: "Intelligence",
        pos: "e7",
        icon: icons["stat_int"],
        maxRank: 4,
        reqPoints: 30,
        description: talentText`Increases your Intelligence by ${[
          40,
          95,
          165,
          250,
          350,
        ]}.`,
      },
      "Strength": {
        name: "Strength",
        pos: "h7",
        icon: icons["stat_str"],
        maxRank: 4,
        reqPoints: 30,
        description: talentText`Increases your Strength by ${[
          40,
          95,
          165,
          250,
          350,
        ]}.`,
      },
      "Toughness": {
        name: "Toughness",
        pos: "e5",
        icon: icons["stat_tou"],
        maxRank: 2,
        reqPoints: 20,
        description: talentText`Increases your Toughness by ${[
          40,
          95,
          165,
          250,
          350,
        ]}.`,
      },
      "Willpower": {
        name: "Willpower",
        pos: "h3",
        icon: icons["stat_wil"],
        maxRank: 2,
        reqPoints: 10,
        description: talentText`Increases your Willpower by ${[
          40,
          95,
          165,
          250,
          350,
        ]}.`,
      },
      "Wounds": {
        name: "Wounds",
        pos: "h5",
        icon: icons["stat_wou"],
        maxRank: 2,
        reqPoints: 20,
        description: talentText`Increases your Wounds by ${[
          40,
          95,
          165,
          250,
          350,
        ]}.`,
      },
      "Weapon Skill": {
        name: "Weapon Skill",
        pos: "e3",
        icon: icons["stat_ws"],
        maxRank: 3,
        reqPoints: 10,
        description: talentText`Increases your Weapon Skill by ${[
          40,
          95,
          165,
          250,
          350,
        ]}.`,
      },
      "Fleet-Footed": {
        name: "Fleet-Footed",
        pos: "e4",
        icon: icons["tac_arche"],
        maxRank: 1,
        reqPoints: 15,
        description: talentText`Your base movement speed is increased by 15%. Your mass is decreased by 2.`,
      },
      "Disengage": {
        name: "Disengage",
        pos: "i2",
        icon: icons["morale_disengage"],
        maxRank: 1,
        reqPoints: 5,
        description: talentText`level 1\n30ft range\n360 adrenaline\ninstant cast\nability\n\nYou knock yourself back away from target enemy.`,
      },
      "Broad Swings": {
        name: "Broad Swings",
        pos: "i4",
        icon: icons["morale_broadswings"],
        maxRank: 1,
        reqPoints: 15,
        description: talentText`level 2\n720 adrenaline\ninstant cast\nability\n\nYou gain a  buff for 10 seconds. Your single target abilities will target two additional enemies within 15ft in front of you.`,
      },
      "Explosive Impact": {
        name: "Explosive Impact",
        pos: "i6",
        icon: icons["morale_explosiveimpact"],
        maxRank: 1,
        reqPoints: 25,
        description: talentText`level 3\n1800 adrenaline\ninstant cast\nability\n\nGain a tier3 buff for 10 seconds. Whenever you hit a target with a single-target ability, you will deal 10% RAP + 150 corporeal damage and 10% SAP + 150 elemental damage to up to 24 enemies within 20ft of the target.`,
      },
      "Frenzied Slaughter": {
        name: "Frenzied Slaughter",
        pos: "i8",
        icon: icons["morale_frenziedslaughter"],
        maxRank: 1,
        reqPoints: 35,
        description: talentText`level 4\n3600 adrenaline\ninstant cast\nability\n\nAll groupmates within 100ft gain a buff for 15 seconds. +40% outgoing damage and 50% reduced cooldowns for the duration.`,
      },
      "Emperor's Champion": {
        name: "Emperor's Champion",
        pos: "b8",
        icon: icons["morale_empchamp"],
        maxRank: 1,
        reqPoints: 35,
        description: talentText`level 3\n1800 adrenaline\ninstant cast\nability\n\nYou gain a buff for 20 seconds. You gain 250 ballistic skill, 250 intelligence, and 250 strength.`,
      },
      "Melt Armor": {
        name: "Morale 1c",
        pos: "h2",
        icon: icons["morale_melt"],
        maxRank: 1,
        reqPoints: 5,
        description: talentText`level 1\n100ft range\n360 adrenaline\ninstant cast\nability\n\nTarget enemy gains 6 stacks of Reduced Armor.`,
      },
      "Burnout": {
        name: "Burnout",
        pos: "h4",
        icon: icons["morale_burnout"],
        maxRank: 1,
        reqPoints: 15,
        description: talentText`level 2\n\n720 adrenaline\ninstant cast\nability\n\nYou gain 100 Combustion and take Backlash damage.`,
      },
      "Morale 1 Spec": {
        name: "Morale 1s",
        pos: "h6",
        icon: icons["noicon"],
        maxRank: 1,
        reqPoints: 25,
        description: talentText`level 1\n100ft range\n360 adrenaline\ninstant cast\nability\n\nDescription`,
      },
      "Morale 2 Spec": {
        name: "Morale 2s",
        pos: "h8",
        icon: icons["noicon"],
        maxRank: 1,
        reqPoints: 35,
        description: talentText`level 2\n100ft range\n720 adrenaline\ninstant cast\nability\n\nDescription`,
      },
      "Morale 4 Spec": {
        name: "Morale 4s",
        pos: "i9",
        icon: icons["noicon"],
        maxRank: 1,
        reqPoints: 40,
        description: talentText`level 4\n100ft range\n3600 adrenaline\ninstant cast\nability\n\nDescription`,
      },
      "Emperor's Ward": {
        name: "Emperor's Ward",
        pos: "a1",
        icon: icons["tac_race_empire"],
        maxRank: 1,
        reqPoints: 0,
        description: talentText`Whenever you use a basic attack, you will gain a 400 absorb for 3 seconds.`,
      },
      "Sigmar's Favored": {
        name: "Sigmar's Favored",
        pos: "i1",
        icon: icons["tac_race_empire"],
        maxRank: 1,
        reqPoints: 0,
        description: talentText`Whenever you receive a direct heal, you will also be healed for 120 + 8% wounds.`,
      },
      "Tempered Blast": {
        name: "Tempered Blast",
        pos: "b1",
        icon: icons["abi_blast"],
        maxRank: 2,
        reqPoints: 0,
        description: talentText`Backlash deals 20% SAP + 300 elemental damage whenever you gain Combustion when you have 100. (1s ICD)\nBlast is a buff that lasts for 4 seconds and stacks 10 times. At the end of the duration, target takes 6% SAP elemental damage per stack.\n\nTaking this passive increases the damage of Blast by ${[
          3,
          6,
        ]}% MAP.`,
      },
      "Unquenchable Fury": {
        name: "Unquenchable Fury",
        pos: "c1",
        icon: icons["abi_unquench"],
        maxRank: 1,
        reqPoints: 0,
        description: talentText`100 AP\ninstant cast\n15s CD\naspell\n\nApply a blessing to yourself for 60 seconds. Whenever you deal direct damage to a target, you will apply Blast to them and yourself.`,
      },
      "Embrace the Flames": {
        name: "Embrace the Flames",
        pos: "c2",
        icon: icons["tac_class_2"],
        maxRank: 1,
        reqPoints: 5,
        prereq: "Unquenchable Fury",
        arrows: [{ dir: "down", from: "c1", to: "c2" }],
        description: talentText`Unquenchable Fury is now applied to all groupmates within 100ft of you.`,
      },
      "Aqshy's Aegis": {
        name: "Aqshy's Aegis",
        pos: "d1",
        icon: icons["tac_class_1"],
        maxRank: 1,
        reqPoints: 0,
        prereq: "Unquenchable Fury",
        arrows: [{ dir: "right", from: "c1", to: "d1" }],
        description: talentText`Backlash and Blast now deal 50% less damage to you and your groupmates.`,
      },
      "Flaming Sword of Rhuin": {
        name: "Flaming Sword of Rhuin",
        pos: "e1",
        icon: icons["abi_flameofrhuin"],
        maxRank: 1,
        reqPoints: 0,
        description: talentText`melee range\n25 CBN\ninstant cast\nskill\n\nDeals 35% MAP + 275 corporeal damage to target enemy.`,
      },
      "Rhuination": {
        name: "Rhuination",
        pos: "e2",
        icon: icons["abi_flameofrhuin"],
        maxRank: 2,
        reqPoints: 5,
        prereq: "Flaming Sword of Rhuin",
        arrows: [{ dir: "down", from: "e1", to: "e2" }],
        description: talentText`Flaming Sword of Rhuin now costs ${[
          3,
          6,
        ]} less Combustion.`,
      },
      "Fuel for the Fire": {
        name: "Fuel for the Fire",
        pos: "f1",
        icon: icons["abi_fuelfire"],
        maxRank: 1,
        reqPoints: 0,
        description: talentText`instant cast\nability\n\nYou take Backlash damage and gain 20 Combustion. This ability does not trigger the GCD.`,
      },
      "Sparking Swing": {
        name: "Sparking Swing",
        pos: "g1",
        icon: icons["abi_sparks"],
        maxRank: 1,
        reqPoints: 0,
        description: talentText`melee range\ninstant cast\nskill\n\nDeals 160 elemental damage to target enemy. You generate 30 action points.`,
      },
      "Master of Sparks": {
        name: "Master of Sparks",
        pos: "h1",
        icon: icons["abi_sparks"],
        maxRank: 2,
        reqPoints: 0,
        prereq: "Sparking Swing",
        arrows: [{ dir: "right", from: "g1", to: "h1" }],
        description: talentText`Sparking Swing will deal an additional ${[
          8,
          15,
        ]}% MAP physical damage.`,
      },
      "Spontaneous Combustion": {
        name: "Spontaneous Combustion",
        pos: "g2",
        icon: icons["tac_spec_5"],
        maxRank: 1,
        reqPoints: 5,
        prereq: "Sparking Swing",
        arrows: [{ dir: "down", from: "g1", to: "g2" }],
        description: talentText`Sparking Swing now has a 75ft range and will generate 3 Combustion.`,
      },
      "Vigilance": {
        name: "Vigilance",
        pos: "d2",
        icon: icons["abi_vigilance"],
        maxRank: 1,
        reqPoints: 5,
        description: talentText`instant cast\n60s CD\nability\n\nAll damage you take is reduced by 50% but all damage you deal is reduced by 90% for 5 seconds.`,
      },
      "Improved Vigilance": {
        name: "Improved Vigilance",
        pos: "d4",
        icon: icons["abi_vigilance"],
        maxRank: 1,
        reqPoints: 15,
        prereq: "Vigilance",
        arrows: [{ dir: "down", from: "d2", to: "d4" }],
        description: talentText`Vigilance now only reduces your outgoing damage by 75%.`,
      },
      "Fire Cage": {
        name: "Fire Cage",
        pos: "f2",
        icon: icons["abi_firecage"],
        maxRank: 1,
        reqPoints: 5,
        description: talentText`30ft range\n40 AP\ninstant cast\n20s CD\nspell\n\nApplies Rooted and Immovable to target enemy.\n\nRooted reduces your movement speed to 0 for 5 seconds. Immovable prevents application of Rooted, Knockbacks, and Pull effects for 20 seconds.`,
      },
      "Ignite": {
        name: "Ignite",
        pos: "c4",
        icon: icons["abi_ignite"],
        maxRank: 1,
        reqPoints: 15,
        description: talentText`100ft range\n30 AP\ninstant cast\naspell\n\nApplies an affliction to target enemy for 15 seconds. You generate 3 Combustion and the target takes 11% SAP + 78 elemental damage every 3 seconds.\n\nCannot be applied to targets under the effect of Detonate.`,
      },
      "Detonate": {
        name: "Detonate",
        pos: "c6",
        icon: icons["abi_detonate"],
        maxRank: 1,
        reqPoints: 25,
        prereq: "Ignite",
        arrows: [{ dir: "down", from: "c4", to: "c6" }],
        description: talentText`100ft range\n60 AP\ninstant cast\nspell\n\nRequires Ignite on the target. Dispels Ignite from the target to apply a cripple to the target and up to 8 additional enemies within 20ft of them for 12 seconds. You generate 1 Combustion and the target takes 5% SAP + 30 corporeal damage every 3 seconds.`,
      },
      "Eruption": {
        name: "Eruption",
        pos: "d6",
        icon: icons["tac_spec_9"],
        maxRank: 1,
        reqPoints: 25,
        prereq: "Detonate",
        arrows: [{ dir: "right", from: "c6", to: "d6" }],
        description: talentText`Ignite can now be cast on a target with Detonate. Detonate no longer dispels Ignite.`,
      },
      "Cauterize": {
        name: "Cauterize",
        pos: "f4",
        icon: icons["abi_cauterize"],
        maxRank: 1,
        reqPoints: 15,
        description: talentText`30ft range\n10 CBN\ninstant cast\n\naspell\n\nDispel 1 enchantment from target enemy and dispel 1 affliction from yourself.`,
      },
      "Cascading Fire Cloak": {
        name: "Cascading Fire Cloak",
        pos: "g4",
        icon: icons["abi_flameshield"],
        maxRank: 1,
        reqPoints: 15,
        description: talentText`50 AP\ninstant cast\nspell\n\nYou gain a buff for 15 seconds. For the duration, whenever you use Sparks or Flaming Sword of Rhuin you will gain 1 stack of Enhanced Armor and 1 stack of Enhanced Corporeal Resistance.\n\nFor the duration, whenever an enemy deals direct damage to you, they will gain a stack of Blast and you will gain 1 stack of Reduced Armor and 1 stack of Reduced Corporeal Resistance.`,
      },
      "Bleed Fire": {
        name: "Bleed Fire",
        pos: "g8",
        icon: icons["tac_spec_7"],
        maxRank: 1,
        reqPoints: 35,
        prereq: "Cascading Fire Cloak",
        arrows: [{ dir: "down", from: "g4", to: "g8" }],
        description: talentText`Cascading Fire Cloak no longer grants stacks of Enhanced or Reduced Armor/Corporeal Resistance, but it will deal 13% MAP + 100 elemental damage to enemies when it applies Blast.`,
      },
      "Breath of Fire": {
        name: "Breath of Fire",
        pos: "e6",
        icon: icons["abi_flamebreath"],
        maxRank: 1,
        reqPoints: 25,
        description: talentText`80 AP\n1.5s cast\nspell\n\nApplies an affliction to up to 9 enemies within 30ft in front of you for 9 seconds. You generate 2 Combustion and the target takes 5% SAP + 18 elemental damage every 3 seconds. You can cast while moving.`,
      },
      "Rancid Breath": {
        name: "Rancid Breath",
        pos: "f6",
        icon: icons["tac_spec_1"],
        maxRank: 1,
        reqPoints: 25,
        prereq: "Breath of Fire",
        arrows: [{ dir: "right", from: "e6", to: "f6" }],
        description: talentText`Breath of Fire now deals 8% SAP + 60 direct corporeal damage to enemies on cast and will now hit up to 15 enemies.`,
      },
      "Fiery Reserves": {
        name: "Fiery Reserves",
        pos: "c8",
        icon: icons["tac_spec_8"],
        maxRank: 1,
        reqPoints: 35,
        description: talentText`Blast will now generate 2 Combustion per stack whenever it expires.`,
      },
      "Burning Step": {
        name: "Burning Step",
        pos: "f8",
        icon: icons["abi_firestep"],
        maxRank: 1,
        reqPoints: 35,
        description: talentText`25 CBN\ninstant cast\n20s CD\nspell\n\nYou gain 100% dodge and 100% movement speed for 1 second. You also gain 3 stacks of Blast.`,
      },
      "TrailBlazer": {
        name: "TrailBlazer",
        pos: "g8",
        icon: icons["tac_spec_6"],
        maxRank: 1,
        reqPoints: 35,
        prereq: "Burning Step",
        arrows: [{ dir: "right", from: "f8", to: "g8" }],
        description: talentText`The cooldown on Burning Step is reduced by 10 seconds.`,
      },
      "Explosive Force": {
        name: "Explosive Force",
        pos: "h8",
        icon: icons["tac_spec_2"],
        maxRank: 1,
        reqPoints: 35,
        description: talentText`Whenever you take Backlash damage, all groupmates and up to 9 enemies within 30ft of you also take Backlash damage.`,
      },
      "Scorched Earth": {
        name: "Scorched Earth",
        pos: "f9",
        icon: icons["abi_scorched"],
        maxRank: 1,
        reqPoints: 40,
        description: talentText`10 CBN\ninstant cast\naspell\n\nRemoves all of your combustion and deals 4% MAP + 20 corporeal damage per 10 Combustion consumed to up to 9 enemies within 30ft of you.\n\nAugmented: Does not consume Combustion.`,
      },
      "Supernova": {
        name: "Supernova",
        pos: "h9",
        icon: icons["abi_supernova"],
        maxRank: 1,
        reqPoints: 40,
        description: talentText`150 AP\n5s channel\n30s CD\naspell\n\nDeal 10% SAP + 50 elemental damage to up to 24 enemies within 30ft of you every second. Each enemy hit will increase your outgoing damage by 10% up to a maximum of 100 stacks. Effect is dispelled when channel ends. This ability deals no damage to targets that have Cover from you.`,
      },
    },
  },
  "Pyromancer": {
    name: "Pyromancer",
    background: backgrounds["pyromancer"],
    icon: icons["archetype_dps"],
    talents: {
      "Motivated": {
        name: "Motivated",
        pos: "a2",
        icon: icons["rrtac_motivated"],
        maxRank: 1,
        reqPoints: 5,
        description: talentText`You gain 5 adrenaline every second while in combat.`,
      },
      "Strength in Numbers": {
        name: "Strength in Numbers",
        pos: "b2",
        icon: icons["rrtac_strengthinnumbers"],
        maxRank: 1,
        reqPoints: 5,
        description: talentText`Whenever you use a basic attack, all groupmates within 100 feet that also have this tactic will gain a stack. Max 5 stacks, each stack grants 2 adrenaline per second for a duration of 5 seconds.`,
      },
      "Uncontrolled": {
        name: "Uncontrolled",
        pos: "a4",
        icon: icons["rrtac_uncontrolled"],
        maxRank: 1,
        reqPoints: 15,
        description: talentText`Whenever Unstoppable, Inevitable, or Immovable is applied to you, you will gain 20 adrenaline per second over 5 seconds.`,
      },
      "Stay in Formation": {
        name: "Stay in Formation",
        pos: "b4",
        icon: icons["rrtac_stayinformation"],
        maxRank: 1,
        reqPoints: 15,
        description: talentText`Whenever you are attacked by an opponent you have Cover from, you will gain 10 adrenaline per second for 3 seconds.`,
      },
      "Gotta Go Fast": {
        name: "Gotta Go Fast",
        pos: "b6",
        icon: icons["rrtac_gottagofast"],
        maxRank: 1,
        reqPoints: 25,
        description: talentText`You gain 1 stack of Revelry every second while moving.\n\nRevelry: 1 adrenaline per second. Stacks 15 times and lasts 3 seconds.`,
      },
      "Festive Chaos": {
        name: "Festivity",
        pos: "a6",
        icon: icons["rrtac_festivechaos"],
        maxRank: 1,
        reqPoints: 25,
        description: talentText`You gain 2 stacks of Revelry each time you use an ability. Whenever you critically hit, you will lose all stacks of Revelry.\n\nRevelry: 1 adrenaline per second. Stacks 15 times and lasts 3 seconds.`,
      },
      "Fatass": {
        name: "Fatass",
        pos: "a8",
        icon: icons["rrtac_fatass"],
        maxRank: 1,
        reqPoints: 35,
        description: talentText`Increases your mass by 1.`,
      },
      "Verge of Victory": {
        name: "Verge of Victory",
        pos: "a9",
        icon: icons["rrtac_vergeofvictory"],
        maxRank: 1,
        reqPoints: 40,
        description: talentText`Whenever you land a killing blow, you will gain 20 adrenaline per second for 8 seconds. Whenever a groupmate within 100ft lands a killing blow, you will gain 5 adrenaline per second for 8 seconds.`,
      },
      "Agility": {
        name: "Agility",
        pos: "b5",
        icon: icons["stat_agl"],
        maxRank: 1,
        reqPoints: 20,
        description: talentText`Increases your Agility by ${[
          40,
          95,
          165,
          250,
          350,
        ]}.`,
      },
      "Ballistic Skill": {
        name: "Ballistic Skill",
        pos: "b7",
        icon: icons["stat_bal"],
        maxRank: 4,
        reqPoints: 30,
        description: talentText`Increases your Ballistic Skill by ${[
          40,
          95,
          165,
          250,
          350,
        ]}.`,
      },
      "Initiative": {
        name: "Initiative",
        pos: "b3",
        icon: icons["stat_ini"],
        maxRank: 3,
        reqPoints: 10,
        description: talentText`Increases your Initiative by ${[
          40,
          95,
          165,
          250,
          350,
        ]}.`,
      },
      "Intelligence": {
        name: "Intelligence",
        pos: "e7",
        icon: icons["stat_int"],
        maxRank: 5,
        reqPoints: 30,
        description: talentText`Increases your Intelligence by ${[
          40,
          95,
          165,
          250,
          350,
        ]}.`,
      },
      "Strength": {
        name: "Strength",
        pos: "h7",
        icon: icons["stat_str"],
        maxRank: 3,
        reqPoints: 30,
        description: talentText`Increases your Strength by ${[
          40,
          95,
          165,
          250,
          350,
        ]}.`,
      },
      "Toughness": {
        name: "Toughness",
        pos: "e5",
        icon: icons["stat_tou"],
        maxRank: 2,
        reqPoints: 20,
        description: talentText`Increases your Toughness by ${[
          40,
          95,
          165,
          250,
          350,
        ]}.`,
      },
      "Willpower": {
        name: "Willpower",
        pos: "h3",
        icon: icons["stat_wil"],
        maxRank: 2,
        reqPoints: 10,
        description: talentText`Increases your Willpower by ${[
          40,
          95,
          165,
          250,
          350,
        ]}.`,
      },
      "Wounds": {
        name: "Wounds",
        pos: "h5",
        icon: icons["stat_wou"],
        maxRank: 2,
        reqPoints: 20,
        description: talentText`Increases your Wounds by ${[
          40,
          95,
          165,
          250,
          350,
        ]}.`,
      },
      "Weapon Skill": {
        name: "Weapon Skill",
        pos: "e3",
        icon: icons["stat_ws"],
        maxRank: 3,
        reqPoints: 10,
        description: talentText`Increases your Weapon Skill by ${[
          40,
          95,
          165,
          250,
          350,
        ]}.`,
      },
      "Far Sight": {
        name: "Far Sight",
        pos: "e4",
        icon: icons["tac_arche"],
        maxRank: 1,
        reqPoints: 15,
        description: talentText`Your range is increased by 20%.`,
      },
      "Disengage": {
        name: "Disengage",
        pos: "i2",
        icon: icons["morale_disengage"],
        maxRank: 1,
        reqPoints: 5,
        description: talentText`level 1\n30ft range\n360 adrenaline\ninstant cast\nability\n\nYou knock yourself back away from target enemy.`,
      },
      "Focused Mind": {
        name: "Focused Mind",
        pos: "i4",
        icon: icons["morale_focusedmind"],
        maxRank: 1,
        reqPoints: 15,
        description: talentText`level 2\n720 adrenaline\ninstant cast\nability\n\nYou gain a buff for 15 seconds. Abilities will have 50% faster cast time and you will have 100% pushback immunity.`,
      },
      "Explosive Impact": {
        name: "Explosive Impact",
        pos: "i6",
        icon: icons["morale_explosiveimpact"],
        maxRank: 1,
        reqPoints: 25,
        description: talentText`level 3\n1800 adrenaline\ninstant cast\nability\n\nGain a tier3 buff for 10 seconds. Whenever you hit a target with a single-target ability, you will deal 10% RAP + 150 corporeal damage and 10% SAP + 150 elemental damage to up to 24 enemies within 20ft of the target.`,
      },
      "Unleash the Winds": {
        name: "Unleash the Winds",
        pos: "i8",
        icon: icons["morale_unleashthewinds"],
        maxRank: 1,
        reqPoints: 35,
        description: talentText`level 4\n100ft range\n3600 adrenaline\ninstant cast\nability\n\nUp to 96 enemies within a 20ft location are knocked straight up into the air.`,
      },
      "Morale 3 Race": {
        name: "Morale 3r",
        pos: "b8",
        icon: icons["noicon"],
        maxRank: 1,
        reqPoints: 35,
        description: talentText`level 3\n100ft range\n1800 adrenaline\ninstant cast\nability\n\nDescription`,
      },
      "Morale 1 Class": {
        name: "Morale 1c",
        pos: "h2",
        icon: icons["noicon"],
        maxRank: 1,
        reqPoints: 5,
        description: talentText`level 1\n100ft range\n360 adrenaline\ninstant cast\nability\n\nDescription`,
      },
      "Morale 2 Class": {
        name: "Morale 2c",
        pos: "h4",
        icon: icons["noicon"],
        maxRank: 1,
        reqPoints: 15,
        description: talentText`level 2\n100ft range\n720 adrenaline\ninstant cast\nability\n\nDescription`,
      },
      "Morale 1 Spec": {
        name: "Morale 1s",
        pos: "h6",
        icon: icons["noicon"],
        maxRank: 1,
        reqPoints: 25,
        description: talentText`level 1\n100ft range\n360 adrenaline\ninstant cast\nability\n\nDescription`,
      },
      "Morale 2 Spec": {
        name: "Morale 2s",
        pos: "h8",
        icon: icons["noicon"],
        maxRank: 1,
        reqPoints: 35,
        description: talentText`level 2\n100ft range\n720 adrenaline\ninstant cast\nability\n\nDescription`,
      },
      "Morale 4 Spec": {
        name: "Morale 4s",
        pos: "i9",
        icon: icons["noicon"],
        maxRank: 1,
        reqPoints: 40,
        description: talentText`level 4\n100ft range\n3600 adrenaline\ninstant cast\nability\n\nDescription`,
      },
      "Race Tactic 1": {
        name: "Archetype Tactic",
        pos: "a1",
        icon: icons["tac_race_empire"],
        maxRank: 1,
        reqPoints: 0,
        description: talentText`placeholder atm`,
      },
      "Race Tactic 2": {
        name: "Race Tactic 2",
        pos: "i1",
        icon: icons["tac_race_empire"],
        maxRank: 1,
        reqPoints: 0,
        description: talentText`placeholder atm`,
      },
      "a": {
        name: "a",
        pos: "f8",
        icon: icons["noicon"],
        maxRank: 1,
        reqPoints: 0,
        prereq: "Wounds",
        arrows: [{ dir: "down", from: "f7", to: "f8" }],
        description: talentText`100ft range\n50 AP\n2.0s cast\n5.0s CD\nabilityskillspell\n\nDescription`,
      },
    },
  },
  "Battle Wizard": {
    name: "Battle Wizard",
    background: backgrounds["battlewizard"],
    icon: icons["archetype_offsupport"],
    talents: {
      "Motivated": {
        name: "Motivated",
        pos: "a2",
        icon: icons["rrtac_motivated"],
        maxRank: 1,
        reqPoints: 5,
        description: talentText`You gain 5 adrenaline every second while in combat.`,
      },
      "Strength in Numbers": {
        name: "Strength in Numbers",
        pos: "b2",
        icon: icons["rrtac_strengthinnumbers"],
        maxRank: 1,
        reqPoints: 5,
        description: talentText`Whenever you use a basic attack, all groupmates within 100 feet that also have this tactic will gain a stack. Max 5 stacks, each stack grants 2 adrenaline per second for a duration of 5 seconds.`,
      },
      "Uncontrolled": {
        name: "Uncontrolled",
        pos: "a4",
        icon: icons["rrtac_uncontrolled"],
        maxRank: 1,
        reqPoints: 15,
        description: talentText`Whenever Unstoppable, Inevitable, or Immovable is applied to you, you will gain 20 adrenaline per second over 5 seconds.`,
      },
      "Stay in Formation": {
        name: "Stay in Formation",
        pos: "b4",
        icon: icons["rrtac_stayinformation"],
        maxRank: 1,
        reqPoints: 15,
        description: talentText`Whenever you are attacked by an opponent you have Cover from, you will gain 10 adrenaline per second for 3 seconds.`,
      },
      "Gotta Go Fast": {
        name: "Gotta Go Fast",
        pos: "b6",
        icon: icons["rrtac_gottagofast"],
        maxRank: 1,
        reqPoints: 25,
        description: talentText`You gain 1 stack of Revelry every second while moving.\n\nRevelry: 1 adrenaline per second. Stacks 15 times and lasts 3 seconds.`,
      },
      "Festive Chaos": {
        name: "Festivity",
        pos: "a6",
        icon: icons["rrtac_festivechaos"],
        maxRank: 1,
        reqPoints: 25,
        description: talentText`You gain 2 stacks of Revelry each time you use an ability. Whenever you critically hit, you will lose all stacks of Revelry.\n\nRevelry: 1 adrenaline per second. Stacks 15 times and lasts 3 seconds.`,
      },
      "Fatass": {
        name: "Fatass",
        pos: "a8",
        icon: icons["rrtac_fatass"],
        maxRank: 1,
        reqPoints: 35,
        description: talentText`Increases your mass by 1.`,
      },
      "Dissipation Expert": {
        name: "Dissipation Expert",
        pos: "a9",
        icon: icons["rrtac_dissipation"],
        maxRank: 1,
        reqPoints: 40,
        description: talentText`Whenever you use an ability that removes a buff or debuff, you will gain 15 adrenaline per second for 3 seconds.`,
      },
      "Agility": {
        name: "Agility",
        pos: "b5",
        icon: icons["stat_agl"],
        maxRank: 2,
        reqPoints: 20,
        description: talentText`Increases your Agility by ${[
          40,
          95,
          165,
          250,
          350,
        ]}.`,
      },
      "Ballistic Skill": {
        name: "Ballistic Skill",
        pos: "b7",
        icon: icons["stat_bal"],
        maxRank: 3,
        reqPoints: 30,
        description: talentText`Increases your Ballistic Skill by ${[
          40,
          95,
          165,
          250,
          350,
        ]}.`,
      },
      "Initiative": {
        name: "Initiative",
        pos: "b3",
        icon: icons["stat_ini"],
        maxRank: 3,
        reqPoints: 10,
        description: talentText`Increases your Initiative by ${[
          40,
          95,
          165,
          250,
          350,
        ]}.`,
      },
      "Intelligence": {
        name: "Intelligence",
        pos: "e7",
        icon: icons["stat_int"],
        maxRank: 3,
        reqPoints: 30,
        description: talentText`Increases your Intelligence by ${[
          40,
          95,
          165,
          250,
          350,
        ]}.`,
      },
      "Strength": {
        name: "Strength",
        pos: "h7",
        icon: icons["stat_str"],
        maxRank: 2,
        reqPoints: 30,
        description: talentText`Increases your Strength by ${[
          40,
          95,
          165,
          250,
          350,
        ]}.`,
      },
      "Toughness": {
        name: "Toughness",
        pos: "e5",
        icon: icons["stat_tou"],
        maxRank: 3,
        reqPoints: 20,
        description: talentText`Increases your Toughness by ${[
          40,
          95,
          165,
          250,
          350,
        ]}.`,
      },
      "Willpower": {
        name: "Willpower",
        pos: "h3",
        icon: icons["stat_wil"],
        maxRank: 3,
        reqPoints: 10,
        description: talentText`Increases your Willpower by ${[
          40,
          95,
          165,
          250,
          350,
        ]}.`,
      },
      "Wounds": {
        name: "Wounds",
        pos: "h5",
        icon: icons["stat_wou"],
        maxRank: 3,
        reqPoints: 20,
        description: talentText`Increases your Wounds by ${[
          40,
          95,
          165,
          250,
          350,
        ]}.`,
      },
      "Weapon Skill": {
        name: "Weapon Skill",
        pos: "e3",
        icon: icons["stat_ws"],
        maxRank: 3,
        reqPoints: 10,
        description: talentText`Increases your Weapon Skill by ${[
          40,
          95,
          165,
          250,
          350,
        ]}.`,
      },
      "Far Sight": {
        name: "Far Sight",
        pos: "e4",
        icon: icons["tac_arche"],
        maxRank: 1,
        reqPoints: 15,
        description: talentText`Your range is increased by 20%.`,
      },
      "Return Life": {
        name: "Return Life",
        pos: "i2",
        icon: icons["morale_returnlife"],
        maxRank: 1,
        reqPoints: 5,
        description: talentText`level 1\n100ft range\n360 adrenaline\ninstant cast\nability\n\nReturn target groupmate back to life at the location of its corpse with 2000 health and no other resources. Cannot be used on corpses with Forlorn.`,
      },
      "Focused Mind": {
        name: "Focused Mind",
        pos: "i4",
        icon: icons["morale_focusedmind"],
        maxRank: 1,
        reqPoints: 15,
        description: talentText`level 2\n720 adrenaline\ninstant cast\nability\n\nYou gain a buff for 15 seconds. Abilities will have 50% faster cast time and you will have 100% pushback immunity.`,
      },
      "Explosive Impact": {
        name: "Explosive Impact",
        pos: "i6",
        icon: icons["morale_explosiveimpact"],
        maxRank: 1,
        reqPoints: 25,
        description: talentText`level 3\n1800 adrenaline\ninstant cast\nability\n\nGain a tier3 buff for 10 seconds. Whenever you hit a target with a single-target ability, you will deal 10% RAP + 150 corporeal damage and 10% SAP + 150 elemental damage to up to 24 enemies within 20ft of the target.`,
      },
      "Unleash the Winds": {
        name: "Unleash the Winds",
        pos: "i8",
        icon: icons["morale_unleashthewinds"],
        maxRank: 1,
        reqPoints: 35,
        description: talentText`level 4\n100ft range\n3600 adrenaline\ninstant cast\nability\n\nUp to 96 enemies within a 20ft location are knocked straight up into the air.`,
      },
      "Morale 3 Race": {
        name: "Morale 3r",
        pos: "b8",
        icon: icons["noicon"],
        maxRank: 1,
        reqPoints: 35,
        description: talentText`level 3\n100ft range\n1800 adrenaline\ninstant cast\nability\n\nDescription`,
      },
      "Morale 1 Class": {
        name: "Morale 1c",
        pos: "h2",
        icon: icons["noicon"],
        maxRank: 1,
        reqPoints: 5,
        description: talentText`level 1\n100ft range\n360 adrenaline\ninstant cast\nability\n\nDescription`,
      },
      "Morale 2 Class": {
        name: "Morale 2c",
        pos: "h4",
        icon: icons["noicon"],
        maxRank: 1,
        reqPoints: 15,
        description: talentText`level 2\n100ft range\n720 adrenaline\ninstant cast\nability\n\nDescription`,
      },
      "Morale 1 Spec": {
        name: "Morale 1s",
        pos: "h6",
        icon: icons["noicon"],
        maxRank: 1,
        reqPoints: 25,
        description: talentText`level 1\n100ft range\n360 adrenaline\ninstant cast\nability\n\nDescription`,
      },
      "Morale 2 Spec": {
        name: "Morale 2s",
        pos: "h8",
        icon: icons["noicon"],
        maxRank: 1,
        reqPoints: 35,
        description: talentText`level 2\n100ft range\n720 adrenaline\ninstant cast\nability\n\nDescription`,
      },
      "Morale 4 Spec": {
        name: "Morale 4s",
        pos: "i9",
        icon: icons["noicon"],
        maxRank: 1,
        reqPoints: 40,
        description: talentText`level 4\n100ft range\n3600 adrenaline\ninstant cast\nability\n\nDescription`,
      },
      "Race Tactic 1": {
        name: "Archetype Tactic",
        pos: "a1",
        icon: icons["tac_race_empire"],
        maxRank: 1,
        reqPoints: 0,
        description: talentText`placeholder atm`,
      },
      "Race Tactic 2": {
        name: "Race Tactic 2",
        pos: "i1",
        icon: icons["tac_race_empire"],
        maxRank: 1,
        reqPoints: 0,
        description: talentText`placeholder atm`,
      },
      "a": {
        name: "a",
        pos: "f8",
        icon: icons["noicon"],
        maxRank: 1,
        reqPoints: 0,
        prereq: "Wounds",
        arrows: [{ dir: "down", from: "f7", to: "f8" }],
        description: talentText`100ft range\n50 AP\n2.0s cast\n5.0s CD\nabilityskillspell\n\nDescription`,
      },
    },
  },
};
