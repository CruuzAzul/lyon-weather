import React from 'react';
import { AbsoluteFill } from 'remotion';
import { useWeather } from './hooks/useWeather';
import { WeatherTypes } from './services/fetchWeather';
import { WeatherColor } from './components/WeatherColor';
import { WeatherIcon } from './components/WeatherIcon';
import { WeatherData } from './components/WeatherData';

export const WeatherContext = React.createContext<WeatherTypes | undefined>({ list: {} } as WeatherTypes);

export const WeatherComposition: React.FC = () => {
  const weather = useWeather();

  return (
    <WeatherContext.Provider value={weather}>
      <AbsoluteFill>
        <WeatherColor />
      </AbsoluteFill>
      <WeatherIcon />
      <WeatherData />
    </WeatherContext.Provider>
  );
};