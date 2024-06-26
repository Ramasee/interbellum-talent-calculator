import React, { lazy, Suspense } from "react";
import { Route } from "react-router-dom";

import "./App.css";
import { KlassList } from "./components/KlassList";

const BrightWizard = lazy(() => import("./trees/BrightWizard"));
const Knight = lazy(() => import("./trees/Knight"));
const Swordsman = lazy(() => import("./trees/Swordsman"));
const WarriorPriest = lazy(() => import("./trees/WarriorPriest"));
const DwarfWarrior = lazy(() => import("./trees/DwarfWarrior"));
const Engineer = lazy(() => import("./trees/Engineer"));
const Oathbreaker = lazy(() => import("./trees/Oathbreaker"));
const RuneScribe = lazy(() => import("./trees/RuneScribe"));
const Archmage = lazy(() => import("./trees/Archmage"));
const Apprentice = lazy(() => import("./trees/Apprentice"));
const WhiteLion = lazy(() => import("./trees/WhiteLion"));
const Archer = lazy(() => import("./trees/Archer"));
const Chosen = lazy(() => import("./trees/Chosen"));
const Marauder = lazy(() => import("./trees/Marauder"));
const Cultist = lazy(() => import("./trees/Cultist"));
const Magus = lazy(() => import("./trees/Magus"));
const Bleaksword = lazy(() => import("./trees/Bleaksword"));
const BrideofKhaine = lazy(() => import("./trees/BrideofKhaine"));
const HagGraef = lazy(() => import("./trees/HagGraef"));
const Sorcerer = lazy(() => import("./trees/Sorcerer"));
const BlackOrc = lazy(() => import("./trees/BlackOrc"));
const DaBoyz = lazy(() => import("./trees/DaBoyz"));
const Goblin = lazy(() => import("./trees/Goblin"));
const NightGoblin = lazy(() => import("./trees/NightGoblin"));

export const App: React.FC = () => {
  return (
    <div className="App">
      <KlassList />
      <Suspense fallback={null}>
        <Route path="/brightwizard" component={BrightWizard} />
        <Route path="/knight" component={Knight} />
        <Route path="/swordsman" component={Swordsman} />
        <Route path="/warriorpriest" component={WarriorPriest} />
        <Route path="/dwarfwarrior" component={DwarfWarrior} />
        <Route path="/engineer" component={Engineer} />
        <Route path="/oathbreaker" component={Oathbreaker} />
        <Route path="/runescribe" component={RuneScribe} />
        <Route path="/archmage" component={Archmage} />
        <Route path="/apprentice" component={Apprentice} />
		<Route path="/whitelion" component={WhiteLion} />
		<Route path="/archer" component={Archer} />
		<Route path="/chosen" component={Chosen} />
		<Route path="/marauder" component={Marauder} />
		<Route path="/cultist" component={Cultist} />
		<Route path="/magus" component={Magus} />
		<Route path="/bleaksword" component={Bleaksword} />
		<Route path="/brideofkhaine" component={BrideofKhaine} />
		<Route path="/haggraef" component={HagGraef} />
		<Route path="/sorcerer" component={Sorcerer} />
		<Route path="/blackorc" component={BlackOrc} />
		<Route path="/daboyz" component={DaBoyz} />
		<Route path="/goblin" component={Goblin} />
		<Route path="/nightgoblin" component={NightGoblin} />
      </Suspense>
    </div>
  );
};
