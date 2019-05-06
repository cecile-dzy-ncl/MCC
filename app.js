
// LOGO DE MEILLEURE QUALITÉ
$('.logo img').attr('src', 'https://cecile-dzy-ncl.github.io/MCC/images/MCC_Logo_Couleur.svg');

// ENLEVER LES DÉCIMALES ET AJOUTER LE SIGLE €
$('#tag-amount').html($('#tag-amount').text().split(",")[0] + " €")

// DÉPLACEMENT BLOC PARTAGE RÉSEAUX SOCIAUX
$('.block-share-container').appendTo('.intro-my-event');

// AJOUT TITRE "COLLECTES EN COURS" EN BAS DE PAGE
$('.section-home-projects').prepend('<h3>LES COLLECTES EN COURS</h3>');

// AJOUT TITRE "MERCI DONATEURS" - EVENT GRANDE COLLECTE
$('.event_60 .section-my-event .row .medium-3').prepend('<h3 id="donators-title">MERCI DU FOND DU COEUR<br>DE VOTRE SOUTIEN.</h3>');

// AJOUT BOUTON DON SUR BLOC DONATEURS - EVENT GRANDE COLLECTE
$('.event_60 .section-my-event .row .medium-3').append('<a class="button" href="https://relaisducoeur.mecenat-cardiaque.org/projects/la-grande-collecte-2019-fr/payments/new" id="btn-don">JE DONNE</a>');


// --------- BLOC OBJECTIFS/RÉSULTATS ET BARRE DE PROGRESSION ---------

// ajout du bloc en début de page
$('#events-show .habillage').prepend('<div class="stats-event"><div class="stats-event-1"><img src="https://cecile-dzy-ncl.github.io/MCC/images/people.svg" alt=""><div class="stats-event-nb"><p>Déjà <span class="enfants" style="font-size: 32px">8</span> enfants sauvés</p><p>Objectif: <span class="objectif-enfants">24</span> enfants</p></div></div><div class="line"></div><div class="stats-event-2"><div class="stats-event-montants"><div class="stats-event-m-1"><span>97 560 €</span> collectés</div><div class="stats-event-m-2">Objectif: <span>100 000 €</span></div></div><div class="progress"><span class="graph-barBack"><span class="graph-bar" data-value="10"></span></span></div></div></div></div>');
// $('#events-show .event_60 .habillage .stats-event-1 img').src("https://cecile-dzy-ncl.github.io/MCC/images/enfants.svg");

// barre de progression
var pourcentage = $('.chart').attr('data-percent');
$('.stats-event .graph-bar').attr('data-value', pourcentage);

$(function(){

  if($('body').is('.event_60')){

    var collecte = $('.current-amount').html();
    $('.stats-event-m-1 span').html(collecte);

    var objectif = $('.objectif-amount').html().split('Objectif')[1];
    console.log(objectif);
    $('.stats-event-m-2 span').html(objectif);
    console.log('split');

    // calcul de l'obj
    $('.objectif-enfants').html(Math.floor(Number.parseInt($('.objectif-amount').html().split('Objectif ')[1].split(' €')[0], 10)/12));

    // calcul du résultat
    if ($('.current-amount').html().split('     ')[1].split(' €')[0].length > 5) {
      $('.enfants').html(Math.floor(Number.parseInt($('.current-amount').html().split('     ')[1].split(' €')[0], 10)/12));
    } else {
      $('.enfants').html(0);
    };
  }
});

$(function(){
  if ($('body').is('#events-show')) {

    var collecte = $('.current-amount').html();
    $('.stats-event-m-1 span').html(collecte);

    var objectif = $('.objectif-amount').html();
    $('.stats-event-m-2 span').html(objectif);

    // calcul de l'obj
    $('.objectif-enfants').html(Math.floor(Number.parseInt($('.objectif-amount').html().split('Objectif ')[1].split(' €')[0], 10)/12));

    // calcul du résultat
    if ($('.current-amount').html().split('     ')[1].split(' €')[0].length > 5) {
      $('.enfants').html(Math.floor(Number.parseInt($('.current-amount').html().split('     ')[1].split(' €')[0], 10)/12));
    } else {
      $('.enfants').html(0);
    };
  }
});
