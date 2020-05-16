<?php 
get_header();
?>

<main id="primary" class="site-main container"  role="main">

    <?php
        if ( have_posts() ) :
        
            while ( have_posts() ) :
                the_post();

                get_template_part( 'template-parts/content' );

            endwhile;

        else :

            get_template_part( 'template-parts/content', 'none' );

        endif;
    ?>

</main>

<?php 
get_footer();
?>
