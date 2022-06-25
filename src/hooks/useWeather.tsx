import {useEffect, useState} from 'react';
import {continueRender, delayRender} from 'remotion';
import {fetchWeather, WeatherTypes} from "../services/fetchWeather";

export const useWeather = (): WeatherTypes | undefined => {
  const [weather, setWeather] = useState<WeatherTypes>();
  const [handle] = useState(() => delayRender());

  const fetchData = async () => {
    const response = await fetchWeather();
    setWeather(response);

    continueRender(handle);
  };

  useEffect(() => {
    fetchData().then(() => console.log('Weather fetched'));
  }, []);

  return weather;
};