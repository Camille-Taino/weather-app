import axios from 'axios';

const API_KEY = 'YOUR API KEY HERE';
const BASE_URL = 'https://api.openweathermap.org/data/2.5';

export const fetchWeather = async (city: string) => {
try {
const response = await axios.get(`${BASE_URL}/weather?q=${city}&appid=${API_KEY}`);
return response.data;
} catch (error) {
console.error('Error fetching weather:', error);
}
};
