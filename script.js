// ===== CONFIGURAÇÃO DO CONVITE =====
// Coloque aqui o link do Google Maps da igreja.
const MAP_LINK = "";
// Para receber confirmações por e-mail, informe seu endereço abaixo.
// Exemplo: "seunome@gmail.com"
const EMAIL_DESTINO = "";

// Rolagem suave dos botões internos
document.querySelectorAll('[data-scroll]').forEach(btn=>{
  btn.addEventListener('click',()=>document.getElementById(btn.dataset.scroll)?.scrollIntoView({behavior:'smooth'}));
});

// Localização
document.querySelector('[data-map-link]')?.addEventListener('click',e=>{
  e.preventDefault();
  if(MAP_LINK) window.open(MAP_LINK,'_blank','noopener');
  else alert('Configure o link do Google Maps no arquivo script.js.');
});

// Confirmação de presença.
// Sem servidor, o GitHub Pages não armazena formulários. Quando EMAIL_DESTINO
// estiver preenchido, abrimos o aplicativo de e-mail do convidado com a mensagem pronta.
document.getElementById('rsvpForm')?.addEventListener('submit',e=>{
  e.preventDefault();
  const data=new FormData(e.currentTarget);
  const nome=String(data.get('nome')||'').trim();
  const quantidade=String(data.get('quantidade')||'1').trim();
  if(!EMAIL_DESTINO){
    alert('O formulário está pronto. Configure EMAIL_DESTINO no arquivo script.js para enviar a confirmação.');
    return;
  }
  const subject=encodeURIComponent(`Confirmação de presença — ${nome}`);
  const body=encodeURIComponent(`Olá!

Confirmo minha presença no casamento de Paulo e Thais.

Nome: ${nome}
Quantidade de pessoas: ${quantidade}
`);
  window.location.href=`mailto:${EMAIL_DESTINO}?subject=${subject}&body=${body}`;
});
