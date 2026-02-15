const apiKey = "ce6f9380761d7f904aa5c0a6a4c11dbb";

function getWeather() {
  const city = document.getElementById("city").value.trim();
  const weatherBox = document.getElementById("weather");

  if (city === "") {
    weatherBox.innerHTML = `<p class="hint">❌ Please enter a city</p>`;
    return;
  }

  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`)
    .then(response => response.json())
    .then(data => {
      if (data.cod !== 200) {
        weatherBox.innerHTML = `<p class="hint">😢 City not found</p>`;
        return;
      }

      weatherBox.innerHTML = `
        <p>📍 ${data.name}</p>
        <p class="temp">${Math.round(data.main.temp)}°C</p>
        <p>☁ ${data.weather[0].description}</p>
        <p>💧 Humidity: ${data.main.humidity}%</p>
      `;
    })
    .catch(() => {
      weatherBox.innerHTML = `<p class="hint">⚠️ Error fetching data</p>`;
    });
}
