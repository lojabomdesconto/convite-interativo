// 1. Data Alvo do Evento (Ano, Mês-1, Dia, Hora, Minutos)
// Nota: Os meses no JS vão de 0 (Janeiro) a 11 (Dezembro). Mês 9 = Outubro.
const targetDate = new Date(2026, 9, 24, 16, 30, 0).getTime();

function updateCountdown() {
  const now = new Date().getTime();
  const difference = targetDate - now;

  if (difference > 0) {
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    document.getElementById("days").innerText = days < 10 ? "0" + days : days;
    document.getElementById("hours").innerText = hours < 10 ? "0" + hours : hours;
    document.getElementById("minutes").innerText = minutes < 10 ? "0" + minutes : minutes;
    document.getElementById("seconds").innerText = seconds < 10 ? "0" + seconds : seconds;
  } else {
    document.getElementById("countdown").innerHTML = "<h3>O Grande Dia Chegou!</h3>";
  }
}

setInterval(updateCountdown, 1000);
updateCountdown();

// 2. Play/Pause da Música
function toggleMusic() {
  const audio = document.getElementById("bg-music");
  const btn = document.getElementById("music-toggle");
  
  if (audio.paused) {
    audio.play();
    btn.innerText = "⏸️ Pausar Música";
  } else {
    audio.pause();
    btn.innerText = "🎵 Tocar Música";
  }
}

// 3. Copiar Chave PIX
function copyPix() {
  const pixKey = document.getElementById("pix-key").innerText;
  navigator.clipboard.writeText(pixKey).then(() => {
    alert("Chave PIX copiada para a área de transferência!");
  });
}

// 4. RSVP via WhatsApp
document.getElementById("rsvp-form").addEventListener("submit", function(e) {
  e.preventDefault();
  
  const name = document.getElementById("name").value;
  const attendance = document.getElementById("attendance").value;
  const guests = document.getElementById("guests").value || "0";

  const message = `Olá! Confirmando presença no casamento:%0A- *Nome:* ${name}%0A- *Opção:* ${attendance}%0A- *Acompanhantes:* ${guests}`;
  
  // Coloque o seu número com DDD aqui (Ex: 5511999999999)
  const whatsappNumber = "5511999999999"; 
  
  window.open(`[https://wa.me/$](https://wa.me/$){whatsappNumber}?text=${message}`, '_blank');
});
