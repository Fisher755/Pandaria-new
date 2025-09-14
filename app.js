function updateStatus() {
  fetch('https://api.mcstatus.io/v2/status/java/mc.hypixel.net') // пример сервера
    .then(res => res.json())
    .then(data => {
      document.getElementById('players').textContent = data.players.online;
      document.getElementById('ping').textContent = data.debug.ping;
    })
    .catch(err => console.error('Ошибка загрузки статуса:', err));
}

window.onload = updateStatus;

async function updateStatus() {
  const players = document.getElementById('players');
  const ping = document.getElementById('ping');
  players.textContent = '123'; 
  ping.textContent = '46'; 
}

// запрос к API сервера
async function fetchServerStatus() {
  try {
    const response = await fetch("https://api.mcsrvstat.us/2/IP_СЕРВЕРА");
    const data = await response.json();

    const statusEl = document.getElementById("server-status");

    if (data.online) {
      statusEl.textContent = `🟢 Онлайн: ${data.players.online} / ${data.players.max}`;
      statusEl.className = "server-status online";
    } else {
      statusEl.textContent = "🔴 Сервер оффлайн";
      statusEl.className = "server-status offline";
    }
  } catch (e) {
    console.error("Ошибка загрузки статуса:", e);
    document.getElementById("server-status").textContent = "⚠️ Ошибка запроса";
  }
}
fetchServerStatus();
setInterval(fetchServerStatus, 30000);


