import { useEffect, useState } from "react";
import { fetchData, fetchLocation } from "./api";
import snow from "../assets/images/icon-snow.webp";
import rain from "../assets/images/icon-rain.webp";
import drizzle from "../assets/images/icon-drizzle.webp";
import overcast from "../assets/images/icon-overcast.webp";
import partlycloudy from "../assets/images/icon-partly-cloudy.webp";
import sunny from "../assets/images/icon-sunny.webp";

export default function dataSet() {
  const [data, setData] = useState(null);
  const [location, setLocation] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const lat = position.coords.latitude;
        const long = position.coords.longitude;
        fetchData(lat, long)
          .then(setData)
          .finally(() => {
            setLoading(false);
          });
        fetchLocation(lat, long).then(setLocation);
      },
      (error) => setError("Error getting location:", error.message)
    );
  }, []);
  return { data, location, loading };
}

export function handleImageSrc(temp) {
  const { data, location, loading } = dataSet();

  if (data.current.snowfall > 0) return snow;
  else if (temp >= 0 && temp < 10) return rain;
  else if (temp >= 11 && temp < 18) return drizzle;
  else if (temp >= 19 && temp < 29) return overcast;
  else if (temp >= 29 && temp < 33) return partlycloudy;
  else if (temp >= 33) return sunny;
}
