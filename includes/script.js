// SCROLLING
function scrollAnchor (desiredHeight) {
  $('.menu li a[href*="#"]').on("click", function(e) {
      e.preventDefault(); // prevent hard jump
      const target = $(this).attr("href"); 
      
      $('html, body').stop().animate({
          scrollTop: $(target).offset().top - desiredHeight 
      }, 600);
      return false;
  });
};

$(document).ready(() => {
  scrollAnchor(10);

//TYPED.js
document.addEventListener('DOMContentLoaded', function() {
  var typed = new Typed('#typed', {
    strings: ['Hi! ✋', 'I am: Yero &copy;', 'I am: <strong>an aspiring software engineer 🤓</strong>', 'I am: <strong>looking for opportunities! 🤙</strong>'],
    // stringsElement: '#typed-strings',
    typeSpeed: 20,
    backSpeed: 20,
    startDelay: 1000,
    smartBackspace: true,
    loop: true,
    loopCount: 3,
  });
});