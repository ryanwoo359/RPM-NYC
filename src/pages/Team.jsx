import React from "react";
import Card from "../components/employee/Employee.jsx";
import { teamDescription } from "../Constants.js";

export default function Team() {
  return (
    <>
      <h1>Team</h1>
      <p>{teamDescription}</p>
      <Card />
    </>
  );
}
