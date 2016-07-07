(function($){
  $(function(){

    $('.button-collapse').sideNav();
    $('.parallax').parallax();
    $('div.indicator').addClass('blue-grey');
    $('.modal-trigger').leanModal();
    $('.micards .card').tooltip({delay: 50});
    $('.tt').tooltip({delay: 50});
    $('.materialboxed').materialbox();

  });

  $('.scollmenu').click(function(){
      $('html, body').stop().animate({
          scrollTop: $( $(this).attr('href') ).offset().top
      }, 1000);
      return false;
  });

   // end of document ready
})(jQuery); // end of jQuery name space

$("#pslides a").tosrus();
function tabselect(type){
  $('.micards .card').fadeTo( "fast", 0.5 );
  $('.micards .'+type).fadeTo( "fast", 1 );
};

$(function(){
    $(".elements").typed({
      strings: [
              "^300un <span class=\"deep-purple\"><u>Développeur web</u></span>",
              "^300un <span><u>Frontend'er</u></span>",
              "^300un <span><u>Débutant <span class=\"light-green darken-1\">Android</span></u></span>",
              "^300un <span><u>Utilisateur <span class=\"orange ubufont\">Ubuntu</span></u></span>",
              "^300<span class=\"white grey-text text-darken-4\"><u>&nbsp;Marwane CHAOUI&nbsp;</u></span>^15000"
      ],
      contentType: 'html',
      loop: true,
      cursorChar: "_",
      typeSpeed: 60,
      backSpeed: 10,
      shuffle: false,
      startDelay: 500,
      callback: function() {/*alert('done !')*/},
    });
});
