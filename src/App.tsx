import React, { lazy, Suspense } from "react";
import { Route } from "react-router-dom";

import "./App.css";
import { KlassList } from "./components/KlassList";

const BrightWizard = lazy(() => import("./trees/BrightWizard"));
const Squire = lazy(() => import("./trees/Squire"));
const Swordsman = lazy(() => import("./trees/Swordsman"));
const WarriorPriest = lazy(() => import("./trees/WarriorPriest"));
const Engineer = lazy(() => import("./trees/Engineer"));

export const App: React.FC = () => {
  return (
    <div className="App">
      <KlassList />
      <Suspense fallback={null}>
        <Route path="/brightwizard" component={BrightWizard} />
        <Route path="/squire" component={Squire} />
        <Route path="/swordsman" component={Swordsman} />
        <Route path="/warriorpriest" component={WarriorPriest} />
        <Route path="/engineer" component={Engineer} />
      </Suspense>
    </div>
  );
};
