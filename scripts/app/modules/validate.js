
define(["app/app", "libs/jquery.validate.min"], function (app, tabs) {

    'use strict';

    return (function () {

        var VALIDATE = (function () {

            var validate = {};


            validate.Options = {
            };


            validate.Initialize = function () {

                $.validator.setDefaults({
                    submitHandler: function () {
                        alert("submitted!");
                    }
                });

                // validate the comment form when it is submitted
                $(".newsletter-form").validate({
                    rules: {
                        field: {
                            required: true,
                            email: true
                        }
                    }
                });


            };

            return validate;

        }).call(this);

        return VALIDATE;

    }());

});