import { useRef } from "react";
import axios from "axios";

export default function OpenWeatherEx() {
    const result = useRef(null);
    const getWeather = () => {
        // axios 사용해서 openweather 날씨 정보 가져오기
        const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?'; // api url
        const appid = process.env.REACT_APP_OPEN_WEATHER_API_KEY; // api key
        const lat = '37.555899'; // 위도
        const lon = '126.972328'; // 경도

        axios.get(apiUrl, {
            params: {
                appid: appid,
                lat: lat,
                lon: lon
            }
        })
        .then(res => {
            console.log(res);
            let tag = '';
            tag += `<h2>도시명 : ${res.data.name}</h2>`;
            tag += `<h2>현재 날씨 : ${res.data.weather[0].main}</h2>`;
            tag += `<h2>현재 온도 : ${(res.data.main.temp-273.15).toFixed(2)}</h2>`;
            tag += `<h2>최고 온도 : ${(res.data.main.temp_max-273.15).toFixed(2)}</h2>`;
            tag += `<h2>최저 온도 : ${(res.data.main.temp_min-273.15).toFixed(2)}</h2>`;
            tag += `<h2>바람 세기 : ${res.data.wind.speed}</h2>`;

            result.current.innerHTML = tag;
        })
        .catch(err => {
            console.log(err);
        })
        .finally(() => {
            console.log('finally');
        });
    }

    return (
        <div>
            <h2>OpenWeatherEx</h2>
            <button onClick={getWeather}>날씨 정보 가져오기</button>
            <div ref={result}></div>
        </div>
    )
}