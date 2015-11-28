$(document).ready(function(){
  // fade in page
  $('body.hidden').fadeIn(1200).removeClass('hidden');

  // Menu logic
  $(".toggle-menu").click(function(){
    $(".toggle-menu").not(this).next(".toggle-item").slideUp("slow");
    $(this).next(".toggle-item").slideToggle("slow");
  });

  // page down to see icons
  $("#contact").click(function(){
    $('html, body').animate({scrollTop: '+=200px'}, 800);
  });
  
  // scroll to top via logo
  // $('a[href^="#"]').on('click',function (e) {
  //     e.preventDefault();

  //     var target = this.hash;
  //     var $target = $(target);

  //     $('html, body').stop().animate({
  //         'scrollTop': $target.offset().top
  //     }, 500, 'swing', function () {
  //         window.location.hash = target;
  //     });
  // });
  
});


