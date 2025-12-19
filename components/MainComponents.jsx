import Aside from "./Aside";
import Mainhead from "./Mainhead";
import Subhead from "./Subhead";
import Forecast from "./Forecast";
import { useEffect, useState } from "react";
import meteoAPI_URL from "./apiUrl";
import { geocodeAPI_URL } from "./apiUrl";
import Loading from "./Loading";

export default function MainComponent() {
  const [data, setData] = useState();
  const [location, setLocation] = useState();
  const [error, setError] = useState();
  const [loading, setLoading] = useState(true);

  // Fetch Data from Api
  function fetchData(lat, long) {
    fetch(meteoAPI_URL(lat, long))
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.log(err));
  }

  // Fetch Lat and Long from Location API
  // function fetchLatLong(location) {
  //   fetch(getLatLong(location))
  //     .then((res) => res.json())
  //     .then((data) => setLocation(data))
  //     .catch((err) => console.log(err));
  // }

  // Fetch Location from Geocode API
  function fetchLocation(lat, long) {
    fetch(geocodeAPI_URL(lat, long))
      .then((res) => res.json())
      .then((data) => setLocation(data))
      .catch((err) => console.log(err));
  }

  // console.log(fetchLatLong("Lagos"));
  // console.log(latitude);
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const lat = position.coords.latitude;
        const long = position.coords.longitude;
        fetchData(lat, long);
        fetchLocation(lat, long);
        setLoading(false);
      },
      (error) => setError("Error getting location:", error.message)
    );
  }, []);

  if (!data) return;
  // Get current weather data and current date
  const currentData = data.current;
  const currentDataUnit = data.current_units;
  const date = new Date(currentData.time).toDateString();

  // if (loading) {
  //   return <Loading />;
  // } else
  return (
    <main>
      <section className="container">
        <div className="grid">
          <div>
            <div className="main-display">
              <picture>
                <source
                  media="(max-width: 430px)"
                  srcSet="/assets/images/bg-today-small.svg"
                />
                <source
                  media="(max-width: 768px)"
                  srcSet="/assets/images/bg-today-large.svg"
                />
                <img
                  className="background-img"
                  src="/assets/images/bg-today-large.svg"
                  alt="Background image"
                />
              </picture>

              <Mainhead
                date={date}
                temp={currentData.temperature_2m}
                tempunit={currentDataUnit.temperature_2m}
                location={location}
              />
            </div>
            <Subhead values={currentData} unit={currentDataUnit} />
            <Forecast data={data.daily} />
          </div>
          <Aside data={data.daily} hourlydata={data.hourly} />
        </div>
      </section>
    </main>
  );
}
