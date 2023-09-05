const apiKey = '5c44109fb38043e3d802c384091bd66d';

const cities = ['New York', 'London', 'Paris', 'Tokyo', 'Sydney', 'Berlin', 'Rome', 'Los Angeles', 'Beijing', 'Rio de Janeiro','India'];

async function getWeatherData() {
  try {
    const randomCity = cities[Math.floor(Math.random() * cities.length)];

    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${randomCity}&appid=${apiKey}&units=metric`);

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json();

    updateWeatherInfo(data);
  } catch (error) {
    console.error('Error fetching weather data:', error);
    document.querySelector('.weather-data').innerHTML = 'Error fetching weather data.';
  }
}

function updateWeatherInfo(data) {
  const weatherContainer = document.querySelector('.weather-data');
  weatherContainer.innerHTML = ''; // Clear previous content

  const cityName = document.createElement('h2');
  cityName.textContent = data.name;

  const temperature = document.createElement('p');
  temperature.textContent = `Temperature: ${data.main.temp}°C`;

  const description = document.createElement('p');
  description.textContent = `Description: ${data.weather[0].description}`;

  weatherContainer.appendChild(cityName);
  weatherContainer.appendChild(temperature);
  weatherContainer.appendChild(description);
}

window.addEventListener('load', getWeatherData);
