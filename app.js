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
