$(document).ready(function(){
  $('body.hidden').fadeIn(1500).removeClass('hidden');
  $("#resume").click(function(){
    $("#myresume").slideToggle("slow");
  });
  $("#project").click(function(){
    $("#myproject").slideToggle("slow");
  });
  $("#contact").click(function(){
    $("#mycontact").slideToggle("slow");
  });
  $("#skills").click(function(){
    $("#myskills").slideToggle("slow");
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