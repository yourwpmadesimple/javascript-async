import { get } from "./includes/get.js";
import { successHandler } from "./includes/successHandler.js";
import { failHandler } from "./includes/failHandler.js";

document.addEventListener("DOMContentLoaded", () => {
  //const apiKey = "082ff726cddf285ae3b74b8f9a32abda"; // ADD YOUR API KEY BETWEEN THE QUOTES
  const apiKey = "";
  const url =
    "https://api.openweathermap.org/data/2.5/weather?q=charlotte&APPID=" +
    apiKey;
  //get(url, successHandler, failHandler);
  get(url)
    .then(function (response) {
      successHandler(response);
    })
    .catch(function (status) {
      failHandler(status);
    });
});
