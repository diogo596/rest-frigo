import React from "react";
import { Outlet } from "react-router-dom";
import "./scss/App.scss";

function App() {
  return (
    <div>
      <Outlet />
    </div>
  );
}

export default App;
