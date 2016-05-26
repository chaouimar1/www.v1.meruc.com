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
      $('html, body').animate({
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