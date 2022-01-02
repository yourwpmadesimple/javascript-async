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

  // const url =
  //   "https://api.openweathermap.org/data/2.5/weather?q=charlotte&APPID=" +
  //   apiKey;
  const urls = locations.map(function (location) {
    return `https://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=${apiKey}`;
  });

  //get(url, successHandler, failHandler);
  //get(url)
  Promise.all([get(urls[0]), get(urls[1]), get(urls[2]), get(urls[3])])
    // .then(function (response) {
    //   successHandler(response);
    // })
    .then(function (responses) {
      return responses.map(function (response) {
        return successHandler(response);
      });
    })
    .then(function (literals) {
      weatherDiv.innerHTML = `
      <h1>Weather</h1>
      ${literals.join("")}
      `;
    })
    .catch(function (status) {
      failHandler(status);
      const weatherDiv = document.querySelector("#weather");
      weatherDiv.classList.remove("hidden");
    })
    .finally(function () {
      weatherDiv.classList.remove("hidden");
    });
});
