// Take user action like input the city
let api_key = "7243ae234ab17718e54f80392370a3e9";
let geolocation_api =
  "https://api.openweathermap.org/geo/1.0/direct?q=yangon&limit=5&appid=7243ae234ab17718e54f80392370a3e9";

//   Testing ...
// let searchForm = document.getElementById("search");
// let searchCity;
// console.log(searchCity);

// searchForm.addEventListener("submit", (e) => {
//   let searchBox = document.getElementById("search_box");
//   e.preventDefault();
//   searchCity = searchBox.value;
//   console.log(searchCity);
//   searchBox.value = "";
// });
// console.log(searchCity);

// console.log(searchCity);
// Testing End ...

// Get the date with format
// ============================
// Create a new Date object
// var today = new Date();

// // Extract the day, month, and year
// var day = String(today.getDate()).padStart(2, '0');
// var month = String(today.getMonth() + 1).padStart(2, '0'); // Months are zero-based
// var year = today.getFullYear();

// // Format the date as "dd.mm.yyyy"
// var formattedDate = day + '.' + month + '.' + year;

// console.log(formattedDate);

// async function getWeatherData(api_key) {
//   try {
//     let getGeolocation = await fetch(geolocation_api);
//     let geoData = await getGeolocation.json();
//     let latitude = geoData[0].lat;
//     let longitude = geoData[0].lon;
//     let currentWeather_api = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${api_key}`;

//     let currentWeather = await fetch(currentWeather_api);
//     let currentWeatherData = await currentWeather.json();
//     console.log(currentWeatherData);
//     console.log(
//       `Current ${currentWeatherData.name} => `,
//       currentWeatherData.weather[0].description
//     );
//     console.log("Current Temperature =>", currentWeatherData.main.temp, "°C");

//     let fiveDayWeather_api = `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${api_key}`;
//     let fiveDayWeather = await fetch(fiveDayWeather_api);
//     let fiveDayWeatherData = await fiveDayWeather.json();
//     console.log(fiveDayWeatherData);
//   } catch (error) {}
// }
// getWeatherData(api_key);
