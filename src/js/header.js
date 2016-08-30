import ScrollHeader from './lib/scrollheader.js';

jQuery(() => {
  // Toggle header on scroll

  const HEADER_EL = document.querySelector('#header');
  // const SCROLL_ANIM_DURATION = 0.1;
  // const SCROLL_ANIM_DURATION = 0.2;
  const SCROLL_ANIM_DURATION = 0.15;

  const resetHeader = () => {
    TweenLite.set(HEADER_EL, {
      y: '0%',
      className: '-=THEME--FLOATING',
    });
  };

  const onScrollUpdate = (data) => {
    const el = data.el;

    if (data.scrolledTop) {
      // Reset header
      return resetHeader();
    }

    if (data.scrolledDown) {
      // Hide header
      TweenLite.to(el, SCROLL_ANIM_DURATION, {
        y: '-100%',
        ease: Linear.easeInOut,
      });
    } else if (data.scrolledUp) {
      // Show header
      TweenLite.set(el, { className: '+=THEME--FLOATING' });
      TweenLite.to(el, SCROLL_ANIM_DURATION, {
        y: '0%',
        ease: Linear.easeInOut,
      });
    }
  };

  const scrollHeader = new ScrollHeader({
    el: HEADER_EL,
    delta: 100,
    onUpdate: onScrollUpdate,
  });

  scrollHeader.start();
});
