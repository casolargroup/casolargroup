export const scrollToSection = id => {
  let sectionTop = document.getElementById(id)?.offsetTop - 76;
  if (id === 'services') {
    sectionTop = document.getElementById(id)?.offsetTop - 30;
  } else if (id === 'team') {
    sectionTop = document.getElementById(id)?.offsetTop - 30;
  } else if (id === 'warranties') {
    sectionTop = document.getElementById(id)?.offsetTop - 90;
  }
  window.scrollTo({ top: sectionTop, behavior: 'smooth' });
};
