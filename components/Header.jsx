import React from "react";

export default function Header() {
  const markUp = React.useState({
    text: "Temperature",
    measurement: "Celsius",
    unit: "(°C)",
  });

  const celciusUnit = "(°C)";
  const fahUnit = "(°F)";
  return (
    <header className="header">
      <nav>
        <div className="logo-container">
          <img src="assets/images/logo.svg" alt="logo" />
        </div>

        <div className="dropdown">
          <button className="dropdown-btn">⚙ Units ▾</button>
          <div className="dropdown-content">
            <h4>Temperature</h4>
            <a href="#" className="active">
              Celsius {celciusUnit}
            </a>
            <a className="border" href="#">
              Fahrenheit {fahUnit}
            </a>

            <h4>Wind Speed</h4>
            <a href="#" className="active">
              km/h
            </a>
            <a href="#" className="border">
              mph
            </a>

            <h4>Precipitation</h4>
            <a href="#" className="active">
              Millimeters (mm)
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}
