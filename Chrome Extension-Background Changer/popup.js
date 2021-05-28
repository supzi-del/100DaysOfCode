document.addEventListener('DOMContentLoaded', function () {



  const colorEl = document.getElementById("color");


  colorEl.addEventListener("input", (e) => {
    // const hexValue = e.target.value;
    // chrome.tabs.executeScript(null, {
    //   code: `document.body.style.backgroundColor='${hexValue}'`,

    var color = document.getElementById("color").value
    chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
      chrome.tabs.sendMessage(tabs[0].id, color)
    });
  });


}, false)