import React from "react";
import WeatherIcon from "./WeatherIcon";
import WeatherForecast from "./WeatherForecast";

export default function WeatherForecastDay(props) {
  function maxTemperature() {
    let temperature = Math.round(props.data.temp.max);
    return `${temperature}`;
  }
  function minTemperature() {
    let temperature = Math.round(props.data.temp.min);
    return `${temperature}`;
  }
  function day(){
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return days[day];
  }
  return (
    <div>
      <div className="WeatherForecast-day">{day()}</div>
      <WeatherIcon code={props.data.weather[0].icon} size={34} />
      <div className="WeatherForecast-temperature">
        <span className="WeatherForecast-temperature-max fw-bold">
          {maxTemperature()}°
        </span>{" "}
        <span className="WeatherForecast-temperature-min opacity-75">
          {minTemperature()}°
        </span>
      </div>
    </div>
  );
}
