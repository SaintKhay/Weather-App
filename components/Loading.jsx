import PrimaryHeader from "./PrimaryHeader";
import Aside from "./Aside/Aside";
import React from "react";
import loadIcon from "../assets/images/icon-loading.svg";
import { formatDate, handleImageSrc } from "./apiUrl";

export default function Loading() {
  const [markupData] = React.useState([
    [
      { text: "Feels Like", value: "-" },
      { text: "Humidity", value: "-" },
      { text: "Wind", value: "-" },
      { text: "Precipitation", value: "-" },
    ],

    { days: ["", "", "", "", "", "", "", ""] },
  ]);
  const [data] = React.useState([
    " - ",
    " - ",
    " - ",
    " - ",
    " - ",
    " - ",
    " - ",
    " - ",
  ]);

  return (
    <aside>
      <div className="side-container">
        <span className="side-sub-container">
          <p className="hourly-forecast forcast-text">Hourly forecast</p>
          <select className="'unit-feature" name="feature">
            <option value=""> - </option>
          </select>
        </span>

        <ul className="aside-sub-container">
          {data.map((data, index) => (
            <li key={index}>
              <span>
                <img className="hourly-weather" src={loadIcon} alt="Weather" />
                <p className="aside-time">{data}</p>
              </span>
              <p className="aside-temp">{data}</p>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
  // <>
  //   <div className="loading-container-head">
  //     <img src={loadIcon} alt="Loading" className="loading-icon" />
  //     <p className="load-text">Loading...</p>
  //   </div>

  //   {/* Loading sub head */}

  //   <div className="sub-header">
  //     {markupData[0].map((data, index) => (
  //       <div className="sub-head" key={index}>
  //         <p className="sub-head-text">{data.text}</p>
  //         <p className="sub-head-value">{data.value}</p>
  //       </div>
  //     ))}
  //   </div>

  //   {/* Loading forecast */}
  //   {data.map((data, index) => (
  //     <div key={index} className="forecast-sub">
  //       <p className="days">{data}</p>
  //       <p className="weather-rep">{data}</p>
  //       <span className="temps">
  //         <p className="temperature">{data}</p>
  //         <p className="temp-second">{data}</p>
  //       </span>
  //     </div>
  //   ))}

  //   {/* Loading Aside */}
  //   <Aside
  //     data={{ time: [""] }}
  //     hourlydata={{ time: [""], temperature_2m: [""] }}
  //   />
  // </>
  // )
}
