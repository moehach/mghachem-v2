//Google Analytics
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'UA-143942963-2');

//Navigation Background Colour
$(function () {
  $(document).scroll(function () {
    var $nav = $(".navbar");
    $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
  });
});

//Load Navigational Elements
$(function () {
  var includes = $('[data-include]')
  $.each(includes, function () {
    var file = $(this).data('include') + '.html'
    $(this).load(file)
  })
})
