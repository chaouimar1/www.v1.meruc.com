(function($){
  $(function(){

    $('.button-collapse').sideNav();
    $('.parallax').parallax();
    $('div.indicator').addClass('blue-grey');
    $('.modal-trigger').leanModal();
    $('.micards .card').tooltip({delay: 50});
    $('.tt').tooltip({delay: 50});
    $('.scrollspy').scrollSpy();
  });
  
  var options = [
    { selector:"#serv_fire", offset: 100, callback: "$('#serv_fire').addClass('animated fadeInUp');" },
    { selector:"#comp_fire", offset: 500, callback: "$('#comp_fire').addClass('animated fadeIn');" },
    { selector:"#real_fire", offset: 100, callback: "$('#real_fire').addClass('animated fadeInUp');" },
    { selector:"#cult_fire", offset: 100, callback: "$('#cult_fire').addClass('animated fadeInUp');" }
  ];
  Materialize.scrollFire(options);

})(jQuery); 

$("#pslides a").tosrus();

function tabselect(type){
  $('.micards .card').fadeTo( "fast", 0.5 );
  $('.micards .card').removeClass("fading");
    $('.micards .'+type).fadeTo( "fast", 1 );
  if(type!="tt"){
    $('.micards .'+type).addClass("fading");
  }
};

$(function(){
    $(".elements").typed({
      strings: [
              "^300un <span class=\"deep-purple\"><u>Développeur web</u></span>",
              "^300un <span><u>Frontend'er</u></span>",
              "^300un <span><u>Débutant <span class=\"light-green darken-1\">Android</span></u></span>",
              "^300un <span><u>Utilisateur <span class=\"orange\">Ubuntu</span></u></span>",
              "^300<span class=\"white grey-text text-darken-4\"><u>&nbsp;Marwane CHAOUI&nbsp;</u></span>^15000",
      ],
      contentType: 'html',
      loop: true,
      cursorChar: "_",
      typeSpeed: 60,
      backSpeed: 10,
      shuffle: false,
      startDelay: 500
    });
});
