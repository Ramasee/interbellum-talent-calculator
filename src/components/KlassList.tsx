import React from "react";
import { Link } from "react-router-dom";

import "./KlassList.css";
import { requireAll } from "../utils";
import { SquareButton } from "./SquareButton";

const icons = requireAll(require.context("../assets/icons", false));

const KLASSES = [
  {
    name: "Bright Wizard",
    icon: icons["class_brightwizard"],
    path: "/brightwizard",
  },
  {
    name: "Squire",
    icon: icons["class_squire"],
    path: "/squire",
  },
  {
    name: "Swordsman",
    icon: icons["class_swordsman"],
    path: "/swordsman",
  },
  {
    name: "Warrior Priest",
    icon: icons["class_warriorpriest"],
    path: "/warriorpriest",
  },
  {
    name: "Dwarf Warrior",
    icon: icons["class_dwarfwarrior"],
    path: "/dwarfwarrior",
  },
  {
    name: "Engineer",
    icon: icons["class_engineer"],
    path: "/engineer",
  },
  {
    name: "Oathbreaker",
    icon: icons["class_oathbreaker"],
    path: "/oathbreaker",
  },
  {
    name: "Rune Scribe",
    icon: icons["class_runescribe"],
    path: "/runescribe",
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
    name: "White Lion",
    icon: icons["class_whitelion"],
    path: "/whitelion",
  },
  {
    name: "Archer",
    icon: icons["class_archer"],
    path: "/archer",
  },
];

const KLASSES2 = [
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
    name: "Zealot",
    icon: icons["class_zealot"],
    path: "/zealot",
  },
  {
    name: "Magus",
    icon: icons["class_magus"],
    path: "/magus",
  },
  {
    name: "Bleaksword",
    icon: icons["class_bleaksword"],
    path: "/bleaksword",
  },
  {
    name: "Bride of Khaine",
    icon: icons["class_brideofkhaine"],
    path: "/brideofkhaine",
  },
  {
    name: "Hag Graef",
    icon: icons["class_haggraef"],
    path: "/haggraef",
  },
  {
    name: "Sorcerer",
    icon: icons["class_sorcerer"],
    path: "/sorcerer",
  },
  {
    name: "Black Orc",
    icon: icons["class_blackorc"],
    path: "/blackorc",
  },
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
    name: "Night Goblin",
    icon: icons["class_nightgoblin"],
    path: "/nightgoblin",
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
