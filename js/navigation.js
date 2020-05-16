/**
 *  navigation js to handle the menu on small devices
 *
 */

( function() {

	var sitenavigation, button, menu, links, i, len, header;

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

	// Close small menu when user clicks outside
	document.addEventListener( 'click', function( event ) {
		var isClickInside = sitenavigation.contains( event.target );
		var isClickInsideButton = button.contains( event.target );

		if ( ! isClickInside && !isClickInsideButton) {
			closeMenu();
		}
	} );

	//close menu when Esc key is pressed. 
	document.addEventListener('keyup', (event) => {
		if(event.keyCode == 27) {
			closeMenu(); 
		}
	});

	function closeMenu() {
		header.classList.remove('toggled');	
		button.setAttribute( 'aria-expanded', 'false' );
		sitenavigation.setAttribute( 'aria-expanded', 'false' );	
	} 

	function openMenu() {
		header.className += ' toggled';
		button.setAttribute( 'aria-expanded', 'true' );
		sitenavigation.setAttribute( 'aria-expanded', 'true' );
	} 

	// Get all the link elements within the menu.
	links = menu.getElementsByTagName( 'a' );

	// Each time a menu link is focused or blurred, toggle focus.
	for ( i = 0, len = links.length; i < len; i++ ) {
		links[i].addEventListener( 'focus', toggleFocus, true );
		links[i].addEventListener( 'blur', toggleFocus, true );
	}

	/**
	 * Sets or removes .focus class on an element.
	 */
	function toggleFocus() {
		var self = this;

		// Move up through the ancestors of the current link until we hit .nav-menu.
		while ( -1 === self.className.indexOf( 'nav-menu' ) ) {
			// On li elements toggle the class .focus.
			if ( 'li' === self.tagName.toLowerCase() ) {
				if ( -1 !== self.className.indexOf( 'focus' ) ) {
					self.className = self.className.replace( ' focus', '' );
				} else {
					self.className += ' focus';
				}
			}

			self = self.parentElement;
		}
	}

	/**
	 * Toggles `focus` class to allow submenu access on tablets.
	 */
	( function() {
		var touchStartFn,
			parentLink = sitenavigation.querySelectorAll( '.menu-item-has-children > a, .page_item_has_children > a' );

		if ( 'ontouchstart' in window ) {
			touchStartFn = function( e ) {
				var menuItem = this.parentNode;

				if ( ! menuItem.classList.contains( 'focus' ) ) {
					e.preventDefault();
					for ( i = 0; i < menuItem.parentNode.children.length; ++i ) {
						if ( menuItem === menuItem.parentNode.children[i] ) {
							continue;
						}
						menuItem.parentNode.children[i].classList.remove( 'focus' );
					}
					menuItem.classList.add( 'focus' );
				} else {
					menuItem.classList.remove( 'focus' );
				}
			};

			for ( i = 0; i < parentLink.length; ++i ) {
				parentLink[i].addEventListener( 'touchstart', touchStartFn, false );
			}
		}
	}( sitenavigation ) );
}() );


