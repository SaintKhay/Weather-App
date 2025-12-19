import { useEffect, useState } from "react";
import { fetchData, fetchLocation } from "./api";

export default function dataSet() {
  const [data, setData] = useState(null);
  const [location, setLocation] = useState(null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const lat = position.coords.latitude;
        const long = position.coords.longitude;
        fetchData(lat, long).then(setData);
        fetchLocation(lat, long).then(setLocation);
      },
      (error) => setError("Error getting location:", error.message)
    );
  }, []);
  return { data, location };
}
