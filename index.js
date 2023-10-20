let sendGetRequestBtnEl = document.getElementById("sendGetRequestBtn");
let requestStatusEl = document.getElementById("requestStatus");
let httpResponseEl = document.getElementById("httpResponse");
let loadingEl = document.getElementById("loading");

function createAndAppend(event) {
  let url = "https://gorest.co.in/public-api/users";
  let options = {
    method: "GET",
  };
  loadingEl.classList.remove("d-none");
  requestStatusEl.classList.add("d-none");
  fetch(url, options)
    .then(function (response) {
      return response.json();
    })
    .then(function (jsondate) {
      requestStatusEl.classList.remove("d-none");
      loadingEl.classList.add("d-none");
      //console.log(jsondate)
      let requestStatus = jsondate.code;
      //console.log(requestStatus)
      let httpResponse = JSON.stringify(jsondate);
      //console.log(httpResponse);
      requestStatusEl.textContent = requestStatus;
      httpResponseEl.textContent = httpResponse;
    });
}

sendGetRequestBtnEl.addEventListener("click", createAndAppend);
