import jQuery from 'jquery';
import { TimelineMax, TweenMax, Linear } from 'gsap';
import ScrollMagic from 'scrollmagic';
import 'imports-loader?define=>false!scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap.js';
import 'imports-loader?define=>false!scrollmagic/scrollmagic/uncompressed/plugins/jquery.ScrollMagic.js';
import 'imports-loader?define=>false!scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators';

const Animations = () => {

	const controller = new ScrollMagic.Controller();

	const reveal = jQuery('.reveal');
	
	reveal.each(function(){
		const item = jQuery(this);
		const scrollDesc = new ScrollMagic.Scene({
			triggerElement: item, 
			duration: '0',
			reverse: false,
			triggerHook: 0.97
		})
		.setClassToggle(item, 'visible')
		.addTo(controller);
	});

}

export default Animations;