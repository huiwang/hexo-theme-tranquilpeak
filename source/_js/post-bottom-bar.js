+function($) {
     'use strict'

    /**
     * Post bottom bar feature
     * @constructor
     */
    var PostBottomBar = function() {
        this.$postBottomBar = $('.post-bottom-bar');
        this.$postFooter    = $('.post-footer');
    }

    /**
     * Init the post bottom bar feature
     */
    PostBottomBar.prototype.init = function() {
        var self = this;
        var didScroll;

        // Detects if the user is scrolling
        $(window).scroll(function() {
            self.didScroll = true;
        });

        setInterval(function() {
            if (self.didScroll) {
                self.animate();
                self.didScroll = false;
            }
        }, 250);
    };

    /**
     * Animate the post bottom bar
     */
    PostBottomBar.prototype.animate = function() {
        if (this.checkPostFooterVisibility() == true) {
            this.$postBottomBar.slideUp();
        }
        else {
            this.$postBottomBar.slideDown();
        }
    };

    /**
     * Check if the post footer element is visible by the user
     * @returns {boolean}
     */
    PostBottomBar.prototype.checkPostFooterVisibility = function() {
        var postFooterElemPos = (this.$postFooter.offset().top + this.$postBottomBar.height());

        if (($(window).scrollTop() + $(window).height()) > (postFooterElemPos)) {
            return true;
        }
        else {
            return false;
        }
    };

    $(document).ready(function() {
        if ($('.post-bottom-bar').length) {
            var postBottomBar = new PostBottomBar();
            postBottomBar.init();
        }
    });
 }(jQuery);