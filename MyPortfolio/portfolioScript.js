$(function() {

  $('.top').click(function() {
    $("html, body").animate({
      scrollTop:$('#top_area').offset().top
    }, 800);
  });

  $('.about').click(function() {
    $("html, body").animate({
      scrollTop:$('#top-profile_area').offset().top
    }, 800);
  });

  $('.works').click(function() {
    $("html, body").animate({
      scrollTop:$('#top-works_area').offset().top
    }, 800);
  });

  $('.contact').click(function() {
    $("html, body").animate({
      scrollTop:$('#contact_area').offset().top
    }, 800);
  });

  $('.top-works_item').click(function() {
    var $active = $(this).find('.active');
    if($active.hasClass('open')) {
      $active.removeClass('open');
      $active.slideUp();
    } else {
      $active.addClass('open');
      $active.slideDown();
    }
  });

});
