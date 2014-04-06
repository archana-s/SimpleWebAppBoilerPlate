'use strict';

require.config({

  deps: ['backbone.marionette'],

  paths: {
    json3: './bower_components/json3/lib/json3',
    jquery: './bower_components/jquery/dist/jquery',
    handlebars: './bower_components/handlebars/handlebars',
    underscore: './bower_components/lodash/dist/lodash.compat',
    backbone: './bower_components/backbone-amd/backbone',

    /* alias all marionette libs */
    'backbone.marionette': './bower_components/backbone.marionette/lib/core/amd/backbone.marionette',
    'backbone.wreqr': './bower_components/backbone.wreqr/lib/amd/backbone.wreqr',
    'backbone.babysitter': './bower_components/backbone.babysitter/lib/amd/backbone.babysitter',

    /* List of views and models for app */

    /* Router */
    appRouter: './router/appRouter',

    /* Controllers */
    mainController: './controller/mainController',

    /* Views */
    homeView: './view/homeView',

    /*Vendor */
    html2canvas: './vendor/html2canvas'
  },

  shim: {
    handlebars: {
      deps: [],
      exports: 'Handlebars'
    },
    underscore: {
      deps: [],
      exports: '_'
    },
    backbone: {
      deps: ['jquery', 'underscore'],
      exports: 'Backbone'
    }
  }
});
