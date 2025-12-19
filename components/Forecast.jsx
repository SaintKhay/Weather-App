import React from "react";
import { formatDate, handleImageSrc } from "./apiUrl";

export default function Forecast(props) {
  // console.log(props.data);

  const [forecastData] = React.useState({
    tempMin: props.data.temperature_2m_min,
    tempMax: props.data.temperature_2m_max,
    days: formatDate(props.data.time),
  });

  return (
    <div className="forecast">
      <p className="forcast-text">Daily forecast</p>
      <div className="forecast-container">
        {forecastData.tempMin.map((_, index) => (
          <div className="forecast-sub" key={index}>
            <p className="days">{forecastData.days[index]}</p>
            <img
              className="weather-condition"
              src={handleImageSrc(
                (forecastData.tempMax[2] + forecastData.tempMin[2]) / 2
              )}
              alt={index}
            />
            <span className="temps">
              <p className="temperature">
                {Math.round(forecastData.tempMax[index])}°
              </p>
              <p className="temp-second">
                {Math.round(forecastData.tempMin[index])}°
              </p>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
