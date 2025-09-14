// фиктивный "авторизованный" пользователь
const user = {
  nickname: "Steve228",
  rank: "VIP",
  balance: 350,
  lastLogin: "14.09.2025",
  history: [
    { item: "Покупка VIP", date: "10.09.2025", price: "149₽" },
    { item: "Пополнение баланса", date: "08.09.2025", price: "200₽" }
  ]
};

function renderProfile() {
  const profile = document.getElementById("profile");
  profile.innerHTML = `
    <div class="profile-card">
      <h3>👤 ${user.nickname}</h3>
      <p>Ранг: <span class="highlight">${user.rank}</span></p>
      <p>Баланс: <span class="highlight">${user.balance}₽</span></p>
      <p>Последний вход: ${user.lastLogin}</p>
    </div>
    <div class="history">
      <h4>История операций</h4>
      <ul>
        ${user.history.map(h => `<li>${h.date} — ${h.item} (${h.price})</li>`).join("")}
      </ul>
    </div>
  `;
}

function logout() {
  alert("Вы вышли из аккаунта!");
  window.location.href = "index.html";
}

renderProfile();
