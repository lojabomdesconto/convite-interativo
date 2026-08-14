document.addEventListener("DOMContentLoaded", function() {
  const rsvpModal = document.getElementById("rsvpModal");
  const rsvpBtn = document.getElementById("rsvpBtn");
  const closeRsvpBtn = document.getElementById("closeRsvpBtn");
  const rsvpForm = document.getElementById("rsvpForm");

  // Abrir Modal
  rsvpBtn.addEventListener("click", function() {
    rsvpModal.style.display = "flex";
  });

  // Fechar Modal
  closeRsvpBtn.addEventListener("click", function() {
    rsvpModal.style.display = "none";
  });

  // Enviar Confirmação via WhatsApp
  rsvpForm.addEventListener("submit", function(e) {
    e.preventDefault();

    const nome = document.getElementById("nome").value;
    const presenca = document.getElementById("presenca").value;
    const acompanhantes = document.getElementById("acompanhantes").value;

    const mensagem = `Olá! Confirmando presença no casamento de Renata e Henrique:%0A*Nome:* ${nome}%0A*Vai comparecer?* ${presenca}%0A*Acompanhantes:* ${acompanhantes}`;

    // Insira o número do WhatsApp com código do país e DDD (Ex: 5511999999999)
    const numeroWhats = "5511999999999";

    window.open(`https://wa.me/${numeroWhats}?text=${mensagem}`, "_blank");
    
    // Reseta o formulário e fecha o modal
    rsvpForm.reset();
    rsvpModal.style.display = "none";
  });
});
