import React, { lazy, Suspense } from "react";
import { Route } from "react-router-dom";

import "./App.css";
import { KlassList } from "./components/KlassList";

const BrightWizard = lazy(() => import("./trees/BrightWizard"));
const Squire = lazy(() => import("./trees/Squire"));
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
const Zealot = lazy(() => import("./trees/Zealot"));
const Magus = lazy(() => import("./trees/Magus"));
const Bleaksword = lazy(() => import("./trees/Bleaksword"));
const BrideofKhaine = lazy(() => import("./trees/BrideofKhaine"));

export const App: React.FC = () => {
  return (
    <div className="App">
      <KlassList />
      <Suspense fallback={null}>
        <Route path="/brightwizard" component={BrightWizard} />
        <Route path="/squire" component={Squire} />
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
		<Route path="/zealot" component={Zealot} />
		<Route path="/Magus" component={Magus} />
		<Route path="/Bleaksword" component={Bleaksword} />
		<Route path="/brideofkhaine" component={BrideofKhaine} />
      </Suspense>
    </div>
  );
};
