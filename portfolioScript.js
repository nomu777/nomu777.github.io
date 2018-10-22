$(function() {

  $('.top').click(function() {
    $("html, body").animate({
      scrollTop:$('#top_area').offset().top
    });
  });

  $('.about').click(function() {
    $("html, body").animate({
      scrollTop:$('#top-profile_area').offset().top
    });
  });

  $('.works').click(function() {
    $("html, body").animate({
      scrollTop:$('#top-works_area').offset().top
    });
  });

  $('.contact').click(function() {
    $("html, body").animate({
      scrollTop:$('#contact_area').offset().top
    });
  });

  $(function(){
    $('#menu li').hover(function(){
        $("ul:not(:animated)", this).slideDown();
    }, function(){
        $("ul.child",this).slideUp();
    });
  });

});
