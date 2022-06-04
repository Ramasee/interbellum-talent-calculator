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
    path: "/sswordsman",
  },
  {
    name: "Warrior Priest",
    icon: icons["class_warriorpriest"],
    path: "/warriorpriest",
  },
  {
    name: "Engineer",
    icon: icons["class_engineer"],
    path: "/engineer",
  },
];

interface Props {}

export const KlassList: React.FC<Props> = () => {
  console.log(icons);

  return (
    <ul className="KlassList">
      {KLASSES.map((klass) => (
        <li className="KlassList-item" key={klass.name}>
          <Link to={klass.path} replace>
            <SquareButton icon={klass.icon} />
          </Link>
        </li>
      ))}
    </ul>
  );
};
