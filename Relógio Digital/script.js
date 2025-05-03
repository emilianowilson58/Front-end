function updateClock() {
    const now = new Date();
    let hora = String(now.getHours()).padStart(2, '0');
    let minutos = String(now.getMinutes()).padStart(2, '0');
    let segundos = String(now.getSeconds()).padStart(2, '0');

    document.getElementById("digital-clock").textContent = `${hora}:${minutos}:${segundos}`;
  }

  setInterval(updateClock, 1000);
  updateClock(); // mostra a hora de imediato