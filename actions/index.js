import axios from 'axios';
export const FETCH_WEATHER = 'FETCH_WEATHER';
const API_KEY='18552de6178436e68e535854e9b6d976';
const ROOT_URL=`https://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;
export function fetchWeather(city){
    const url=`${ROOT_URL}&q=${city},us`
    const weatherData=axios.get(url);
    return{
        type:FETCH_WEATHER,
        payload: weatherData
    };
}