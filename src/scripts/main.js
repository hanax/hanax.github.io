import 'normalize-css';
import '../styles/index.styl';

$(() => {
  var my$ = function(targetSelector) {
    return document.querySelector(targetSelector);
  }

  Array.prototype.forEach.call(
    document.querySelectorAll('.art .image'), 
    (el) => { el.style.height = getComputedStyle(el)['width'] }
  );
  Array.prototype.forEach.call(
    document.querySelectorAll('.fashion'), 
    (el) => { el.style.height = 0.5 * parseInt(getComputedStyle(el)['width']) + 'px' }
  );

  var artOffset = my$('#arts').offsetTop;
  var techOffset = my$('#techs').offsetTop;

  window.addEventListener('scroll', () => {
    var aboutOffset = my$('#about').offsetTop;

    if ( document.body.scrollTop >= techOffset
      && document.body.scrollTop < aboutOffset ) {
      my$('.item#art').classList.remove('active');
      my$('.item#tech').classList.add('active');
    } else if ( document.body.scrollTop >= artOffset
      && document.body.scrollTop < techOffset ) {
      my$('.item#art').classList.add('active');
      my$('.item#tech').classList.remove('active');
    }

    if (document.body.scrollTop == document.body.clientHeight - window.innerHeight
      || document.body.scrollTop >= aboutOffset) {
      my$('.overlay-logo').classList.add('active');
      my$('.item#art').classList.remove('active');
      my$('.item#tech').classList.remove('active');
    } else {
      my$('.overlay-logo').classList.remove('active');
    }
  });

  // removing jquery half way done...

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
    .on('click', '.image', function(e) {

      // Scroll back to the top of the card
      var cur_off = $(this).closest('.tech').find('.image').offset().top;
      $('html, body').animate({
        scrollTop: cur_off
      }, 500);

      if (!$(this).hasClass('small')) {

        $(this).addClass('small');
        const $card = $(this).closest('.tech').find('.desc-card');
        $card.animate({'height':$card.prop('scrollHeight')}, 'fast');
      } else {

        $(this).removeClass('small');
        $(this).closest('.tech').find('.desc-card').animate({'height':'0'}, 'fast');
      }
    })
    .on('click', '.desc-card', function(e) {
      if (e.target.tagName != 'A') {
        // Scroll back to the top of the card
        var cur_off = $(this).closest('.tech').find('.image').offset().top;
        $('html, body').animate({
          scrollTop: cur_off
        }, 500);

        $(this).animate({'height':'0'}, 'fast');
        $(this).closest('.tech').find('.image').removeClass('small');
      }
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
