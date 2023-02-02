(() => {
    const mobileMenu = document.querySelector(".mob-menu-container");
    const openMenuBtn = document.querySelector(".mob-menu-modal-open");
    const closeMenuBtn = document.querySelector(".mob-modal-close");
  
  
    const toggleMenu = () => {
        const isMenuOpen =
          openMenuBtn. getAttribute('aria-expanded') === 'true' || false;
        openMenuBtn. setAttribute('aria-expanded', ! isMenuOpen);
        mobileМеню. классСписок. toggle('is-open');
    
        const scrollLockMethod = ! isMenuOpen
          ? 'disableBodyScroll'
          : 'enableBodyScroll';
        bodyScrollLock[scrollLockMethod](документ. тело);
      };
    
      openMenuBtn. addEventListener('click', toggleMenu);
      closeMenuBtn. addEventListener('click', toggleMenu);


    /*Закройте мобильное меню на более широких экранах, если изменится ориентация устройства
    окно. matchMedia('(минимальная ширина: 768px)'). addEventListener('change', e => {
      если (! д. матчи) возврат;
      mobileМеню. классСписок. remove('is-open');
      openMenuBtn. setAttribute('aria-expanded', false);
      bodyScrollLock. enableBodyScroll(документ. тело);
    });*/
  })();