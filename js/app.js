document.addEventListener("DOMContentLoaded", () => {
  const header = document.getElementById("chatHeader");
  const box = document.getElementById("chatBox");
  const send = document.getElementById("chatSend");
  const input = document.getElementById("chatInput");
  const log = document.getElementById("chatLog");

  header.addEventListener("click", () => {
    box.classList.toggle("hide");
  });

  send.addEventListener("click", () => {
    if(input.value.trim() === "") return;

    const text = input.value.toLowerCase();
    log.innerHTML += `<div>👤 ${text}</div>`;

    let reply = "Perintah tidak dikenal";

    if(text.includes("dashboard")){
      dashboard();
      reply = "Dashboard dibuka";
    }
    else if(text.includes("riwayat")){
      riwayat();
      reply = "Riwayat ditampilkan";
    }

    log.innerHTML += `<div>🤖 ${reply}</div>`;
    input.value = "";
    log.scrollTop = log.scrollHeight;
  });
});
