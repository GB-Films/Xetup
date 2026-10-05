const year = document.querySelector('#year');
if (year) year.textContent = new Date().getFullYear();

const catalog = document.querySelector('#game-cards');
const cards = [...document.querySelectorAll('.game-card')];
const previous = document.querySelector('[data-direction="previous"]');
const next = document.querySelector('[data-direction="next"]');
const position = document.querySelector('.catalog-position');
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

function currentCard() {
  return cards.reduce((closest, card, index) => {
    const distance = Math.abs(card.offsetLeft - cards[0].offsetLeft - catalog.scrollLeft);
    return distance < closest.distance ? { index, distance } : closest;
  }, { index: 0, distance: Infinity }).index;
}

function updateControls() {
  const atEnd = catalog.scrollLeft + catalog.clientWidth >= catalog.scrollWidth - 2;
  const index = atEnd && catalog.scrollLeft > 0 ? cards.length - 1 : currentCard();
  position.textContent = `${index + 1} / ${cards.length}`;
  previous.disabled = catalog.scrollLeft <= 2;
  next.disabled = atEnd;
}

function moveCard(direction) {
  const index = Math.max(0, Math.min(cards.length - 1, currentCard() + direction));
  catalog.scrollTo({
    left: cards[index].offsetLeft - cards[0].offsetLeft,
    behavior: reducedMotion.matches ? 'auto' : 'smooth',
  });
}

if (catalog && cards.length) {
  previous.addEventListener('click', () => moveCard(-1));
  next.addEventListener('click', () => moveCard(1));
  catalog.addEventListener('scroll', updateControls, { passive: true });
  window.addEventListener('resize', updateControls);
  catalog.addEventListener('keydown', (event) => {
    if (event.target !== catalog || !['ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(event.key)) return;
    event.preventDefault();
    if (event.key === 'Home' || event.key === 'End') {
      catalog.scrollTo({ left: event.key === 'Home' ? 0 : catalog.scrollWidth, behavior: reducedMotion.matches ? 'auto' : 'smooth' });
    } else moveCard(event.key === 'ArrowRight' ? 1 : -1);
  });
  updateControls();
}
