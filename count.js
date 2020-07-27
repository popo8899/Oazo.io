'use strict';

$('.count').each(function() {
  $(this).prop('c', 0).animate({
    c: $(this).text()
  }, {
    duration: 3000,
    easing: 'linear',
    step: function(now) {
      $(this).text(Math.ceil(now));
    }
  });
});
