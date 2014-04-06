define([
  'backbone',
  'jquery',
  'communicator',
  'mainController',
  'error'
],
  function(Backbone, $, Communicator, MainController, Error){
    'use strict';

    return Backbone.Marionette.AppRouter.extend({
      /* Backbone routes hash */
      appRoutes: {
        ".*": "showHome"
      },

      controller: {
        showHome: function() {
          var controller = new MainController();
          controller.showHome();
        }
      }
    });
  });
