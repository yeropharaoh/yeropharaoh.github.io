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

//USE CASE image swap for collect deckz
  $('.features-block .left img').on("click touchstart",function() {
    let first_image = $(this).attr("id");
    $('#image-1').removeClass();           
    $('#image-2').removeClass();           
    $('#image-3').removeClass();
    if (first_image === 'image-1'){
        $('#image-1').addClass('image-C');
        $('#image-2').addClass('image-A');
        $('#image-3').addClass('image-B');
    }
    else if (first_image === 'image-2'){   
        $('#image-1').addClass('image-B');
        $('#image-2').addClass('image-C');
        $('#image-3').addClass('image-A');
    }
    else {   
        $('#image-1').addClass('image-A');
        $('#image-2').addClass('image-B');
        $('#image-3').addClass('image-C');
    }
  });
});

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