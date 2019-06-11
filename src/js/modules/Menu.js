import jQuery from 'jquery';

class Menu {
    constructor() {
    	this.burger = jQuery('.burger');
    	this.menu = jQuery('.mobile-menu__wrap');
    	this.bg = jQuery('.mobile-menu__bg');
        this.close = jQuery('.mobile-menu__close');

    	this.events();
    }

    events() {
    	this.burger.on('click', this.toggleMenu.bind(this));
    	this.bg.on('click', this.toggleMenu.bind(this));
        this.close.on('click', this.toggleMenu.bind(this));
    }

    toggleMenu() {
    	this.menu.toggleClass('mobile-menu__wrap--visible');
    	this.bg.toggleClass('mobile-menu__bg--visible');
    }
}

export default Menu;