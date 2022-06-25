import {LAT_LYON, LON_LYON} from "../data/constants";
import {DailyWeather} from "../utils/getCurrentWeather";

export interface WeatherTypes {
  list: Array<DailyWeather>;
}

export const fetchWeather = async (): Promise<WeatherTypes> => {
	return fetch(
    `https://api.openweathermap.org/data/2.5/forecast?lat=${LAT_LYON}&lon=${LON_LYON}&exclude=hourly,current,minutely,alerts&cnt=5&units=metric&appid=${process.env.OPENWEATHER_API_KEY}`,
		{method: 'GET'}
	).then((response) => response.json());
};