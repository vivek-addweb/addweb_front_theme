jQuery(document).ready(function() {
  var window_width = jQuery(window).width();
  jQuery('.addweb-controls .addweb-prev-link').addClass('hide-arrow');
  
  // Animate slide for Desktop & Mobile
  slider_desktop ();
  slider_mobile ();

  jQuery(window).resize(function() {
    window_width = jQuery(window).width();
    if (window_width > 767) {
      jQuery('.addweb-slider .addweb-row.active .addweb-col').removeClass('active');

      // Resize
      jQuery('.addweb-slider').css('height', 'auto');
      jQuery('.addweb-slider .addweb-row .addweb-col').css('height', 'auto');
      var addweb_col_h_max = 0;
      jQuery('.addweb-slider .addweb-row').each(function() {
        var addwebcolHeight = jQuery(this).outerHeight();
        if (addwebcolHeight > addweb_col_h_max) {
          addweb_col_h_max = addwebcolHeight;
        }
      });
      jQuery('.addweb-slider').css('height', addweb_col_h_max);
      jQuery('.addweb-slider .addweb-row .addweb-col').css('height', addweb_col_h_max);
      // Resize End
    }
    else if (window_width < 768) {
      //slider_mobile (window_width);
      jQuery('.addweb-slider .addweb-row.active .addweb-col-1').addClass('active');

      // Resize
      jQuery('.addweb-slider').css('height', 'auto');
      jQuery('.addweb-slider .addweb-row .addweb-col').css('height', 'auto');
      var addweb_col_h_max = 0;
      jQuery('.addweb-slider .addweb-row').each(function() {
        var addwebcolHeight = jQuery(this).children('.addweb-col').outerHeight();
        if (addwebcolHeight > addweb_col_h_max) {
          addweb_col_h_max = addwebcolHeight;
        }
      });
      jQuery('.addweb-slider').css('height', addweb_col_h_max);
      jQuery('.addweb-slider .addweb-row .addweb-col').css('height', addweb_col_h_max);
      // Resize End
    }
  });
  // End

  // Set height for Col FOR DESKTOP
  if (jQuery(window).width() > 767) {
    var addweb_col_h_max = 0;
    jQuery('.addweb-slider .addweb-row').each(function() {
      var addwebcolHeight = jQuery(this).outerHeight();
      if (addwebcolHeight > addweb_col_h_max) {
        addweb_col_h_max = addwebcolHeight;
      }
    });
    jQuery('.addweb-slider').css('height', addweb_col_h_max);
    jQuery('.addweb-slider .addweb-row .addweb-col').css('height', addweb_col_h_max);
  }

  // Set height for Col FOR MOBILE
  if (window_width < 768) {
    var addweb_col_h_max = 0;
    jQuery('.addweb-slider .addweb-row').each(function() {
      var addwebcolHeight = jQuery(this).children('.addweb-col').outerHeight();
      if (addwebcolHeight > addweb_col_h_max) {
        addweb_col_h_max = addwebcolHeight;
      }
    });
    jQuery('.addweb-slider').css('height', addweb_col_h_max);
    jQuery('.addweb-slider .addweb-row .addweb-col').css('height', addweb_col_h_max);
  }
});

