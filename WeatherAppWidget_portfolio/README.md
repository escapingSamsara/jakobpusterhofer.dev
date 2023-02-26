### WeatherAppWidget <br>

This is a small project, creating a weather widget which can be implemented on a website using the "openweathermap.org" API in order to fetch local weather data (temperature, humidity, wind speed) based on the users input. <br>
Besides using the "openweathermap.org" API, the geocoding API from OpenCageData.org (https://opencagedata.com/) is used, in order to determine the users location via reverse geocoding on page load, displaying the weather at the users location.
<br>

Scope of the WeatherAppWidget:<br>
+local weather information on page load (requires user to allow location access)<br>
+current temperature (celsius), humidity (%) and wind speed (km/h) of location<br>
+search every city in the world and get instant, live weather information
<br>
+changing background images according to location search (for visual appeal)<br>

Current limitations (future implementations):<br>
-no option to display local time (yet)<br>
-no option to show time of sunrise/sunset<br>
-no option to show wind direction<br>
<br>

Languages used:<br>
-HTML 5<br>
-SCSS<br>
-JavaScript<br>
<br>
APIs used:<br>
-OpenWeather Current Weather Data API (https://openweathermap.org/current)<br>
-OpenCage Geocoding API (https://opencagedata.com/)<br>
