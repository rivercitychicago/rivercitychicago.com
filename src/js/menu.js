import $ from 'jquery';
import FitNav from './lib/fitnav';

$(() => {
  const $nav = $('#topNav');
  const $menu = $nav.find('> ul');
  const $mobileNav = $('#menu');
  const $toggle = $('#mobileNavToggle');

  const visibleClass = 'STATE--visible';

  const onUpdate = (itFits) => {
    if (itFits) {
      $toggle.removeClass(visibleClass);
      return $nav.addClass(visibleClass);
    }

    $toggle.addClass(visibleClass);
    return $nav.removeClass(visibleClass);
  };

  const fitNav = new FitNav({
    container: $nav[0],
    children: $menu.find('> li').get(),
    onUpdate,
  });

  fitNav.start();

  // Mobile Menu

  const toggleMobileNav = () => {
    $mobileNav.toggleClass(visibleClass);
  };

  $(document).on('click', '[data-mobile-nav-toggle]', event => {
    event.preventDefault();
    toggleMobileNav();
  });
});
