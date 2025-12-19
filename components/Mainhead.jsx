import { handleImageSrc } from "./apiUrl";

export default function Mainhead(props) {
  return (
    <div>
      <span>
        <p className="location">
          {props.location.city}, {props.location.countryName}
        </p>
        <p className="date-time">{props.date}</p>
      </span>
      <span className="sub-display">
        <img
          src={handleImageSrc(props.temp)}
          alt="Sunny weather"
          className="display-weather"
        />
        <p className="temp">{Math.round(props.temp)}° </p>
      </span>
    </div>
  );
}
