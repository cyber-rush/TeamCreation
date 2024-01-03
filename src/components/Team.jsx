import React from "react";

const Team = ({ team }) => {
  const calculateAverageAge = () => {
    const totalAge = team.reduce((acc, member) => acc + member.age, 0);
    return team.length > 0 ? (totalAge / team.length).toFixed(2) : 0;
  };

  return (
    <div className="flex-col items-center border-8 border-black m-8 p-2">
      <div className="text-3xl font-bold">Team</div>
      {team.map((member, index) => (
        <div
          key={index}
          className="flex text-xl p-2 border-4 m-2 justify-between"
        >
          <div>{member.first_name}</div>
          <div>{member.age}</div>
        </div>
      ))}
      {team.length > 0 && (
        <div className="flex text-xl p-2  m-2 justify-between bg-purple-500 rounded-md">
          Average Age: {calculateAverageAge()}{" "}
          {/* Displaying the average age */}
        </div>
      )}
    </div>
  );
};

export default Team;
