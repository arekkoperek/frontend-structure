var regs = requirejs.config({
    "waitSeconds": 0,
    "enforceDefine": false,
    "urlArgs": "bust=" + (new Date()).getTime(),
    "baseUrl": "scripts",
    "paths": {
        "app":              "app",
        "modules":          "app/modules",
        "libs":             "libs",
        "jquery":           "libs/jquery-1.11.1.min",
        "jquery.validate": "libs/jquery.validate.min"
    },
     shim: {
            "jquery.validate": ['jquery']
        }

});

regs(["app/app"], function (app) {
    'use strict';
    app.Initialize();
});