window.onload = () => {
  let startTime = Date.now();
  const digits = Array.from(document.querySelectorAll(".digit:not(#colon)"));
  const interval = setInterval(() => {
    let currentTime = Date.now() - startTime;
    if(currentTime > 10000) {
      digits.forEach(d => d.style.color = "red");
      document.getElementById("colon").style.color = "red";
      currentTime = 10000;
      clearInterval(interval);
    }

    let timeChars = Math.floor(currentTime / 10).toString().padStart(4, '0');
    for(let i = 0; i < timeChars.length; i++) {
      digits[i].textContent = timeChars[i];
    }
  }, 10);
};
