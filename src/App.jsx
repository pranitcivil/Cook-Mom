import React from "react";
import Sidebar from "./components/Sidebar";

import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <div className="flex ">
      <Sidebar />
      <Outlet />
    </div>
  );
};

export default App;

/* npm install --save '@awesome.me/kit-KIT_CODE@latest'*/
