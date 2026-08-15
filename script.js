document.addEventListener("DOMContentLoaded", function() {
  const rsvpModal = document.getElementById("rsvpModal");
  const rsvpBtn = document.getElementById("rsvpBtn");
  const closeRsvpBtn = document.getElementById("closeRsvpBtn");
  const rsvpForm = document.getElementById("rsvpForm");

  if (rsvpBtn && rsvpModal) {
    rsvpBtn.addEventListener("click", function() {
      rsvpModal.style.display = "flex";
    });
  }

  if (closeRsvpBtn && rsvpModal) {
    closeRsvpBtn.addEventListener("click", function() {
      rsvpModal.style.display = "none";
    });
  }

  if (rsvpForm) {
    rsvpForm.addEventListener("submit", function(e) {
      e.preventDefault();

      const nome = document.getElementById("nome").value;
      const presenca = document.getElementById("presenca").value;
      const acompanhantes = document.getElementById("acompanhantes").value;

      const mensagem = `Olá! Confirmando presença no casamento de Isabela e Murilo:%0A*Nome:* ${nome}%0A*Vai comparecer?* ${presenca}%0A*Acompanhantes:* ${acompanhantes}`;
      const numeroWhats = "5511999999999";

      window.open(`https://wa.me/${numeroWhats}?text=${mensagem}`, "_blank");
      
      rsvpForm.reset();
      rsvpModal.style.display = "none";
    });
  }
});
