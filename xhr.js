// what is XMLHttpRequest ?
// API link = https://api.openweathermap.org/geo/1.0/direct?q=Yangon&limit=5&appid=7243ae234ab17718e54f80392370a3e9

let geolocation_api =
  "https://api.openweathermap.org/geo/1.0/direct?q=Yangon&limit=5&appid=7243ae234ab17718e54f80392370a3e9";

let weather_api =
  "https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}";

function browser(api) {
  let browser = new XMLHttpRequest();

  // We got our response but have to figure out to get pure data
  //   console.log(browser);

  browser.addEventListener("readystatechange", () => {
    if ((browser.readyState === 4) & (browser.status === 200)) {
      let data = JSON.parse(browser.responseText);
      console.log(data);
      console.log(typeof data);
      console.log(data[0].name);
    }
  });

  browser.open("GET", api);
  browser.send();
}

browser(geolocation_api);
