import axios from 'axios';

const city = 'São Paulo';
const api = `https://api.openweathermap.org/data/2.5/forecast/daily?q=${city}&units=metric&appid=e93c77d68b685569fa7a40ac44f04a19`;
//const api = `https://rallycoding.herokuapp.com/api/music_albums`;
export const getWeather = () => (
    fetch(api)
        .then(function (response) {
            return response.json()
        })
);