import React from "react";
import { Routes, Route } from 'react-router-dom';
import { PLUGIN_ID } from '../../pluginId';

import OverviewPage from "./OverviewPage";
import DetailPage from "./DetailPage";

const App = () => {
  return (
      <Routes>
        <Route path={"/"} element={<OverviewPage />} />
        <Route path={`/${PLUGIN_ID}/new`} element={<DetailPage />} />
        <Route path={`/${PLUGIN_ID}/:id`} element={<DetailPage />} />
      </Routes>
  );
};

export default App;
