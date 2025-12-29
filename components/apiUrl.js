import snow from "../assets/images/icon-snow.webp";
import rain from "../assets/images/icon-rain.webp";
import drizzle from "../assets/images/icon-drizzle.webp";
import overcast from "../assets/images/icon-overcast.webp";
import partlycloudy from "../assets/images/icon-partly-cloudy.webp";
import sunny from "../assets/images/icon-sunny.webp";

export default function meteoAPI_URL(lat, long) {
  return `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${long}&daily=temperature_2m_max,temperature_2m_min&hourly=temperature_2m,wind_speed_10m,relative_humidity_2m&current=temperature_2m,relative_humidity_2m,precipitation,rain,showers,snowfall,apparent_temperature,wind_speed_10m`;
}

export function geocodeAPI_URL(lat, long) {
  return `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${long}`;
}

// export function getLatLong(location) {
//   return ` https://geocoding-api.open-meteo.com/v1/search?name=${location}`;
// }

export function handleImageSrc(temp) {
  if (temp < 0) return snow;
  else if (temp >= 0 && temp < 10) return rain;
  else if (temp >= 11 && temp < 18) return drizzle;
  else if (temp >= 19 && temp < 29) return overcast;
  else if (temp >= 29 && temp < 33) return partlycloudy;
  else if (temp >= 33) return sunny;
}
export function formatDate(date) {
  return date
    .map((time) => new Date(time).toDateString())
    .map((date) => date.substring(0, 3));
}
