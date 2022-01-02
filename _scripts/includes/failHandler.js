export const failHandler = (status) => {
  console.log("f failHandler: ", status);
  const weatherDiv = document.querySelector("#weather");
  weatherDiv.classList.remove("hidden");
};
