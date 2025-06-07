    <footer class="site-footer">
        <div class="container">
            <div class="footer-widgets">
                <div class="footer-widget">
                    <h3 class="widget-title">About Us</h3>
                    <p><?php echo get_theme_mod('footer_about_text', 'A custom WordPress theme based on the Figma design.'); ?></p>
                </div>
                
                <div class="footer-widget">
                    <h3 class="widget-title">Quick Links</h3>
                    <nav class="footer-navigation">
                        <?php
                        wp_nav_menu(array(
                            'theme_location' => 'footer',
                            'container' => false,
                            'menu_class' => 'footer-menu',
                            'depth' => 1,
                        ));
                        ?>
                    </nav>
                </div>
                
                <div class="footer-widget">
                    <h3 class="widget-title">Connect With Us</h3>
                    <div class="social-links">
                        <?php if (get_theme_mod('social_facebook')) : ?>
                            <a href="<?php echo esc_url(get_theme_mod('social_facebook')); ?>" target="_blank" class="social-link facebook">Facebook</a>
                        <?php endif; ?>
                        
                        <?php if (get_theme_mod('social_twitter')) : ?>
                            <a href="<?php echo esc_url(get_theme_mod('social_twitter')); ?>" target="_blank" class="social-link twitter">Twitter</a>
                        <?php endif; ?>
                        
                        <?php if (get_theme_mod('social_instagram')) : ?>
                            <a href="<?php echo esc_url(get_theme_mod('social_instagram')); ?>" target="_blank" class="social-link instagram">Instagram</a>
                        <?php endif; ?>
                        
                        <?php if (get_theme_mod('social_linkedin')) : ?>
                            <a href="<?php echo esc_url(get_theme_mod('social_linkedin')); ?>" target="_blank" class="social-link linkedin">LinkedIn</a>
                        <?php endif; ?>
                    </div>
                </div>
            </div>
            
            <div class="footer-bottom">
                <p class="copyright">&copy; <?php echo date('Y'); ?> <?php bloginfo('name'); ?>. All rights reserved.</p>
            </div>
        </div>
    </footer>
    
    <?php wp_footer(); ?>
    
    <script>
        // Mobile menu toggle
        document.addEventListener('DOMContentLoaded', function() {
            const menuToggle = document.querySelector('.menu-toggle');
            const mainNav = document.querySelector('.main-navigation');
            
            if (menuToggle && mainNav) {
                menuToggle.addEventListener('click', function() {
                    mainNav.classList.toggle('toggled');
                    this.setAttribute('aria-expanded', this.getAttribute('aria-expanded') === 'true' ? 'false' : 'true');
                });
            }
            
            // Add smooth scroll animation
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function (e) {
                    e.preventDefault();
                    
                    const targetId = this.getAttribute('href');
                    if (targetId === '#') return;
                    
                    const targetElement = document.querySelector(targetId);
                    if (targetElement) {
                        targetElement.scrollIntoView({
                            behavior: 'smooth'
                        });
                    }
                });
            });
        });
    </script>
</body>
</html>
