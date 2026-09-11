/**
 * Khalid Khan — Portfolio interactivity
 * ------------------------------------------------------------------
 * 1. Mobile nav toggle
 * 2. Active section-index link highlighting while scrolling
 * 3. Skills stack expand/collapse (accessible, one or many open)
 * 4. Contact form — frontend-only handling, no backend wired up yet
 * 5. Scroll-into-view reveal animation (single fade-in, not repeated)
 * 6. Footer year auto-fill
 * ------------------------------------------------------------------
 */

document.addEventListener('DOMContentLoaded', () => {
  initActiveLinkTracking();
  initSkillsToggle();
  initContactForm();
  initScrollReveal();
  setFooterYear();
});

/**
 * Highlights the section-index link (the hero's dotted-leader list, which
 * doubles as the site's only navigation) matching whichever section is
 * currently centered in the viewport, using IntersectionObserver.
 */
function initActiveLinkTracking() {
  const sections = document.querySelectorAll('main section[id]');
  const indexLinks = document.querySelectorAll('.section-index-link');

  if (!sections.length || !indexLinks.length) return;

  const linkForSection = (id) => document.querySelector(`.section-index-link[href="#${id}"]`);

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        indexLinks.forEach((link) => link.classList.remove('is-active'));
        const activeLink = linkForSection(entry.target.id);
        if (activeLink) activeLink.classList.add('is-active');
      });
    },
    { rootMargin: '-45% 0px -45% 0px', threshold: 0 }
  );

  sections.forEach((section) => observer.observe(section));
}

/**
 * Wires up the Skills Stack category buttons. Each button toggles its
 * associated panel open/closed independently, and updates aria-expanded
 * so the state is announced correctly by screen readers.
 */
function initSkillsToggle() {
  const skillButtons = document.querySelectorAll('.skill-btn');

  skillButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const panelId = button.getAttribute('aria-controls');
      const panel = document.getElementById(panelId);
      if (!panel) return;

      const isOpen = button.getAttribute('aria-expanded') === 'true';

      button.setAttribute('aria-expanded', String(!isOpen));
      panel.classList.toggle('is-open', !isOpen);
    });
  });
}

/**
 * Handles the contact form submission on the frontend only. No email
 * service is connected yet, so this validates input and shows a status
 * message rather than pretending the message was actually sent.
 */
function initContactForm() {
  const form = document.getElementById('contactForm');
  const status = document.getElementById('formStatus');

  if (!form || !status) return;

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    if (!form.checkValidity()) {
      status.textContent = 'Please fill in all fields before sending.';
      status.classList.remove('is-success');
      return;
    }

    // NOTE: There is no backend/email service connected yet. Wire this up
    // to a service (e.g. Formspree, EmailJS, or a custom API endpoint)
    // before relying on this form to actually deliver messages.
    status.textContent =
      'Thanks! This form isn\u2019t connected to an email service yet — please reach out directly via email in the meantime.';
    status.classList.add('is-success');
    form.reset();
  });
}

/**
 * Fades in key content blocks the first time they scroll into view.
 * Kept deliberately minimal and non-repeating per the design brief.
 */
function initScrollReveal() {
  const revealTargets = document.querySelectorAll('.reveal');
  if (!revealTargets.length) return;

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          obs.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  revealTargets.forEach((el) => observer.observe(el));
}

/** Keeps the footer copyright year current without manual edits. */
function setFooterYear() {
  const yearEl = document.getElementById('currentYear');
  if (yearEl) yearEl.textContent = new Date().getFullYear();
}
