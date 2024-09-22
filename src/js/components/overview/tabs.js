export const overviewTabs = () =>{

  document.addEventListener('DOMContentLoaded', function() {
    const tabs = document.querySelectorAll('.swiper.gallery__slider');
    const links = document.querySelectorAll('.hero__nav-link');
  
    function showTab(index) {
      // Скрыть все табы
      tabs.forEach((tab) => tab.style.display = 'none');
      // Показать выбранный таб
      tabs[index].style.display = 'block';
  
      // Удалить класс активности у всех ссылок
      links.forEach((link) => link.classList.remove('hero__nav-link--active'));
      // Добавить класс активности к выбранной ссылке
      links[index].classList.add('hero__nav-link--active');
    }
  
    // Показать первый таб по умолчанию и установить первую кнопку как активную
    showTab(0);
  
    // Добавляем обработчики событий для переключения табов
    links.forEach((link, index) => {
      link.addEventListener('click', function(event) {
        event.preventDefault(); // Предотвратить переход по ссылке
        showTab(index); // Показать соответствующий таб
      });
    });
  });
  
  
}