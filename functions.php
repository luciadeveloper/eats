<?php 
/**
 * Eats functions
 * 
 * @package eats
 */



/**
 * Theme setup.
 */

if ( ! defined( '_THEME_VERSION' ) ) {
	// Replace the version number of the theme on each release.
	define( '_THEME_VERSION', '1.0.0' );
}

if ( ! function_exists( 'eats_setup' ) ) {

    function eats_setup() {
       
        add_theme_support( 'title-tag' );
        add_theme_support( 'post-thumbnails' );

        register_nav_menus(
            array(
                'menu-1' => esc_html__( 'Primary', 'eats' ),
            )
        );
    }

}

add_action( 'after_setup_theme', 'eats_setup' );

add_image_size('blog-thumbnail', 680, 380);


/**
 * Enqueue scripts and styles.
 */
function eats_scripts() {
	wp_enqueue_style( 'eats-style', get_stylesheet_uri(), array(), _THEME_VERSION );
	
	wp_enqueue_script( 'eats-navigation', get_template_directory_uri() . '/js/navigation.js', array(), _THEME_VERSION, true );

	
}
add_action( 'wp_enqueue_scripts', 'eats_scripts' );