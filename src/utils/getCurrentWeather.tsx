import {WeatherTypes} from "../services/fetchWeather";
import {WEATHER_CONDITION} from "../data/weatherCondition";

export interface DailyWeather {
  weather: Array<{
    id: number;
    name: string;
    icon: string;
    main: keyof typeof WEATHER_CONDITION;
  }>;
}

export const getCurrentWeather = (data: WeatherTypes | undefined): DailyWeather | undefined => {
  return data && data.list[0];
};