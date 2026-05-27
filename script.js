const navbar = document.getElementById('navbar');
const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 50);
});

menuBtn.addEventListener('click', () => {
  mobileMenu.classList.toggle('hidden');
});

mobileMenu.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.add('hidden');
  });
});

const images = document.querySelectorAll('#carousel img');
const total = images.length;
let current = 0;

function show(index) {
  images.forEach(img => img.classList.toggle('opacity-0', img.dataset.index != index));
  document.querySelectorAll('#dots span').forEach((dot, i) => {
    dot.className = `w-2.5 h-2.5 rounded-full cursor-pointer transition ${i === index ? 'bg-brand-rose' : 'bg-gray-300'}`;
  });
}

for (let i = 0; i < total; i++) {
  const dot = document.createElement('span');
  dot.className = `w-2.5 h-2.5 rounded-full cursor-pointer transition ${i === 0 ? 'bg-brand-rose' : 'bg-gray-300'}`;
  dot.addEventListener('click', () => { current = i; show(current); });
  document.getElementById('dots').appendChild(dot);
}

document.getElementById('prev').addEventListener('click', () => {
  current = (current - 1 + total) % total;
  show(current);
});

document.getElementById('next').addEventListener('click', () => {
  current = (current + 1) % total;
  show(current);
});

setInterval(() => {
  current = (current + 1) % total;
  show(current);
}, 4000);
