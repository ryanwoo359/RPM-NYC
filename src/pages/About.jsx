import React from "react";
import { aboutInfo } from "../Constants";

export default function About() {
  return (
    <>
      <h1>About</h1>
      <p>"All in a days work"</p>
      <h2>Our story</h2>
      <p>{aboutInfo.ourStory}</p>
      <h2>Our mission</h2>
      <p>{aboutInfo.ourMission}</p>
      <h2>Visit us</h2>
      <p>{aboutInfo.vistUs}</p>
    </>
  );
}
