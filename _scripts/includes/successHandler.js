import { tempToF } from "./tempToF.js";

export const successHandler = (data) => {
  const dataObj = JSON.parse(data);
  const weatherDiv = document.querySelector("#weather");
  const weatherFragment = `
          <h1>Weather</h1>
          <h2 class="top">
          <img
              src="http://openweathermap.org/img/w/${
                dataObj.weather[0].icon
              }.png"
              alt="${dataObj.weather[0].description}"
              width="50"
              height="50"
          />${dataObj.name}
          </h2>
          <p>
          <span class="tempF">${tempToF(dataObj.main.temp)}&deg;</span> | ${
    dataObj.weather[0].description
  }
          </p>
      `;
  weatherDiv.innerHTML = weatherFragment;
};
