/**
 *  Todo: add a description
 */
define([
  'backbone',
  'jquery',
  'underscore'
  ],

  function( Backbone, $, _ ) {
    'use strict';

    /* Return a ItemView class definition */
    return Backbone.Marionette.ItemView.extend({
      ui: {

      },

      events : {
      },

      initialize: function(options) {
        this.el = options.el;
        _.bindAll(this,
          'render'
        );

        this.bindEvents();
      },

      render: function() {
        this.$el.append("<b> Added from HomeView </b>");
      },

      bindEvents: function() {
      }

    });

  });
