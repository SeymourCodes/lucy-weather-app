function displayTemperature(response) {
  console.log(response.data.temperature.current);
  let description = response.data.condition.description;
  console.log(description);
  let cityElement = document.querySelector("#city");
  let temperatureElement = document.querySelector("#temperature");
  let descriptionElement = document.querySelector("#description");
  let humidityElement = document.querySelector("#humidity");
  let windElement = document.querySelector("#wind");
  temperatureElement.innerHTML = Math.round(response.data.temperature.current);
  cityElement.innerHTML = response.data.city;
  descriptionElement.innerHTML = description;
  humidityElement.innerHTML = response.data.temperature.humidity;
  windElement.innerHTML = response.data.wind.speed;
}
let apiKey = "o81b0274593fa059b1746c53d9te3d9d";
let apiURL = `https://api.shecodes.io/weather/v1/current?query=Sydney&key=${apiKey}&units=metric`;
axios.get(apiURL).then(displayTemperature);
