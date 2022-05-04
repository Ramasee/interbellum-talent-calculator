import React, { lazy, Suspense } from "react";
import { Route } from "react-router-dom";

import "./App.css";
import { KlassList } from "./components/KlassList";

const Squire = lazy(() => import("./trees/Squire"));
const WarriorPriest = lazy(() => import("./trees/WarriorPriest"));

export const App: React.FC = () => {
  return (
    <div className="App">
      <KlassList />
      <Suspense fallback={null}>
        <Route path="/squire" component={Squire} />
        <Route path="/warriorpriest" component={WarriorPriest} />
      </Suspense>
    </div>
  );
};
