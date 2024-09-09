export const useBurger = () => {
  const burgerBtn = document.querySelector('.burger');
  const burgerMenu = document.querySelector('[data-burger="menu"]');
  const overlay = document.querySelector('[data-burger="overlay"]');
  const body = document.body;

  const closeBurgerMenu = () => {
    burgerBtn.classList.remove('burger--active');
    burgerMenu.classList.remove('header__right--visible');
    overlay.classList.remove('overlay--visible');
    body.classList.remove('body--fixed');
  };

  burgerBtn.addEventListener('click', () => {
    burgerBtn.classList.toggle('burger--active');
    burgerMenu.classList.toggle('header__right--visible');
    overlay.classList.toggle('overlay--visible');
    overlay.addEventListener('click', closeBurgerMenu);
    body.classList.toggle('body--fixed');
  });
};

//header scroll effect

let lastScrollTop = 0;
const header = document.querySelector('.header');

window.addEventListener('scroll', function () {
  const scrollTop = window.scrollY || document.documentElement.scrollTop;

  if (scrollTop > lastScrollTop) {
    header.classList.remove('header--show');
    header.classList.add('header--border-hidden');
  } else {
    header.classList.add('header--show');
    header.classList.remove('header--border-hidden');
  }
  lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
});
