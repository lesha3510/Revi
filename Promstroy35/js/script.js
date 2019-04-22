document.querySelector('.hamburger').onclick = function (event) {
	event.preventDefault();
	console.log(event.currentTarget)
	//    event.currentTarget.classList.toggle('is-active');


	var menu = document.querySelector('.mobile-menu');
	//    menu.classList.toggle('nav-active');


	var body = document.querySelector('body');
	//    body.classList.toggle('no-active');

	if (event.currentTarget.classList.contains('is-active')) {
		event.currentTarget.classList.remove('is-active')
		menu.classList.remove('nav-active');
		body.classList.remove('no-active');
		//        document.querySelectorAll('.sub-menu').classList.toggle('view');
		document.querySelectorAll('.sub-menu').forEach(function(element) {
			element.classList.remove('view')
		})




	} else {
		event.currentTarget.classList.add('is-active')
		menu.classList.add('nav-active');
		body.classList.add('no-active');
	}
}

var itemHasSubmenu = document.querySelectorAll(".menu-item-has-children > a");

Array.prototype.forEach.call(itemHasSubmenu, function (element) {
	element.onclick = function (event) {
		event.preventDefault();
		       event.currentTarget.parentNode.querySelector('.sub-menu').classList.toggle('view');
	}
});

$('.slick-slider').slick({});
