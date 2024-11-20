const apiKey = "YOUR_API_KEY"; // Replace with your OpenWeatherMap API key
const searchBtn = document.getElementById('searchBtn');
const cityInput = document.getElementById('cityInput');
const cityName = document.getElementById('cityName');
const temperature = document.getElementById('temperature');
const weather = document.getElementById('weather');
const humidity = document.getElementById('humidity');

searchBtn.addEventListener('click', () => {
  const city = cityInput.value.trim();
  if (city) {
    fetchWeather(city);
  } else {
    alert('Please enter a city name');
  }
});

function fetchWeather(city) {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error('City not found');
      }
      return response.json();
    })
    .then(data => {
      cityName.textContent = data.name;
      temperature.textContent = `Temperature: ${data.main.temp}°C`;
      weather.textContent = `Weather: ${data.weather[0].description}`;
      humidity.textContent = `Humidity: ${data.main.humidity}%`;
    })
    .catch(error => {
      alert(error.message);
    });
}
