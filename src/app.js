function displayTemperature(response) {
  console.log(response.data.temperature.current);
  let cityElement = document.querySelector("#city");
  let temperatureElement = document.querySelector("#temperature");
  temperatureElement.innerHTML = Math.round(response.data.temperature.current);
  cityElement.innerHTML = response.data.name;
}
let apiKey = "o81b0274593fa059b1746c53d9te3d9d";
let apiURL = `https://api.shecodes.io/weather/v1/current?query=Nepal&key=${apiKey}&units=metric`;
axios.get(apiURL).then(displayTemperature);
