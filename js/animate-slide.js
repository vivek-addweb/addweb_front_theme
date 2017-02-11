jQuery(document).ready(function() {
  var window_width = jQuery(window).width();
  jQuery('.aws-controls .aws-prev-link').addClass('hide-arrow');
  
  // Animate slide for Desktop & Mobile
  slider_desktop ();
  slider_mobile ();

  jQuery(window).resize(function() {
    window_width = jQuery(window).width();
    if (window_width > 767) {
      jQuery('.aws-slider .aws-row.active .aws-col').removeClass('active');

      // Resize
      jQuery('.aws-slider').css('height', 'auto');
      jQuery('.aws-slider .aws-row .aws-col').css('height', 'auto');
      var aws_col_h_max = 0;
      jQuery('.aws-slider .aws-row').each(function() {
        var awscolHeight = jQuery(this).outerHeight();
        if (awscolHeight > aws_col_h_max) {
          aws_col_h_max = awscolHeight;
        }
      });
      jQuery('.aws-slider').css('height', aws_col_h_max);
      jQuery('.aws-slider .aws-row .aws-col').css('height', aws_col_h_max);
      // Resize End
    }
    else if (window_width < 768) {
      //slider_mobile (window_width);
      jQuery('.aws-slider .aws-row.active .aws-col-1').addClass('active');

      // Resize
      jQuery('.aws-slider').css('height', 'auto');
      jQuery('.aws-slider .aws-row .aws-col').css('height', 'auto');
      var aws_col_h_max = 0;
      jQuery('.aws-slider .aws-row').each(function() {
        var awscolHeight = jQuery(this).children('.aws-col').outerHeight();
        if (awscolHeight > aws_col_h_max) {
          aws_col_h_max = awscolHeight;
        }
      });
      jQuery('.aws-slider').css('height', aws_col_h_max);
      jQuery('.aws-slider .aws-row .aws-col').css('height', aws_col_h_max);
      // Resize End
    }
  });
  // End

  // Set height for Col FOR DESKTOP
  if (jQuery(window).width() > 767) {
    var aws_col_h_max = 0;
    jQuery('.aws-slider .aws-row').each(function() {
      var awscolHeight = jQuery(this).outerHeight();
      if (awscolHeight > aws_col_h_max) {
        aws_col_h_max = awscolHeight;
      }
    });
    jQuery('.aws-slider').css('height', aws_col_h_max);
    jQuery('.aws-slider .aws-row .aws-col').css('height', aws_col_h_max);
  }

  // Set height for Col FOR MOBILE
  if (window_width < 768) {
    var aws_col_h_max = 0;
    jQuery('.aws-slider .aws-row').each(function() {
      var awscolHeight = jQuery(this).children('.aws-col').outerHeight();
      if (awscolHeight > aws_col_h_max) {
        aws_col_h_max = awscolHeight;
      }
    });
    jQuery('.aws-slider').css('height', aws_col_h_max);
    jQuery('.aws-slider .aws-row .aws-col').css('height', aws_col_h_max);
  }
});

