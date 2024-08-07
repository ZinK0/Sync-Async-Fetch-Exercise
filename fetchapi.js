let geolocation_api =
  "https://api.openweathermap.org/geo/1.0/direct?q=Yangon&limit=5&appid=7243ae234ab17718e54f80392370a3e9";

fetch(geolocation_api)
  .then((response) => {
    console.log(response.status);

    if (response.status === 404) {
      throw new Error("Your api not working ...");
    }
    return response.json();
  })
  .then((data) => {
    console.log(data);

    let lat = data[0].lat;
    let lon = data[0].lon;
    console.log("Your city latitude => ", lat, "&", "longitude => ", lon);

    let weather_api_modi = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=7243ae234ab17718e54f80392370a3e9`;
    return fetch(weather_api_modi);
  })
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log("Yangon Weather is =>", data.weather[0].description);
  })
  .catch((error) => {
    console.log(error);
  });
