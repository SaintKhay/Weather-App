import React from "react";

export default function Subhead(props) {
  const [markupData] = React.useState([
    {
      text: "Feels Like",
      value: props.values.apparent_temperature,
      unit: props.unit.apparent_temperature,
    },
    {
      text: "Humidity",
      value: props.values.relative_humidity_2m,
      unit: props.unit.relative_humidity_2m,
    },
    {
      text: "Wind",
      value: props.values.wind_speed_10m,
      unit: props.unit.wind_speed_10m,
    },
    {
      text: "Precipitation",
      value: props.values.precipitation,
      unit: props.unit.precipitation,
    },
  ]);
  // console.log(props);
  return (
    <div className="sub-header">
      {markupData.map((data, index) => (
        <div className="sub-head" key={index}>
          <p className="sub-head-text">{data.text}</p>
          <p className="sub-head-value">
            {Math.round(data.value) + " " + data.unit}
          </p>
        </div>
      ))}
    </div>
  );
}
