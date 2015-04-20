define(["app/app"], function(app, tabs) {

    'use strict';

    return (function() {

        var NAV = (function() {

            var nav = {};


            nav.Options = {
            };


            nav.Initialize = function() {

                $('.nav-item a, .nav-href').each(function() {
                    $(this).click(function(e) {
                        e.preventDefault();
                        var menuTarget = $(this).attr('href');
                        var secOffset = $(menuTarget).offset();
                        $('html,body').animate({ scrollTop: secOffset.top});
                    });
                });


            };

            return nav;

        }).call(this);

        return NAV;

    }());

});
