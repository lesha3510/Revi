document.querySelector('.hamburger').onclick = function(event) {
    event.preventDefault();
    console.log(event.currentTarget)
    if( event.currentTarget.classList.contains('is-active') ) {
        event.currentTarget.classList.remove('is-active');
    } else {
        event.currentTarget.classList.add('is-active');
    }
}


$('.slick-slider').slick();

