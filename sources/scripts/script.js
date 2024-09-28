let heroXP = 0;
let heroLevel = '';

document.getElementById('heroForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const heroName = document.getElementById('heroName').value;
  document.getElementById('displayHeroName').textContent = heroName;
  document.getElementById('heroForm').style.display = 'none';
  document.getElementById('gameArea').style.display = 'block';

  updateHeroInfo();
});

document.getElementById('gainXPButton').addEventListener('click', function() {
  let xpGain = 10; // XP básico ganho por clique
  const bonusMultiplier = parseInt(document.querySelector('input[name="xpBonus"]:checked').value);

  xpGain *= bonusMultiplier;

  heroXP += xpGain;
  showXPGain(xpGain);
  updateHeroInfo();
});

function updateHeroInfo() {
  document.getElementById('displayHeroXP').textContent = heroXP;
  document.getElementById('displayHeroLevel').textContent = determineHeroLevel(heroXP);
}

function determineHeroLevel(xp) {
  if (xp < 1000) {
    return 'Ferro';
  } else if (xp >= 1001 && xp <= 2000) {
    return 'Bronze';
  } else if (xp >= 2001 && xp <= 5000) {
    return 'Prata';
  } else if (xp >= 5001 && xp <= 7000) {
    return 'Ouro';
  } else if (xp >= 7001 && xp <= 8000) {
    return 'Platina';
  } else if (xp >= 8001 && xp <= 9000) {
    return 'Ascendente';
  } else if (xp >= 9001 && xp <= 10000) {
    return 'Imortal';
  } else {
    return 'Radiante';
  }
}

function showXPGain(xpGain) {
  const xpGainDisplay = document.getElementById('xpGainDisplay');
  xpGainDisplay.textContent = `+${xpGain} XP`;
  xpGainDisplay.classList.add('show');

  setTimeout(function() {
    xpGainDisplay.classList.remove('show');
  }, 1000); // O valor desaparece após 1 segundo
}
