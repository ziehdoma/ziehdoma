$(document).ready(function(){
  // Fade in page
  $('body.hidden').fadeIn(1200).removeClass('hidden');

  // Menu logic
  $(".toggle-menu").click(function(){
    $(".toggle-menu").not(this).next(".toggle-item").slideUp("slow");
    $(this).next(".toggle-item").slideToggle("slow");
  });

  // Page down to see icons
  $("#contact").click(function(){
    $('html, body').animate({scrollTop: '+=200px'}, 800);
  });
  
});


