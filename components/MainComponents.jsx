import Aside from "./Aside/Aside";
import Mainhead from "./Mainhead";
import Subhead from "./Subhead";
import Forecast from "./Forecast";
import bigImage from "../assets/images/bg-today-large.svg";
import smallImage from "../assets/images/bg-today-small.svg";
import dataSet from "./hooks";

export default function MainComponent() {
  const { data, location } = dataSet();
  if (!data) return;
  const currentData = data.current;
  const currentDataUnit = data.current_units;
  const date = new Date(currentData.time).toDateString();

  return (
    <main>
      <section className="container">
        <div className="grid">
          <div>
            <div className="main-display">
              <picture>
                <source media="(max-width: 430px)" srcSet={smallImage} />
                <source media="(max-width: 768px)" srcSet={bigImage} />
                <img
                  className="background-img"
                  src={bigImage}
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
