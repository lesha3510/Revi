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

//[1,2,3,4,5,6,7,8,9,10].forEach(function(element) {
//    console.log(element);
//});
Array.prototype.forEach.call(itemHasSubmenu, function (element) {
	element.onclick = function (event) {
		event.preventDefault();
        let subMenu = event.target.parentNode.querySelector('.sub-menu');
        let backSubMenu = subMenu.querySelector('.back-sub-menu');
        subMenu.classList.add('view');

        backSubMenu.onclick = function() {
            subMenu.classList.remove('view');
        }

        let noscroll = event.target.

	}

//    if(event.querySelector('.sub-menu').classList.contains('view')) {
//        event.querySelector('.sub-menu').classList.remove('view');
//    }
});

//document.querySelector('.back-sub-menu').onclick = function(event) {
//    var sub = document.body.querySelector('.sub-menu');
//    event.preventDefault;
//    console.log(sub);
//    if (sub.classList.contains('view')) {
//        sub.classList.remove('view');
//    }
//};



$('.slick-slider').slick({});
