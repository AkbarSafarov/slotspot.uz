const body = document.body;
const html = document.documentElement;
const logoBlock = document.querySelector('.main_header .logo');

if (logoBlock){
	setTimeout(function() {
		logoBlock.classList.add('active');
	}, 500);
}

function blockPopup(btn, wrap) {
	let formWrap = document.querySelector(wrap);
	let closeForm = formWrap.querySelector('.closeBtn');
	let formBtn = document.querySelectorAll(btn);
	let formOpened = 'opened';
	let overflowHidden = 'overflowHidden';	
	let wrapMain = document.querySelectorAll('.block_popop_modal');

	closeForm.addEventListener('click', function() {
		formWrap.classList.remove(formOpened);
		formBtn.forEach(function(btn) {
		  btn.classList.remove(formOpened);
		});
		html.classList.remove(overflowHidden);
	});

	formBtn.forEach(btn => {
		btn.addEventListener('click', function(event) {
			document.querySelectorAll('.btn_action').forEach(function(btn) {
			  btn.classList.remove(formOpened);
			});
			wrapMain.forEach(function(wrap) {
			  wrap.classList.remove(formOpened);
			});
			this.classList.add(formOpened);
			formWrap.classList.add(formOpened);
			event.preventDefault();
		});
	})

	html.addEventListener('keyup', function(event) {
		if (formWrap.classList.contains(formOpened) && event.keyCode == 27) {
			formWrap.classList.remove(formOpened);
			html.classList.remove(overflowHidden);
			formBtn.forEach(function(btn) {
			  btn.classList.remove(formOpened);
			});
		}
	});
}

blockPopup('.lang_block', '.lang_block_popup');

const UPLOAD_BUTTON = document.getElementById("upload-button");
const FILE_INPUT = document.querySelector(".avatar_image input[type=file]");
const AVATAR = document.getElementById("avatar_img");

if (UPLOAD_BUTTON) {
	UPLOAD_BUTTON.addEventListener("click", () => FILE_INPUT.click());

	FILE_INPUT.addEventListener("change", event => {
	  	const file = event.target.files[0];

	  	const reader = new FileReader();
	  	reader.readAsDataURL(file);

	  	reader.onloadend = () => {
	    	AVATAR.setAttribute("aria-label", file.name);
	    	AVATAR.style.background = `url(${reader.result}) center center/cover`;
	  	};
	});
}

const btnBack = document.querySelector('.back_btn');

if (btnBack){
	btnBack.addEventListener('click', () => {
	  history.back();
	});
}

$(function(){

	$('.working_dropdown').on('click', function(){
		if ($(this).closest('.working_days').hasClass('opened')){
			$(this).closest('.working_days').removeClass('opened');
		} else {
			$(this).closest('.working_days').addClass('opened');
		}
	});

	$('.choose_slot_block .item').on('click', function(){
		$(this).siblings('.item').removeClass('active');
		$(this).addClass('active');
	});

	$('.service_item').on('click', function(){
		$(this).toggleClass('active');
	});

	$('.number_input:first-child').focus();

	$('.number_input').on('keydown', function(e) {
		let value = $(this).val();
		let len = value.length;
		let curTabIndex = parseInt($(this).attr('tabindex'));
		let nextTabIndex = curTabIndex + 1;
		let prevTabIndex = curTabIndex - 1;
		if (len > 0) {
			$(this).val(value.substr(0, 1));
			$('[tabindex=' + nextTabIndex + ']').focus();
		} else if (len == 0 && prevTabIndex !== 0) {
			$('[tabindex=' + prevTabIndex + ']').focus();
		}
	});


	let $body = $('body');
	let $html = $('html');

  	function formPopup($btn,$wrap){
  	
    	let closeForm = $('.popop_modal .close-btn'),
	        formWrap = $($wrap),
	        formBtn = $($btn),
	        formOpened = 'opened',
	        overflowHidden = 'oveflowHidden';

	    closeForm.on('click', function() {
	        formWrap.removeClass(formOpened);
	        $html.removeClass(overflowHidden);
	    });

	    formBtn.on('click', function(event) {

	        if ($btn === '.book_btn') {
	        	formWrap.find('.popup_date').html('');
	        	formWrap.find('.list_param').html('');

	        	const textDay = $('.mySwiperSlot .swiper-slide.active').text();

	        	$('.service_block .service_item').each(function(){
	        		if ($(this).hasClass('active')){
	        			const name = $(this).find('.name').text();

	        			formWrap.find('.list_param').append(`<div>${name}</div>`);
	        		}
	        	});
	        	formWrap.find('.popup_date').text(textDay);
	        }

	        formWrap.addClass(formOpened);
	        $html.toggleClass(overflowHidden);
	        event.preventDefault();

	    });

	    $body.on('click touchstart', function(a) {
	        if ($(a.target).closest('.popup_inner').length || $(a.target).closest(formBtn).length) return;
	        if (formWrap.hasClass(formOpened)) {
	            formWrap.removeClass(formOpened);
	            $html.removeClass(overflowHidden);
	        }
	    });
	}

	formPopup('.book_btn','.book_block_popup');
	formPopup('.btn_logout','.logout_block_popup');
	formPopup('.delete_profil','.delete_block_popup');
})

$(function(){
    var $html = $(document.documentElement),
        menuBtn = $('.burger'),
        menuWrapper = $('.menu_burger'),
        menuClose = $('.menuClose'),        
        openedMenu = 'opened',
        overflowHidden = 'oveflowHidden';

    menuBtn.on("click", function(event) {
        menuWrapper.toggleClass(openedMenu);
        menuBtn.toggleClass(openedMenu);
        $html.toggleClass(overflowHidden);
        $html.toggleClass('open_menu');
    });
    menuClose.on("click", function(event) {
        menuWrapper.removeClass(openedMenu);
        menuBtn.removeClass(openedMenu);
        $html.removeClass(overflowHidden);
        $html.removeClass('open_menu');
    });

    $(document).on('click touchstart', function(e){
        if( $(e.target).closest(menuBtn).length || $(e.target).closest(menuWrapper).length) 
          return;
        if (menuBtn.hasClass(openedMenu)){
            menuWrapper.removeClass(openedMenu);
            menuBtn.removeClass(openedMenu);
            $html.removeClass(overflowHidden);
            $html.removeClass('open_menu');
        }
    });
});

window.onload = function() {
	const mainBlock = document.querySelector('.main_block_black');

	if (mainBlock){
		setTimeout(function() {
		    mainBlock.classList.add('block_load');
		}, 2000);
	}

	let swiper = new Swiper(".mySwiper", {
    	slidesPerView: 1,
    	loop: true,
      	spaceBetween: 0,
	    pagination: {
	        el: ".swiper-pagination",
	        clickable: false,
	    },
	    autoplay: {
		   delay: 4000,
		},
	});

	let mySwiperSlot = new Swiper(".mySwiperSlot", {
    	slidesPerView: 3,
      	spaceBetween: 16,
      	autoplay: {
		   delay: 4000,
		}
	});
};

