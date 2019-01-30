window.onload = () => {
  // create references to important elements
  const digits = Array.from(document.querySelectorAll(".digit:not(#colon)"));
  const digitWrapper = document.getElementsByClassName("digits")[0];
  const body = document.querySelector("body");

  // create 2 buttons
  const startBtn = document.createElement("button");
  startBtn.textContent = "start";
  const resetBtn = document.createElement("button");
  resetBtn.textContent = "reset";

  // append them
  [ startBtn, resetBtn ].forEach(b => body.appendChild(b));

  // declare a startTime outside the intervals
  let startTime = Date.now();

  // function to render the currentTime
  // i.e. loop through each char of the 4 digit current time padStart'd with 0's
  // set corresponding digit to that number
  const renderTime = (time) => {
    const timeChars = Math.floor(time / 10).toString().padStart(4, '0');
    for(let i = 0; i < timeChars.length; i++) {
      digits[i].textContent = timeChars[i];
    }
  };

  // On clicking start, record the currentTime, then launch an interval
  // that goes until we hit 10000 milliseconds elapsed.
  // call renderTime with currentTime until then.
  startBtn.onclick = () => {
    startTime = Date.now();
    startBtn.disabled = true;
    digitWrapper.classList.remove("redDigit");
    const interval = setInterval(() => {
      let currentTime = Date.now() - startTime;
      if(currentTime > 10000) {
        digitWrapper.classList.add("redDigit");
        currentTime = 10000;
        clearInterval(interval);
        startBtn.disabled = false;
      }

      renderTime(currentTime)
    }, 10);
  };

  // set the startTime to now, remove the redDigit class,
  // renderTime 0
  resetBtn.onclick = () => {
    startTime = Date.now();
    digitWrapper.classList.remove("redDigit");
    renderTime(0);
  };
};
