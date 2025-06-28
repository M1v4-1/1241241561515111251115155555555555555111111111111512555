// Star background
const canvas = document.getElementById("starCanvas");
const ctx = canvas.getContext("2d");

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener("resize", resizeCanvas);

const stars = Array.from({ length: 200 }, () => ({
  x: Math.random() * window.innerWidth,
  y: Math.random() * window.innerHeight,
  radius: Math.random() * 1.5,
  speed: Math.random() * 0.5 + 0.1
}));

function drawStars() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "white";
  stars.forEach(star => {
    ctx.beginPath();
    ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
    ctx.fill();
    star.y += star.speed;
    if (star.y > canvas.height) {
      star.y = 0;
      star.x = Math.random() * canvas.width;
    }
  });
  requestAnimationFrame(drawStars);
}
drawStars();

// Page transitions
const title = document.getElementById('fluorite-title');
const back = document.getElementById('back-button');
const home = document.getElementById('home-screen');
const shop = document.getElementById('shop-screen');

title.addEventListener('click', () => {
  home.classList.remove('fade-in');
  home.classList.add('fade-out');
  setTimeout(() => {
    home.classList.add('hidden');
    shop.classList.remove('hidden');
    shop.classList.remove('fade-out');
    shop.classList.add('fade-in');
  }, 1000);
});

back.addEventListener('click', () => {
  shop.classList.remove('fade-in');
  shop.classList.add('fade-out');
  setTimeout(() => {
    shop.classList.add('hidden');
    home.classList.remove('hidden');
    home.classList.remove('fade-out');
    home.classList.add('fade-in');
  }, 1000);
});
