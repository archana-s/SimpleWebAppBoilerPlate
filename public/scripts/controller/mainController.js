define([
  'backbone',
  'jquery',
  'homeView'
],
  function( Backbone, $, HomeView ) {
    'use strict';

    return Backbone.Marionette.Controller.extend({
      showHome: function() {
        var homeView = new HomeView({el: '.contents'});
        homeView.render();
      }
    });

  });
