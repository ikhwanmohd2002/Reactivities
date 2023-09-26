import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { ducks } from "./demo";
import DuckItem from "./DuckItem";

function App() {
  return (
    <div>
      <h1>Reactivities</h1>
      {ducks.map((duck) => (
        <DuckItem key={duck.name} duck={duck} />
      ))}
    </div>
  );
}

export default App;
