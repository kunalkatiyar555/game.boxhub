
const gameList = document.getElementById('gameList');
const searchInput = document.getElementById('searchInput');

function renderGames(filter = "") {
  gameList.innerHTML = "";
  games.filter(game => game.name.toLowerCase().includes(filter.toLowerCase()))
       .forEach(game => {
         const card = document.createElement("div");
         card.className = "card";
         card.innerHTML = `
           <img src="${game.image}" alt="${game.name}" />
           <div class="info">
             <h3>${game.name}</h3>
             <p>${game.desc} (${game.size})</p>
             <a href="${game.download}" target="_blank">Download</a>
           </div>
         `;
         gameList.appendChild(card);
       });
}
searchInput.addEventListener('input', () => {
  renderGames(searchInput.value);
});
renderGames();
