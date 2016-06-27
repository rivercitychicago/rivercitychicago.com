import $ from 'jquery';
import 'smartmenus';
import 'smartmenus/src/css/sm-core-css.css';
import FitNav from './lib/fitnav';

$(() => {
  const $nav = $('#topNav');
  const $menu = $nav.find('> ul');
  const $mobileNav = $('#mobileNav');
  const $toggle = $('#mobileNavToggle');

  $menu.smartmenus({
    subIndicatorsPos: 'append',
    // subIndicatorsText: '\u25BC',
  });

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
