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
    { selector:"#serv_fire", offset: 100, callback: "$('#serv_fire').addClass('animated fadeIn');" },
    { selector:"#comp_fire", offset: 100, callback: "$('#comp_fire').addClass('animated fadeIn');" },
    { selector:"#real_fire", offset: 100, callback: "$('#real_fire').addClass('animated fadeIn');" },
    { selector:"#cult_fire", offset: 100, callback: "$('#cult_fire').addClass('animated fadeIn');" },
    { selector:"#cult_fire", offset: 100, callback: "$('#soc_fire').addClass('animated fadeIn');" }
  ];
  Materialize.scrollFire(options);

/***************** Cookies functions *************/

function createCookie(name,value,days) {
    if (days) {
        var date = new Date();
        date.setTime(date.getTime()+(days*24*60*60*1000));
        var expires = "; expires="+date.toGMTString();
    }
    else var expires = "";
    document.cookie = name+"="+value+expires+"; path=/";
}

function readCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}

function eraseCookie(name) {
    createCookie(name,"",-1);
}

/*************************************************/

/***************** Dictionary ********************/
  
  var dict = {
    // Loader trans
    "trans": {
      fr: "Traduction...",
      en: "Translating..."
    },
    // Menu
    "flag": {
      fr: "<span class='flag flag-fr'></span>",
      en: "<span class='flag flag-en'></span>"
    },
    "A propos": {
      fr: "A propos",
      en: "About"
    },
    "Services": {
      fr: "Services",
      en: "Services"
    },
    "Compétences": {
      fr: "Compétences",
      en: "Skills"
    },
    "Realisations": {
      fr: "Réalisations",
      en: "Works"
    },
    "Culture": {
      fr: "Culture",
      en: "Culture"
    },
    "Résumé": {
      fr: "Résumé",
      en: "Resume"
    },
    // Sections
    "A PROPOS": {
      fr: "A PROPOS",
      en: "ABOUT"
    },
    "JE MAITRISE": {
      fr: "TÉCHNOLOGIES",
      en: "TECHNOLOGIES"
    },
    "OUTILS": {
      fr: "OUTILS",
      en: "TOOLS"
    },
    "REALISATIONS": {
      fr: "REALISATIONS",
      en: "WORKS"
    },
    "SN": {
      fr: "METTONS-NOUS EN CONTACT",
      en: "LET'S GET IN TOUCH"
    },
    // Typed slides
    "typed slides": {
      fr: "Je suis <span class='elements'></span> <br>et vous êtes sur mon portfolio.",
      en: "I'm <span class='elements'></span> <br>and this is my portfolio."
    },
    // About parag
    "chaouimar1": {
      fr: "Salut! Je suis un jeune <strong class='deep-purple-text'>Développeur</strong> Marocain. Suivant mes études d'ingénierie en <span class='tt' data-position='top' data-tooltip='Génie Logiciel'>GL</span>. J'aime decouvrir les nouvelles technologies et les projets open source.",
      en: "Hi! I am a young Moroccan <strong class='deep-purple-text'>Developer</strong>. Getting my engineering studies in <span class='tt' data-position='top' data-tooltip='Software Engineering'>SE</span>. I like discovering new technologies and open source projects.",
    },
    // Services parag
    "SI": {
      fr: "Conception des <span class='tt' data-position='bottom' data-tooltip='Système d&#39;Information'> SI</span>",
      en: "<span class='tt' data-position='bottom' data-tooltip='Information Systems'>IS</span> Design"
    },
    "WEBDEV": {
      fr: "Création des Sites Web",
      en: "Websites Development"
    },
    "MA": {
      fr: "Applications Mobiles",
      en: "Mobile Apps"
    },
    // Achiv
    "Avocapp": {
      fr: "Application web qui gére les informations des dossiers des clients de l'avocat juridique (permet d'une traçabilité et facturations des dossiers).",
      en: "A web application that manages information from client cases of the legal counsel (allows the traceability and records invoicing)."
    },
    "Missiordre": {
      fr: "Une application simple qui permet au directeur d'approuver ou refuser les differentes missions proposées par ses intervenants.",
      en: "A simple application that allows the Director to approve or reject the various missions proposed by stakeholders."
    },
    "PerPoints": {
      fr: "Pour une meilleur vision des pointages des personnels, voici une application web qui ameliore la présentation des pointages avec deux interfaces: quotidienne et hebdomadaire.",
      en: "For a better understanding of personnel clockings, here is a web application that improves the presentation of the scores with two interfaces: daily and weekly."
    },
    "PFE": {
      fr: "Une application web qui gére les données saisis statistiques graphiques et en mode hors ligne avec une synchronisation centralisée.",
      en: "A web app that manage typed data to charts with offline mode and a centralized synchronization."
    },
    "mrissa": {
      fr: "Un portail web pour la commune Lamrissa.",
      en: "A portal web for department of Lamrissa."
    },
    "OEM": {
      fr: "Une application Windows simple qui permet de changer les informations tel que la marque, model et image de la machine et ainsi le nom du processeur.",
      en: "A simple Windows application to change information such as the make, model and image of the machine and so the processor's name."
    },
    "Calend": {
      fr: "Des widgets en differentes couleurs pour le sidebar de windows 7, basés sur l'original (celle en orange).",
      en: "Different colors in widgets for the sidebar of windows 7, based on the original (the orange one)."
    },
    "Calendars": {
      fr: "Calendriers multicolores",
      en: "Colored calendars"
    },
    "VSCode": {
      fr: "Des icônes pour Visual Studio Code par Dhanishgajjar",
      en: "Visual Studio Code Icones by Dhanishgajjar"
    },
    // Cult tabs
    "Tout": {
      fr: "Tout",
      en: "all"
    },
    "films": {
      fr: "films",
      en: "movies"
    },
    "séries": {
      fr: "séries",
      en: "series"
    },
    "jeux vidéos": {
      fr: "jeux vidéos",
      en: "Video games"
    },
    // Footer
    "coded": {
      fr: "Conçu et codé par moi-même avec",
      en: "Designed and coded by myself with"
    },
  }

