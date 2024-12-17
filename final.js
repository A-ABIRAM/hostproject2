// Retrieve the statistics from localStorage
let gamesPlayed = localStorage.getItem('gamesPlayed') || 0;
let playerWins = localStorage.getItem('playerWins') || 0;
let computerWins = localStorage.getItem('computerWins') || 0;

// Display the retrieved stats on the webpage
document.getElementById('gamesplayed').textContent = gamesPlayed;
document.getElementById('p-wins').textContent = playerWins;
document.getElementById('c-wins').textContent = computerWins;

// Back to game button functionality
document.getElementById('btg').addEventListener('click', () => {
  window.location.href = 'rps1.html'; // Redirect back to the game page
});

// Reset stats button functionality
document.getElementById('resetbtn').addEventListener('click', () => {
  // Reset localStorage values
  localStorage.setItem('gamesPlayed', 0);
  localStorage.setItem('playerWins', 0);
  localStorage.setItem('computerWins', 0);

  // Update the displayed stats to 0
  document.getElementById('gamesplayed').textContent = 0;
  document.getElementById('p-wins').textContent = 0;
  document.getElementById('c-wins').textContent = 0;
});
