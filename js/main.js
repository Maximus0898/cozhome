const menuOpen = document.querySelector('.menu-open'),
  menu = document.querySelector('.menu'),
  burger = document.querySelector('#burger');

menuOpen.addEventListener('click', (e) => {
  menu.classList.toggle('show-menu');

  if (burger.classList.contains('fa-bars')) {
    burger.className = 'fa fa-close';
  } else {
    burger.className = 'fa fa-bars';
  }
});
