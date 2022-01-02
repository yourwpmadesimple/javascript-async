export const get = (url, success, fail) => {
  let httpRequest = new XMLHttpRequest();
  console.log(httpRequest);
  httpRequest.open("GET", url);
  httpRequest.onload = function () {
    if (httpRequest.status === 200) {
      success(httpRequest.responseText);
    } else {
      fail(httpRequest.statusText);
    }
  };
  httpRequest.send();
};
