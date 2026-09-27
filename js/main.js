// Kayla & Bloom — progressive enhancement only. Everything here is optional;
// the site works fully without it (no reveal animation, form still fillable).

(function scrollReveal() {
  var prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReducedMotion || !('IntersectionObserver' in window)) return;

  var sections = document.querySelectorAll('main section');
  if (!sections.length) return;

  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  sections.forEach(function (section) {
    section.classList.add('reveal');
    observer.observe(section);
  });
})();

(function contactForm() {
  var form = document.getElementById('contact-form');
  if (!form) return;

  // TODO: replace with Kayla's real email address before this is truly "live."
  var KAYLA_EMAIL = 'kaylaandbloom@example.com';

  form.addEventListener('submit', function (event) {
    event.preventDefault();

    var data = new FormData(form);
    var lines = [
      'Name: ' + data.get('name'),
      'Email: ' + data.get('email'),
      'Inquiry type: ' + data.get('inquiry-type'),
      'Date needed: ' + (data.get('date-needed') || 'Not specified'),
      '',
      'Notes & vision:',
      data.get('notes') || '(none)',
    ];

    var subject = 'Kayla & Bloom inquiry from ' + data.get('name');
    var body = lines.join('\n');
    var mailto = 'mailto:' + KAYLA_EMAIL +
      '?subject=' + encodeURIComponent(subject) +
      '&body=' + encodeURIComponent(body);

    var note = form.querySelector('.form-note');
    if (note) note.textContent = 'Opening your email app — send the email that just opened to finish your inquiry.';

    window.location.href = mailto;
  });
})();
