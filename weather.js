const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '24f7672761msh7db4cbe2afe347dp1cf9b5jsn8dc08698a275',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

const getweather = (city) => {
	cityName.innerHTML = city;
	const url = `https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${city}`;
	(async function () {
		try {
			const response = await fetch(url, options);
			const result = await response.json();
			console.log(result);
			cloud_pct.innerHTML = result.cloud_pct;
		    temp.innerHTML = result.temp;
		    feels_like.innerHTML = result.feels_like;
		    humidity.innerHTML = result.humidity;
		    min_temp.innerHTML = result.min_temp;
		    max_temp.innerHTML = result.max_temp;
		    wind_speed.innerHTML = result.wind_speed;
		    wind_degrees.innerHTML = result.wind_degrees;
		    sunrise.innerHTML = result.sunrise;
		    sunset.innerHTML = result.sunset;
		} 
		catch (error) {
			console.error(error);
		}
	})();
};
  
document.getElementById("submit").addEventListener("submit", (e) => {
	e.preventDefault()
	const city = document.getElementById("city").value;
	getweather(city);
});

// getweather("new york");
