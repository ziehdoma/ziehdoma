$(document).ready(function(){
  // fade in page
  $('body.hidden').fadeIn(1200).removeClass('hidden');

  // Original toggle
  $("#project").click(function(){
    $("#myproject").slideToggle("slow");
  });
  $("#skills").click(function(){
    $("#myskills").slideToggle("slow");
  });
  $("#contact").click(function(){
    $("#mycontact").fadeIn("slow");
  });
  // page down to see icons
  $("#contact").click(function(){
    $('html, body').animate({scrollTop: '+=100px'}, 800);
  });

  // scroll to top
  $('a[href^="#"]').on('click',function (e) {
      e.preventDefault();

      var target = this.hash;
      var $target = $(target);

      $('html, body').stop().animate({
          'scrollTop': $target.offset().top
      }, 900, 'swing', function () {
          window.location.hash = target;
      });
  });
  
});


