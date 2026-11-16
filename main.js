/* ==========================================================================
   PORTFOLIO JAVASCRIPT - DIVYA BALRAJ
   Modular interactions, typography animations, and smooth scrolling
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Check prefers-reduced-motion
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // ------------------------------------------------------------------------
  // 2. HERO SUBTITLE TYPING ANIMATION
  // ------------------------------------------------------------------------
  const typingElement = document.querySelector('.typing-text');
  if (typingElement) {
    const fullText = typingElement.getAttribute('data-text') || typingElement.textContent.trim();

    if (prefersReducedMotion) {
      typingElement.textContent = fullText;
    } else {
      typingElement.textContent = '';
      let charIndex = 0;
      const typeSpeed = 65; // ms per character
      const startDelay = 600; // ms delay before typing begins

      setTimeout(() => {
        const typeInterval = setInterval(() => {
          if (charIndex < fullText.length) {
            typingElement.textContent += fullText.charAt(charIndex);
            charIndex++;
          } else {
            clearInterval(typeInterval);
          }
        }, typeSpeed);
      }, startDelay);
    }
  }

  // ------------------------------------------------------------------------
  // 3. INTERSECTION OBSERVER FOR SCROLL-BASED TEXT & ELEMENT REVEALS
  // ------------------------------------------------------------------------
  const revealElements = document.querySelectorAll(
    '.section-title, .skills-reveal, .features-heading, .about-card, .edu-card, .skill-tag, .project-card, .contact-card'
  );

  if ('IntersectionObserver' in window && revealElements.length > 0) {
    const revealObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            // If the element has opacity transition for scroll reveal
            if (!entry.target.classList.contains('section-title')) {
              entry.target.style.opacity = '1';
              entry.target.style.transform = 'translateY(0)';
            }
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: '0px 0px -40px 0px'
      }
    );

    revealElements.forEach(el => {
      if (!el.classList.contains('section-title') && !el.classList.contains('skills-reveal')) {
        el.style.opacity = '0';
        el.style.transform = 'translateY(24px)';
        el.style.transition = 'all 0.6s cubic-bezier(0.16, 1, 0.3, 1)';
      }
      revealObserver.observe(el);
    });
  } else {
    // Fallback if IntersectionObserver is unsupported
    revealElements.forEach(el => {
      el.classList.add('is-visible');
      el.style.opacity = '1';
      el.style.transform = 'none';
    });
  }

  // ------------------------------------------------------------------------
  // 4. NAVBAR BLUR & SHADOW ON SCROLL
  // ------------------------------------------------------------------------
  const nav = document.querySelector('.top-nav');
  const handleNavScroll = () => {
    if (!nav) return;
    if (window.scrollY > 40) {
      nav.style.boxShadow = '0 10px 25px rgba(0, 0, 0, 0.55)';
      nav.style.padding = window.innerWidth > 950 ? '14px 8%' : '14px 5%';
    } else {
      nav.style.boxShadow = 'none';
      nav.style.padding = window.innerWidth > 950 ? '20px 8%' : '16px 5%';
    }
  };

  window.addEventListener('scroll', handleNavScroll, { passive: true });
  handleNavScroll();

  // ------------------------------------------------------------------------
  // 5. SMOOTH SCROLL FOR INTERNAL HASH LINKS
  // ------------------------------------------------------------------------
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId && targetId.length > 1) {
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          e.preventDefault();
          targetElement.scrollIntoView({
            behavior: prefersReducedMotion ? 'auto' : 'smooth',
            block: 'start'
          });
        }
      }
    });
  });

  // ------------------------------------------------------------------------
  // 6. CONTACT FORM SUBMISSION
  // ------------------------------------------------------------------------
  const contactForm = document.querySelector('.contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      alert('Thank you! Your message has been sent successfully.');
      contactForm.reset();
    });
  }
});

// --------------------------------------------------------------------------
// 7. GLOBAL CALCULATOR THEME PREVIEW SWITCHER
// --------------------------------------------------------------------------
function switchPreviewTheme(theme) {
  const img = document.getElementById('calculator-screenshot-img');
  const pills = document.querySelectorAll('.theme-preview-pill');
  if (!img) return;

  const sources = {
    'dark': 'calc-dark.png',
    'light': 'calc-light.png',
    'retro': 'calc-retro.png',
    'default': 'calc-default.png'
  };

  if (sources[theme]) {
    img.style.opacity = '0.3';
    img.style.transform = 'scale(0.98)';
    setTimeout(() => {
      img.src = sources[theme];
      img.style.opacity = '1';
      img.style.transform = 'scale(1)';
    }, 150);
  }

  pills.forEach(p => p.classList.remove('active'));
  const activeBtn = document.querySelector(`.theme-preview-pill[onclick*="'${theme}'"]`);
  if (activeBtn) activeBtn.classList.add('active');
}
