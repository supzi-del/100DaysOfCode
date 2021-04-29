let body = document.querySelector("body");
    let hexCode = document.querySelector("#hexCode");
    body.style.backgroundColor = hexCode.innerText;
    function GenerateCode() {
      let RandomColor = "";
      let Char = "0123456789abcdefghijklmnopqrstuvwxyz";
      for(i = 0; i < 6; i++) {
        RandomColor = RandomColor + Char[Math.floor(Math.random() * 16)];
      }
      hexCode.innerText = "#" + RandomColor;
      body.style.backgroundColor = "#" + RandomColor;
    }