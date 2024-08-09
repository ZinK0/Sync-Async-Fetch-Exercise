// Take user action like input the city
let api_key = "7243ae234ab17718e54f80392370a3e9";
let geolocation_api =
  "https://api.openweathermap.org/geo/1.0/direct?q=yangon&limit=5&appid=7243ae234ab17718e54f80392370a3e9";

//   Testing ...
// let searchForm = document.getElementById("search");
// let searchBox = document.getElementById("search_box");
// let searchCity = "Mandalay";

// searchForm.addEventListener("submit", (e) => {
//   searchCity = searchBox.value;
//   e.preventDefault();
//   console.log(searchCity);
// });
// console.log(searchCity);
// Testing End ...

async function getWeatherData(api_key) {
  try {
    let getGeolocation = await fetch(geolocation_api);
    let geoData = await getGeolocation.json();
    let latitude = geoData[0].lat;
    let longitude = geoData[0].lon;
    let currentWeather_api = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${api_key}`;

    let currentWeather = await fetch(currentWeather_api);
    let currentWeatherData = await currentWeather.json();
    console.log(currentWeatherData);
    console.log(
      `Current ${currentWeatherData.name} => `,
      currentWeatherData.weather[0].description
    );
    console.log("Current Temperature =>", currentWeatherData.main.temp, "°C");
  } catch (error) {}
}
getWeatherData(api_key);
