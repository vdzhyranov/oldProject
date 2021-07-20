$(document).ready(function() {
  $("a.scrollMenu").click(function() {
    var elementClick = $(this).attr("href")
    var destination = $(elementClick).offset().top;
    jQuery("html:not(:animated),body:not(:animated)").animate({
      scrollTop: destination
    }, 800);
    return false;
  });


$('.btn1').click(function (e) {
    e.preventDefault();
    $('.bnext1'). css('display', 'block')
    $('.ct1 span'). css('display', 'block')
    $('.btn1'). css('display', 'none')
    $('.ci1'). css('display', 'none')

  });
  $('.btn2').click(function (e) {
    e.preventDefault();
    $('.bnext2'). css('display', 'block')
    $('.ct2 span'). css('display', 'block')
    $('.btn2'). css('display', 'none')
    $('.ci2'). css('display', 'none')

  });
  $('.btn3').click(function (e) {
    e.preventDefault();
    $('.bnext3'). css('display', 'block')
    $('.ct3 span'). css('display', 'block')
    $('.btn3'). css('display', 'none')
    $('.ci3'). css('display', 'none')

  });
  $('.btn4').click(function (e) {
    e.preventDefault();
    $('.bnext4'). css('display', 'block')
    $('.ct4 span'). css('display', 'block')
    $('.btn4'). css('display', 'none')
    $('.ci4'). css('display', 'none')

  });
  $('.btn5').click(function (e) {
    e.preventDefault();
    $('.bnext5'). css('display', 'block')
    $('.ct5 span'). css('display', 'block')
    $('.btn5'). css('display', 'none')
    $('.ci5'). css('display', 'none')

  });
  $('.btn6').click(function (e) {
    e.preventDefault();
    $('.bnext6'). css('display', 'block')
    $('.ct6 span'). css('display', 'block')
    $('.btn6'). css('display', 'none')
    $('.ci6'). css('display', 'none')

  });
  $('.btn7').click(function (e) {
    e.preventDefault();
    $('.bnext7'). css('display', 'block')
    $('.ct7 span'). css('display', 'block')
    $('.btn7'). css('display', 'none')
    $('.ci7'). css('display', 'none')

  });
  $('.btn8').click(function (e) {
    e.preventDefault();
    $('.bnext8'). css('display', 'block')
    $('.ct8 span'). css('display', 'block')
    $('.btn8'). css('display', 'none')
    $('.ci8'). css('display', 'none')

  });
  $('.btn9').click(function (e) {
    e.preventDefault();
    $('.bnext9'). css('display', 'block')
    $('.ct9 span'). css('display', 'block')
    $('.btn9'). css('display', 'none')
    $('.ci9'). css('display', 'none')

  });
  $('.btn10').click(function (e) {
    e.preventDefault();
    $('.bnext10'). css('display', 'block')
    $('.ct10 span'). css('display', 'block')
    $('.btn10'). css('display', 'none')
    $('.ci10'). css('display', 'none')

  });
    
});
$(function () {
  $(window).scroll(function() {
      $('.firstMessage').each(function(){
          var imagePos = $(this).offset().top;

          var topOfWindow = $(window).scrollTop();
          if (imagePos < topOfWindow+650) {
              $(this).addClass("fadeInUp");
          }
      });
  });
  $(window).scroll(function() {
      $('.secondMessage').each(function(){
          var imagePos = $(this).offset().top;

          var topOfWindow = $(window).scrollTop();
          if (imagePos < topOfWindow+650) {
              $(this).addClass("fadeInUp");
          }
      });
  });
})