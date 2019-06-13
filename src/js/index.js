import jQuery from 'jquery';

import Animations from './modules/Animations.js';
import Menu from './modules/Menu.js';
import Popup from './modules/Popup.js';

import SmoothScroll from './modules/SmoothScroll.js';

const animations = new Animations;
const menu = new Menu;
const popup = new Popup;

new SmoothScroll(document,120,20);