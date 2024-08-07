// what is XMLHttpRequest ?
// API link = https://api.openweathermap.org/geo/1.0/direct?q=Yangon&limit=5&appid=7243ae234ab17718e54f80392370a3e9
let browser = new XMLHttpRequest();
let api_link =
  "https://api.openweathermap.org/geo/1.0/direct?q=Yangon&limit=5&appid=7243ae234ab17718e54f80392370a3e9";

browser.open("GET", api_link);

browser.send();
