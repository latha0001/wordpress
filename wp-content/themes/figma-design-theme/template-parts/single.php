<?php get_header(); ?>

<main class="single-post">
    <div class="container">
        <?php
        while (have_posts()) : the_post();
            get_template_part('template-parts/content', 'single');

            // If comments are open or we have at least one comment, load up the comment template.
            if (comments_open() || get_comments_number()) :
                comments_template();
            endif;

        endwhile;
        ?>
    </div>
</main>

<?php get_footer(); ?>
