define(["jquery", "libs/modernizr"], function($) {

    'use strict';

    return (function() {

        var APP = (function() {

            var app = {},
                    Modernizr = window.Modernizr,
                    $doc = $(document)


            app.Initialized = false;


            /**
             *	app.initModule(@element, @module, @params)
             *	-	load @module if @element exists
             */
            app.initModule = function(element, module, params) {
                if (element.length) {
                    return requirejs(["modules/" + module], function(Module) {
                        return Module.Initialize(element, params);
                    });
                }
            };

            app.Initialize = function() {
                if (!app.Initialized) {
                    app.Initialized = true;

                    // webkit viewport bug
                    if (navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i)) {
                        var viewportmeta = document.querySelector('meta[name="viewport"]');
                        if (viewportmeta) {
                            viewportmeta.content = 'width=device-width, minimum-scale=1.0, maximum-scale=1.0';
                            document.body.addEventListener('gesturestart', function() {
                                viewportmeta.content = 'width=device-width, minimum-scale=0.25, maximum-scale=1.6';
                            }, false);
                        }
                    }

                    $doc.ready(function() {
                        // Modules
                        app.initModule($('body'), 'default');
                        app.initModule($('body'), 'nav');
                        app.initModule($('.newsletter-form'), 'validate');
                    });

                }

            };

            return app;

        }()); //-- APP

        return APP;

    }());

});