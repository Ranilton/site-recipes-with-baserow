function toggleMenu() {
    const nav = document.querySelector("nav ul");
    nav.classList.toggle("menu-active");
  }

  $(document).ready(function() {
    var botao = $('.login');
    var dropDown = $('.abrirlogin');    

    botao.on('click', function(event){
      dropDown.stop(true,true).slideToggle();
      event.stopPropagation();
    });

    $(document).on('click', function() {
      dropDown.slideUp();
    });

    dropDown.on('click', function(event){
      event.stopPropagation();
    });
  });