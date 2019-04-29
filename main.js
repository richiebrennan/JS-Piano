$(document).ready(function () {
    window.addEventListener('keyup', function (e) {
        var audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
        var key = $('.key[data-key="' + e.keyCode + '"]');
        var bkey = $('.bkey[data-key="' + e.keyCode + '"]')
        
        if (!audio) return;
        
        audio.play();
        audio.currentTime = 0;
        
        key.addClass('playing');
        bkey.addClass('playing');
    });
    //Remove the playing effect after .02 seconds
    setInterval(function () {
        $('.key, .bkey').removeClass('playing');
    }, 200);

    //Toggle the keys
    $('.help').click(function () {
        $('.key p, .bkey p').toggle();
    });
});
