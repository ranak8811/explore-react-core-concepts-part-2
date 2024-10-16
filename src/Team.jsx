import { useState } from "react";

const Team = () => {
  const [team, setTeam] = useState(11);

  const handleAdd = () => {
    const newTeam = team + 1;
    setTeam(newTeam);
  };

  const handleRemove = () => {
    setTeam(team - 1);
  };

  const teamStyle = {
    border: "1px solid green",
    margin: "10px",
    padding: "10px",
    borderRadius: "10px",
  };
  return (
    <div style={teamStyle}>
      <h3>Players: {team}</h3>
      <button onClick={handleAdd}>Add</button>
      <button onClick={handleRemove}>Remove</button>
    </div>
  );
};

export default Team;