// For Desktop
function slider_desktop () {
  jQuery('.aws-slider .aws-row:nth-child(1)').addClass('active');
  // For Prev
  jQuery('.aws-controls .aws-prev-link').click(function() {
    window_width = jQuery(window).width();
    if (window_width > 767) {
      if (jQuery('.aws-slider .aws-row.active').is(':first-child')) {
        // To detect first row
      }
      else if (jQuery('.aws-slider .aws-row:nth-child(2)').hasClass('active')) {
        jQuery('.aws-controls .aws-prev-link').addClass('hide-arrow');
        jQuery('.aws-slider .aws-row.active').removeClass('active').prev().addClass('active');
      }
      else {
        jQuery('.aws-controls .aws-prev-link').removeClass('hide-arrow');
        jQuery('.aws-controls .aws-next-link').removeClass('hide-arrow');
        jQuery('.aws-slider .aws-row.active').removeClass('active').prev().addClass('active');
      }
    }
  });
  // For Next
  jQuery('.aws-controls .aws-next-link').click(function() {
    window_width = jQuery(window).width();
    if (window_width > 767) {
      if (jQuery('.aws-slider .aws-row:nth-last-child(1)').hasClass('active')) {
        // To detect last row
      }
      else if (jQuery('.aws-slider .aws-row:nth-last-child(2)').hasClass('active')) {
        jQuery('.aws-controls .aws-next-link').addClass('hide-arrow');
        jQuery('.aws-slider .aws-row.active').removeClass('active').next().addClass('active');
      }
      else {
        jQuery('.aws-controls .aws-prev-link').removeClass('hide-arrow');
        jQuery('.aws-slider .aws-row.active').removeClass('active').next().addClass('active');
      }
    }
  });
}
// For Mobile
function slider_mobile () {
  jQuery('.aws-slider .aws-row:nth-child(1)').addClass('active');
  jQuery('.aws-slider .aws-row:nth-child(1) .aws-col-1').addClass('active');
  // For Prev
  jQuery('.aws-controls .aws-prev-link').click(function() {
    window_width = jQuery(window).width();
    if (window_width < 768) {
      jQuery('.aws-controls .aws-next-link').removeClass('hide-arrow');
      if (jQuery('.aws-slider .aws-row .aws-col-2.active').hasClass('active')) {
        jQuery('.aws-slider .aws-row .aws-col.active').removeClass('active').prev().addClass('active');
        if (jQuery('.aws-slider .aws-row:first-child').hasClass('active')) {
          jQuery('.aws-controls .aws-prev-link').addClass('hide-arrow');
        }
      }
      else if (jQuery('.aws-slider .aws-row .aws-col-1.active').hasClass('active')) {
        if (jQuery('.aws-slider .aws-row:first-child').hasClass('active')) {
          jQuery('.aws-slider .aws-row:first-child').addClass('active');
        }
        else {
          jQuery('.aws-slider .aws-row .aws-col.active').parent('.aws-row').removeClass('active').prev().addClass('active');
          jQuery('.aws-slider .aws-row .aws-col').removeClass('active');
          jQuery('.aws-slider .aws-row.active .aws-col-2').addClass('active');
        }
      }
    }
  });
  // For Next
  jQuery('.aws-controls .aws-next-link').click(function() {
    window_width = jQuery(window).width();
    if (window_width < 768) {
      if (jQuery('.aws-slider .aws-row .aws-col-1.active').hasClass('active')) {
        if(jQuery('.aws-slider .aws-row:last-child .aws-col').length == '2' && jQuery('.aws-slider .aws-row:last-child').hasClass('active')) {
          jQuery('.aws-controls .aws-next-link').addClass('hide-arrow');
        }
        if (jQuery('.aws-slider .aws-row.active .aws-col-2').length) {
          jQuery('.aws-controls .aws-prev-link').removeClass('hide-arrow');
          jQuery('.aws-slider .aws-row .aws-col.active').removeClass('active').next().addClass('active');
        }
      }
      else if (jQuery('.aws-slider .aws-row .aws-col-2.active').hasClass('active')) {
        if (jQuery('.aws-slider .aws-row:last-child .aws-col').length == '1' && jQuery('.aws-slider .aws-row:nth-last-child(2)').hasClass('active')) {
          jQuery('.aws-controls .aws-next-link').addClass('hide-arrow');
        }
        if (jQuery('.aws-slider .aws-row:last-child').hasClass('active')) {
          // To detect last row
        }
        else {
          jQuery('.aws-slider .aws-row .aws-col.active').parent('.aws-row').removeClass('active').next().addClass('active');
          jQuery('.aws-slider .aws-row .aws-col').removeClass('active');
          jQuery('.aws-slider .aws-row.active .aws-col-1').addClass('active');
        }
      }
    }
  });
}
