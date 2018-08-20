$(document).ready(function() {
    
    // __________ Smooth Scrooling Code ___________
    // Select all links with hashes
    $('a[href*="#"]')
    // Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function(event) {
    // On-page links
    if (
        location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
        && 
        location.hostname == this.hostname
    ) {
        // Figure out element to scroll to
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        // Does a scroll target exist?
        if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
            scrollTop: target.offset().top
        }, 500, function() {
            // Callback after animation
            // Must change focus!
            var $target = $(target);
            $target.focus();
            if ($target.is(":focus")) { // Checking if the target was focused
            return false;
            } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
            };
        });
        }
    }
    });


    // __________ Animations ___________
    $('.js--abt').waypoint(function(direction) {
        if(direction == "down")
        $('.js--abt').addClass('animated fadeInUp');
    }, {
        offset: '50%'
    });

    $('.js--project').waypoint(function(direction) {
        if(direction == "down")
        $('.js--project').addClass('animated fadeInUp');
    }, {
        offset: '50%'
    });

    $('.js--footer').waypoint(function(direction) {
        if(direction == "down")
        $('.js--footer').addClass('animated fadeInUp');
    }, {
        offset: '50%'
    });

    $('.js--img-pop').waypoint(function(direction) {
        if(direction == "down")
        $('.js--img-pop').addClass('animated bounceIn');
    }, {
        offset: '50%'
    });

    $('.js--img-pop2').waypoint(function(direction) {
        if(direction == "down")
        $('.js--img-pop2').addClass('animated bounceIn');
    }, {
        offset: '50%'
    });

});