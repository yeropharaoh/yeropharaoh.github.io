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
  
  // HOVER
  let sourceSwap = function () {
    let $this = $(this);
    let newSource = $this.data('alt-src');
    $this.data('alt-src', $this.attr('src'));
    $this.attr('src', newSource);
  }
  $(function() {
    $('img[data-alt-src].proj-img').each(function() { 
        new Image().src = $(this).data('alt-src'); 
    }).hover(sourceSwap, sourceSwap); 
  });

});

//TYPED.js
document.addEventListener('DOMContentLoaded', function() {
  let typed = new Typed('#typed', {
    strings: ['Hi! ✋', 'I am: Yero &copy;', 'I am: <strong>a front-end software engineer 🤓</strong>', 'I am: <strong>looking for opportunities! 🤙</strong>'],
    // stringsElement: '#typed-strings',
    typeSpeed: 20,
    backSpeed: 20,
    startDelay: 1000,
    smartBackspace: true,
    loop: true,
    loopCount: 2,
  });
});