document.addEventListener('DOMContentLoaded', () => {
  // Back to top button
  const backToTop = document.getElementById('backToTop');
  const toggleBackToTop = () => {
    if (!backToTop) return;
    if (window.scrollY > 300) {
      backToTop.style.display = 'inline-block';
    } else {
      backToTop.style.display = 'none';
    }
  };
  window.addEventListener('scroll', toggleBackToTop);
  if (backToTop) {
    backToTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
  }

  // Smooth fade-in on scroll for marked sections/elements
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
      }
    });
  }, { threshold: 0.12 });

  document.querySelectorAll('.section-fade, .card').forEach(el => observer.observe(el));
});

