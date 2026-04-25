// Accordion: only one open at a time (shared for outline & FAQ)
document.querySelectorAll('details.accordion-item').forEach((current) => {
  current.addEventListener('toggle', () => {
    if (!current.open) return;
    const group = current.closest('.accordion-list');
    if (!group) return;
    group.querySelectorAll('details.accordion-item').forEach((other) => {
      if (other !== current) other.open = false;
    });
  });
});

// Floating CTA: hide when #section-register is visible
const floatingCta = document.getElementById('floating-cta');
const registerSection = document.getElementById('section-register');

if (floatingCta && registerSection) {
  const observer = new IntersectionObserver(
    ([entry]) => {
      floatingCta.style.display = entry.isIntersecting ? 'none' : 'block';
    },
    { threshold: 0.1 }
  );
  observer.observe(registerSection);
}
