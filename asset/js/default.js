(function($) {
    function fixIframeAspect() {
        $('iframe').each(function () {
            var aspect = $(this).attr('height') / $(this).attr('width');
            $(this).height($(this).width() * aspect);
        });
    }

    function framerateCallback(callback) {
        var waiting = false;
        callback = callback.bind(this);
        return function () {
            if (!waiting) {
                waiting = true;
                window.requestAnimationFrame(function () {
                    callback();
                    waiting = false;
                });
            }
        }
    }

    $(document).ready(function() {
        $('header nav').addClass('closed');

        $('header nav').click(function() {
            $(this).toggleClass('open').toggleClass('closed');
        });

        // Add nav focus pop-overs similar to hover pop-overs
        $('header nav ul.navigation>li>a').focus(function() {
            var innerList = $(this).siblings('ul');
            innerList.addClass('open');
        }).blur(function () {
            var innerList = $(this).siblings('ul');
            innerList.removeClass('open');
        });
        $('header nav ul.navigation>li>ul>li a').focus(function() {
            var outerList = $(this).parents('ul:nth-last-child(1)');
            outerList.addClass('open');
        }).blur(function () {
            var outerList = $(this).parents('ul:nth-last-child(1)');
            outerList.removeClass('open');
        })

        // Maintain iframe aspect ratios
        $(window).on('load resize', framerateCallback(fixIframeAspect));
        fixIframeAspect();
    });
})(jQuery);
