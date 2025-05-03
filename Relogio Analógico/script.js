function updateClock() {
    const now = new Date();
    const sec = now.getSeconds();
    const min = now.getMinutes();
    const hr = now.getHours();

    const secDeg = sec * 6;
    const minDeg = min * 6 + sec * 0.1;
    const hrDeg = ((hr % 12) / 12) * 360 + min * 0.5;

    document.getElementById("second-hand").style.transform = `rotate(${secDeg}deg)`;
    document.getElementById("minute-hand").style.transform = `rotate(${minDeg}deg)`;
    document.getElementById("hour-hand").style.transform = `rotate(${hrDeg}deg)`;
  }

  setInterval(updateClock, 1000);
  updateClock(); // atualizar de imediato