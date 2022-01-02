export const get = (url, success, fail) => {
  let httpRequest = new XMLHttpRequest();
  httpRequest.open("GET", url);
  httpRequest.onload = function () {
    if (httpRequest.status === 200) {
      console.log(httpRequest.status);
      success(httpRequest.responseText);
    } else {
      fail(httpRequest.statusText);
    }
  };
  httpRequest.send();
};
