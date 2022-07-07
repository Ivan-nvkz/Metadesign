'use strict';

document.addEventListener('DOMContentLoaded', () => {

   // Меню бургер ======================================================================================
   //Burger start   ====================================================================================
   const iconMenu = document.querySelector(".icon-menu");
   const menuBody = document.querySelector(".menu__list");

   if (iconMenu) {
      iconMenu.addEventListener("click", function (e) {
         document.body.classList.toggle("_lock");
         iconMenu.classList.toggle("menu-open");
         menuBody.classList.toggle("menu-open");
         menuBody.classList.toggle('menu__list--active');
      });
   }
   if (menuBody) {
      menuBody.addEventListener('click', function () {
         iconMenu.classList.remove("menu-open");
         menuBody.classList.remove("menu__list--active");
         menuBody.classList.remove("menu-open");
         document.body.classList.remove("_lock");
      });
   }

   //Burger  end  ==========================================================================================

});

//=====  JQuery  start  =============================================================

$(document).ready(function () {
   $("form").submit(function () { // Событие отправки с формы
      var form_data = $(this).serialize(); // Собираем данные из полей
      $.ajax({
         type: "POST", // Метод отправки
         url: "send.php", // Путь к PHP обработчику sendform.php
         data: form_data,
         success: function () {
            $('.overley').addClass('overley-visible');
            $('.modal').addClass('modal__visible');
         }
      }).done(function () {
         $(this).find('input').val('');
         $('form').trigger('reset');
      });
      event.preventDefault();
   });
});


// Slick slider start ====================================================================
$(function () {
   $('.your-class').slick({
      dots: true,
   });

});

// Slick slider finish ====================================================================

//=====  JQuery  finish ===================================================================
