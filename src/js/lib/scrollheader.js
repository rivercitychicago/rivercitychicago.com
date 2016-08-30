/**
 * @class ScrollHeader
 *
 * @param {Object} config - Configuration options
 * @param {Element} config.el - The header element
 * @param {function} config.onUpdate - Function to call on updates
 * @param {number} [config.delta=5] - Interval to check if a scroll occurred
 * @param {number} [config.interval=250] - Interval to check if a scroll occurred
 *
**/

class ScrollHeader {
  constructor({ el, onUpdate, delta = 5, interval = 250 } = {}) {
    this.el = el;
    this.onUpdate = onUpdate;
    this.delta = delta;
    this.interval = interval;

    this.didScroll = false;
    this.lastScrollTop = 0;
    this.elHeight = el.offsetHeight;
  }

  start() {
    this.addEventListener(window, 'scroll', this);

    clearInterval(this.intervalId);

    this.intervalId = setInterval(() => {
      if (this.didScroll) {
        this.hasScrolled();
        this.didScroll = false;
      }
    }, this.interval);
  }

  stop() {
    this.removeEventListener(window, 'scroll', this);

    clearInterval(this.intervalId);
  }

  sendUpdate(payload = {}) {
    this.onUpdate(Object.assign({}, payload, { el: this.el }));
  }

  hasScrolled() {
    const st = this.getScrollTop();
    const elHeight = this.elHeight;

    // Did we scroll for at least the delta amount?
    const movedDelta = Math.abs(this.lastScrollTop - st) >= this.delta;

    // Did we scroll past the header element?
    const movedPastEl = st > elHeight;

    // Did we move within the header element during this update?
    const movedToEl = st <= elHeight && this.lastScrollTop > elHeight;

    // Did we move to the top during this update?
    const movedToTop = st === 0 && this.lastScrollTop !== 0;

    // Set inital update payload
    const payload = {
      scrolledTop: movedToTop,
      scrolledEl: movedToEl,
      scrolledUp: false,
      scrolledDown: false,
    };

    // Make sure they scroll more than delta
    if (!movedDelta && !movedToTop && !movedToEl) return;

    if (movedPastEl) {
      if (st > this.lastScrollTop) {
        // Scroll Down
        payload.scrolledDown = true;
      } else {
        // Scroll Up
        if (st + (window.innerHeight || 0) < document.documentElement.scrollHeight) {
          payload.scrolledUp = true;
        }
      }
    }

    this.lastScrollTop = st;
    this.sendUpdate(payload);
  }

  getScrollTop() {
    return (window.pageYOffset !== undefined) ? window.pageYOffset : (
              document.documentElement ||
              document.body.parentNode ||
              document.body
            ).scrollTop;
  }

  handleEvent(event) {
    switch (event.type) {
      case 'scroll':
        this.didScroll = true;
        break;
      default:
        return;
    }
  }

  addEventListener(el, eventName, handler) {
    if (el.addEventListener) {
      el.addEventListener(eventName, handler);
    } else {
      el.attachEvent('on' + eventName, () => {
        handler.call(el);
      });
    }
  }

  removeEventListener(el, eventName, handler) {
    if (el.removeEventListener) {
      el.removeEventListener(eventName, handler);
    } else {
      el.detachEvent('on' + eventName, handler);
    }
  }

}

export default ScrollHeader;
