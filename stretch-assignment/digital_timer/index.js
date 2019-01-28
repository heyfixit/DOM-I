window.onload = () => {
  const digits = Array.from(document.querySelectorAll(".digit:not(#colon)"));
  const digitWrapper = document.getElementsByClassName("digits")[0];
  const btn = document.createElement("button");
  btn.textContent = "start";
  const resetBtn = document.createElement("button");
  resetBtn.textContent = "reset";
  [ btn, resetBtn ].forEach(b => document.querySelector("body").appendChild(b));
  let startTime = Date.now();

  const renderTime = (time) => {
    const timeChars = Math.floor(time / 10).toString().padStart(4, '0');
    for(let i = 0; i < timeChars.length; i++) {
      digits[i].textContent = timeChars[i];
    }
  };

  btn.onclick = () => {
    startTime = Date.now();
    btn.disabled = true;
    digitWrapper.classList.remove("redDigit");
    const interval = setInterval(() => {
      let currentTime = Date.now() - startTime;
      if(currentTime > 10000) {
        digitWrapper.classList.add("redDigit");
        currentTime = 10000;
        clearInterval(interval);
        btn.disabled = false;
      }

      renderTime(currentTime)
    }, 10);
  };

  resetBtn.onclick = () => {
    startTime = Date.now();
    digitWrapper.classList.remove("redDigit");
    renderTime(0);
  };
};
