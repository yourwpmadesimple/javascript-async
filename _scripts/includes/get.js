export const get = (url) => {
  return new Promise(function (resolve, reject) {
    let httpRequest = new XMLHttpRequest();
    httpRequest.open("GET", url);
    httpRequest.onload = function () {
      if (httpRequest.status === 200) {
        console.log(httpRequest.status);
        resolve(httpRequest.responseText);
      } else {
        reject(Error(httpRequest.statusText));
      }
    };
    httpRequest.send();
  });
};
