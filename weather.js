const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Seattle';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '24f7672761msh7db4cbe2afe347dp1cf9b5jsn8dc08698a275',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

const getweather = (city)=>{
	cityName.innerHTML = city
	(async function() {
		try {
			const response = await fetch(url, options);
			const result = await response.text();
			console.log(result);
			cloud_pct.innerHTML = response.cloud_pct
			temp.innerHTML = response.temp
			feels_like.innerHTML = response.feels_like
			humidity.innerHTML = response.hunidity
			min_temp.innerHTML = response.min_temp
			max_temp.innerHTML = response.max_temp
			wind_speed.innerHTML = response.wind_speed
			wind_degrees.innerHTML = response.wind_degrees
			sunrise.innerHTML = response.sunrise
			sunset.innerHTML = response.sunset
		} catch (error) {
			console.error(error);
		}		
	})();
}

document.getElementById("submit").addEventListener("submit",(e)=>{
	e.preventDefault();
	const city = document.getElementById('city').value;
	getweather(city);
});

getweather("Delhi");
