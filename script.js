document.addEventListener("DOMContentLoaded", () => {
    const apiKey = '060f85daf787e295f916cd0f9365fa56';
    const city = 'Gjilan'; 

    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${'Gjilan'}&appid=${'060f85daf787e295f916cd0f9365fa56'}&units=metric`;

    
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const weatherInfo = document.querySelector('.weather-info');
            const temperature = data.main.temp;
            const description = data.weather[0].description;
            const icon = data.weather[0].icon;
            const wind = data.wind.speed;

            weatherInfo.innerHTML = `
                <h2>${city}</h2>
                <img src="http://openweathermap.org/img/wn/${icon}.png" alt="weather-icon">
                <p>${description}</p>
                <p>Temperature: ${temperature}°C</p>
                <p>Speed: ${wind}km/h</p>
            `;
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
            const weatherInfo = document.querySelector('.weather-info');
            weatherInfo.innerHTML = '<p>Ate qe po kerkoni nuk gjendet</p>';
        });
});

//ni search ma von