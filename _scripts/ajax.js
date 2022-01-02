import { get } from "./includes/get.js";
import { successHandler } from "./includes/successHandler.js";
import { failHandler } from "./includes/failHandler.js";

document.addEventListener("DOMContentLoaded", () => {
  const apiKey = "082ff726cddf285ae3b74b8f9a32abda"; // ADD YOUR API KEY BETWEEN THE QUOTES
  //const apiKey = "";
  const weatherDiv = document.querySelector("#weather");

  const locations = [
    "los+angeles,us",
    "san+francisco,us",
    "lone+pine,us",
    "mariposa,us",
  ];

  const urls = locations.map(function (location) {
    return `https://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=${apiKey}`;
  });
});
