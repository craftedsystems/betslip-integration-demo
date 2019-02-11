/**
 * Toggle bet
 */
window.toggleBet = el => {
  const id = parseInt(el.dataset.bet, 10);
  // Set/remove class
  if (el.classList.toggle('selected')) {
    sldr.addBet(id);
  } else {
    sldr.removeBet(id);
  }
  // Skip href link
  return false;
};

/**
 * Update bets
 */
window.updateBets = betIds => {
  const els = document.querySelectorAll('[data-bet]');
  for (var i = 0; i < els.length; i++) {
    const el = els[i];
    const id = parseInt(el.dataset.bet, 10);
    if (betIds.indexOf(id) > -1) {
      el.classList.add('selected');
    } else {
      el.classList.remove('selected');
    }
  }
};