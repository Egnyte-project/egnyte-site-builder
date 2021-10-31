Array.prototype.forEach.call(document.getElementsByClassName('foot-nav__title'), function(element) {
  element.addEventListener('click', function(event) {
    this.classList.toggle('active');
  });
});


$(document).ready(function() {
  $('.input__input--limited').on('keyup', function () {
    var ths = $(this);
    ths.next('.input__counter').find('span').text(ths.val().length);
  });
  
  // show/hide password when clicking an eye icon
  $('.input__passview').on('click', function() {
    if ($(this).hasClass('active')) {
      $(this).removeClass('active').next().attr('type', 'password');
    }
    else {
      $(this).addClass('active').next().attr('type', 'text');
    }
  });
        
  $('.select__select').on('change', function() {
    $(this).addClass('changed');
  });
  
  
  $('.announce__close').on('click', function() {
    $(this).closest('.announce').remove();
  });
  
  
  $('.main-nav__sublink-parent').hover(function() {
    $(this).addClass('active');
    $($(this).data('target')).addClass('active');
  }, function() {
    var ths = $(this);
    setTimeout(function() {
      ths.removeClass('active');
      $(ths.data('target')).removeClass('active');
    }, 100);
  });
  $('.main-nav__subsection').hover(function() {
    $(this).addClass('hover');
    $('.main-nav__sublink-parent[data-target="#'+$(this).attr('id')+'"]').addClass('hover');
  }, function() {
    $(this).removeClass('hover');
    $('.main-nav__sublink-parent[data-target="#'+$(this).attr('id')+'"]').removeClass('hover');
  });
  
  
  $('#burger').on('click', function() {
    $('#mobile-nav').toggleClass('active');
  });
  $('#mobile-nav__close').on('click', function() {
    $('#mobile-nav').toggleClass('active');
  });
  $('.mobile-nav__link--back').on('click', function(evnt) {
    evnt.preventDefault();
    $(this).parent().removeClass('active');
    //$(this).parent().parent().css('min-height', '0');
  });
  $('.mobile-nav__link--parent').on('click', function(evnt) {
    evnt.preventDefault();
    var trgt = $($(this).attr('href'));
    trgt.parent().css('min-height', trgt.outerHeight());
    trgt.addClass('active').siblings().removeClass('active');
  });
  
  
  $('#search__loop').on('click', function() {
    $('#main-nav').addClass('main-nav--hidden');
    $('#search__loop').addClass('search__loop--hidden');
    $('#search__close').addClass('search__close--visible');
    $('#search__input').focus();
    $('#search__input').addClass('search__input--visible');
  });
  
  
  $('#search__close').on('click', function() {
    $('#main-nav').removeClass('main-nav--hidden');
    $('#search__loop').removeClass('search__loop--hidden');
    $('#search__close').removeClass('search__close--visible');
    $('#search__input').blur();
    $('#search__input').removeClass('search__input--visible');
  });
  
  
  $('.meet-leaders__more').on('click', function() {
    $(this).parent().toggleClass('active');
  });
  
  
  $('#head-reviews__carousel').slick({
    dots: true,
    dotsClass: 'head-reviews__dots',
    customPaging : function(slider, i) { return ''; },
    prevArrow: '<button type="button" class="head-reviews__arrow head-reviews__arrow--prev"></button>',
    nextArrow: '<button type="button" class="head-reviews__arrow head-reviews__arrow--next"></button>'
  });
  
  
  $('#platform-reviews__carousel').slick({
    dots: true,
    dotsClass: 'platform-reviews__dots',
    customPaging : function(slider, i) { return ''; },
    prevArrow: '<button type="button" class="platform-reviews__arrow platform-reviews__arrow--prev"><svg viewBox="0 0 24 24"><path fill="currentColor" d="M17,23.414L6.293,12.707c-0.391-0.391-0.391-1.023,0-1.414L17,0.586L18.414,2l-10,10l10,10L17,23.414z"></path></svg></button>',
    nextArrow: '<button type="button" class="platform-reviews__arrow platform-reviews__arrow--next"><svg viewBox="0 0 24 24"><path fill="currentColor" d="M7,23.414L5.586,22l10-10l-10-10L7,0.586l10.707,10.707c0.391,0.391,0.391,1.023,0,1.414L7,23.414z"></path></svg></button>'
  });
  $('#platform-feature-benefits__carousel').slick({
    fade: true,
    dots: true,
    adaptiveHeight: true,
    dotsClass: 'platform-feature-benefits__dots',
    customPaging : function(slider, i) { return ''; },
    arrows: false
  });
  $('.platform-feature-benefits__prev').on('click', function() {
    $('#platform-feature-benefits__carousel').slick('slickPrev');
  });
  $('.platform-feature-benefits__next').on('click', function() {
    $('#platform-feature-benefits__carousel').slick('slickNext');
  });
  
  
  $('#solution-reviews__carousel').slick({
    dots: true,
    dotsClass: 'solution-reviews__dots',
    customPaging : function(slider, i) { return ''; },
    prevArrow: '<button type="button" class="solution-reviews__arrow solution-reviews__arrow--prev"><svg width="28" height="28" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg></button>',
    nextArrow: '<button type="button" class="solution-reviews__arrow solution-reviews__arrow--next"><svg width="28" height="28" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg></button>'
  });
  
  
  $('.directors-board__more').on('click', function() {
    $(this).parent().toggleClass('active');
  });
  
  
  $('#about-us__play').on('click', function() {
    $(this).addClass('active').prev().addClass('active');
    $(this).prev().attr('src', $(this).data('src'));
  });
  
  
  $('.leadership__item').on('click', function() {
    $(this).toggleClass('active');
    $('.leadership__spoiler-wrap').removeClass('active');
    if ($(this).hasClass('active')) {
      $(this).removeClass('unactive');
      $(this).parent().next().find('.leadership__spoiler-wrap').addClass('active');
      $(this).parent().siblings().find('.leadership__item').addClass('unactive').removeClass('active');
    }
    else {
      $(this).parent().siblings().find('.leadership__item').removeClass('unactive');
    }
  });
  $('.leadership__close').on('click', function() {
    $(this).closest('.leadership__spoiler-wrap').removeClass('active');
    $('.leadership__item').removeClass('unactive').removeClass('active');
  });
  
  
  $('#promo-stories__carousel').slick({
    dots: true,
    slidesToShow: 3,
    infinite: false,
    draggable: false,
    centerMode: true,
    variableWidth: true,
    dotsClass: 'promo-stories__dots',
    customPaging : function(slider, i) { return ''; },
    prevArrow: '<button type="button" class="promo-stories__arrow promo-stories__arrow--prev"><svg width="28" height="28" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg></button>',
    nextArrow: '<button type="button" class="promo-stories__arrow promo-stories__arrow--next"><svg width="28" height="28" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg></button>'
  });
  
  
  $('#awards-accolades__carousel').slick({
    slidesToShow: 4,
    prevArrow: '<button type="button" class="awards-accolades__arrow awards-accolades__arrow--prev"><svg width="28" height="28" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg></button>',
    nextArrow: '<button type="button" class="awards-accolades__arrow awards-accolades__arrow--next"><svg width="28" height="28" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg></button>',
    responsive: [
      {
        breakpoint: 1284,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  });
  
  
  var sltnCmplncTmt = setTimeout(function() {
    $('.solution-compliance__tab.active').siblings().trigger('click');
  }, 3333);
  $('.solution-compliance__tab').on('click', function() {
    const ths = $(this);
    const trgt = $(ths.data('target'));
    ths.addClass('active').siblings().removeClass('active');
    trgt.addClass('active').siblings().removeClass('active');
    
    clearTimeout(sltnCmplncTmt);
    sltnCmplncTmt = setTimeout(function() {
      $('.solution-compliance__tab.active').siblings().trigger('click');
    }, 3333);
  });
  
  
  $('.contact-us__nav-item').on('click', function(event) {
    event.preventDefault();
    const ths = $(this);
    const trgt = $(ths.attr('href'));
    ths.addClass('active').siblings().removeClass('active');
    trgt.addClass('active').siblings().removeClass('active');
  });
  $('.contact-us__select select').on('change', function() {
    const ths = $(this);
    const trgt = $(ths.val());
    trgt.addClass('active').siblings().removeClass('active');
  })
  
  
  $('.rc-menu__toggle').on('click', function(evnt) {
    evnt.preventDefault();
    $(this).next().toggleClass('active');
  });
  $('.rc-menu__item--parent').on('click', function(evnt) {
    evnt.preventDefault();
    $(this).toggleClass('rc-menu__item--opened').next().slideToggle(125);
  });
  $('.rc-menu__arrow').on('click', function(evnt) {
    evnt.preventDefault();
    $(this).toggleClass('active').next().next().slideToggle(250);
  });
  $('.rc-menu__arrow.active').next().next().show();
  
  
  $('[data-scroll-to]').on('click', function(evnt) {
    evnt.preventDefault();
    const ths = $(this);
    const trgt = $(ths.data('scroll-to'));
    $('html, body').animate({
      scrollTop: trgt.offset().top - $('.header').outerHeight()
    }, 750);
  });
  
  
  $('[data-modal-open]').on('click', function(evnt) {
    const ths = $(this);
    const trgt = $(ths.data('modal-open'));
    trgt.addClass('active').siblings('.modal').removeClass('active');
  });
  $('[data-modal-close]').on('click', function(evnt) {
    const ths = $(this);
    const trgt = $(ths.data('modal-close'));
    trgt.removeClass('active');
  });
});