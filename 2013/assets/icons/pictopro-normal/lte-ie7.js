/* Load this script using conditional IE comments if you need to support IE 7 and IE 6. */

window.onload = function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'PictoPro-Normal\'">' + entity + '</span>' + html;
	}
	var icons = {
			'icon-normal-wizard-wand' : '&#xe000;',
			'icon-normal-wireframe-three-columns' : '&#xe001;',
			'icon-normal-wireframe-matrix' : '&#xe002;',
			'icon-normal-wireframe-lines' : '&#xe003;',
			'icon-normal-wireframe-horizontal-vertical-columns' : '&#xe004;',
			'icon-normal-wine-cup' : '&#xe005;',
			'icon-normal-wine-bottles' : '&#xe006;',
			'icon-normal-wine-bottle-cup' : '&#xe007;',
			'icon-normal-wifi' : '&#xe008;',
			'icon-normal-webcamera' : '&#xe009;',
			'icon-normal-watches' : '&#xe00a;',
			'icon-normal-warning' : '&#xe00b;',
			'icon-normal-wallet' : '&#xe00c;',
			'icon-normal-volume-slider' : '&#xe00d;',
			'icon-normal-usb' : '&#xe00e;',
			'icon-normal-up-down-arrow' : '&#xe00f;',
			'icon-normal-unlock' : '&#xe010;',
			'icon-normal-umbrella-rain' : '&#xe011;',
			'icon-normal-umbrella' : '&#xe012;',
			'icon-normal-twitter' : '&#xe013;',
			'icon-normal-turn-off' : '&#xe014;',
			'icon-normal-truck' : '&#xe015;',
			'icon-normal-tree-leafy' : '&#xe016;',
			'icon-normal-tree-conifer' : '&#xe017;',
			'icon-normal-train' : '&#xe018;',
			'icon-normal-thumb-up' : '&#xe019;',
			'icon-normal-thumb-down' : '&#xe01a;',
			'icon-normal-thermometer-low' : '&#xe01b;',
			'icon-normal-thermometer-high' : '&#xe01c;',
			'icon-normal-test-tube' : '&#xe01d;',
			'icon-normal-television' : '&#xe01e;',
			'icon-normal-technology-screen-size' : '&#xe01f;',
			'icon-normal-technology-screen-resolution' : '&#xe020;',
			'icon-normal-technology-processor' : '&#xe021;',
			'icon-normal-technology-memory' : '&#xe022;',
			'icon-normal-technology-internal-memory' : '&#xe023;',
			'icon-normal-teapot' : '&#xe024;',
			'icon-normal-tag' : '&#xe025;',
			'icon-normal-sun-thin' : '&#xe026;',
			'icon-normal-sun-cloud-thin' : '&#xe027;',
			'icon-normal-sun-cloud' : '&#xe028;',
			'icon-normal-sun' : '&#xe029;',
			'icon-normal-stop-watch' : '&#xe02a;',
			'icon-normal-steering-wheel' : '&#xe02b;',
			'icon-normal-star-plus' : '&#xe02c;',
			'icon-normal-star-minus' : '&#xe02d;',
			'icon-normal-star' : '&#xe02e;',
			'icon-normal-stamp' : '&#xe02f;',
			'icon-normal-speaker-sound' : '&#xe030;',
			'icon-normal-speaker-mute' : '&#xe031;',
			'icon-normal-speaker' : '&#xe032;',
			'icon-normal-socket' : '&#xe033;',
			'icon-normal-snowflake' : '&#xe034;',
			'icon-normal-smile-sad' : '&#xe035;',
			'icon-normal-smile-laugh' : '&#xe036;',
			'icon-normal-smile-happy' : '&#xe037;',
			'icon-normal-smartphone-qwerty' : '&#xe038;',
			'icon-normal-smartphone' : '&#xe039;',
			'icon-normal-school-ring' : '&#xe03a;',
			'icon-normal-shirt' : '&#xe03b;',
			'icon-normal-ship' : '&#xe03c;',
			'icon-normal-shield' : '&#xe03d;',
			'icon-normal-share' : '&#xe03e;',
			'icon-normal-script' : '&#xe03f;',
			'icon-normal-scissors' : '&#xe040;',
			'icon-normal-rss' : '&#xe041;',
			'icon-normal-rows' : '&#xe042;',
			'icon-normal-right-arrow-small' : '&#xe043;',
			'icon-normal-right-arrow-circle' : '&#xe044;',
			'icon-normal-right-arrow' : '&#xe045;',
			'icon-normal-ribbon' : '&#xe046;',
			'icon-normal-retina' : '&#xe047;',
			'icon-normal-refresh' : '&#xe048;',
			'icon-normal-recycle-bin' : '&#xe049;',
			'icon-normal-rectangle-up-arrow' : '&#xe04a;',
			'icon-normal-rays' : '&#xe04b;',
			'icon-normal-radio-button-unchecked' : '&#xe04c;',
			'icon-normal-radio-button-checked' : '&#xe04d;',
			'icon-normal-radio' : '&#xe04e;',
			'icon-normal-quotes' : '&#xe04f;',
			'icon-normal-question-mark' : '&#xe050;',
			'icon-normal-quatrefoil' : '&#xe051;',
			'icon-normal-puzzle-plus' : '&#xe052;',
			'icon-normal-puzzle' : '&#xe053;',
			'icon-normal-pushchair' : '&#xe054;',
			'icon-normal-profile-rays' : '&#xe055;',
			'icon-normal-profile-plus' : '&#xe056;',
			'icon-normal-profile-pipe' : '&#xe057;',
			'icon-normal-profile-minus' : '&#xe058;',
			'icon-normal-profile-male' : '&#xe059;',
			'icon-normal-profile-checkbox' : '&#xe05a;',
			'icon-normal-profile-female' : '&#xe05b;',
			'icon-normal-profile-cross' : '&#xe05c;',
			'icon-normal-printer' : '&#xe05d;',
			'icon-normal-pointer-plus' : '&#xe05e;',
			'icon-normal-pointer-pin' : '&#xe05f;',
			'icon-normal-pointer-minus' : '&#xe060;',
			'icon-normal-pointer' : '&#xe061;',
			'icon-normal-plus' : '&#xe062;',
			'icon-normal-plug' : '&#xe063;',
			'icon-normal-play-circle' : '&#xe064;',
			'icon-normal-piggy-bank' : '&#xe065;',
			'icon-normal-photo-camera' : '&#xe066;',
			'icon-normal-phone-circle' : '&#xe067;',
			'icon-normal-phone' : '&#xe068;',
			'icon-normal-percent' : '&#xe069;',
			'icon-normal-pen-tip' : '&#xe06a;',
			'icon-normal-pencil-ruler' : '&#xe06b;',
			'icon-normal-pencil' : '&#xe06c;',
			'icon-normal-pen' : '&#xe06d;',
			'icon-normal-paperclip' : '&#xe06e;',
			'icon-normal-pants' : '&#xe06f;',
			'icon-normal-paint-brush' : '&#xe070;',
			'icon-normal-pacman' : '&#xe071;',
			'icon-normal-order' : '&#xe072;',
			'icon-normal-orange-slice' : '&#xe073;',
			'icon-normal-note-simple' : '&#xe074;',
			'icon-normal-note-double' : '&#xe075;',
			'icon-normal-notebook' : '&#xe076;',
			'icon-normal-new-window' : '&#xe077;',
			'icon-normal-newspaper' : '&#xe078;',
			'icon-normal-network' : '&#xe079;',
			'icon-normal-music-player' : '&#xe07a;',
			'icon-normal-movie-disk' : '&#xe07b;',
			'icon-normal-mouse' : '&#xe07c;',
			'icon-normal-mountains' : '&#xe07d;',
			'icon-normal-mobile-phone' : '&#xe07e;',
			'icon-normal-minus' : '&#xe07f;',
			'icon-normal-microphone-stand' : '&#xe080;',
			'icon-normal-microphone' : '&#xe081;',
			'icon-normal-message-two-bubbles' : '&#xe082;',
			'icon-normal-message-bubble-text' : '&#xe083;',
			'icon-normal-message-bubbles-rounded' : '&#xe084;',
			'icon-normal-message-bubbles' : '&#xe085;',
			'icon-normal-message-bubble-rounded' : '&#xe086;',
			'icon-normal-message-bubble-plus' : '&#xe087;',
			'icon-normal-message-bubble-minus' : '&#xe088;',
			'icon-normal-message-bubble-cloud' : '&#xe089;',
			'icon-normal-message-bubble' : '&#xe08a;',
			'icon-normal-megaphone' : '&#xe08b;',
			'icon-normal-mark-pipe' : '&#xe08c;',
			'icon-normal-mark-male' : '&#xe08d;',
			'icon-normal-mark-cross' : '&#xe08e;',
			'icon-normal-map-pointer' : '&#xe08f;',
			'icon-normal-map' : '&#xe090;',
			'icon-normal-male-female' : '&#xe091;',
			'icon-normal-mail-open' : '&#xe092;',
			'icon-normal-mail' : '&#xe093;',
			'icon-normal-magnifier-plus' : '&#xe094;',
			'icon-normal-magnifier-minus' : '&#xe095;',
			'icon-normal-magnifier-circle' : '&#xe096;',
			'icon-normal-magnifier' : '&#xe097;',
			'icon-normal-luggage' : '&#xe098;',
			'icon-normal-loop-tape' : '&#xe099;',
			'icon-normal-loop' : '&#xe09a;',
			'icon-normal-lock' : '&#xe09b;',
			'icon-normal-link' : '&#xe09c;',
			'icon-normal-light-bulb-rays' : '&#xe09d;',
			'icon-normal-light-bulb' : '&#xe09e;',
			'icon-normal-left-arrow-small' : '&#xe09f;',
			'icon-normal-left-arrow-circle' : '&#xe0a0;',
			'icon-normal-left-arrow' : '&#xe0a1;',
			'icon-normal-leaf' : '&#xe0a2;',
			'icon-normal-lcd' : '&#xe0a3;',
			'icon-normal-knob-volume' : '&#xe0a4;',
			'icon-normal-knob' : '&#xe0a5;',
			'icon-normal-key-old' : '&#xe0a6;',
			'icon-normal-keyboard' : '&#xe0a7;',
			'icon-normal-key' : '&#xe0a8;',
			'icon-normal-information-sign' : '&#xe0a9;',
			'icon-normal-information' : '&#xe0aa;',
			'icon-normal-infinitive' : '&#xe0ab;',
			'icon-normal-inbox' : '&#xe0ac;',
			'icon-normal-image' : '&#xe0ad;',
			'icon-normal-id-card' : '&#xe0ae;',
			'icon-normal-chef-hat' : '&#xe0af;',
			'icon-normal-checkbox-unchecked' : '&#xe0b0;',
			'icon-normal-checkbox-checked' : '&#xe0b1;',
			'icon-normal-house' : '&#xe0b2;',
			'icon-normal-high-definition' : '&#xe0b3;',
			'icon-normal-heart-rounded' : '&#xe0b4;',
			'icon-normal-heart-plus' : '&#xe0b5;',
			'icon-normal-heart-minus' : '&#xe0b6;',
			'icon-normal-heart' : '&#xe0b7;',
			'icon-normal-headphones-microphone' : '&#xe0b8;',
			'icon-normal-headphones' : '&#xe0b9;',
			'icon-normal-hat' : '&#xe0ba;',
			'icon-normal-guitar' : '&#xe0bb;',
			'icon-normal-group-two' : '&#xe0bc;',
			'icon-normal-group-three' : '&#xe0bd;',
			'icon-normal-graph-uptrend' : '&#xe0be;',
			'icon-normal-graph-random' : '&#xe0bf;',
			'icon-normal-graph-downtrend' : '&#xe0c0;',
			'icon-normal-graph-cake-quarter' : '&#xe0c1;',
			'icon-normal-graph-cake' : '&#xe0c2;',
			'icon-normal-globe' : '&#xe0c3;',
			'icon-normal-glasses-stripes' : '&#xe0c4;',
			'icon-normal-glasses-old' : '&#xe0c5;',
			'icon-normal-glasses' : '&#xe0c6;',
			'icon-normal-gamepad' : '&#xe0c7;',
			'icon-normal-full-screen' : '&#xe0c8;',
			'icon-normal-four-rectangles' : '&#xe0c9;',
			'icon-normal-folder-zipp' : '&#xe0ca;',
			'icon-normal-folder-up-arrow' : '&#xe0cb;',
			'icon-normal-folder-ribbon' : '&#xe0cc;',
			'icon-normal-folder-plus' : '&#xe0cd;',
			'icon-normal-folder-open' : '&#xe0ce;',
			'icon-normal-folder-minus' : '&#xe0cf;',
			'icon-normal-folder-locker' : '&#xe0d0;',
			'icon-normal-folder-down-arrow' : '&#xe0d1;',
			'icon-normal-folder' : '&#xe0d2;',
			'icon-normal-floppy-disk' : '&#xe0d3;',
			'icon-normal-float-wheel' : '&#xe0d4;',
			'icon-normal-flash-power' : '&#xe0d5;',
			'icon-normal-flash' : '&#xe0d6;',
			'icon-normal-flame' : '&#xe0d7;',
			'icon-normal-flag' : '&#xe0d8;',
			'icon-normal-first-aid' : '&#xe0d9;',
			'icon-normal-filter' : '&#xe0da;',
			'icon-normal-film' : '&#xe0db;',
			'icon-normal-file-xls' : '&#xe0dc;',
			'icon-normal-file-text' : '&#xe0dd;',
			'icon-normal-file-scrap' : '&#xe0de;',
			'icon-normal-file-right-arrow' : '&#xe0df;',
			'icon-normal-file-plus' : '&#xe0e0;',
			'icon-normal-file-pencil' : '&#xe0e1;',
			'icon-normal-file-pdf' : '&#xe0e2;',
			'icon-normal-file-odf' : '&#xe0e3;',
			'icon-normal-file-minus' : '&#xe0e4;',
			'icon-normal-file-left-arrow' : '&#xe0e5;',
			'icon-normal-file-heart' : '&#xe0e6;',
			'icon-normal-file-doc' : '&#xe0e7;',
			'icon-normal-file-cross' : '&#xe0e8;',
			'icon-normal-file-copy' : '&#xe0e9;',
			'icon-normal-file' : '&#xe0ea;',
			'icon-normal-facebook' : '&#xe0eb;',
			'icon-normal-eye-dropper' : '&#xe0ec;',
			'icon-normal-eye' : '&#xe0ed;',
			'icon-normal-exclamation-mark' : '&#xe0ee;',
			'icon-normal-equalizer' : '&#xe0ef;',
			'icon-normal-eco-light-bulb' : '&#xe0f0;',
			'icon-normal-drums' : '&#xe0f1;',
			'icon-normal-drop' : '&#xe0f2;',
			'icon-normal-drink' : '&#xe0f3;',
			'icon-normal-drag-area' : '&#xe0f4;',
			'icon-normal-download' : '&#xe0f5;',
			'icon-normal-door-out' : '&#xe0f6;',
			'icon-normal-door-in' : '&#xe0f7;',
			'icon-normal-divider' : '&#xe0f8;',
			'icon-normal-disabled' : '&#xe0f9;',
			'icon-normal-direrctor-chair' : '&#xe0fa;',
			'icon-normal-directional-board' : '&#xe0fb;',
			'icon-normal-dashboard' : '&#xe0fc;',
			'icon-normal-cursor-type' : '&#xe0fd;',
			'icon-normal-cursor-scale-vertical' : '&#xe0fe;',
			'icon-normal-cursor-scale-up' : '&#xe0ff;',
			'icon-normal-cursor-scale-horizontal' : '&#xe100;',
			'icon-normal-cursor-scale-down' : '&#xe101;',
			'icon-normal-cursor-scale-45-right' : '&#xe102;',
			'icon-normal-cursor-scale-45-left' : '&#xe103;',
			'icon-normal-cursor-move' : '&#xe104;',
			'icon-normal-cursor-hand' : '&#xe105;',
			'icon-normal-cursor' : '&#xe106;',
			'icon-normal-currency-euro' : '&#xe107;',
			'icon-normal-currency-dollar' : '&#xe108;',
			'icon-normal-cup-coffee' : '&#xe109;',
			'icon-normal-crosshair' : '&#xe10a;',
			'icon-normal-credit-card' : '&#xe10b;',
			'icon-normal-copyright' : '&#xe10c;',
			'icon-normal-control-stop' : '&#xe10d;',
			'icon-normal-control-rewind' : '&#xe10e;',
			'icon-normal-control-previous' : '&#xe10f;',
			'icon-normal-control-play' : '&#xe110;',
			'icon-normal-control-pause' : '&#xe111;',
			'icon-normal-control-next' : '&#xe112;',
			'icon-normal-control-forward' : '&#xe113;',
			'icon-normal-computer-case' : '&#xe114;',
			'icon-normal-compass' : '&#xe115;',
			'icon-normal-compact-disc' : '&#xe116;',
			'icon-normal-command' : '&#xe117;',
			'icon-normal-collage-hat' : '&#xe118;',
			'icon-normal-coins' : '&#xe119;',
			'icon-normal-cog-wheel' : '&#xe11a;',
			'icon-normal-code-end' : '&#xe11b;',
			'icon-normal-code-begin' : '&#xe11c;',
			'icon-normal-cloud-up-arrow' : '&#xe11d;',
			'icon-normal-clouds-thin' : '&#xe11e;',
			'icon-normal-clouds-rain-thin' : '&#xe11f;',
			'icon-normal-clouds-flash-thin' : '&#xe120;',
			'icon-normal-cloud-music' : '&#xe121;',
			'icon-normal-cloud-down-arrow' : '&#xe122;',
			'icon-normal-cloud' : '&#xe123;',
			'icon-normal-clock-sand' : '&#xe124;',
			'icon-normal-clock' : '&#xe125;',
			'icon-normal-clipboard' : '&#xe126;',
			'icon-normal-circle-plus-small' : '&#xe127;',
			'icon-normal-circle-plus' : '&#xe128;',
			'icon-normal-circle-pipe' : '&#xe129;',
			'icon-normal-circle-minus-small' : '&#xe12a;',
			'icon-normal-circle-minus' : '&#xe12b;',
			'icon-normal-circle-information' : '&#xe12c;',
			'icon-normal-circle-cross-small' : '&#xe12d;',
			'icon-normal-circle-cross' : '&#xe12e;',
			'icon-normal-center-position' : '&#xe12f;',
			'icon-normal-cart-up-arrow' : '&#xe130;',
			'icon-normal-cart-plus' : '&#xe131;',
			'icon-normal-cart-minus' : '&#xe132;',
			'icon-normal-cart-down-arrow' : '&#xe133;',
			'icon-normal-cart' : '&#xe134;',
			'icon-normal-card-green' : '&#xe135;',
			'icon-normal-car' : '&#xe136;',
			'icon-normal-cap-winner' : '&#xe137;',
			'icon-normal-capsule' : '&#xe138;',
			'icon-normal-camera' : '&#xe139;',
			'icon-normal-calendar-month' : '&#xe13a;',
			'icon-normal-calendar-day' : '&#xe13b;',
			'icon-normal-calculator' : '&#xe13c;',
			'icon-normal-cake' : '&#xe13d;',
			'icon-normal-bus' : '&#xe13e;',
			'icon-normal-box-plus' : '&#xe13f;',
			'icon-normal-box-closed' : '&#xe140;',
			'icon-normal-box' : '&#xe141;',
			'icon-normal-book-2' : '&#xe142;',
			'icon-normal-book' : '&#xe143;',
			'icon-normal-bone' : '&#xe144;',
			'icon-normal-bluetooth' : '&#xe145;',
			'icon-normal-bird-fly' : '&#xe146;',
			'icon-normal-bird' : '&#xe147;',
			'icon-normal-bell' : '&#xe148;',
			'icon-normal-battery-half' : '&#xe149;',
			'icon-normal-battery-full' : '&#xe14a;',
			'icon-normal-bank' : '&#xe14b;',
			'icon-normal-badge-star' : '&#xe14c;',
			'icon-normal-badge-sale' : '&#xe14d;',
			'icon-normal-badge-ribbon' : '&#xe14e;',
			'icon-normal-badge' : '&#xe14f;',
			'icon-normal-backspace' : '&#xe150;',
			'icon-normal-assembly-key-screwdriver' : '&#xe151;',
			'icon-normal-assembly-key' : '&#xe152;',
			'icon-normal-apple' : '&#xe153;',
			'icon-normal-alternative' : '&#xe154;',
			'icon-normal-alarm-clock' : '&#xe155;',
			'icon-normal-airplane' : '&#xe156;'
		},
		els = document.getElementsByTagName('*'),
		i, attr, html, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		attr = el.getAttribute('data-icon');
		if (attr) {
			addIcon(el, attr);
		}
		c = el.className;
		c = c.match(/icon-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
};