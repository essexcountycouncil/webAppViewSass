﻿require.config({
    baseUrl: '/assets/javascript',
    paths: {
        "jquery": "vendor/jquery.min",
        "recaptcha": "//www.google.com/recaptcha/api",
        "cludo": "//customer.cludo.com/scripts/bundles/search-script.min",
        "bootstrap": "/lib/bootstrap/dist/js/bootstrap.min",
        "handlebars": "/lib/handlebars/handlebars.runtime.min",
        "rangy": "/lib/rangy-1.3/rangy-core",
        "validate": "vendor/jquery.validate.min",
        "unobtrusive": "vendor/jquery.validate.unobtrusive.min",
        "slick": "vendor/slick",
        "carousel": "essexcc/carousel",
        "cludoconfig": "essexcc/cludo",
        "contactus": "essexcc/contactUs",
        "events": "essexcc/events",
        "expandinglinks": "essexcc/expandinglinks",
        "filters": "essexcc/filters",
        "groups": "essexcc/Groups",
        "livechat": "essexcc/livechat",
        "matchboxconfig": "essexcc/matchbox",
        "multiselect": "essexcc/multiSelect",
        "primaryfilter": "essexcc/primaryfilter",
        "refinebybar": "essexcc/refinebybar",
        "startup": "essexcc/startup",
        "utils": "essexcc/utils",
        "viewmoreslider": "essexcc/viewmoreslider",
        "questioncontroller": "essexcc/questioncomponent/questioncontroller",
        "questionmodule": "essexcc/questioncomponent/questionmodule",
        "questionvalidator": "essexcc/questioncomponent/questionvalidator",
        "questionview": "essexcc/questioncomponent/questionview",
        "clipboard": "//cdnjs.cloudflare.com/ajax/libs/clipboard.js/1.7.1/clipboard.min",
        "jquery-ui": "../stylesheets/vendor/jquery-ui-1.12.1.custom/jquery-ui.min",
        "favourites": "essexcc/favourites",
        "tracking": "essexcc/tracking",
        "alerts": "essexcc/alerts",
        "matchHeight": "/lib/matchHeight/dist/jquery.matchHeight-min",
        "jquery.steps": "/assets/javascript/vendor/jquery.steps.min",
        "multiStepForm": "essexcc/multistep-form",
        "jquery.cookie": "/assets/javascript/vendor/jquery.cookie",
        "trumbowyg": "/lib/trumbowyg/trumbowyg.min",
        "trumbowyginit": "essexcc/trumbowyginit"
    },
    shim: {
        'jquery.steps': {
            deps: ['jquery', 'jquery.cookie']
        },
        'jquery.cookie': {
            deps: ['jquery']
        },
        'jquery-ui': {
            deps: ['jquery']
        },
        bootstrap: {
            deps: ['jquery', 'jquery-ui']
        },
        unobtrusive: {
            deps: ['validate']
        },
        validate: {
            deps: ['jquery']
        },
        trumbowyg: {
            deps: ['jquery']
        }
    }
});
