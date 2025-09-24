// plugins/header.client.js
export default () => {
  if (typeof window === 'undefined') return;
  const init = () => {
    const headerSticky = document.querySelector('.header-sticky');
    const navbarToggle = document.querySelector('.navbar-toggle');
    const responsiveMenu = document.querySelector('.responsive-menu');
    let lastScroll = 0;
    const onScroll = () => {
      const current = window.pageYOffset || document.documentElement.scrollTop;
      if (!headerSticky) return;
      if (current > 60) {
        headerSticky.classList.add('active');
        if (current > lastScroll) headerSticky.classList.add('hide');
        else headerSticky.classList.remove('hide');
      } else {
        headerSticky.classList.remove('active');
        headerSticky.classList.remove('hide');
      }
      lastScroll = current <= 0 ? 0 : current;
    };
    const onToggle = () => {
      if (!responsiveMenu) return;
      responsiveMenu.classList.toggle('slicknav_open');
      document.body.style.overflow = responsiveMenu.classList.contains('slicknav_open') ? 'hidden' : '';
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    if (navbarToggle) navbarToggle.addEventListener('click', onToggle);
    onScroll();
  };
  if (document.readyState === 'complete' || document.readyState === 'interactive') setTimeout(init,50);
  else document.addEventListener('DOMContentLoaded', init);
}
