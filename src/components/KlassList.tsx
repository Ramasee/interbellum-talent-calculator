import React from "react";
import { Link } from "react-router-dom";

import "./KlassList.css";
import { requireAll } from "../utils";
import { SquareButton } from "./SquareButton";

const icons = requireAll(require.context("../assets/icons", false));

const KLASSES = [
  {
    name: "Rune Scribe",
    icon: icons["class_runescribe"],
    path: "/runescribe",
  },
  {
    name: "Dwarf Warrior",
    icon: icons["class_dwarfwarrior"],
    path: "/dwarfwarrior",
  },
  {
    name: "Oathbreaker",
    icon: icons["class_oathbreaker"],
    path: "/oathbreaker",
  },
  {
    name: "Engineer",
    icon: icons["class_engineer"],
    path: "/engineer",
  },
  {
    name: "Swordsman",
    icon: icons["class_swordsman"],
    path: "/swordsman",
  },
  {
    name: "Bright Wizard",
    icon: icons["class_brightwizard"],
    path: "/brightwizard",
  },
  {
    name: "Warrior Priest",
    icon: icons["class_warriorpriest"],
    path: "/warriorpriest",
  },
  {
    name: "Knight",
    icon: icons["class_squire"],
    path: "/knight",
  },
  {
    name: "Archmage",
    icon: icons["class_archmage"],
    path: "/archmage",
  },
  {
    name: "Apprentice",
    icon: icons["class_apprentice"],
    path: "/apprentice",
  },
  {
    name: "Archer",
    icon: icons["class_archer"],
    path: "/archer",
  },
  {
    name: "White Lion",
    icon: icons["class_whitelion"],
    path: "/whitelion",
  },
];

const KLASSES2 = [
  {
    name: "Da Boyz",
    icon: icons["class_daboyz"],
    path: "/daboyz",
  },
  {
    name: "Goblin",
    icon: icons["class_goblin"],
    path: "/goblin",
  },
  {
    name: "Black Orc",
    icon: icons["class_blackorc"],
    path: "/blackorc",
  },
  {
    name: "Night Goblin",
    icon: icons["class_nightgoblin"],
    path: "/nightgoblin",
  },
  {
    name: "Chosen",
    icon: icons["class_chosen"],
    path: "/chosen",
  },
  {
    name: "Marauder",
    icon: icons["class_marauder"],
    path: "/marauder",
  },
  {
    name: "Cultist",
    icon: icons["class_zealot"],
    path: "/Cultist",
  },
  {
    name: "Magus",
    icon: icons["class_magus"],
    path: "/magus",
  },
  {
    name: "Bride of Khaine",
    icon: icons["class_brideofkhaine"],
    path: "/brideofkhaine",
  },
  {
    name: "Sorcerer",
    icon: icons["class_sorcerer"],
    path: "/sorcerer",
  },
  {
    name: "Bleaksword",
    icon: icons["class_bleaksword"],
    path: "/bleaksword",
  },
  {
    name: "Hag Graef",
    icon: icons["class_haggraef"],
    path: "/haggraef",
  },
];

interface Props {}

export const KlassList: React.FC<Props> = () => {
  console.log(icons);

  return (
   <>
    <ul className="KlassList">
      {KLASSES.map((klass) => (
        <li className="KlassList-item" key={klass.name}>
          <Link to={klass.path} replace>
            <SquareButton icon={klass.icon} />
          </Link>
        </li>
      ))}
    </ul>
	<ul className="KlassList2">
      {KLASSES2.map((klass) => (
        <li className="KlassList2-item" key={klass.name}>
          <Link to={klass.path} replace>
            <SquareButton icon={klass.icon} />
          </Link>
        </li>
      ))}
    </ul>
   </>
  );
};
