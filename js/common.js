$(function() {

	var loginButton = $('.header__login');

	var navButton = $('.mobile-nav__button');
	var navButtonActive = 'mobile-nav__button--active';

	var navMenu = $('.mobile-nav__menu');
	var navMenuActive = 'mobile-nav__menu--active';


	if($(window).width() <= 768){
		loginButton.html(' ');
	} else{
		loginButton.html('Sign In');
	}

	$(window).resize(function(event) {

		if($(window).width() <= 768){
			loginButton.html(' ');
		} else{
			loginButton.html('Sign In');

			if (navMenu.hasClass(navMenuActive)){
				navMenu.removeClass(navMenuActive);
			};

			if (navButton.hasClass(navButtonActive)){
				navButton.removeClass(navButtonActive);
			};

			bodyScrollTop = $('body');

			if ($('body').hasClass('no-scroll')){
				$('body').removeClass('no-scroll');
			};

		};
	});

	//Кнопка мобильного меню
	navButton.click(function(event) {
		navMenu.toggleClass(navMenuActive);
		navButton.toggleClass(navButtonActive);
		$('body').toggleClass('no-scroll');
	});

	//Появление фиксированного меню
	if($(window).width() <= 768){
		$('.header-menu--fixed').addClass('header-menu--fixed--none');
	} else{
		$('.header-menu--fixed').removeClass('header-menu--fixed--none');
	};

	$(window).resize(function(event){
		if($(window).width() <= 768){
			$('.header-menu--fixed').addClass('header-menu--fixed--none');
		} else{
			$('.header-menu--fixed').removeClass('header-menu--fixed--none');
		};
	});
	

	if( $(window).scrollTop() > 400){
		$('.header-menu--fixed').addClass('header-menu--fixed--active');
	} else{
		$('.header-menu--fixed').removeClass('header-menu--fixed--active');
	};

	$(window).scroll(function(){
		if( $(window).scrollTop() > 400){
			$('.header-menu--fixed').addClass('header-menu--fixed--active');
		} else{
			$('.header-menu--fixed').removeClass('header-menu--fixed--active');
		}
	});

	$('.modal-signup__tab').on('click', function() {
			$('.modal-signup__tab').removeClass('modal-signup__tab--active');
			$(this).addClass('modal-signup__tab--active');

			activeBody = $(this).attr('data-tab');
			$('.signup__block').removeClass('signup__block--active');
			$('#' + activeBody).addClass('signup__block--active');
	 		
	});

	$('.modal__exit').on('click', function(){
		$('body').removeClass('no-scroll');
		$('.modal-body').removeClass('modal-body--active');
	});

	$('.modal-body').on('click', function(e){
		if(!e.target.closest('.modal-window')){
			$('body').removeClass('no-scroll');
			$('.modal-body').removeClass('modal-body--active');	
		}
	});

	$('.header__login').on('click', function(e){
		e.preventDefault();
		$('body').addClass('no-scroll');
		$('.modal-body').addClass('modal-body--active');
	});

});
