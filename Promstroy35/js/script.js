document.querySelector('.hamburger').addEventListener('click',function(e){
        e.preventDefault();
//        humburger.classList.toggle('is-active');
        if(this.classList.contains('is-active')){
            this.classList.remove('is-active')
            document.querySelector('#menu').classList.remove('nav-active')
        }
        else {
            this.classList.add('is-active')
            document.querySelector('#menu').classList.add('nav-active')
        }
    })

    $('.slick-slider').slick({
    });
