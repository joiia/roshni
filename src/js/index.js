import jQuery from 'jquery';

import Animations from './modules/Animations.js';
import Menu from './modules/Menu.js';
import SmoothScroll from './modules/SmoothScroll.js';

const animations = new Animations;
const menu = new Menu;
new SmoothScroll(document,120,20);