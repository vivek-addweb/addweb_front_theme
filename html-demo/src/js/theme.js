jQuery(document).ready(function() {

  // Banner - Slider
  jQuery('.banner .banner-slider').owlCarousel({
    loop: true,
    margin: 0,
    nav: true,
    autoplay: true,
    dots: true,
    lazyLoad: true,
    autoplayTimeout: 2000,
    autoWidth: false,
    slideBy: 1,
    items:1
  });


  // Projects Slider
  jQuery('.project-list .project-list-grid').owlCarousel({
    loop: true,
    margin: 0,
    nav: true,
    autoplay: true,
    dots: true,
    lazyLoad: true,
    autoplayTimeout: 2000,
    autoWidth: false,
    slideBy: 1,
    items:5,
    responsive:{
      320:{
        items:1
      },
      480:{
        items:2
      },
      767:{
        items:3
      },
      1000:{
        items:5
      }
    }
  });

  // Blog Slider
  jQuery('.latest-blog .latest-blog-slider').owlCarousel({
    loop: true,
    margin: 20,
    nav: true,
    autoplay: true,
    dots: false,
    lazyLoad: true,
    autoplayTimeout: 2000,
    autoWidth: false,
    slideBy: 1,
    items:3,
    responsive:{
      320:{
        items:1
      },
      480:{
        items:2
      },
      767:{
        items:2
      },
      1000:{
        items:3
      }
    }
  });


  // Client Slider
  jQuery('.our-client .our-client-slider').owlCarousel({
    loop: true,
    margin: 0,
    nav: true,
    autoplay: true,
    dots: false,
    lazyLoad: true,
    autoplayTimeout: 2000,
    autoWidth: false,
    slideBy: 1,
    items:4,
    responsive:{
      320:{
        items:1
      },
      480:{
        items:2
      },
      767:{
        items:3
      },
      1000:{
        items:4
      }
    }
  });


  // Testimonial Slider
  jQuery('.about-us .about-us-testimonial .testimonial-slider').owlCarousel({
    loop: true,
    margin: 0,
    nav: true,
    autoplay: true,
    dots: true,
    lazyLoad: true,
    autoplayTimeout: 2000,
    autoWidth: false,
    slideBy: 1,
    items:1
  });

  // Off-Canvas Navigation
  jQuery('.menu-offset-left').prepend('<a href="javascript:void(0);" class="aws-close-btn">X</a>');

  jQuery('.toggle-menu').on('click', function(event) {
    // if (jQuery('.menu-toggle-btn').hasClass('close-menu')) {
    //   jQuery('.menu-toggle-btn').removeClass('close-menu')
    // }
    // else {
    //   jQuery('.menu-toggle-btn').addClass('close-menu')
    // }

    event.stopPropagation();
    jQuery('.menu-offset-left').toggleClass('fade-in');
  });
  jQuery('.aws-close-btn').click(function() {
    // event.preventDefault();
    jQuery(this).parent().removeClass('fade-in');
  });
  // jQuery(document).click(function() {
  //   // alert('test');
  //   jQuery('.menu-offset-left').removeClass('fade-in');
  // });


  // Submenu visible on click
  
  jQuery('.menu-parent, .submenu-parent').prepend('<div class="cart-arrow"></div>');
  jQuery('.cart-arrow').click(function() {
    // alert('heee');
    jQuery(this).parent('.menu-parent').children('.submenu').slideToggle();
    jQuery(this).parent('.submenu-parent').children('.submenu-level').slideToggle();
  });

  // Smooth Scrolling
  jQuery('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        jQuery('html, body').animate({
          scrollTop: target.offset().top
        }, 1500);
        return false;
      }
    }
  });

  // Dropdown Box
  jQuery('span').click(function() {
    jQuery('.drop-down-main').toggleClass('active-dropdown');
  });

  // Custom Dropdown
  jQuery('#cd-dropdown').dropdown({
    gutter : 5
  });

  //  Social media for device
  jQuery('.social-icon-link').click(function(){
    jQuery('.social-media-wrap').toggleClass('social-icon-in')
  });

});

