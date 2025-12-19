import { useEffect, useState } from "react";
import { handleImageSrc } from "./apiUrl";
import { formatDate } from "./apiUrl";

export default function Aside(props) {
  //Get hourly temperature and time data
  const [currTime, setCurrTime] = useState("");
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrTime(
        new Date().toLocaleTimeString([], {
          hour: "2-digit",
        })
      );
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  //Format time data
  const time = props.hourlydata.time.map((time) => {
    const date = new Date(time);
    return date.toLocaleTimeString([], { hour: "2-digit" });
  });
  const getCurrTimeIndex = time.indexOf(currTime);

  //Get next 8 hours time and temperature
  const next8hours =
    getCurrTimeIndex !== -1
      ? time.slice(getCurrTimeIndex, getCurrTimeIndex + 8)
      : [];
  const temp =
    getCurrTimeIndex !== -1
      ? props.hourlydata.temperature_2m.slice(
          getCurrTimeIndex,
          getCurrTimeIndex + 8
        )
      : [];
  console.log(props);

  return (
    <aside>
      <div className="side-container">
        <span className="side-sub-container">
          <p className="hourly-forecast forcast-text">Hourly forecast</p>
          <select className="'unit-feature" name="feature">
            {formatDate(props.data.time).map((day, index) => (
              <option key={index} value="">
                {day}
              </option>
            ))}
          </select>
        </span>

        <ul className="aside-sub-container">
          {next8hours.map((data, index) => (
            <li key={index}>
              <span>
                <img
                  className="hourly-weather"
                  src={handleImageSrc(temp[index])}
                  alt="Weather"
                />
                <p className="aside-time">{data}</p>
              </span>
              <p className="aside-temp">{Math.round(temp[index])}°</p>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}