// For Desktop
function slider_desktop () {
  jQuery('.addweb-slider .addweb-row:nth-child(1)').addClass('active');
  // For Prev
  jQuery('.addweb-controls .addweb-prev-link').click(function() {
    window_width = jQuery(window).width();
    if (window_width > 767) {
      if (jQuery('.addweb-slider .addweb-row.active').is(':first-child')) {
        // To detect first row
      }
      else if (jQuery('.addweb-slider .addweb-row:nth-child(2)').hasClass('active')) {
        jQuery('.addweb-controls .addweb-prev-link').addClass('hide-arrow');
        jQuery('.addweb-slider .addweb-row.active').removeClass('active').prev().addClass('active');
      }
      else {
        jQuery('.addweb-controls .addweb-prev-link').removeClass('hide-arrow');
        jQuery('.addweb-controls .addweb-next-link').removeClass('hide-arrow');
        jQuery('.addweb-slider .addweb-row.active').removeClass('active').prev().addClass('active');
      }
    }
  });
  // For Next
  jQuery('.addweb-controls .addweb-next-link').click(function() {
    window_width = jQuery(window).width();
    if (window_width > 767) {
      if (jQuery('.addweb-slider .addweb-row:nth-last-child(1)').hasClass('active')) {
        // To detect last row
      }
      else if (jQuery('.addweb-slider .addweb-row:nth-last-child(2)').hasClass('active')) {
        jQuery('.addweb-controls .addweb-next-link').addClass('hide-arrow');
        jQuery('.addweb-slider .addweb-row.active').removeClass('active').next().addClass('active');
      }
      else {
        jQuery('.addweb-controls .addweb-prev-link').removeClass('hide-arrow');
        jQuery('.addweb-slider .addweb-row.active').removeClass('active').next().addClass('active');
      }
    }
  });
}
// For Mobile
function slider_mobile () {
  jQuery('.addweb-slider .addweb-row:nth-child(1)').addClass('active');
  jQuery('.addweb-slider .addweb-row:nth-child(1) .addweb-col-1').addClass('active');
  // For Prev
  jQuery('.addweb-controls .addweb-prev-link').click(function() {
    window_width = jQuery(window).width();
    if (window_width < 768) {
      jQuery('.addweb-controls .addweb-next-link').removeClass('hide-arrow');
      if (jQuery('.addweb-slider .addweb-row .addweb-col-2.active').hasClass('active')) {
        jQuery('.addweb-slider .addweb-row .addweb-col.active').removeClass('active').prev().addClass('active');
        if (jQuery('.addweb-slider .addweb-row:first-child').hasClass('active')) {
          jQuery('.addweb-controls .addweb-prev-link').addClass('hide-arrow');
        }
      }
      else if (jQuery('.addweb-slider .addweb-row .addweb-col-1.active').hasClass('active')) {
        if (jQuery('.addweb-slider .addweb-row:first-child').hasClass('active')) {
          jQuery('.addweb-slider .addweb-row:first-child').addClass('active');
        }
        else {
          jQuery('.addweb-slider .addweb-row .addweb-col.active').parent('.addweb-row').removeClass('active').prev().addClass('active');
          jQuery('.addweb-slider .addweb-row .addweb-col').removeClass('active');
          jQuery('.addweb-slider .addweb-row.active .addweb-col-2').addClass('active');
        }
      }
    }
  });
  // For Next
  jQuery('.addweb-controls .addweb-next-link').click(function() {
    window_width = jQuery(window).width();
    if (window_width < 768) {
      if (jQuery('.addweb-slider .addweb-row .addweb-col-1.active').hasClass('active')) {
        if(jQuery('.addweb-slider .addweb-row:last-child .addweb-col').length == '2' && jQuery('.addweb-slider .addweb-row:last-child').hasClass('active')) {
          jQuery('.addweb-controls .addweb-next-link').addClass('hide-arrow');
        }
        if (jQuery('.addweb-slider .addweb-row.active .addweb-col-2').length) {
          jQuery('.addweb-controls .addweb-prev-link').removeClass('hide-arrow');
          jQuery('.addweb-slider .addweb-row .addweb-col.active').removeClass('active').next().addClass('active');
        }
      }
      else if (jQuery('.addweb-slider .addweb-row .addweb-col-2.active').hasClass('active')) {
        if (jQuery('.addweb-slider .addweb-row:last-child .addweb-col').length == '1' && jQuery('.addweb-slider .addweb-row:nth-last-child(2)').hasClass('active')) {
          jQuery('.addweb-controls .addweb-next-link').addClass('hide-arrow');
        }
        if (jQuery('.addweb-slider .addweb-row:last-child').hasClass('active')) {
          // To detect last row
        }
        else {
          jQuery('.addweb-slider .addweb-row .addweb-col.active').parent('.addweb-row').removeClass('active').next().addClass('active');
          jQuery('.addweb-slider .addweb-row .addweb-col').removeClass('active');
          jQuery('.addweb-slider .addweb-row.active .addweb-col-1').addClass('active');
        }
      }
    }
  });
}
