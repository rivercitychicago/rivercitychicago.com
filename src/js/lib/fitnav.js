/**
 * @class FitNav
 *
 * @param {Object} config - Configuration options
 * @param {Element} config.container - The container element
 * @param {NodeList} config.children - The children elements
 * @param {function} config.onUpdate - Function to call on updates
 * @param {(number|function)} [config.addWidth=0] - Add width to the the children calculation
 *
**/

class FitNav {
  constructor({ container, children, onUpdate, addWidth = 0 } = {}) {
    this.container = container;
    this.children = children;
    this.onUpdate = onUpdate;
    this.addWidth = addWidth;
  }

  start() {
    this.onResize();
    this.addEventListener(window, 'resize', this);
  }

  stop() {
    this.removeEventListener(window, 'resize', this);
  }

  onResize() {
    this.onUpdate(this.doesItFit());
  }

  doesItFit() {
    const container = this.calcContainerWidth();
    const children = this.calcChildrenWidth();
    const addWidth = this.calcAddWidth();

    return (container - children - addWidth) > 0;
  }

  calcContainerWidth() {
    return this.outerWidth(this.container);
  }

  calcChildrenWidth() {
    let width = 0;

    for (let i = 0, limit = this.children.length; i < limit; i++) {
      width += this.outerWidth(this.children[i]);
    }

    return width;
  }

  calcAddWidth() {
    if (typeof this.addWidth === 'function') {
      return this.addWidth();
    }
    return this.addWidth;
  }

  handleEvent(event) {
    switch (event.type) {
      case 'resize':
        // debounce(this.onResize, 2000);
        this.onResize();
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

  outerWidth(el) {
    let width = el.offsetWidth;
    const style = el.currentStyle || getComputedStyle(el);

    width += parseInt(style.marginLeft, 10) + parseInt(style.marginRight, 10);
    return width;
  }

}

export default FitNav;
