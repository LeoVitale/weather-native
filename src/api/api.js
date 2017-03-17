import axios from 'axios';

export const getForecastList = (city) => (
    //axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=e93c77d68b685569fa7a40ac44f04a19`)
    axios.get(`http://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=8f7c0b6f43fa5f3d2590299eb266dcc7`)
    //axios.get(`http://api.openweathermap.org/data/2.5/forecast/city?q=${city}&units=metric&appid=e93c77d68b685569fa7a40ac44f04a19`)
);

export const getWeatherImg = (id) => {
    return `http://openweathermap.org/img/w/${id}.png`
}

export const getWeather = (city) => (
    axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=b1cc0ead659679e5009fe3300f5d1206`)
)