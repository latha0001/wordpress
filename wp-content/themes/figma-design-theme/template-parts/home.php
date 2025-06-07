<?php
function figma_design_theme_setup() {
    // Add theme support
    add_theme_support('title-tag');
    add_theme_support('post-thumbnails');
    add_theme_support('custom-logo');

    // Register navigation menus
    register_nav_menus(array(
        'primary' => __('Primary Menu', 'figma-design-theme'),
        'footer' => __('Footer Menu', 'figma-design-theme'),
    ));
}
add_action('after_setup_theme', 'figma_design_theme_setup');

function figma_design_theme_enqueue_styles() {
    wp_enqueue_style('figma-design-theme-style', get_stylesheet_uri());
}
add_action('wp_enqueue_scripts', 'figma_design_theme_enqueue_styles');

function figma_design_theme_customize_register($wp_customize) {
    // Hero Section
    $wp_customize->add_section('hero_section', array(
        'title' => __('Hero Section', 'figma-design-theme'),
        'priority' => 30,
    ));

    $wp_customize->add_setting('hero_title', array(
        'default' => 'Welcome to Our Website',
        'sanitize_callback' => 'sanitize_text_field',
    ));

    $wp_customize->add_control('hero_title', array(
        'label' => __('Hero Title', 'figma-design-theme'),
        'section' => 'hero_section',
        'type' => 'text',
    ));

    $wp_customize->add_setting('hero_description', array(
        'default' => 'Discover amazing content and services.',
        'sanitize_callback' => 'sanitize_textarea_field',
    ));

    $wp_customize->add_control('hero_description', array(
        'label' => __('Hero Description', 'figma-design-theme'),
        'section' => 'hero_section',
        'type' => 'textarea',
    ));

    $wp_customize->add_setting('hero_button_text', array(
        'default' => 'Learn More',
        'sanitize_callback' => 'sanitize_text_field',
    ));

    $wp_customize->add_control('hero_button_text', array(
        'label' => __('Hero Button Text', 'figma-design-theme'),
        'section' => 'hero_section',
        'type' => 'text',
    ));

    $wp_customize->add_setting('hero_button_link', array(
        'default' => '#',
        'sanitize_callback' => 'esc_url_raw',
    ));

    $wp_customize->add_control('hero_button_link', array(
        'label' => __('Hero Button Link', 'figma-design-theme'),
        'section' => 'hero_section',
        'type' => 'url',
    ));

    $wp_customize->add_setting('hero_background', array(
        'default' => '',
        'sanitize_callback' => 'esc_url_raw',
    ));

    $wp_customize->add_control(new WP_Customize_Image_Control($wp_customize, 'hero_background', array(
        'label' => __('Hero Background Image', 'figma-design-theme'),
        'section' => 'hero_section',
    )));

    // Features Section
    $wp_customize->add_section('features_section', array(
        'title' => __('Features Section', 'figma-design-theme'),
        'priority' => 40,
    ));

    $wp_customize->add_setting('features_title', array(
        'default' => 'Our Features',
        'sanitize_callback' => 'sanitize_text_field',
    ));

    $wp_customize->add_control('features_title', array(
        'label' => __('Features Section Title', 'figma-design-theme'),
        'section' => 'features_section',
        'type' => 'text',
    ));

    $wp_customize->add_setting('features_description', array(
        'default' => 'Discover what makes our services stand out from the rest.',
        'sanitize_callback' => 'sanitize_textarea_field',
    ));

    $wp_customize->add_control('features_description', array(
        'label' => __('Features Section Description', 'figma-design-theme'),
        'section' => 'features_section',
        'type' => 'textarea',
    ));

    for ($i = 1; $i <= 3; $i++) {
        $wp_customize->add_setting("feature_{$i}_title", array(
            'default' => "Feature {$i}",
            'sanitize_callback' => 'sanitize_text_field',
        ));

        $wp_customize->add_control("feature_{$i}_title", array(
            'label' => __("Feature {$i} Title", 'figma-design-theme'),
            'section' => 'features_section',
            'type' => 'text',
        ));

        $wp_customize->add_setting("feature_{$i}_description", array(
            'default' => "Description for feature {$i}.",
            'sanitize_callback' => 'sanitize_textarea_field',
        ));

        $wp_customize->add_control("feature_{$i}_description", array(
            'label' => __("Feature {$i} Description", 'figma-design-theme'),
            'section' => 'features_section',
            'type' => 'textarea',
        ));

        $wp_customize->add_setting("feature_{$i}_icon", array(
            'default' => '',
            'sanitize_callback' => 'esc_url_raw',
        ));

        $wp_customize->add_control(new WP_Customize_Image_Control($wp_customize, "feature_{$i}_icon", array(
            'label' => __("Feature {$i} Icon", 'figma-design-theme'),
            'section' => 'features_section',
        )));
    }

    // CTA Section
    $wp_customize->add_section('cta_section', array(
        'title' => __('CTA Section', 'figma-design-theme'),
        'priority' => 50,
    ));

    $wp_customize->add_setting('cta_title', array(
        'default' => 'Ready to Get Started?',
        'sanitize_callback' => 'sanitize_text_field',
    ));

    $wp_customize->add_control('cta_title', array(
        'label' => __('CTA Title', 'figma-design-theme'),
        'section' => 'cta_section',
        'type' => 'text',
    ));

    $wp_customize->add_setting('cta_description', array(
        'default' => 'Join us today and experience the difference.',
        'sanitize_callback' => 'sanitize_textarea_field',
    ));

    $wp_customize->add_control('cta_description', array(
        'label' => __('CTA Description', 'figma-design-theme'),
        'section' => 'cta_section',
        'type' => 'textarea',
    ));

    $wp_customize->add_setting('cta_button_text', array(
        'default' => 'Sign Up Now',
        'sanitize_callback' => 'sanitize_text_field',
    ));

    $wp_customize->add_control('cta_button_text', array(
        'label' => __('CTA Button Text', 'figma-design-theme'),
        'section' => 'cta_section',
        'type' => 'text',
    ));

    $wp_customize->add_setting('cta_button_link', array(
        'default' => '#',
        'sanitize_callback' => 'esc_url_raw',
    ));

    $wp_customize->add_control('cta_button_link', array(
        'label' => __('CTA Button Link', 'figma-design-theme'),
        'section' => 'cta_section',
        'type' => 'url',
    ));

    $wp_customize->add_setting('cta_background', array(
        'default' => '',
        'sanitize_callback' => 'esc_url_raw',
    ));

    $wp_customize->add_control(new WP_Customize_Image_Control($wp_customize, 'cta_background', array(
        'label' => __('CTA Background Image', 'figma-design-theme'),
        'section' => 'cta_section',
    )));

    // Footer Settings
    $wp_customize->add_section('footer_section', array(
        'title' => __('Footer Settings', 'figma-design-theme'),
        'priority' => 60,
    ));

    $wp_customize->add_setting('footer_about_text', array(
        'default' => 'A custom WordPress theme based on the Figma design.',
        'sanitize_callback' => 'sanitize_textarea_field',
    ));

    $wp_customize->add_control('footer_about_text', array(
        'label' => __('Footer About Text', 'figma-design-theme'),
        'section' => 'footer_section',
        'type' => 'textarea',
    ));

    // Social Media Links
    $social_platforms = array(
        'facebook' => 'Facebook',
        'twitter' => 'Twitter',
        'instagram' => 'Instagram',
        'linkedin' => 'LinkedIn',
    );

    foreach ($social_platforms as $platform => $label) {
        $wp_customize->add_setting("social_{$platform}", array(
            'default' => '',
            'sanitize_callback' => 'esc_url_raw',
        ));

        $wp_customize->add_control("social_{$platform}", array(
            'label' => sprintf(__('%s URL', 'figma-design-theme'), $label),
            'section' => 'footer_section',
            'type' => 'url',
        ));
    }

    // Blog Settings
    $wp_customize->add_section('blog_section', array(
        'title' => __('Blog Settings', 'figma-design-theme'),
        'priority' => 70,
    ));

    $wp_customize->add_setting('blog_layout', array(
        'default' => 'grid',
        'sanitize_callback' => 'sanitize_text_field',
    ));

    $wp_customize->add_control('blog_layout', array(
        'label' => __('Blog Layout', 'figma-design-theme'),
        'section' => 'blog_section',
        'type' => 'select',
        'choices' => array(
            'grid' => __('Grid Layout', 'figma-design-theme'),
            'list' => __('List Layout', 'figma-design-theme'),
        ),
    ));

    $wp_customize->add_setting('blog_sidebar', array(
        'default' => 'right',
        'sanitize_callback' => 'sanitize_text_field',
    ));

    $wp_customize->add_control('blog_sidebar', array(
        'label' => __('Blog Sidebar Position', 'figma-design-theme'),
        'section' => 'blog_section',
        'type' => 'select',
        'choices' => array(
            'right' => __('Right Sidebar', 'figma-design-theme'),
            'left' => __('Left Sidebar', 'figma-design-theme'),
            'none' => __('No Sidebar', 'figma-design-theme'),
        ),
    ));

    // Colors
    $wp_customize->add_setting('primary_color', array(
        'default' => '#007bff',
        'sanitize_callback' => 'sanitize_hex_color',
    ));

    $wp_customize->add_control(new WP_Customize_Color_Control($wp_customize, 'primary_color', array(
        'label' => __('Primary Color', 'figma-design-theme'),
        'section' => 'colors',
    )));

    $wp_customize->add_setting('secondary_color', array(
        'default' => '#0056b3',
        'sanitize_callback' => 'sanitize_hex_color',
    ));

    $wp_customize->add_control(new WP_Customize_Color_Control($wp_customize, 'secondary_color', array(
        'label' => __('Secondary Color', 'figma-design-theme'),
        'section' => 'colors',
    )));
}
add_action('customize_register', 'figma_design_theme_customize_register');

