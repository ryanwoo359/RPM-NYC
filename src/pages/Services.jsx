import React from "react";
import { serviceInfo } from "../Constants";

export default function Services() {
  return (
    <>
      <h1>Services</h1>
      <p>{serviceInfo.description}</p>
      <div>
        <h2>Routine Maintenance</h2>
        <p>
          Keep your car in peak condition with our comprehensive routine
          maintenance services. From regular oil changes and brake inspections
          to tire rotations and fluid checks, our team ensures your vehicle runs
          smoothly and efficiently. Trust us to handle every detail, so you can
          drive with confidence.
        </p>
      </div>
      <div id="stuff">
        <h2>Performance Upgrades</h2>
        <p>
          Unleash the full potential of your vehicle with our custom performance
          upgrades. Whether you're looking for more horsepower, better handling,
          or a more aggressive sound, we offer a range of options to take your
          car to the next level.
        </p>
      </div>

      <div>
        <h2>Diagnostic & Electrical Services</h2>
        <p>
          Our state-of-the-art diagnostic tools and experienced technicians can
          quickly identify and resolve any issues, ensuring your vehicle runs at
          its best. From check engine lights to complex electrical problems,
          we’ve got you covered.
        </p>
      </div>
      <div>
        <h2>Body and Paint Services</h2>
        <p>
          Bring your car back to its original glory or give it a fresh new look.
          Our body and paint experts can handle anything from minor touch-ups to
          complete custom paint jobs, with a meticulous attention to detail that
          ensures a flawless finish every time.
        </p>
      </div>
      <div>
        <h2>Specialized Services</h2>
        <p>
          At RPM NYC, we go beyond standard repairs with services tailored for
          high-performance, exotic, and classic vehicles. Whether you’re looking
          to restore a vintage model or prepare your car for the track, our
          specialized team is ready to meet your unique needs.
        </p>
      </div>
    </>
  );
}
