const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('active');
    }
  });
}, { threshold: 0.2 });

document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));

const topLink = document.querySelector('.top-link');
window.addEventListener('scroll', () => {
  if (window.scrollY > 450) {
    topLink.classList.add('visible');
  } else {
    topLink.classList.remove('visible');
  }
});

document.getElementById('year').textContent = new Date().getFullYear();
