const menuButton = document.querySelector('.menu-toggle');
const mobileMenu = document.querySelector('.mobile-menu');
const year = document.querySelector('#year');
const cursorGlow = document.querySelector('.cursor-glow');

const games = {
  cursed: { title: 'Cursed', description: 'Un mundo extraño está despertando.' },
  bumper: { title: 'Bumper Balls', description: 'Competencia, rebotes y caos controlado.' },
};
const gameChoices = [...document.querySelectorAll('[data-game]')];

function selectGame(gameId) {
  const game = games[gameId];
  if (!game) return;
  document.querySelector('#game-title').textContent = game.title;
  document.querySelector('#game-description').textContent = game.description;
  document.querySelector('#game-caption').textContent = game.title;
  document.querySelectorAll('[data-game-art]').forEach((art) => {
    const active = art.dataset.gameArt === gameId;
    art.classList.toggle('is-active', active);
    art.setAttribute('aria-hidden', String(!active));
  });
  gameChoices.forEach((button) => {
    const active = button.dataset.game === gameId;
    button.classList.toggle('is-active', active);
    button.setAttribute('aria-pressed', String(active));
  });
}

gameChoices.forEach((button, index) => {
  button.addEventListener('click', () => selectGame(button.dataset.game));
  button.addEventListener('keydown', (event) => {
    if (!['ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(event.key)) return;
    event.preventDefault();
    let next = event.key === 'ArrowRight' ? index + 1 : index - 1;
    if (event.key === 'Home') next = 0;
    if (event.key === 'End') next = gameChoices.length - 1;
    const target = gameChoices[(next + gameChoices.length) % gameChoices.length];
    target.focus();
    selectGame(target.dataset.game);
  });
});

year.textContent = new Date().getFullYear();

menuButton?.addEventListener('click', () => {
  const isOpen = mobileMenu.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(isOpen));
  menuButton.classList.toggle('is-open', isOpen);
});

mobileMenu?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    mobileMenu.classList.remove('open');
    menuButton.setAttribute('aria-expanded', 'false');
  });
});

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach((element) => revealObserver.observe(element));

window.addEventListener('pointermove', (event) => {
  if (!cursorGlow) return;
  cursorGlow.style.left = `${event.clientX}px`;
  cursorGlow.style.top = `${event.clientY}px`;
});
