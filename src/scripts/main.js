import 'normalize-css';

import '../styles/index.styl';

$(() => {
  var cw = $('.art .image').width();
  $('.art .image').css({'height':cw+'px'});

  var art_offset = $('#arts').offset().top;
  var tech_offset = $('#techs').offset().top;
  var in_art = 0, in_tech = 0;

  $(window).on('scroll', () => {
    if ( $(window).scrollTop() >= art_offset && 
      $(window).scrollTop() < tech_offset ) {
      in_art = 1;
      $('.icon-triangle-f').show();
      $('.icon-triangle').hide();
      $('.item#art').addClass('item-bold')
    } else {
      in_art = 0;
      $('.icon-triangle-f').hide();
      $('.icon-triangle').show();
      $('.item#art').removeClass('item-bold')
    }
    if ( $(window).scrollTop() >= tech_offset) {
      in_tech = 1;
      $('.icon-square-f').show();
      $('.icon-square').hide();
      $('.item#tech').addClass('item-bold')
    } else {
      in_tech = 0;
      $('.icon-square-f').hide();
      $('.icon-square').show();
      $('.item#tech').removeClass('item-bold')
    }
  });

  $('.item#tech').hover(() => {
      if(!in_tech){
        $('.icon-square').toggle();
        $('.icon-square-f').toggle();
      } 
  });

  $('.item#art').hover(() => {
      if(!in_art){
        $('.icon-triangle').toggle();
        $('.icon-triangle-f').toggle();
      }
  });

  const $arts = $('#arts');
  $arts
    .on('click', '.image', function() {
      const $art = $(this).closest('.art').find('.image-fullscreen');
      $art.fadeIn(250);
      $art.css('z-index','1000')
    })
    .on('click', '.image-fullscreen', function() {
      $(this).fadeOut(250, () => {$(this).css('z-index','-1')});
    });

  const $techs = $('#techs');
  $techs
    .on('click', '.image', function() {
      if ($(this).css('height') == '450px') {
        $(this).addClass('small');
        const $card = $(this).closest('.tech').find('.desc-card');
        $card.animate({'height':$card.prop('scrollHeight')}, 'fast');
      } else {
        $(this).removeClass('small');
        $(this).closest('.tech').find('.desc-card').animate({'height':'0'}, 'fast');
      }
    })
    .on('click', '.desc-card', function() {
      $(this).animate({'height':'0'}, 'fast');
      $(this).closest('.tech').find('.image').removeClass('small');
    });

  // Smooth Scrolling
  $(() => {
    $('a[href*=#]:not([href=#])').click(function() {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
          $('html,body').animate({
            scrollTop: target.offset().top
          }, 700);
          return false;
        }
      }
    });
  });
});
