import axios from 'axios';

export const getWeather = (city) => (
    //axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=e93c77d68b685569fa7a40ac44f04a19`)
    axios.get(`http://api.openweathermap.org/data/2.5/forecast/city?q=${city}&units=metric&appid=e93c77d68b685569fa7a40ac44f04a19`)
);

export const getWeatherImg = (id) => {
    return `http://openweathermap.org/img/w/${id}.png`
}