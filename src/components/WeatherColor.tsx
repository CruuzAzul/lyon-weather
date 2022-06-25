import styled from 'styled-components'
import React, {useContext} from "react";
import {WeatherContext} from "../WeatherComposition";
import {getCurrentWeather} from "../utils/getCurrentWeather";
import {WEATHER_CONDITION} from "../data/weatherCondition";

const BackgroundImage = styled.div<{backgroundColor: string | undefined}>`
  height: 100%;
  width: 100%;
  background-color: ${props => props.backgroundColor};
`;

export const WeatherColor: React.FC = () => {
  const weatherData = useContext(WeatherContext);
  const currentWeather = getCurrentWeather(weatherData);
  const data: keyof typeof WEATHER_CONDITION | undefined = currentWeather && currentWeather.weather[0].main;
  const backgroundColor: string | undefined = data && WEATHER_CONDITION[data].color;

  console.log(currentWeather);

  return (
    <BackgroundImage backgroundColor={backgroundColor && backgroundColor}/>
  );
};