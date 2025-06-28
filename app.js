let input = '';
const screen = document.getElementById('code-screen');
const feedback = document.getElementById('feedback');
const guessList = document.getElementById('guess-list');

document.querySelectorAll('.num').forEach(btn => {
  btn.addEventListener('click', () => {
    if (input.length < 4) {
      input += btn.textContent;
      updateScreen();
    }
  });
});

document.getElementById('clear').addEventListener('click', () => {
  input = '';
  updateScreen();
  feedback.textContent = '';
});

document.getElementById('submit').addEventListener('click', () => {
  if (input.length !== 4) {
    feedback.textContent = 'Enter a 4-digit code.';
    return;
  }

  // MOCK: just for demo until blockchain is connected
  const correctCode = '1234'; // this will be sealed on-chain in production

  const wallet = window.currentWallet || '0xDEMO';
  const guessItem = document.createElement('li');
  guessItem.textContent = `${wallet}: ${input}`;
  guessList.appendChild(guessItem);

  if (input === correctCode) {
    feedback.textContent = '🎉 You cracked the vault!';
  } else if (input < correctCode) {
    feedback.textContent = 'Too low!';
  } else {
    feedback.textContent = 'Too high!';
  }

  input = '';
  updateScreen();
});

function updateScreen() {
  screen.textContent = input.padEnd(4, '_');
}

// 🧪 Placeholder Slush Wallet connect
document.getElementById('connect-wallet').addEventListener('click', async () => {
  alert("Slush wallet connection will go here!");
  window.currentWallet = '0xYourWallet';
});
