import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavBar } from "./componants/NavBar/nav";
<script src="https://unpkg.com/react/umd/react.production.min.js"></script>;
<script src="https://unpkg.com/react-bootstrap@next/dist/react-bootstrap.min.js"></script>;
function App() {
  const user = {
    Name: "Tareq Sabra",
    ID: 11611282,
    Pass: "1124as59",
  };
  return (
    <div className="App">
      <NavBar user={user} />
    </div>
  );
}

export default App;
