$('.slidein').each(function() {
  let $item = $(this);
  $(window).on('scroll', function() {
    let top = $item.offset().top;
    let position = top - $(window).height();
    if($(window).scrollTop() > position) {
      $item.addClass('isShow');
    }
  });
});

//menu
$(function() {
  $('.btn-gnavi').on('click', function() {
    let rightVal = 0;
    if($(this).hasClass('open')) {
      rightVal = -300;
      $(this).removeClass('open');
    } else {
      $(this).addClass('open');
    }
    $('#global-navi').stop().animate({
      right: rightVal
    }, 200);
  });
});