// Add custom styles based on customizer settings
function figma_design_theme_customizer_css() {
    $primary_color = get_theme_mod('primary_color', '#007bff');
    $secondary_color = get_theme_mod('secondary_color', '#0056b3');
    
    $hero_background = get_theme_mod('hero_background', '');
    $cta_background = get_theme_mod('cta_background', '');
    
    $custom_css = "
        :root {
            --primary-color: {$primary_color};
            --secondary-color: {$secondary_color};
        }
        
        .btn, .read-more, .social-link:hover {
            background-color: var(--primary-color);
        }
        
        .btn:hover {
            box-shadow: 0 6px 20px rgba(" . hexdec(substr($primary_color, 1, 2)) . ", " . hexdec(substr($primary_color, 3, 2)) . ", " . hexdec(substr($primary_color, 5, 2)) . ", 0.4);
        }
        
        .primary-menu a::after, .widget-title::after {
            background-color: var(--primary-color);
        }
        
        a:hover, .site-title a:hover {
            color: var(--primary-color);
        }
        
        .cta {
            background-image: linear-gradient(135deg, var(--primary-color) 0%, var(--secondary-color) 100%);
        }
    ";
    
    if ($hero_background) {
        $custom_css .= "
            .hero {
                background-image: url('{$hero_background}');
                background-size: cover;
                background-position: center;
            }
            
            .hero::before {
                background-color: rgba(0, 0, 0, 0.5);
                background-image: none;
            }
            
            .hero h1, .hero p {
                color: #fff;
            }
        ";
    }
    
    if ($cta_background) {
        $custom_css .= "
            .cta {
                background-image: url('{$cta_background}');
                background-size: cover;
                background-position: center;
            }
            
            .cta::before {
                background-color: rgba(" . hexdec(substr($primary_color, 1, 2)) . ", " . hexdec(substr($primary_color, 3, 2)) . ", " . hexdec(substr($primary_color, 5, 2)) . ", 0.8);
                background-image: none;
            }
        ";
    }
    
    echo '<style type="text/css">' . $custom_css . '</style>';
}
add_action('wp_head', 'figma_design_theme_customizer_css');
