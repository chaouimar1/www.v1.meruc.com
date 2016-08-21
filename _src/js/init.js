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
    { selector:"#cult_fire", offset: 100, callback: "$('#cult_fire').addClass('animated fadeIn');" }
  ];
  Materialize.scrollFire(options);

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
      en: "achievements"
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
      fr: "JE MAITRISE",
      en: "MASTERING"
    },
    "REALISATIONS": {
      fr: "REALISATIONS",
      en: "ACHIEVEMENTS"
    },
    // Typed slides
    "typed slides": {
      fr: "Je suis <span class='elements'></span> <br>et vous êtes sur mon portfolio.",
      en: "I'm <span class='elements'></span> <br>and this is my portfolio."
    },
    // About parag
    "chaouimar1": {
      fr: "Je suis un jeune <strong class='deep-purple-text'>Développeur</strong> Marocain. Suivant mes études d'ingénierie en <span class='tt' data-position='top' data-tooltip='Génie Logiciel'>GL</span>. J'aime decouvrir les nouvelles technologies et les projets open source.",
      en: "I am a young Moroccan <strong class='deep-purple-text'>Developer</strong>. Getting my engineering studies in <span class='tt' data-position='top' data-tooltip='Software Engineering'>SE</span>. I like discovering new technologies and open source projects.",
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
    "OEM": {
      fr: "Une application Windows simple qui permet de changer les informations tel que la marque, model et image de la machine et ainsi le nom du processeur.",
      en: "A simple Windows application to change information such as the make, model and image of the machine and so the processor's name."
    },
    "Calend": {
      fr: "Des widgets en differentes couleurs pour le sidebar de windows 7, basés sur l'original (celle en orange).",
      en: "Different colors in widgets for the sidebar of windows 7, based on the original (the orange one)."
    },
    "Calendars": {
      fr: "Calendriers multicolores pour Windows Sidebar",
      en: "Colored calendars for Windows Sidebar"
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
                  "un <span class=\"deep-purple\"><u>Développeur Web</u></span>",
                  "un <span><u>Frontend'er</u></span>",
                  "un <span><u>Débutant <span class=\"light-green darken-1\">Android</span></u></span>",
                  "un <span><u>Utilisateur <span class=\"orange\">Ubuntu</span></u></span>",
                  "<span class=\"white grey-text text-darken-4\"><u>&nbsp;Marwane CHAOUI&nbsp;</u></span>^15000"],
          contentType: 'html',
          loop: true,
          cursorChar: "_",
          typeSpeed: 60,
          backSpeed: 10,
          shuffle: false,
          startDelay: 500 };

var paramsen = { strings: [
                    "a <span class=\"deep-purple\"><u>Web Developer</u></span>",
                    " <span><u>Frontend'er</u></span>",
                    "an <span><u><span class=\"light-green darken-1\">Android</span> beginner</u></span>",
                    "a <span><u><span class=\"orange\">Ubuntu</span> user</u></span>",
                    "<span class=\"white grey-text text-darken-4\"><u>&nbsp;Marwane CHAOUI&nbsp;</u></span>^15000"],
            contentType: 'html',
            loop: true,
            cursorChar: "_",
            typeSpeed: 60,
            backSpeed: 10,
            shuffle: false,
            startDelay: 500 }

    if (document.cookie=="fr") {
      var translator = $('body').translate({lang: "fr", t: dict});
      $(function(){
        $(".elements").typed(paramsfr);
    });
    }else if(document.cookie=="en" || !document.cookie){
      document.cookie = "en";
      var translator = $('body').translate({lang: "en", t: dict});
      $(function(){
          $(".elements").typed(paramsen);
      });
    }
  

  $('.trans').click(function(){ 

    if (document.cookie=="fr") {

      $('#loader-wrapper-trans').fadeIn().delay(200).queue(function(next) {
          document.cookie = "en";
          translator.lang('en'); 
          $(function(){ $(".elements").typed(paramsen); }); 
          $('#loader-wrapper-trans').fadeOut();
          next();
      });

    } else if(document.cookie=="en"){

      $('#loader-wrapper-trans').fadeIn().delay(200).queue(function(next) {
          document.cookie = "fr"; 
          translator.lang('fr');
          $(function(){ $(".elements").typed(paramsfr); }); 
          $('#loader-wrapper-trans').fadeOut();
          next();
      });
      

    }
    
    $('.tt').tooltip({delay: 50}); });

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

