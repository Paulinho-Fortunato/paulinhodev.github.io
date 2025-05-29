// Alternar tema claro/escuro
const toggleButton = document.getElementById('toggle-theme');
toggleButton.addEventListener('click', () => {
  document.body.classList.toggle('light-mode');
  document.body.classList.toggle('dark-mode');
});

// Menu responsivo
const menuToggle = document.getElementById('menu-toggle');
const menu = document.getElementById('menu');
menuToggle.addEventListener('click', () => {
  menu.classList.toggle('active');
});

// Sistema de busca de artigos
const articles = [
  { title: 'Introdução ao Hacking Ético', content: '...' },
  { title: 'Segurança em Redes', content: '...' },
  // Adicione mais artigos conforme necessário
];

const searchInput = document.getElementById('search');
const resultsDiv = document.getElementById('results');

searchInput.addEventListener('input', () => {
  const query = searchInput.value.toLowerCase();
  resultsDiv.innerHTML = '';
  const filtered = articles.filter(article => article.title.toLowerCase().includes(query));
  filtered.forEach(article => {
    const div = document.createElement('div');
    div.textContent = article.title;
    resultsDiv.appendChild(div);
  });
});
// Envio de formulário de contato
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert