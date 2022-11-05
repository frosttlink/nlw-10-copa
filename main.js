function createGame(player1, hour, player2) {
  return `
       <li>
        <img src="./assets/icon-${player1}.svg" alt="Bandeira do ${player1}" />
        <strong>${hour}</strong>
        <img src="./assets/icon-${player2}.svg" alt="Bandeira da ${player2}" />
      </li>
  `
}

let delay = -0.3
function createCard(date, day, games) {
  delay = delay + 0.3
  return `
         <div class="card" style="animation-delay: ${delay}s">
          <h2>${date} <span>${day}</span></h2>
          <ul>
           ${games}
          </ul>
        </div>
  `
}

document.querySelector("#cards").innerHTML =
  createCard(
    "24/11",
    "quarta",
    createGame("brazil", "16:00", "serbia") +
      createGame("uruguai", "10:00", "southkorea") +
      createGame("portugal", "13:00", "ghana") +
      createGame("switzerland", "07:00", "cameroon")
  ) +
  createCard(
    "28/11",
    "segunda",
    createGame("cameroon", "07:00", "serbia") +
      createGame("brazil", "13:00", "switzerland") +
      createGame("southkorea", "10:00", "ghana") +
      createGame("portugal", "16:00", "uruguai")
  )
