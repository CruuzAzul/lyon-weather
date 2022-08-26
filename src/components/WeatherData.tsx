import React, { useContext } from 'react';
import { WeatherContext } from '../WeatherComposition';
import { getCurrentWeather } from '../utils/getCurrentWeather';
import styled from 'styled-components';
import { CITY } from '../data/constants';

const WeatherDataRoot = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const CommonText = styled.span`
  z-index: 1;
  color: white;
  font-family: Verdana, sans-serif;
  font-weight: bold;
`;

const Localisation = styled(CommonText)`
  font-size: 3rem;
`;

const Temperature = styled(CommonText)`
  font-size: 5rem;
  padding-top: 4rem;
`;

export const WeatherData: React.FC = () => {
  const weatherData = useContext(WeatherContext);
  const currentWeather = getCurrentWeather(weatherData);
  const data: number | undefined = currentWeather && currentWeather.main.temp;

  return (
    <WeatherDataRoot>
      <Localisation>{CITY}</Localisation>
      <Temperature>{data}°</Temperature>
    </WeatherDataRoot>
  );
};