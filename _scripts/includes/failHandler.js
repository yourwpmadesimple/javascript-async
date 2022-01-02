export const failHandler = (status) => {
  console.log(status);
  const weatherDiv = document.querySelector("#weather");
  weatherDiv.classList.remove("hidden");
};
