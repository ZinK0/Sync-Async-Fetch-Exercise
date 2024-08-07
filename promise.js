// what is XMLHttpRequest ?
// API link = https://api.openweathermap.org/geo/1.0/direct?q=Yangon&limit=5&appid=7243ae234ab17718e54f80392370a3e9
let geolocation_api =
  "https://api.openweathermap.org/geo/1.0/direct?q=Yangon&limit=5&appid=7243ae234ab17718e54f80392370a3e9";

let weather_api =
  "https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}";

let wrong_api = "https://cors-anywhere.herokuapp.com";

function browser(api) {
  return new Promise((resolve, reject) => {
    let browser = new XMLHttpRequest();

    browser.addEventListener("readystatechange", () => {
      console.log(
        `readyState: ${browser.readyState}, status: ${browser.status}`
      );

      if (browser.readyState === 4 && browser.status === 200) {
        let data = JSON.parse(browser.responseText);
        // console.log(browser.readyState);
        console.log(browser.status);

        resolve(data);
      } else if (browser.status === 404) {
        reject("Your API not working ... ");
      }
    });
    browser.open("GET", api);
    browser.send();
  });
}

browser(geolocation_api)
  .then((data) => {
    let lat = data[0].lat;
    let lon = data[0].lon;
    console.log("Your city latitude => ", lat, "&", "longitude => ", lon);

    let weather_api_modi = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=7243ae234ab17718e54f80392370a3e9`;
    return browser(weather_api_modi);
  })
  .then((data) => {
    console.log("Yangon Weather is =>", data.weather[0].description);
  })
  .catch((error) => {
    console.log("error", error);
  });
