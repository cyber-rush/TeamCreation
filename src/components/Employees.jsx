// Employees.jsx
import employeesData from "../utility/data";
import { useState } from "react";

const Employees = ({ addToTeam }) => {
  const [employees, setEmployees] = useState(employeesData);

  const handleAddToTeam = (employee) => {
    addToTeam(employee);
    setEmployees(
      employees.map((emp) =>
        emp.id === employee.id ? { ...emp, addedToTeam: true } : emp
      )
    );
  };

  return (
    <div className="flex-col items-center border-8 border-black m-8 p-2">
      <h1 className="text-3xl font-bold">Employees</h1>
      {employees.map((employee, index) => (
        <div
          key={index}
          className={`flex text-xl p-2 border-4 m-2 justify-between ${
            employee.addedToTeam ? "opacity-50" : ""
          }`}
        >
          <div>{employee.first_name}</div>
          <div>{employee.age}</div>
          <button
            className="bg-purple-500 p-2 rounded-md"
            onClick={() => handleAddToTeam(employee)}
            disabled={employee.addedToTeam}
          >
            Add
          </button>
        </div>
      ))}
    </div>
  );
};

export default Employees;
