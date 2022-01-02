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

  (async () => {
    try {
      let responses = [];
      responses.push(await get(urls[0]));
      responses.push(await get(urls[1]));
      responses.push(await get(urls[2]));
      responses.push(await get(urls[3]));
      let literals = responses.map((response) => {
        return successHandler(response);
      });
      weatherDiv.innerHTML = `
      <h1>Weather<./h1>
      ${literals.join("")}
      `;
      weatherDiv.classList.remove("hidden");
    } catch (status) {
      failHandler(status);
    } finally {
      weatherDiv.classList.remove("hidden");
    }
  })();
});
