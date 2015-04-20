define(["app/app"], function(app) {

    'use strict';

    return (function() {

        var MAIN = (function() {

            var main = {};

            main.Options = {
            };

            main.bindEvents = function() {
                $('.js-nav-toggle').on('click', function() {
                    $('body').toggleClass('is-nav-show');
                });

                //CUSTOM CHECKBOX 
                $('.newsletter-form input[type=checkbox]').each(function() {
                    $(this).wrap(function() {
                        return ($(this).is(':checked')) ? '<div class="custom_checkbox selected" />' : '<div class="custom_checkbox" />';
                    });
                });

                $('.custom_checkbox input[type=checkbox]').click(function() {
                    $(this).parent().toggleClass('selected');
                });
            };

            main.Initialize = function(element) {
                main.bindEvents();
            };

            return main;

        }).call(this); //-- MAIN

        return MAIN;

    }());

});
