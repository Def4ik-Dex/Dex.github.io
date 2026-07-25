// встав сюди свої реальні посилання — решта підхопиться автоматично
const LINKS = {
  youtube:  "https://youtube.com/",
  discord:  "https://discord.gg/",
  telegram: "https://t.me/"
};

document.querySelectorAll('[data-link]').forEach(el => {
  const key = el.dataset.link;
  if (LINKS[key]) {
    el.setAttribute('href', LINKS[key]);
    el.setAttribute('target', '_blank');
    el.setAttribute('rel', 'noopener');
  }
});

// плавний скрол по "up"
document.querySelectorAll('a[href="#top"]').forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
});
