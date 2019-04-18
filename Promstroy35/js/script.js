$(document).ready(function(){
    var humburger = document.querySelector('.hamburger');

    humburger.onclick = function(e){
        console.log(humburger);
        e.preventDefault();
        humburger.classList.toggle('is-active');
    }
    $('.slick-slider').slick({
    });
});
