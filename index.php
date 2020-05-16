<?php
    if ( have_posts() ) :
        while ( have_posts() ) :
            the_post();

            the_post_thumbnail('blog-thumbnail');
            the_title();

        endwhile;

        the_posts_navigation();

    else :

        "no content";

    endif;
?>