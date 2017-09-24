document.addEventListener('DOMContentLoaded', function() {
  var typed = new Typed('#typed', {
    strings: ['Hi!', 'I am: Yero &copy;', 'I am: <strong>an aspiring developer</strong>', 'I am: <strong>looking for opportunities!</strong>'],
    // stringsElement: '#typed-strings',
    typeSpeed: 20,
    backSpeed: 20,
    startDelay: 1000,
    smartBackspace: true,
    loop: true,
    loopCount: Infinity,
  });
});