/*************************************************/
var paramsfr = { strings: [
                  "un <span class=\"white grey-text text-darken-4\"><u>Développeur Web/Mobile</u></span>",
                  "un <span><u>Back-End Dev</u></span>",
                  "<span class=\"deep-purple\"><u>&nbsp;Marwane CHAOUI&nbsp;</u></span>^15000"],
          contentType: 'html',
          loop: true,
          cursorChar: "_",
          typeSpeed: 60,
          backSpeed: 10,
          shuffle: false,
          startDelay: 500 };

var paramsen = { strings: [
                    "a <span class=\"white grey-text text-darken-4\"><u>Web/Mobile Developer</u></span>",
                    " <span><u>Back-End Dev</u></span>",
                    "<span class=\"deep-purple\"><u>&nbsp;Marwane CHAOUI&nbsp;</u></span>^15000"],
            contentType: 'html',
            loop: true,
            cursorChar: "_",
            typeSpeed: 60,
            backSpeed: 10,
            shuffle: false,
            startDelay: 500 }

    if (readCookie('lang')=="fr") {
      var translator = $('body').translate({lang: "fr", t: dict});
      $(function(){
        $(".elements").typed(paramsfr);
    });
    }else if(readCookie('lang')=="en" || !readCookie('lang')){
      createCookie('lang','en',7);
      var translator = $('body').translate({lang: "en", t: dict});
      $(function(){
          $(".elements").typed(paramsen);
      });
    }
  

  $('.trans').click(function(){ 

    if (readCookie('lang')=="fr") {

      $('#loader-wrapper-trans').fadeIn().delay(200).queue(function(next) {
          createCookie('lang','en',7);
          translator.lang('en'); 
          $(function(){ $(".elements").typed(paramsen); }); 
          $('.tt').tooltip({delay: 50});
          $('#loader-wrapper-trans').fadeOut();
          next();
      });

    } else if(readCookie('lang')=="en"){

      $('#loader-wrapper-trans').fadeIn().delay(200).queue(function(next) {
          createCookie('lang','fr',7); 
          translator.lang('fr');
          $(function(){ $(".elements").typed(paramsfr); }); 
          $('.tt').tooltip({delay: 50});
          $('#loader-wrapper-trans').fadeOut();
          next();
      });
    }
  });

})(jQuery); 

$("#pslides a").tosrus();

$("#curryear").text((new Date).getFullYear());

function tabselect(type){
  $('.micards .card').fadeTo( "fast", 0.5 );
  $('.micards .card').removeClass("fading");
    $('.micards .'+type).fadeTo( "fast", 1 );
  if(type!="tt"){
    $('.micards .'+type).addClass("fading");
  }
};

$(document).ready(function(){       
   var scroll_start = 0;
   var startchange = $('#bio_body');
   var offset = startchange.offset();
   $(document).scroll(function() { 
      scroll_start = $(this).scrollTop();
      if(scroll_start > offset.top) {
          $('.navbar-fixed nav').removeClass('grey darken-4').addClass('white');
          $('#mainemu li a').removeClass('white-text').addClass('grey-text text-darken-2');
          $('.centerw .button-collapse .material-icons').removeClass('white-text').addClass('grey-text text-darken-2');
          $('.centerw #logo-container').removeClass('white-text').addClass('grey-text text-darken-2');
       } else {
          $('.navbar-fixed nav').removeClass('white').addClass('grey darken-4');
          $('#mainemu li a').removeClass('grey-text text-darken-2').addClass('white-text');
          $('.centerw .button-collapse .material-icons').removeClass('grey-text text-darken-2').addClass('white-text');
          $('.centerw #logo-container').removeClass('grey-text text-darken-2').addClass('white-text');
       }
   });
});

$(window).load(function(){
    var $container = $('.portfolioContainer');
    $container.isotope({
        filter: '*',
        animationOptions: {
            duration: 750,
            easing: 'linear',
            queue: false
        }
    });
 
    $('.portfolioFilter a').click(function(){
        $('.portfolioFilter .current').removeClass('current');
        $(this).addClass('current');
 
        var selector = $(this).attr('data-filter');
        $container.isotope({
            filter: selector,
            animationOptions: {
                duration: 750,
                easing: 'linear',
                queue: false
            }
         });
         return false;
    }); 
});