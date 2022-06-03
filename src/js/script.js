document.addEventListener(`DOMContentLoaded`, ()=>{
    new WOW().init();
    const body = document.querySelector(`body`),
        modalButton = body.querySelector(`.footer__menu__btn`),
        modal = body.querySelector(`.modal`),
        modalClose = body.querySelector(`.modal__close`),
        tabContent = body.querySelectorAll(`.clasess__hero`),
        tabs = body.querySelectorAll(`.clasess__pick__warrior_img`);

        modalButton.addEventListener(`click`, (e) =>{
            e.preventDefault();

            modal.classList.add(`modal__active`);
           
        });

        modalClose.addEventListener(`click`, (e) => {

            modal.classList.remove(`modal__active`);
            
        });

        tabs.forEach(function(tab, i) {
            tab.addEventListener('click', function() {
              hideTab();
              this.classList.add('clasess__pick__warrior_img_active');
              tabContent[i].classList.remove('hideTab');
              tabContent[i].classList.add('showTab');
            });
          });
        
          function hideTab() {
            tabs.forEach((item) => {
              item.classList.remove('clasess__pick__warrior_img_active');
            });
            tabContent.forEach((item) => {
              item.classList.add('hideTab');
              item.classList.remove('showTab');  
            });
          }

});