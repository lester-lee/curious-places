$(document).ready(function(){
  $(document).scroll(function () {
    $nav = $("nav");
    $nav.toggleClass('bottom-nav', $(this).scrollTop() > $nav.height());
  });
});
