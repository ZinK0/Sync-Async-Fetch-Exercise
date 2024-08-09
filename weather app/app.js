// Take user action like input the city
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

async function getWeatherData() {
  try {
    let getGeolocation = await fetch(geolocation_api);
    let geoData = await getGeolocation.json();
    let latitude = geoData[0].lat;
    let longitude = geoData[0].lon;

    let currentWeather = await fetch();
  } catch (error) {}
}
getWeatherData();
