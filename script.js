// ===== CONFIGURAÇÃO RÁPIDA =====
// Troque apenas o número abaixo pelo WhatsApp da RK TI, com DDI +55 e DDD.
// Exemplo: 5511999999999
const RK_WHATSAPP = "5511999999999";

const message = encodeURIComponent(
  "Olá! Conheci a RK TI pelo site e gostaria de solicitar um atendimento."
);

document.querySelectorAll(".js-whatsapp").forEach((link) => {
  link.href = `https://wa.me/${RK_WHATSAPP}?text=${message}`;
});

document.getElementById("year").textContent = new Date().getFullYear();

const toggle = document.querySelector(".menu-toggle");
const menu = document.querySelector(".menu");

toggle.addEventListener("click", () => {
  const open = menu.classList.toggle("open");
  toggle.setAttribute("aria-expanded", open);
});

document.querySelectorAll(".menu a").forEach((link) => {
  link.addEventListener("click", () => {
    menu.classList.remove("open");
    toggle.setAttribute("aria-expanded", "false");
  });
});
