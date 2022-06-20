import { TalentData } from "../../TalentContext";
import { talentText, requireAll } from "../../utils";

const backgrounds = requireAll(
  require.context("../../assets/tree-backgrounds/dwarf"),
);
const icons = requireAll(require.context("../../assets/icons/dwarf"));

export const data: TalentData = {
  "Skavenslayer": {
    name: "Skavenslayer",
    background: backgrounds["skavenslayer"],
    icon: icons["archetype_dps"],
    talents: {
      "Motivated": {
        name: "Motivated",
        pos: "a2",
        icon: icons["rrtac_motivated"],
        maxRank: 1,
        reqPoints: 5,
        type: "renown tactic",
        description: talentText`You gain 5 adrenaline every second while in combat.`,
      },
      "Strength in Numbers": {
        name: "Strength in Numbers",
        pos: "b2",
        icon: icons["rrtac_strengthinnumbers"],
        maxRank: 1,
        reqPoints: 5,
        type: "renown tactic",
        description: talentText`Whenever you use a basic attack, all groupmates within 100 feet that also have this tactic will gain a stack. Max 5 stacks, each stack grants 2 adrenaline per second for a duration of 5 seconds.`,
      },
      "Uncontrolled": {
        name: "Uncontrolled",
        pos: "a4",
        icon: icons["rrtac_uncontrolled"],
        maxRank: 1,
        reqPoints: 15,
        type: "renown tactic",
        description: talentText`Whenever Unstoppable, Inevitable, or Immovable is applied to you, you will gain 20 adrenaline per second over 5 seconds.`,
      },
      "Stay in Formation": {
        name: "Stay in Formation",
        pos: "b4",
        icon: icons["rrtac_stayinformation"],
        maxRank: 1,
        reqPoints: 15,
        type: "renown tactic",
        description: talentText`Whenever you are attacked by an opponent you have Cover from, you will gain 10 adrenaline per second for 3 seconds.`,
      },
      "Gotta Go Fast": {
        name: "Gotta Go Fast",
        pos: "b6",
        icon: icons["rrtac_gottagofast"],
        maxRank: 1,
        reqPoints: 25,
        type: "renown tactic",
        description: talentText`You gain 1 stack of Revelry every second while moving.\n\nRevelry: 1 adrenaline per second. Stacks 15 times and lasts 3 seconds.`,
      },
      "Festive Chaos": {
        name: "Festivity",
        pos: "a6",
        icon: icons["rrtac_festivechaos"],
        maxRank: 1,
        reqPoints: 25,
        type: "renown tactic",
        description: talentText`You gain 2 stacks of Revelry each time you use an ability. Whenever you critically hit, you will lose all stacks of Revelry.\n\nRevelry: 1 adrenaline per second. Stacks 15 times and lasts 3 seconds.`,
      },
      "Fatass": {
        name: "Fatass",
        pos: "a8",
        icon: icons["rrtac_fatass"],
        maxRank: 1,
        reqPoints: 35,
        type: "renown tactic",
        description: talentText`Increases your mass by 1.`,
      },
      "Break Loose": {
        name: "Break Loose",
        pos: "a9",
        icon: icons["rrtac_breakloose"],
        maxRank: 1,
        reqPoints: 40,
        type: "renown tactic",
        description: talentText`Movement skills you use will now remove Ensnared and Rooted from you.`,
      },
      "Agility": {
        name: "Agility",
        pos: "b5",
        icon: icons["stat_agl"],
        maxRank: 4,
        reqPoints: 20,
        type: "passive",
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
        maxRank: 2,
        reqPoints: 30,
        type: "passive",
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
        maxRank: 1,
        reqPoints: 10,
        type: "passive",
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
        type: "passive",
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
        type: "passive",
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
        maxRank: 1,
        reqPoints: 20,
        type: "passive",
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
        type: "passive",
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
        type: "passive",
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
        maxRank: 4,
        reqPoints: 10,
        type: "passive",
        description: talentText`Increases your Weapon Skill by ${[
          40,
          95,
          165,
          250,
          350,
        ]}.`,
      },
      "Sever Nerve": {
        name: "Sever Nerve",
        pos: "i2",
        icon: icons["morale_severnerve"],
        maxRank: 1,
        reqPoints: 5,
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
        pos: "i4",
        icon: icons["morale_broadswings"],
        maxRank: 1,
        reqPoints: 15,
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
        pos: "i6",
        icon: icons["morale_forceofwill"],
        maxRank: 1,
        reqPoints: 25,
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
        pos: "i8",
        icon: icons["morale_frenziedslaughter"],
        maxRank: 1,
        reqPoints: 35,
        type: "morale 4",
        cost: "no cost",
        range: "self",
        cast: "instant cast",
        cooldown: "no cooldown",
        blue: "Costs 3600 adrenaline",
        description: talentText`All groupmates within 100ft gain a buff for 15 seconds. +40% outgoing damage and 50% reduced cooldowns for the duration.`,
      },
      "Fleet-Footed": {
        name: "Fleet-Footed",
        pos: "e4",
        icon: icons["tac_arche"],
        maxRank: 1,
        reqPoints: 15,
        type: "career tactic",
        description: talentText`Your base movement speed is increased by 15%. Your mass is decreased by 1.`,
      },
      "Morale 1 Spec": {
        name: "Morale 1s",
        pos: "b8",
        icon: icons["noicon"],
        maxRank: 1,
        reqPoints: 35,
        type: "morale 1",
        cost: "no cost",
        range: "7.5ft range self",
        cast: "instant cast",
        cooldown: "no cooldown",
        blue: "Costs 360 adrenaline",
        description: talentText`Insert tooltip.`,
      },
      "Morale 2 Spec": {
        name: "Morale 2s",
        pos: "h8",
        icon: icons["noicon"],
        maxRank: 1,
        reqPoints: 35,
        type: "morale 2",
        cost: "no cost",
        range: "7.5ft range self",
        cast: "instant cast",
        cooldown: "no cooldown",
        blue: "Costs 720 adrenaline",
        description: talentText`Insert tooltip.`,
      },
      "Morale 4 Spec": {
        name: "Morale 4s",
        pos: "i9",
        icon: icons["noicon"],
        maxRank: 1,
        reqPoints: 40,
        type: "morale 4",
        cost: "no cost",
        range: "7.5ft range self",
        cast: "instant cast",
        cooldown: "no cooldown",
        blue: "Costs 3600 adrenaline",
        description: talentText`Insert tooltip.`,
      },
      "Morale 3 Race": {
        name: "Morale 3r",
        pos: "h6",
        icon: icons["noicon"],
        maxRank: 1,
        reqPoints: 25,
        type: "morale 3",
        cost: "no cost",
        range: "7.5ft range self",
        cast: "instant cast",
        cooldown: "no cooldown",
        blue: "Costs 1800 adrenaline",
        description: talentText`Insert tooltip.`,
      },
      "Morale 1 Class": {
        name: "Morale 1c",
        pos: "h2",
        icon: icons["noicon"],
        maxRank: 1,
        reqPoints: 5,
        type: "morale 1",
        cost: "no cost",
        range: "7.5ft range self",
        cast: "instant cast",
        cooldown: "no cooldown",
        blue: "Costs 360 adrenaline",
        description: talentText`Insert tooltip.`,
      },
      "Morale 2 Class": {
        name: "Morale 2c",
        pos: "h4",
        icon: icons["noicon"],
        maxRank: 1,
        reqPoints: 15,
        type: "morale 2",
        cost: "no cost",
        range: "7.5ft range self",
        cast: "instant cast",
        cooldown: "no cooldown",
        blue: "Costs 720 adrenaline",
        description: talentText`Insert tooltip.`,
      },
      "a": {
        name: "a",
        pos: "f8",
        icon: icons["noicon"],
        maxRank: 1,
        reqPoints: 0,
        prereq: "Wounds",
        arrows: [{ dir: "down", from: "f7", to: "f8" }],
        type: "ability skill spell career tactic renown tactic passive morale 1234",
        cost: "50 action points no cost",
        range: "7.5ft range self",
        cast: "2.0s instant cast",
        cooldown: "10s no cooldown",
        blue: "blue text",
        description: talentText`Insert tooltip.`,
      },
    },
  },
  "Giantslayer": {
    name: "Giantslayer",
    background: backgrounds["giantslayer"],
    icon: icons["archetype_dps"],
    talents: {
      "Motivated": {
        name: "Motivated",
        pos: "a2",
        icon: icons["rrtac_motivated"],
        maxRank: 1,
        reqPoints: 5,
        type: "renown tactic",
        description: talentText`You gain 5 adrenaline every second while in combat.`,
      },
      "Strength in Numbers": {
        name: "Strength in Numbers",
        pos: "b2",
        icon: icons["rrtac_strengthinnumbers"],
        maxRank: 1,
        reqPoints: 5,
        type: "renown tactic",
        description: talentText`Whenever you use a basic attack, all groupmates within 100 feet that also have this tactic will gain a stack. Max 5 stacks, each stack grants 2 adrenaline per second for a duration of 5 seconds.`,
      },
      "Uncontrolled": {
        name: "Uncontrolled",
        pos: "a4",
        icon: icons["rrtac_uncontrolled"],
        maxRank: 1,
        reqPoints: 15,
        type: "renown tactic",
        description: talentText`Whenever Unstoppable, Inevitable, or Immovable is applied to you, you will gain 20 adrenaline per second over 5 seconds.`,
      },
      "Stay in Formation": {
        name: "Stay in Formation",
        pos: "b4",
        icon: icons["rrtac_stayinformation"],
        maxRank: 1,
        reqPoints: 15,
        type: "renown tactic",
        description: talentText`Whenever you are attacked by an opponent you have Cover from, you will gain 10 adrenaline per second for 3 seconds.`,
      },
      "Gotta Go Fast": {
        name: "Gotta Go Fast",
        pos: "b6",
        icon: icons["rrtac_gottagofast"],
        maxRank: 1,
        reqPoints: 25,
        type: "renown tactic",
        description: talentText`You gain 1 stack of Revelry every second while moving.\n\nRevelry: 1 adrenaline per second. Stacks 15 times and lasts 3 seconds.`,
      },
      "Festive Chaos": {
        name: "Festivity",
        pos: "a6",
        icon: icons["rrtac_festivechaos"],
        maxRank: 1,
        reqPoints: 25,
        type: "renown tactic",
        description: talentText`You gain 2 stacks of Revelry each time you use an ability. Whenever you critically hit, you will lose all stacks of Revelry.\n\nRevelry: 1 adrenaline per second. Stacks 15 times and lasts 3 seconds.`,
      },
      "Fatass": {
        name: "Fatass",
        pos: "a8",
        icon: icons["rrtac_fatass"],
        maxRank: 1,
        reqPoints: 35,
        type: "renown tactic",
        description: talentText`Increases your mass by 1.`,
      },
      "Break Loose": {
        name: "Break Loose",
        pos: "a9",
        icon: icons["rrtac_breakloose"],
        maxRank: 1,
        reqPoints: 40,
        type: "renown tactic",
        description: talentText`Movement skills you use will now remove Ensnared and Rooted from you.`,
      },
      "Agility": {
        name: "Agility",
        pos: "b5",
        icon: icons["stat_agl"],
        maxRank: 4,
        reqPoints: 20,
        type: "passive",
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
        maxRank: 2,
        reqPoints: 30,
        type: "passive",
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
        maxRank: 1,
        reqPoints: 10,
        type: "passive",
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
        type: "passive",
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
        type: "passive",
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
        maxRank: 1,
        reqPoints: 20,
        type: "passive",
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
        type: "passive",
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
        type: "passive",
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
        maxRank: 4,
        reqPoints: 10,
        type: "passive",
        description: talentText`Increases your Weapon Skill by ${[
          40,
          95,
          165,
          250,
          350,
        ]}.`,
      },
      "Sever Nerve": {
        name: "Sever Nerve",
        pos: "i2",
        icon: icons["morale_severnerve"],
        maxRank: 1,
        reqPoints: 5,
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
        pos: "i4",
        icon: icons["morale_broadswings"],
        maxRank: 1,
        reqPoints: 15,
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
        pos: "i6",
        icon: icons["morale_forceofwill"],
        maxRank: 1,
        reqPoints: 25,
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
        pos: "i8",
        icon: icons["morale_frenziedslaughter"],
        maxRank: 1,
        reqPoints: 35,
        type: "morale 4",
        cost: "no cost",
        range: "self",
        cast: "instant cast",
        cooldown: "no cooldown",
        blue: "Costs 3600 adrenaline",
        description: talentText`All groupmates within 100ft gain a buff for 15 seconds. +40% outgoing damage and 50% reduced cooldowns for the duration.`,
      },
      "Fleet-Footed": {
        name: "Fleet-Footed",
        pos: "e4",
        icon: icons["tac_arche"],
        maxRank: 1,
        reqPoints: 15,
        type: "career tactic",
        description: talentText`Your base movement speed is increased by 15%. Your mass is decreased by 1.`,
      },
      "Morale 1 Spec": {
        name: "Morale 1s",
        pos: "b8",
        icon: icons["noicon"],
        maxRank: 1,
        reqPoints: 35,
        type: "morale 1",
        cost: "no cost",
        range: "7.5ft range self",
        cast: "instant cast",
        cooldown: "no cooldown",
        blue: "Costs 360 adrenaline",
        description: talentText`Insert tooltip.`,
      },
      "Morale 2 Spec": {
        name: "Morale 2s",
        pos: "h8",
        icon: icons["noicon"],
        maxRank: 1,
        reqPoints: 35,
        type: "morale 2",
        cost: "no cost",
        range: "7.5ft range self",
        cast: "instant cast",
        cooldown: "no cooldown",
        blue: "Costs 720 adrenaline",
        description: talentText`Insert tooltip.`,
      },
      "Morale 4 Spec": {
        name: "Morale 4s",
        pos: "i9",
        icon: icons["noicon"],
        maxRank: 1,
        reqPoints: 40,
        type: "morale 4",
        cost: "no cost",
        range: "7.5ft range self",
        cast: "instant cast",
        cooldown: "no cooldown",
        blue: "Costs 3600 adrenaline",
        description: talentText`Insert tooltip.`,
      },
      "Morale 3 Race": {
        name: "Morale 3r",
        pos: "h6",
        icon: icons["noicon"],
        maxRank: 1,
        reqPoints: 25,
        type: "morale 3",
        cost: "no cost",
        range: "7.5ft range self",
        cast: "instant cast",
        cooldown: "no cooldown",
        blue: "Costs 1800 adrenaline",
        description: talentText`Insert tooltip.`,
      },
      "Morale 1 Class": {
        name: "Morale 1c",
        pos: "h2",
        icon: icons["noicon"],
        maxRank: 1,
        reqPoints: 5,
        type: "morale 1",
        cost: "no cost",
        range: "7.5ft range self",
        cast: "instant cast",
        cooldown: "no cooldown",
        blue: "Costs 360 adrenaline",
        description: talentText`Insert tooltip.`,
      },
      "Morale 2 Class": {
        name: "Morale 2c",
        pos: "h4",
        icon: icons["noicon"],
        maxRank: 1,
        reqPoints: 15,
        type: "morale 2",
        cost: "no cost",
        range: "7.5ft range self",
        cast: "instant cast",
        cooldown: "no cooldown",
        blue: "Costs 720 adrenaline",
        description: talentText`Insert tooltip.`,
      },
      "a": {
        name: "a",
        pos: "f8",
        icon: icons["noicon"],
        maxRank: 1,
        reqPoints: 0,
        prereq: "Wounds",
        arrows: [{ dir: "down", from: "f7", to: "f8" }],
        type: "ability skill spell career tactic renown tactic passive morale 1234",
        cost: "50 action points no cost",
        range: "7.5ft range self",
        cast: "2.0s instant cast",
        cooldown: "10s no cooldown",
        blue: "blue text",
        description: talentText`Insert tooltip.`,
      },
    },
  },
  "Exiled": {
    name: "Exiled",
    background: backgrounds["exiled"],
    icon: icons["archetype_tank"],
    talents: {
      "Motivated": {
        name: "Motivated",
        pos: "a2",
        icon: icons["rrtac_motivated"],
        maxRank: 1,
        reqPoints: 5,
        type: "renown tactic",
        description: talentText`You gain 5 adrenaline every second while in combat.`,
      },
      "Strength in Numbers": {
        name: "Strength in Numbers",
        pos: "b2",
        icon: icons["rrtac_strengthinnumbers"],
        maxRank: 1,
        reqPoints: 5,
        type: "renown tactic",
        description: talentText`Whenever you use a basic attack, all groupmates within 100 feet that also have this tactic will gain a stack. Max 5 stacks, each stack grants 2 adrenaline per second for a duration of 5 seconds.`,
      },
      "Uncontrolled": {
        name: "Uncontrolled",
        pos: "a4",
        icon: icons["rrtac_uncontrolled"],
        maxRank: 1,
        reqPoints: 15,
        type: "renown tactic",
        description: talentText`Whenever Unstoppable, Inevitable, or Immovable is applied to you, you will gain 20 adrenaline per second over 5 seconds.`,
      },
      "Stay in Formation": {
        name: "Stay in Formation",
        pos: "b4",
        icon: icons["rrtac_stayinformation"],
        maxRank: 1,
        reqPoints: 15,
        type: "renown tactic",
        description: talentText`Whenever you are attacked by an opponent you have Cover from, you will gain 10 adrenaline per second for 3 seconds.`,
      },
      "Gotta Go Fast": {
        name: "Gotta Go Fast",
        pos: "b6",
        icon: icons["rrtac_gottagofast"],
        maxRank: 1,
        reqPoints: 25,
        type: "renown tactic",
        description: talentText`You gain 1 stack of Revelry every second while moving.\n\nRevelry: 1 adrenaline per second. Stacks 15 times and lasts 3 seconds.`,
      },
      "Festive Chaos": {
        name: "Festivity",
        pos: "a6",
        icon: icons["rrtac_festivechaos"],
        maxRank: 1,
        reqPoints: 25,
        type: "renown tactic",
        description: talentText`You gain 2 stacks of Revelry each time you use an ability. Whenever you critically hit, you will lose all stacks of Revelry.\n\nRevelry: 1 adrenaline per second. Stacks 15 times and lasts 3 seconds.`,
      },
      "Fatass": {
        name: "Fatass",
        pos: "a8",
        icon: icons["rrtac_fatass"],
        maxRank: 1,
        reqPoints: 35,
        type: "renown tactic",
        description: talentText`Increases your mass by 1.`,
      },
      "Break Loose": {
        name: "Break Loose",
        pos: "a9",
        icon: icons["rrtac_breakloose"],
        maxRank: 1,
        reqPoints: 40,
        type: "renown tactic",
        description: talentText`Movement skills you use will now remove Ensnared and Rooted from you.`,
      },
      "Agility": {
        name: "Agility",
        pos: "b5",
        icon: icons["stat_agl"],
        maxRank: 5,
        reqPoints: 20,
        type: "passive",
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
        maxRank: 2,
        reqPoints: 30,
        type: "passive",
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
        maxRank: 1,
        reqPoints: 10,
        type: "passive",
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
        maxRank: 2,
        reqPoints: 30,
        type: "passive",
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
        type: "passive",
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
        maxRank: 1,
        reqPoints: 20,
        type: "passive",
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
        type: "passive",
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
        maxRank: 4,
        reqPoints: 20,
        type: "passive",
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
        type: "passive",
        description: talentText`Increases your Weapon Skill by ${[
          40,
          95,
          165,
          250,
          350,
        ]}.`,
      },
      "Sever Nerve": {
        name: "Sever Nerve",
        pos: "i2",
        icon: icons["morale_severnerve"],
        maxRank: 1,
        reqPoints: 5,
        type: "morale 1",
        cost: "no cost",
        range: "7.5ft range",
        cast: "instant cast",
        cooldown: "no cooldown",
        blue: "Costs 360 adrenaline",
        description: talentText`Deals 50% MAP + 400 physical damage to the target.`,
      },
      "Champion's Challenge": {
        name: "Champion's Chalenge",
        pos: "i4",
        icon: icons["morale_grapple"],
        maxRank: 1,
        reqPoints: 15,
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
        pos: "i6",
        icon: icons["morale_distractingbellow"],
        maxRank: 1,
        reqPoints: 25,
        type: "morale 3",
        cost: "no cost",
        range: "self",
        cast: "instant cast",
        cooldown: "no cooldown",
        blue: "Costs 1800 adrenaline",
        description: talentText`Up to 48 enemies within 30ft of you receive a debuff. For 10 seconds, they cannot benefit from Cover.`,
      },
      "Frenzied Slaughter": {
        name: "Frenzied Slaughter",
        pos: "i8",
        icon: icons["morale_frenziedslaughter"],
        maxRank: 1,
        reqPoints: 35,
        type: "morale 4",
        cost: "no cost",
        range: "self",
        cast: "instant cast",
        cooldown: "no cooldown",
        blue: "Costs 3600 adrenaline",
        description: talentText`All groupmates within 100ft gain a buff for 15 seconds. +40% outgoing damage and 50% reduced cooldowns for the duration.`,
      },
      "Stabilized": {
        name: "Stabilized",
        pos: "e4",
        icon: icons["tac_arche"],
        maxRank: 1,
        reqPoints: 15,
        type: "career tactic",
        description: talentText`Increase your mass by 1.`,
      },
      "Morale 1 Spec": {
        name: "Morale 1s",
        pos: "b8",
        icon: icons["noicon"],
        maxRank: 1,
        reqPoints: 35,
        type: "morale 1",
        cost: "no cost",
        range: "7.5ft range self",
        cast: "instant cast",
        cooldown: "no cooldown",
        blue: "Costs 360 adrenaline",
        description: talentText`Insert tooltip.`,
      },
      "Morale 2 Spec": {
        name: "Morale 2s",
        pos: "h8",
        icon: icons["noicon"],
        maxRank: 1,
        reqPoints: 35,
        type: "morale 2",
        cost: "no cost",
        range: "7.5ft range self",
        cast: "instant cast",
        cooldown: "no cooldown",
        blue: "Costs 720 adrenaline",
        description: talentText`Insert tooltip.`,
      },
      "Morale 4 Spec": {
        name: "Morale 4s",
        pos: "i9",
        icon: icons["noicon"],
        maxRank: 1,
        reqPoints: 40,
        type: "morale 4",
        cost: "no cost",
        range: "7.5ft range self",
        cast: "instant cast",
        cooldown: "no cooldown",
        blue: "Costs 3600 adrenaline",
        description: talentText`Insert tooltip.`,
      },
      "Morale 3 Race": {
        name: "Morale 3r",
        pos: "h6",
        icon: icons["noicon"],
        maxRank: 1,
        reqPoints: 25,
        type: "morale 3",
        cost: "no cost",
        range: "7.5ft range self",
        cast: "instant cast",
        cooldown: "no cooldown",
        blue: "Costs 1800 adrenaline",
        description: talentText`Insert tooltip.`,
      },
      "Morale 1 Class": {
        name: "Morale 1c",
        pos: "h2",
        icon: icons["noicon"],
        maxRank: 1,
        reqPoints: 5,
        type: "morale 1",
        cost: "no cost",
        range: "7.5ft range self",
        cast: "instant cast",
        cooldown: "no cooldown",
        blue: "Costs 360 adrenaline",
        description: talentText`Insert tooltip.`,
      },
      "Morale 2 Class": {
        name: "Morale 2c",
        pos: "h4",
        icon: icons["noicon"],
        maxRank: 1,
        reqPoints: 15,
        type: "morale 2",
        cost: "no cost",
        range: "7.5ft range self",
        cast: "instant cast",
        cooldown: "no cooldown",
        blue: "Costs 720 adrenaline",
        description: talentText`Insert tooltip.`,
      },
      "a": {
        name: "a",
        pos: "f8",
        icon: icons["noicon"],
        maxRank: 1,
        reqPoints: 0,
        prereq: "Wounds",
        arrows: [{ dir: "down", from: "f7", to: "f8" }],
        type: "ability skill spell career tactic renown tactic passive morale 1234",
        cost: "50 action points no cost",
        range: "7.5ft range self",
        cast: "2.0s instant cast",
        cooldown: "10s no cooldown",
        blue: "blue text",
        description: talentText`Insert tooltip.`,
      },
    },
  },
};
