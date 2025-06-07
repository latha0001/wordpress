<?php get_header(); ?>

<main class="home-page">
    <section class="hero">
        <div class="container">
            <h1><?php echo get_theme_mod('hero_title', 'Welcome to Our Website'); ?></h1>
            <p><?php echo get_theme_mod('hero_description', 'Discover amazing content and services.'); ?></p>
            <a href="<?php echo get_theme_mod('hero_button_link', '#'); ?>" class="btn"><?php echo get_theme_mod('hero_button_text', 'Learn More'); ?></a>
        </div>
    </section>

    <section class="features">
        <div class="container">
            <div class="section-title">
                <h2><?php echo get_theme_mod('features_title', 'Our Features'); ?></h2>
                <p><?php echo get_theme_mod('features_description', 'Discover what makes our services stand out from the rest.'); ?></p>
            </div>
            
            <div class="feature-grid">
                <?php
                for ($i = 1; $i <= 3; $i++) {
                    $feature_title = get_theme_mod("feature_{$i}_title", "Feature {$i}");
                    $feature_description = get_theme_mod("feature_{$i}_description", "Description for feature {$i}.");
                    $feature_icon = get_theme_mod("feature_{$i}_icon", "");
                    ?>
                    <div class="feature-item">
                        <?php if ($feature_icon) : ?>
                            <img src="<?php echo esc_url($feature_icon); ?>" alt="<?php echo esc_attr($feature_title); ?>" class="feature-icon">
                        <?php endif; ?>
                        <h3><?php echo esc_html($feature_title); ?></h3>
                        <p><?php echo esc_html($feature_description); ?></p>
                    </div>
                <?php } ?>
            </div>
        </div>
    </section>

    <section class="latest-blog">
        <div class="container">
            <div class="section-title">
                <h2><?php echo get_theme_mod('blog_section_title', 'Latest Articles'); ?></h2>
                <p><?php echo get_theme_mod('blog_section_description', 'Stay updated with our latest news and articles.'); ?></p>
            </div>
            
            <div class="blog-grid">
                <?php
                $latest_posts = new WP_Query(array(
                    'post_type' => 'post',
                    'posts_per_page' => 3,
                    'ignore_sticky_posts' => 1
                ));
                
                if ($latest_posts->have_posts()) :
                    while ($latest_posts->have_posts()) : $latest_posts->the_post();
                        ?>
                        <article class="blog-post">
                            <?php if (has_post_thumbnail()) : ?>
                                <div class="post-thumbnail">
                                    <a href="<?php the_permalink(); ?>">
                                        <?php the_post_thumbnail('medium'); ?>
                                    </a>
                                </div>
                            <?php endif; ?>
                            
                            <div class="entry-header">
                                <?php the_title('<h3 class="entry-title"><a href="' . esc_url(get_permalink()) . '" rel="bookmark">', '</a></h3>'); ?>
                                
                                <div class="entry-meta">
                                    <span class="posted-on"><?php echo get_the_date(); ?></span>
                                </div>
                            </div>
                            
                            <div class="entry-content">
                                <?php the_excerpt(); ?>
                            </div>
                            
                            <div class="entry-footer">
                                <a href="<?php the_permalink(); ?>" class="read-more">Read More</a>
                            </div>
                        </article>
                        <?php
                    endwhile;
                    wp_reset_postdata();
                endif;
                ?>
            </div>
            
            <div class="view-all-posts">
                <a href="<?php echo get_permalink(get_option('page_for_posts')); ?>" class="btn">View All Posts</a>
            </div>
        </div>
    </section>

    <section class="cta">
        <div class="container">
            <h2><?php echo get_theme_mod('cta_title', 'Ready to Get Started?'); ?></h2>
            <p><?php echo get_theme_mod('cta_description', 'Join us today and experience the difference.'); ?></p>
            <a href="<?php echo get_theme_mod('cta_button_link', '#'); ?>" class="btn"><?php echo get_theme_mod('cta_button_text', 'Sign Up Now'); ?></a>
        </div>
    </section>
</main>

<?php get_footer(); ?>
