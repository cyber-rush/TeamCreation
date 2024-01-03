import React, { useState } from "react";
import Employees from "./components/Employees";
import Team from "./components/Team";

const App = () => {
  const [team, setTeam] = useState([]);

  const addToTeam = (employee) => {
    setTeam([...team, employee]);
  };

  return (
    <div className="flex">
      <Employees addToTeam={addToTeam} />
      <Team team={team} />
    </div>
  );
};

export default App;
