import React, { useContext } from 'react';
import { WeatherContext } from '../WeatherComposition';
import { getCurrentWeather } from '../utils/getCurrentWeather';
import { WEATHER_CONDITION } from '../data/weatherCondition';
import { Lottie } from '@remotion/lottie';
import styled from 'styled-components';
import { useLottie } from '../hooks/useLottie';

const Icon = styled(Lottie)``;

export const WeatherIcon: React.FC = () => {
  const weatherData = useContext(WeatherContext);
  const currentWeather = getCurrentWeather(weatherData);
  const data: keyof typeof WEATHER_CONDITION | undefined = currentWeather && currentWeather.weather[0].main;
  const icon: undefined | string = data && WEATHER_CONDITION[data].icon;
  const animationData = useLottie(icon);

  if (!animationData) {
    return null;
  }

  return <Icon loop animationData={animationData} />;
};