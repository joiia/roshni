import jQuery from 'jquery';

const Popup = () => {
	const button = jQuery('.catalog__item .button');
	const popup = jQuery('.popup__wrap');
	const close = jQuery('.popup__close');
	const bg = jQuery('.popup__bg');

	button.on('click', togglePopup);
	close.on('click', togglePopup);
	bg.on('click', togglePopup);

	function togglePopup(e) {
		popup.toggleClass('popup__wrap--visible');
		bg.toggleClass('popup__bg--visible');
	};

}

export default Popup;