// Thème clair/sombre
const toggle = document.querySelector('#theme-toggle');
toggle.addEventListener('click', () => {
  const root = document.documentElement;
  const next = root.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
  root.setAttribute('data-theme', next);
  toggle.textContent = next === 'light' ? '🌙' : '☀️';
});

// Accordéon
document.querySelectorAll('.accordion-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    btn.classList.toggle('active');
    const content = btn.nextElementSibling;
    content.style.maxHeight = content.style.maxHeight
      ? null
      : content.scrollHeight + 'px';
  });
});

// Modale pour preuves
const modal = document.createElement('div');
modal.className = 'modal';
modal.innerHTML = '<span class="modal-close">&times;</span><div class="modal-content"></div>';
document.body.append(modal);

document.querySelectorAll('.btn-modal').forEach(b => {
  b.addEventListener('click', () => {
    const src = b.getAttribute('data-src');
    modal.querySelector('.modal-content').innerHTML = `<img src="${src}" alt="Preuve">`;
    modal.classList.add('open');
  });
});

modal.querySelector('.modal-close').addEventListener('click', () => {
  modal.classList.remove('open');
});

// Barre de progression
window.addEventListener('scroll', () => {
  const total = document.body.scrollHeight - window.innerHeight;
  const progress = (window.pageYOffset / total) * 100;
  document.getElementById('progress-bar').style.width = progress + '%';
});

// Bouton Haut de page
const backToTop = document.getElementById('back-to-top');
window.addEventListener('scroll', () => {
  backToTop.style.display = window.pageYOffset > 300 ? 'block' : 'none';
});
backToTop.addEventListener('click', () =>
  window.scrollTo({ top: 0, behavior: 'smooth' })
);
