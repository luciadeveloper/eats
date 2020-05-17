/**
 *  navigation js to handle opening and closing functionality of the menu on small devices
 *
 */

( function() {

	var sitenavigation, button, menu, header;

	header = document.getElementById( 'masthead' );
	sitenavigation = document.getElementById( 'site-navigation' );

	if ( ! sitenavigation ) {
		return;
	}

	button = document.getElementById( 'menu-toggle' );

	if ( 'undefined' === typeof button ) {
		return;
	}

	menu = sitenavigation.getElementsByTagName( 'ul' )[0];

	// Hide menu toggle button if menu is empty and return early.
	if ( 'undefined' === typeof menu ) {
		button.style.display = 'none';
		return;
	}

	if ( -1 === menu.className.indexOf( 'nav-menu' ) ) {
		menu.className += ' nav-menu';
	}

	button.onclick = function() {
	if ( -1 !== header.className.indexOf( 'toggled' ) ) {
		closeMenu();

	} else {
		openMenu()
	}
	};

	// Close menu when user clicks outside menu or button
	document.addEventListener( 'click', function( event ) {
	var isClickInside = sitenavigation.contains( event.target );
		var isClickInsideButton = button.contains( event.target );

		if ( ! isClickInside && !isClickInsideButton) {
			closeMenu();
		}
	} );

	//close menu when Esc key is pressed. 
	document.addEventListener('keyup', (event) => {
		if ( -1 !== header.className.indexOf( 'toggled' ) ) {
			if(event.keyCode == 27) {
				closeMenu(); 
			}
		}
	});


	/**
	 * closes menu
	 */
	function closeMenu() {
		header.classList.remove('toggled');	
		button.setAttribute( 'aria-expanded', 'false' );
		sitenavigation.setAttribute( 'aria-expanded', 'false' );	
	} 

	/**
	 * Opens menu
	 */
	function openMenu() {
		header.className += ' toggled';
		button.setAttribute( 'aria-expanded', 'true' );
		sitenavigation.setAttribute( 'aria-expanded', 'true' );
	} 

	
}() );


