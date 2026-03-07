const API_KEY = '97304b93515c523813e7ae91c64f844d';
const API_URL = 'https://api.openweathermap.org/data/2.5/weather';

const cityInput = document.getElementById('cityInput');
const searchBtn = document.getElementById('searchBtn');
const cityName = document.getElementById('cityName');
const temperature = document.getElementById('temperature');
const weatherDesc = document.getElementById('weatherDesc');
const feelsLike = document.getElementById('feelsLike');
const weatherIcon = document.getElementById('weatherIcon');
const humidity = document.getElementById('humidity');
const windSpeed = document.getElementById('windSpeed');
const pressure = document.getElementById('pressure');
const visibility = document.getElementById('visibility');

const weatherEmojis = {
    'Clear': '☀️',
    'Clouds': '☁️',
    'Rain': '🌧️',
    'Drizzle': '🌦️',
    'Thunderstorm': '⛈️',
    'Snow': '❄️',
    'Mist': '🌫️',
    'Smoke': '🌫️',
    'Haze': '🌫️',
    'Dust': '🌫️',
    'Fog': '🌫️',
    'Sand': '🌫️',
    'Ash': '🌫️',
    'Squall': '💨',
    'Tornado': '🌪️'
};

searchBtn.addEventListener('click', () =>
{
    const city = cityInput.value.trim();
    if (city)
    {
        getWeather(city);
    }
});

cityInput.addEventListener('keypress', (e) =>
{
    if (e.key === 'Enter')
    {
        const city = cityInput.value.trim();
        if (city)
        {
            getWeather(city);
        }
    }
});

async function getWeather(city)
{
    try
    {
        const response = await fetch(`${API_URL}?q=${city}&units=metric&appid=${API_KEY}`);

        if (!response.ok)
        {
            throw new Error('City not found');
        }

        const data = await response.json();
        displayWeather(data);
    } catch (error)
    {
        alert('City not found! Please try again.');
    }
}

function displayWeather(data)
{
    cityName.textContent = `${data.name}, ${data.sys.country}`;
    temperature.textContent = Math.round(data.main.temp);
    weatherDesc.textContent = data.weather[0].description;
    feelsLike.textContent = `Feels like ${Math.round(data.main.feels_like)}°C`;

    const weatherMain = data.weather[0].main;
    weatherIcon.textContent = weatherEmojis[weatherMain] || '🌤️';

    humidity.textContent = `${data.main.humidity}%`;
    windSpeed.textContent = `${Math.round(data.wind.speed * 3.6)} km/h`;
    pressure.textContent = `${data.main.pressure} hPa`;
    visibility.textContent = `${(data.visibility / 1000).toFixed(1)} km`;
}
console.log('project completed');
console.log('this sbhould be in different branch let do it brother');

