(() => {
  const root = document.documentElement;

  const bindPressed = () => {
    document.querySelectorAll('.btn, button, .menu-item, .sidebar-item').forEach((el) => {
      el.addEventListener('pointerdown', () => el.classList.add('is-pressed'));
      el.addEventListener('pointerup', () => el.classList.remove('is-pressed'));
      el.addEventListener('pointerleave', () => el.classList.remove('is-pressed'));
    });
  };

  const bindEntrance = () => {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });

    document.querySelectorAll('.card, .panel, .hud-shell, .hud-panel, .menu-item, .sidebar-item').forEach((el) => {
      el.classList.add('ui-entrance');
      io.observe(el);
    });
  };

  const bindParallax = () => {
    const limit = 8;
    window.addEventListener('pointermove', (e) => {
      const x = ((e.clientX / window.innerWidth) - 0.5) * limit;
      const y = ((e.clientY / window.innerHeight) - 0.5) * limit;
      root.style.setProperty('--parallax-x', `${x.toFixed(2)}px`);
      root.style.setProperty('--parallax-y', `${y.toFixed(2)}px`);
    });
  };

  document.addEventListener('DOMContentLoaded', () => {
    bindPressed();
    bindEntrance();
    bindParallax();
  });
})();
