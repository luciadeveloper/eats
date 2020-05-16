<?php 
/**
 * Template part to display posts
 * 
 * @package eats
 */

?>


<picture>
    <?php the_post_thumbnail();?>
    <span class="screen-reader-text"><?php the_title()?> </span>
</picture>

<h1><?php the_title()?></h1>
<?php the_content() ?>
    
