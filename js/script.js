// ── Sticky nav ──────────────────────────────
    const nav = document.getElementById('nav');
    window.addEventListener('scroll', () => {
      nav.classList.toggle('scrolled', window.scrollY > 60);
    }, { passive: true });

    // ── Hamburger ───────────────────────────────
    const burgerBtn     = document.getElementById('burgerBtn');
    const mobileOverlay = document.getElementById('mobileOverlay');

    burgerBtn.addEventListener('click', () => {
      const open = mobileOverlay.classList.toggle('open');
      burgerBtn.classList.toggle('open', open);
      burgerBtn.setAttribute('aria-expanded', String(open));
      document.body.style.overflow = open ? 'hidden' : '';
    });

    document.querySelectorAll('.m-link').forEach(l => {
      l.addEventListener('click', () => {
        mobileOverlay.classList.remove('open');
        burgerBtn.classList.remove('open');
        burgerBtn.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      });
    });

    // ── Option cards ────────────────────────────
    document.querySelectorAll('[data-opt]').forEach(card => {
      card.addEventListener('click', () => {
        document.querySelectorAll('[data-opt]').forEach(c => c.classList.remove('active'));
        card.classList.add('active');
      });
    });

    // ── Scroll reveal ───────────────────────────
    const revealEls = document.querySelectorAll('.reveal');
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('is-visible');
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -36px 0px' });

    revealEls.forEach(el => io.observe(el));